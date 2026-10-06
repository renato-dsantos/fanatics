# Fut Fanatics — Jornadas e Requisitos Funcionais

**Status:** Proposta derivada das proto-personas

**Atualizado em:** 2026-10-06

**Escopo:** MVP do Brasileirão Série A de 2026; sem definição de tecnologias

## Objetivo e referências

Este documento detalha como cada perfil alcança seus objetivos na aplicação, cobrindo a experiência apresentada à pessoa usuária e as responsabilidades do sistema no processamento dos dados, autorização e persistência. Os requisitos funcionais permanecem identificados pela numeração da especificação em [requirements.json](../stories/FUT-FANATICS-PLATFORM/spec/requirements.json).

As jornadas derivam das [proto-personas](./personas.md) e do [escopo do produto](./visao-geral.md). Elas não pressupõem fornecedor de dados, mecanismos de autenticação, arquitetura ou tecnologias específicas.

## Princípios comuns às jornadas

- A interface informa competição, temporada e data/hora da atualização dos dados relevantes.
- Dados indisponíveis, desatualizados ou inexistentes são identificados explicitamente; ausência de dados não é apresentada como zero nem como resultado confirmado.
- A autorização é validada pelo sistema em toda operação protegida, não apenas pela ocultação de opções na interface.
- A experiência funciona em celular, tablet e desktop, em português do Brasil.
- Relatórios de uso exibem dados agregados, sem identificadores pessoais de torcedores.

## Jornada 1 — Torcedor acompanha seu time

**Objetivo:** entender rapidamente a campanha de um time na Série A de 2026 e compará-la com os demais clubes.

| Etapa | Experiência na aplicação | Resposta do sistema |
|---|---|---|
| 1. Abrir a competição | O torcedor acessa a visão da Série A de 2026. | Disponibiliza a tabela e o contexto da competição e da temporada, com a atualização mais recente. Sem time selecionado, apresenta a visão geral. |
| 2. Selecionar um time | O torcedor escolhe ou filtra o clube de interesse. | Restringe a consulta à temporada e ao time selecionados e devolve os dados correspondentes. |
| 3. Consultar a campanha | O torcedor consulta posição, estatísticas da temporada, partidas e resultados do time. | Apresenta os dados derivados das partidas registradas, distingue resultados confirmados de partidas ainda não encerradas e informa a atualidade dos dados. |
| 4. Comparar com a competição | O torcedor volta à tabela completa para comparar a posição do time com os demais. | Apresenta a classificação completa, identifica o time selecionado e aplica os critérios oficiais de desempate. |

**Exceções e estados:** carregamento; visão geral sem time selecionado; dados disponíveis; dados desatualizados ou temporariamente indisponíveis, mantendo os últimos dados válidos e informando sua atualização; nenhum dado disponível para a consulta.

**Requisitos relacionados:** FR-3, FR-4, FR-5 e FR-6.

## Jornada 2 — Investidor analisa relatórios

**Objetivo:** consultar e comparar o desempenho esportivo dos times e, separadamente, indicadores agregados de utilização do aplicativo.

| Etapa | Experiência na aplicação | Resposta do sistema |
|---|---|---|
| 1. Abrir relatórios | O investidor acessa a área de relatórios. | Confirma que o perfil tem autorização para consultar relatórios; nega a operação caso não tenha. |
| 2. Escolher a análise | O investidor seleciona relatório esportivo ou relatório de uso do aplicativo. | Mantém as duas categorias visualmente distintas e apresenta os filtros adequados à análise selecionada. |
| 3. Definir filtros | O investidor escolhe temporada, time ou período entre as opções disponíveis. | Valida os filtros e consulta somente dados correspondentes ao contexto selecionado e permitido. |
| 4. Analisar resultados | O investidor consulta indicadores e compara times ou períodos. | Apresenta contexto, filtros aplicados e data da última atualização. No relatório de uso, exibe apenas valores agregados. |
| 5. Tratar ausência de dados | O investidor seleciona um período ou combinação sem dados. | Mostra um estado vazio contextualizado, sem representar a ausência como valores zero. |

