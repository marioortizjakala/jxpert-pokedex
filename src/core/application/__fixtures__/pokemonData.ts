import { Pokemon } from '@/core/domain/pokemon.model';

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    types: [{ type: { name: 'grass' } }],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
        },
      },
    },
    stats: [
      { base_stat: 45 },
      { base_stat: 49 },
      { base_stat: 49 },
      { base_stat: 65 },
      { base_stat: 65 },
      { base_stat: 45 },
    ],
  },
];
