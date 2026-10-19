import { createServer as createHttpServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import ejs from 'ejs';
import { competition, getStandings, teams } from './data/demo.js';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(rootDirectory, '..');
const viewPath = path.join(projectDirectory, 'views', 'standings.ejs');
const stylesheetPath = path.join(projectDirectory, 'public', 'styles.css');

function setSecurityHeaders(response, contentType) {
  response.writeHead(200, {
    'Content-Type': contentType,
    'Content-Security-Policy': "default-src 'self'; style-src 'self'; img-src 'self' data:",
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
  });
}

export function createServer() {
  return createHttpServer(async (request, response) => {
    const requestUrl = new URL(request.url, 'http://localhost');

    if (request.method !== 'GET') {
      response.writeHead(405, { Allow: 'GET', 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Método não permitido');
      return;
    }

    if (requestUrl.pathname === '/styles.css') {
      try {
        const stylesheet = await readFile(stylesheetPath);
        setSecurityHeaders(response, 'text/css; charset=utf-8');
        response.end(stylesheet);
      } catch {
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Não foi possível carregar a folha de estilos.');
      }
      return;
    }

    if (requestUrl.pathname !== '/') {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Página não encontrada');
      return;
    }

    const standings = getStandings();
    const selectedSlug = requestUrl.searchParams.get('time');
    const selectedTeam = standings.find((team) => team.slug === selectedSlug) ?? null;
    const unknownTeam = Boolean(selectedSlug) && !selectedTeam;

    try {
      const html = await ejs.renderFile(viewPath, {
        competition,
        standings,
        teams,
        selectedTeam,
        unknownTeam,
      });
      setSecurityHeaders(response, 'text/html; charset=utf-8');
      response.end(html);
    } catch (error) {
      console.error('Falha ao renderizar a página:', error);
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Não foi possível carregar a página.');
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3000;
  const server = createServer();
  server.listen(port, '0.0.0.0', () => {
    console.log(`Fut Fanatics disponível em http://localhost:${port}`);
  });
}