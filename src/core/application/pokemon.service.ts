import { Pokemon, Region, regions } from '../domain/pokemon.model';

export const getByRegion = async (
  region: Region
): Promise<Pokemon[] | undefined> => {
  try {
    const { results } = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${regions[region].offset}&limit=${regions[region].limit}`
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

export const getPokemon = async (url: string) => {
  try {
    const result = await fetch(url).then(async (res) =>
      convertor(await res.json())
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};
