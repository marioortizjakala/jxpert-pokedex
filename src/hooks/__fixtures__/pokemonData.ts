import { Pokemon } from '@/core/domain/pokemon.model';

export const mockPokemonData = {
  results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
};

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    name: 'ivysaur',
    types: ['grass'],
    image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    stats: [
      {
        value: 45,
        name: 'hp',
      },
      {
        value: 49,
        name: 'attack',
      },
      {
        value: 49,
        name: 'defense',
      },
      {
        value: 65,
        name: 'special-attack',
      },
      {
        value: 65,
        name: 'special-defense',
      },
      {
        value: 45,
        name: 'speed',
      },
    ],
  },

  {
    id: 4,
    name: 'charmeleon',
    types: ['fire'],
    image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
    stats: [
      {
        value: 39,
        name: 'hp',
      },
      {
        value: 52,
        name: 'attack',
      },
      {
        value: 43,
        name: 'defense',
      },
      {
        value: 60,
        name: 'special-attack',
      },
      {
        value: 50,
        name: 'special-defense',
      },
      {
        value: 65,
        name: 'speed',
      },
    ],
  },
];
