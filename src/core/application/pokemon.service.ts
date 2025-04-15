import { Pokemon } from '../domain/pokemon.model';
import { Region } from '../domain/region.model';
import { PokeApiPokemonRepository } from '../infrastructure/pokeApiPokemonRepository';

const getByRegion = async (region: Region): Promise<Pokemon[] | undefined> => {
  const repository = new PokeApiPokemonRepository();
  return await repository.getByRegion(region);
};

export const pokemonService = { getByRegion };
