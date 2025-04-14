import { PokemonRepository } from './../domain/pokemonRepository';
import { Pokemon } from '../domain/pokemon.model';
import { REGIONS } from '../domain/region.constants';
import { Region } from '../domain/region.model';
import { PokemonDataDTO, PokemonDTO } from './pokeApiDTO';

//we could use an object in this case if we introduce getPokemon inside getByRegion
export class PokeApiPokemonRepository implements PokemonRepository {
  async getByRegion(region: Region): Promise<Pokemon[]> {
    const { results }: PokemonDataDTO = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${REGIONS[region].offset}&limit=${REGIONS[region].limit}`
    ).then((res) => res.json());

    const result = await Promise.all(
      results?.map(async ({ url }) => await this.getPokemon(url))
    );
    const filteredResult = result.filter((e) => e !== undefined);

    return filteredResult;
  }

  getPokemon = async (url: string) => {
    try {
      const result: PokemonDTO = await fetch(url).then((res) => res.json());
      return convertor(result);
    } catch (error) {
      console.log(error);
    }
  };
}

const convertor = ({
  id,
  name,
  types,
  sprites,
  stats,
}: PokemonDTO): Pokemon => ({
  id,
  name,
  types,
  sprites,
  stats,
});
