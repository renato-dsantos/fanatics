import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from '../src/server.js';

let server;
let baseUrl;

before(async () => {
  server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test('mostra a visão geral da Série A de 2026 com classificação demonstrativa', async () => {
  const response = await fetch(baseUrl);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Brasileirão Série A/);
  assert.match(html, /2026/);
  assert.match(html, /dados demonstrativos/i);
  assert.match(html, /name="time"/);
  assert.match(html, /Aurora FC/);
  assert.match(html, /Estrela do Norte/);
});

test('filtra a campanha do clube selecionado', async () => {
  const response = await fetch(`${baseUrl}/?time=aurora-fc`);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Campanha de Aurora FC/);
  assert.match(html, /Partidas e resultados/);
  assert.match(html, /Voltar para a classificação completa/);
  assert.doesNotMatch(html, /Campanha de Estrela do Norte/);
});

test('mostra estado vazio para um clube que não existe', async () => {
  const response = await fetch(`${baseUrl}/?time=nao-existe`);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /Nenhum clube encontrado/);
  assert.doesNotMatch(html, /0 pontos/);
});