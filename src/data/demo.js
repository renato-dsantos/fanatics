export const competition = {
  name: 'Brasileirão Série A',
  season: 2026,
  updateLabel: 'Dados demonstrativos; sem fonte esportiva conectada.',
};

export const teams = [
  {
    slug: 'aurora-fc',
    name: 'Aurora FC',
    played: 5,
    wins: 3,
    draws: 1,
    losses: 1,
    goalsFor: 8,
    goalsAgainst: 4,
    goalDifference: 4,
    points: 10,
    matches: [
      { opponent: 'Estrela do Norte', venue: 'Fora', score: '2 x 1', status: 'Encerrada' },
      { opponent: 'União Atlética', venue: 'Casa', score: '1 x 0', status: 'Encerrada' },
      { opponent: 'Real Litorâneo', venue: 'Fora', score: 'A confirmar', status: 'Não encerrada' },
    ],
  },
  {
    slug: 'estrela-do-norte',
    name: 'Estrela do Norte',
    played: 5,
    wins: 3,
    draws: 1,
    losses: 1,
    goalsFor: 7,
    goalsAgainst: 4,
    goalDifference: 3,
    points: 10,
    matches: [
      { opponent: 'Aurora FC', venue: 'Casa', score: '1 x 2', status: 'Encerrada' },
      { opponent: 'Esporte da Serra', venue: 'Fora', score: 'A confirmar', status: 'Não encerrada' },
    ],
  },
];

export function getStandings() {
  return [...teams]
    .sort((first, second) =>
      second.points - first.points ||
      second.wins - first.wins ||
      second.goalDifference - first.goalDifference ||
      second.goalsFor - first.goalsFor ||
      first.name.localeCompare(second.name, 'pt-BR'),
    )
    .map((team, index) => ({ ...team, position: index + 1 }));
}