import { Pokemon } from '../domain/pokemon.model';
import { Region } from '../domain/region.model';
import { pokeApiRepository } from '../infrastructure/pokeApiPokemonRepository';

const getByRegion = async (region: Region): Promise<Pokemon[] | undefined> => {
  return await pokeApiRepository.getByRegion(region);
};

export const pokemonService = { getByRegion };
