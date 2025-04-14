import { Pokemon } from '@/core/domain/pokemon.model';

export const mockPokemonData = {
  results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
};

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
  {
    id: 4,
    name: 'charmander',
    types: [{ type: { name: 'fire' } }],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://img.pokemondb.net/artwork/large/charmander.jpg',
        },
      },
    },
    stats: [
      { base_stat: 39 },
      { base_stat: 52 },
      { base_stat: 43 },
      { base_stat: 60 },
      { base_stat: 50 },
      { base_stat: 65 },
    ],
  },
];
