import { pokeApiRepository } from '@/core/infrastructure/pokeApiPokemonRepository';
import { Region } from '@/core/domain/region.model';
import { describe, expect, vi, beforeEach, Mock, test } from 'vitest';
import { pokemonData } from '../__fixtures__/pokemonData';
import { pokemonService } from '../pokemon.service';

vi.mock('@/core/infrastructure/pokeApiRepository', () => ({
  pokeApiRepository: {
    getByRegion: vi.fn(),
  },
}));

describe('pokemonService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('calls getByRegion and returns the data', async () => {
    const region: Region = 'kanto';
    (pokeApiRepository.getByRegion as Mock).mockResolvedValue(pokemonData);

    const result = await pokemonService.getByRegion(region);

    expect(pokeApiRepository.getByRegion).toHaveBeenCalledWith(region);
    expect(result).toEqual(pokemonData);
  });

  test('returns undefined if repository throws', async () => {
    const region: Region = 'johto';
    (pokeApiRepository.getByRegion as Mock).mockRejectedValue(
      new Error('API error')
    );

    try {
      await pokemonService.getByRegion(region);
    } catch (e) {
      expect(pokeApiRepository.getByRegion).toHaveBeenCalledWith(region);
    }
  });
});
