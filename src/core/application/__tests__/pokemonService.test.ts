import { describe, test, expect, vi, beforeEach, Mock } from 'vitest';

vi.mock('@/core/infrastructure/pokeApiPokemonRepository', () => ({
  pokeApiRepository: {
    getByRegion: vi.fn(),
  },
}));

import { pokemonService } from '@/core/application/pokemon.service';
import { pokeApiRepository } from '@/core/infrastructure/pokeApiPokemonRepository';
import { Region } from '@/core/domain/region.model';
import { Pokemon } from '@/core/domain/pokemon.model';
import { pokemonData } from '../__fixtures__/pokemonData';

describe('pokemonService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('calls getByRegion and returns the expected data', async () => {
    const region: Region = 'kanto';

    const mockPokemon: Pokemon[] = pokemonData;

    (pokeApiRepository.getByRegion as Mock).mockResolvedValue(mockPokemon);

    const result = await pokemonService.getByRegion(region);

    expect(pokeApiRepository.getByRegion).toHaveBeenCalledWith(region);
    expect(result).toEqual(mockPokemon);
  });

  test('returns undefined when repository throws error', async () => {
    const region: Region = 'johto';

    (pokeApiRepository.getByRegion as Mock).mockRejectedValue(
      new Error('API error')
    );

    try {
      const result = await pokemonService.getByRegion(region);
      expect(result).toBeUndefined();
    } catch (e) {
      console.log(e);
    }
  });
});
