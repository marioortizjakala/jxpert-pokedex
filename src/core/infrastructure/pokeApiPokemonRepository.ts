import { PokemonRepository } from './../domain/pokemonRepository';
import { Pokemon } from '../domain/pokemon.model';
import { REGIONS } from '../domain/region.constants';
import { Region } from '../domain/region.model';
import { PokemonDataDTO, PokemonDTO } from './pokeApiDTO';
import { pokeApiMapper } from './pokeApiPokemonRepository.mapper';

export class PokeApiPokemonRepository implements PokemonRepository {
  async getByRegion(region: Region): Promise<Pokemon[]> {
    const { results }: PokemonDataDTO = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${REGIONS[region].offset}&limit=${REGIONS[region].limit}`
    ).then((res) => res.json());

    const result = await Promise.all(
      results?.map(async ({ url }) => await getPokemon(url))
    );
    const filteredResult = result.filter((e) => e !== undefined);

    return filteredResult;
  }
}

const getPokemon = async (url: string) => {
  const result: PokemonDTO = await fetch(url).then((res) => res.json());
  return pokeApiMapper.mapPokemon(result);
};
