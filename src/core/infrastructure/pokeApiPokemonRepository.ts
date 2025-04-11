import { Pokemon } from '../domain/pokemon.model';
import { PokemonDTO } from '../domain/pokemonRepository';
import { REGIONS } from '../domain/region.constants';
import { Region } from '../domain/region.model';
import { PokemonDataDTO } from './pokeApiDTO';

const getByRegion = async (region: Region): Promise<Pokemon[] | undefined> => {
  try {
    const { results }: PokemonDataDTO = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${REGIONS[region].offset}&limit=${REGIONS[region].limit}`
    ).then((res) => res.json());

    const result = await Promise.all(
      results?.map(async ({ url }) => await getPokemon(url))
    );
    const filteredResult = result.filter((e) => e !== undefined);

    return filteredResult;
  } catch (error) {
    console.log(error);
  }
};

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

const getPokemon = async (url: string) => {
  try {
    const result: PokemonDTO = await fetch(url).then((res) => res.json());
    return convertor(result);
  } catch (error) {
    console.log(error);
  }
};

export const pokeApiRepository = { getByRegion };
