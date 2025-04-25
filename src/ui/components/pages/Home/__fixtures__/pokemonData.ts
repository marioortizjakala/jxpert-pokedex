import { Pokemon } from '@/core/domain/pokemon.model';

export const pokemonData: Pokemon[] = [
  {
    id: 1,
    height: 7,
    weight: 69,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    name: 'bulbasaur',
    stats: [
      {
        name: 'Hp',
        value: 45,
      },
      {
        name: 'At',
        value: 49,
      },
      {
        name: 'Df',
        value: 49,
      },
      {
        name: 'SpA',
        value: 65,
      },
      {
        name: 'SpD',
        value: 65,
      },
      {
        name: 'Spd',
        value: 45,
      },
    ],
    types: ['grass', 'poison'],
  },
  {
    id: 2,
    height: 14,
    weight: 90,
    name: 'ivysaur',
    types: ['grass', 'poison'],
    image: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
    stats: [
      {
        name: 'Hp',
        value: 60,
      },
      {
        name: 'At',
        value: 62,
      },
      {
        name: 'Df',
        value: 63,
      },
      {
        name: 'SpA',
        value: 80,
      },
      {
        name: 'SpD',
        value: 80,
      },
      {
        name: 'Spd',
        value: 60,
      },
    ],
  },
];
