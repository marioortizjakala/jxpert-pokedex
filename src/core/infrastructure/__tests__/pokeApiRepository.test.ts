import { PokeApiPokemonRepository } from '@/core/infrastructure/pokeApiPokemonRepository';
const pokeApiRepository = new PokeApiPokemonRepository();
import { Region } from '@/core/domain/region.model';
import { REGIONS } from '@/core/domain/region.constants';
import { describe, expect, vi, beforeEach, Mock, test } from 'vitest';
import { mockPokemonData, pokemonData } from '../__fixtures__/pokemonData';

global.fetch = vi.fn();

describe('pokeApiRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('fetches Pokémon data by region successfully', async () => {
    (global.fetch as Mock)
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockPokemonData),
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(pokemonData[0]),
      });

    const region: Region = 'kanto';

    const result = await pokeApiRepository.getByRegion(region);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon?offset=${REGIONS[region].offset}&limit=${REGIONS[region].limit}`
    );
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );

    expect(result).toEqual(pokemonData);
  });

  test('handles errors when fetch fails', async () => {
    (global.fetch as Mock).mockRejectedValueOnce(new Error('API error'));

    const region: Region = 'kanto';

    let errorCaught = false;

    try {
      await pokeApiRepository.getByRegion(region);
    } catch (e) {
      errorCaught = true;
      expect(e).toBeInstanceOf(Error);
      expect((e as Error).message).toBe('API error');
    }

    expect(errorCaught).toBe(true);
  });

  test('should filter out undefined if getPokemon fails for one', async () => {
    const region: Region = 'kanto';
    (global.fetch as Mock).mockResolvedValueOnce({
      json: async () => mockPokemonData,
    });

    // (global.fetch as Mock).mockResolvedValueOnce({
    //   json: async () => pokemonData[0],
    // });

    (global.fetch as Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    const result = await pokeApiRepository.getByRegion(region);

    expect(result).toHaveLength(0);
    expect(result[0]).toBe(undefined);
  });

  test('handles empty response from API', async () => {
    (global.fetch as Mock).mockResolvedValueOnce({
      json: () => ({ results: [] }),
    });

    const region: Region = 'kanto';

    const result = await pokeApiRepository.getByRegion(region);

    expect(result).toEqual([]);
  });
});
