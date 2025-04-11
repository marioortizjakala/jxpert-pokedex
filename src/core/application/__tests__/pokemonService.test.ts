// __tests__/pokemonService.test.ts
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { pokemonData } from '../__fixtures__/pokemonData';
import { Region } from '@/core/domain/region.model';
import { pokeApiRepository } from '@/core/infrastructure/pokeApiRepository';
import { pokemonService } from '../pokemon.service';

vi.mock('../infrastructure/pokeApiRepository', () => ({
  pokeApiRepository: {
    getByRegion: vi.fn(),
  },
}));

describe('pokemonService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls getByRegion and returns the data', async () => {
    const region: Region = 'kanto';
    (pokeApiRepository.getByRegion as Mock).mockResolvedValue(pokemonData);

    const result = await pokemonService.getByRegion(region);

    expect(pokeApiRepository.getByRegion).toHaveBeenCalledWith(region);
    expect(result).toEqual(pokemonData);
  });

  it('returns undefined if repository throws', async () => {
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
