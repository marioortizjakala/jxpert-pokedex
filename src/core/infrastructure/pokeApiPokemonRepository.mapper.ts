import { Pokemon } from '../domain/pokemon.model';
import { PokemonDTO } from './pokeApiDTO';

//check mapper

const statNameMap = {
  hp: 'Hp',
  attack: 'At',
  defense: 'Df',
  'special-attack': 'SpA',
  'special-defense': 'SpD',
  speed: 'Spd',
};

const mapPokemon = ({
  id,
  name,
  types,
  sprites,
  stats,
}: PokemonDTO): Pokemon => ({
  id,
  name,
  types: types.map((e) => e.type.name),
  image: sprites.other['official-artwork'].front_default,
  stats: stats.map((stat) => ({
    value: stat.base_stat,
    name: statNameMap[stat.stat.name],
  })),
});

export const pokeApiMapper = { mapPokemon };
