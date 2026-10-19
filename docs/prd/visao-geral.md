# Fut Fanatics — Visão geral do produto

**Status:** Proposta de escopo do MVP

**Atualizado em:** 2026-10-19

**Escopo:** Brasileirão Série A de 2026; sem definição de tecnologias

## Visão do produto

O Fut Fanatics é uma aplicação web responsiva para consultar a campanha dos clubes do Brasileirão Série A de 2026, comparar desempenho esportivo e, para investidores autorizados, analisar relatórios agregados de uso do aplicativo. O produto também oferece recursos administrativos para manter os dados, os acessos e a operação confiáveis.

## Problema e oportunidade

Torcedores precisam localizar e comparar informações da campanha de um time. Investidores precisam distinguir indicadores esportivos de métricas de utilização do aplicativo. A operação precisa detectar dados desatualizados, revisar falhas e corrigir registros sem comprometer a classificação ou perder rastreabilidade.

O produto reúne essas consultas em um contexto explícito de competição e temporada, mostra quando os dados foram atualizados e diferencia ausência, indisponibilidade e resultado confirmado.

## Públicos e valor esperado

| Perfil | Necessidade principal | Valor esperado |
|---|---|---|
| Torcedor | Acompanhar um clube e compará-lo à competição | Consultar classificação, estatísticas, partidas e resultados em uma visão contextualizada. |
| Investidor | Analisar times e, separadamente, o uso do aplicativo | Comparar relatórios com filtros e período visíveis, usando apenas dados agregados de uso. |
| Administrador | Manter acessos, registros e qualidade operacional | Detectar falhas, validar mudanças, rastrear ações e manter indicadores consistentes. |

As necessidades detalhadas e hipóteses a validar estão em [Proto-personas](./personas.md). Os fluxos e critérios funcionais estão em [Jornadas e requisitos funcionais](./jornadas-e-requisitos-funcionais.md) e na [especificação canônica](../stories/FUT-FANATICS-PLATFORM/spec/requirements.json).

## Escopo do MVP

- Exibir o Brasileirão Série A da temporada 2026, seus times participantes, partidas encerradas e a classificação calculada a partir dos resultados registrados.
- Permitir ao torcedor selecionar ou filtrar um time, consultar sua campanha e retornar à tabela completa.
- Atualizar resultados e estatísticas após confirmação oficial de encerramento, sem exigir acompanhamento ao vivo.
- Permitir ao investidor autorizado consultar relatórios de desempenho esportivo e, em categoria separada, métricas agregadas de usuários ativos, sessões e acessos por período.
- Permitir ao administrador autorizado manter usuários, perfis, permissões, times, temporada, partidas, resultados, estatísticas e configurações necessárias.
- Sinalizar falhas e atualidade dos dados, preservar os últimos dados válidos, validar alterações administrativas e auditar correções com recálculo dos indicadores dependentes.
- Oferecer interface em português do Brasil para celular, tablet e desktop.

## Fora do escopo ou ainda por confirmar

- Outras divisões ou temporadas e atualização esportiva ao vivo durante as partidas.
- Estatísticas individuais de atletas, transações, recomendações ou retornos financeiros.
- Restringir relatórios esportivos do investidor ao clube no qual investe; a cobertura padrão proposta é todos os times da Série A.
- Indicadores de uso além de usuários ativos, sessões e acessos agregados por período.
- Fornecedor de dados esportivos, autenticação, arquitetura e tecnologias de implementação.

## Princípios de experiência e confiança

- Exibir competição, temporada e data/hora da atualização junto aos dados relevantes.
- Identificar dados indisponíveis, desatualizados ou inexistentes; não tratar ausência como zero nem como resultado confirmado.
- Validar autorização em cada operação protegida no sistema, e não somente na interface.
- Não expor identificadores pessoais de torcedores nos relatórios de uso.
- Preservar consistência e rastreabilidade quando houver correções administrativas.

## Indicadores para avaliar o MVP

Os indicadores abaixo são propostas de acompanhamento, não metas quantitativas definidas:

- Conclusão da consulta da campanha de um time e retorno à tabela completa.
- Uso dos filtros e conclusão de comparações nos relatórios esportivos.
- Consultas de relatórios de uso por período sem exposição de dados pessoais.
- Tempo entre a confirmação de encerramento de uma partida e a disponibilidade dos dados atualizados.
- Falhas de atualização detectadas e correções administrativas concluídas sem duplicidade ou inconsistência.

As metas, métodos de instrumentação e limites de retenção devem ser definidos antes da avaliação do lançamento. Requisitos não funcionais e critérios de aceitação estão na especificação canônica.