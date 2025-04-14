import { Pokemon } from '../domain/pokemon.model';
import { Region } from '../domain/region.model';
import { PokeApiPokemonRepository } from '../infrastructure/pokeApiPokemonRepository';

const repository = new PokeApiPokemonRepository();

const getByRegion = async (region: Region): Promise<Pokemon[] | undefined> => {
  return await repository.getByRegion(region);
};

export const pokemonService = { getByRegion };