**Exceções e estados:** carregamento; relatório disponível; filtro inválido ou sem resultados; período sem dados; acesso não autorizado; dados desatualizados ou indisponíveis.

**Requisitos relacionados:** FR-1, FR-7, FR-8 e FR-9.

**Decisão pendente:** o escopo padrão do MVP permite relatórios esportivos agregados de todos os times da Série A. A eventual restrição de acesso ao time no qual cada investidor investe ainda precisa ser confirmada.

## Jornada 3 — Administrador mantém a plataforma

**Objetivo:** manter corretos os registros operacionais e acessos, identificar falhas ou dados que precisam de revisão e rastrear alterações relevantes.

| Etapa | Experiência na aplicação | Resposta do sistema |
|---|---|---|
| 1. Abrir a área administrativa | O administrador autorizado acessa as funções de gestão. | Verifica a permissão para a área e para cada operação; outros perfis não conseguem executar ações administrativas. |
| 2. Localizar um registro | O administrador procura usuário, perfil/permissão, time, temporada, partida, resultado, estatística ou configuração. | Apresenta os registros e o estado de atualização pertinente, incluindo falhas que exijam revisão. |
| 3. Preparar uma alteração | O administrador altera ou corrige os dados necessários. | Valida a alteração antes de aplicá-la e informa os problemas encontrados sem salvar dados inválidos. |
| 4. Confirmar a alteração | O administrador confirma uma alteração válida. | Persiste a alteração autorizada e registra autor, data/hora e ação realizada. |
| 5. Revisar o efeito | O administrador consulta o registro e os dados afetados. | Quando a alteração corrige resultado ou estatística, recalcula os indicadores dependentes sem duplicar a partida; informa sucesso ou falha. |

**Exceções e estados:** edição pendente; validação rejeitada; alteração salva; falha de atualização ou integração; dados desatualizados; operação não autorizada.

**Requisitos relacionados:** FR-1, FR-2, FR-4 e FR-10 a FR-12.

## Requisitos funcionais derivados e rastreabilidade

Os requisitos FR-1 a FR-9 cobrem acesso por perfil, consulta esportiva, relatórios e filtros. A jornada administrativa explicita três necessidades das personas que precisavam de critérios funcionais próprios: visibilidade de falhas de atualização, validação antes de salvar e consistência dos indicadores após correções. Elas são acrescentadas como FR-10 a FR-12 na especificação canônica.

| Jornada | Requisitos funcionais |
|---|---|
| Torcedor acompanha seu time | FR-3, FR-4, FR-5, FR-6 |
| Investidor analisa relatórios | FR-1, FR-7, FR-8, FR-9 |
| Administrador mantém a plataforma | FR-1, FR-2, FR-4, FR-10, FR-11, FR-12 |

### Critérios funcionais complementares

- **FR-10 — Visibilidade operacional:** o administrador consegue identificar a atualidade dos dados esportivos e falhas de atualização que exijam revisão. Em falha, os últimos dados válidos são preservados e sua condição é sinalizada.
- **FR-11 — Validação administrativa:** alterações administrativas são verificadas antes de serem aplicadas. Uma alteração inválida não é persistida e a pessoa administradora recebe indicação compreensível do que precisa corrigir.
- **FR-12 — Correção consistente:** após correção autorizada de resultado ou estatística, o sistema atualiza os indicadores dependentes sem duplicar a partida e mantém o registro auditável da alteração.

## Fora de escopo ou por confirmar

- Atualização esportiva ao vivo durante a partida, outras divisões e outras temporadas.
- Restringir relatórios esportivos do investidor ao clube no qual investe.
- Indicadores de uso além de usuários ativos, sessões e acessos por período.
- Estatísticas individuais de atletas, transações, recomendações ou retornos financeiros.
- Escolha de fornecedor esportivo, mecanismo de autenticação ou tecnologia de implementação.
