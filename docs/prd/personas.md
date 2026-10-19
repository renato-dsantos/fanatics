# Fut Fanatics — Proto-personas

**Status:** Hipóteses iniciais para validação

**Atualizado em:** 2026-10-19

**Escopo de referência:** MVP do Brasileirão Série A de 2026

## Objetivo

Estas proto-personas representam necessidades e comportamentos a validar com pessoas usuárias. Não são perfis demográficos nem resultados de pesquisa. Elas orientam o escopo descrito em [Visão geral](./visao-geral.md) e as [jornadas e requisitos funcionais](./jornadas-e-requisitos-funcionais.md).

## Persona 1 — Torcedor que acompanha um clube

**Contexto:** acompanha a Série A e quer entender a campanha de um clube sem precisar reunir informações de várias fontes.

**Objetivos**

- Consultar rapidamente a posição, os resultados e as estatísticas do clube na temporada.
- Entender como o clube se compara aos demais participantes.
- Distinguir partidas encerradas de jogos ainda sem resultado confirmado.

**Necessidades**

- Tabela da Série A de 2026 e filtro por time.
- Estatísticas e partidas vinculadas à temporada selecionada.
- Data e hora da atualização, com indicação clara quando os dados estiverem desatualizados ou indisponíveis.

**Dificuldades a validar**

- A informação pode estar espalhada por diferentes fontes e ser difícil de comparar.
- Um dado desatualizado ou uma partida ainda não encerrada pode ser interpretado como resultado definitivo.

**Hipótese de produto:** uma visão geral da competição, combinada com um recorte por time e uma indicação explícita da atualidade dos dados, torna o acompanhamento mais simples e confiável.

**Sinal de validação:** a pessoa consegue localizar a situação do clube e compará-la à classificação completa sem confundir dados pendentes com resultados finais.

## Persona 2 — Investidor que analisa o desempenho dos times

**Contexto:** consulta informações para acompanhar e comparar a performance esportiva dos times. No MVP, essa atividade é analítica; não envolve transações ou recomendações financeiras.

**Objetivos**

- Comparar indicadores esportivos entre times e temporadas disponíveis.
- Consultar separadamente métricas agregadas de utilização do aplicativo.
- Entender o período, os filtros e a atualização que contextualizam cada relatório.

**Necessidades**

- Relatórios esportivos com indicadores comparáveis e filtros por temporada, time e período disponível.
- Relatórios de uso distintos dos esportivos, com usuários ativos, sessões e acessos agregados por período.
- Acesso autorizado e estado vazio explícito quando a consulta não tiver dados.

**Dificuldades a validar**

- Misturar desempenho esportivo com métricas de uso pode induzir a interpretações incorretas.
- Comparações sem contexto de temporada, período ou atualização podem ser pouco confiáveis.

**Hipótese de produto:** separar as categorias de relatório e manter seus filtros e contexto visíveis permite análises mais claras.

**Sinal de validação:** a pessoa consegue identificar qual categoria está consultando e comparar resultados dentro do contexto selecionado, sem inferir valores para períodos sem dados.

**Ponto em aberto:** o acesso padrão do MVP cobre dados esportivos agregados de todos os times da Série A. Ainda é necessário confirmar se haverá restrição ao time relacionado ao investimento.

## Persona 3 — Administrador que mantém a plataforma

**Contexto:** responde pela manutenção dos registros e acessos e pela revisão de problemas que afetem a qualidade dos dados apresentados.

**Objetivos**

- Manter usuários, perfis, permissões e registros esportivos necessários ao produto.
- Detectar falhas de atualização e identificar dados potencialmente desatualizados.
- Corrigir registros com segurança e verificar os efeitos da correção.

**Necessidades**

- Operações administrativas protegidas por autorização verificada pelo sistema.
- Validação antes de persistir alterações e mensagens compreensíveis quando uma alteração for rejeitada.
- Registro auditável de autor, data/hora e ação; atualização dos indicadores dependentes sem duplicação de partidas.
- Preservação dos últimos dados válidos quando uma atualização falhar.

**Dificuldades a validar**

- Uma falha silenciosa pode deixar resultados e indicadores desatualizados sem que a operação perceba.
- Uma correção sem validação, auditoria ou recálculo consistente pode comprometer a confiança nos dados.

**Hipótese de produto:** visibilidade operacional, validação prévia e trilha de auditoria reduzem erros e facilitam a revisão dos dados.

**Sinal de validação:** a pessoa consegue encontrar uma falha, corrigir um registro válido e confirmar o efeito sem criar duplicidades nem perder o histórico da ação.

## Premissas comuns

- A interface do MVP é em português do Brasil e utilizável em celular, tablet e desktop.
- A autorização é aplicada pelo sistema em todas as operações protegidas.
- Ausência de dados não é apresentada como zero ou como resultado confirmado.
- Relatórios de uso não expõem identificadores pessoais de torcedores.
- As hipóteses devem ser revisadas com pesquisa e uso observado; não representam segmentos demográficos comprovados.