import { Pokemon } from '../domain/pokemon.model';
import { REGIONS } from '../domain/region.constants';
import { Region } from '../domain/region.model';

const getByRegion = async (region: Region): Promise<Pokemon[] | undefined> => {
  try {
    const { results } = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${REGIONS[region].offset}&limit=${REGIONS[region].limit}`
    ).then((res) => res.json());

    const result = await Promise.all(
      results?.map(async ({ url }) => await getPokemon(url))
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

const convertor = ({ id, name, types, sprites, stats }) => ({
  id,
  name,
  types,
  sprites,
  stats,
});

const getPokemon = async (url: string) => {
  try {
    const result = await fetch(url).then((res) => res.json());
    return convertor(result);
  } catch (error) {
    console.log(error);
  }
};

export const pokeApiRepository = { getByRegion };
