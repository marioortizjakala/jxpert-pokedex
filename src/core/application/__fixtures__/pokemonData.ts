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
];
