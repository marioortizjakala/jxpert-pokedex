import { pokeApiRepository } from '@/core/infrastructure/pokeApiRepository';
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

    const result = await pokeApiRepository.getByRegion(region);

    expect(result).toBeUndefined();
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
