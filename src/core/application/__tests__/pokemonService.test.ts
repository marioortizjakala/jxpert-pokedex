import { pokemonService } from '@/core/application/pokemon.service';
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  beforeAll,
  Mock,
} from 'vitest';
import { Region } from '@/core/domain/region.model';
import { pokemonData } from '../__fixtures__/pokemonData';
import { PokeApiPokemonRepository } from '@/core/infrastructure/pokeApiPokemonRepository';

const getByRegionMock = vi.fn();
vi.mock('@/core/infrastructure/pokeApiPokemonRepository', () => {
  return {
    PokeApiPokemonRepository: vi.fn().mockImplementation(() => ({
      getByRegion: getByRegionMock,
    })),
  };
});

describe('getByRegion', () => {
  let region: Region;

  beforeAll(() => {
    region = 'kanto';
  });
  beforeEach(() => {
    getByRegionMock.mockResolvedValue(pokemonData);
    vi.clearAllMocks();
  });
  test('should return Pokemon array for a valid region', async () => {
    getByRegionMock.mockResolvedValueOnce(pokemonData);
    const result = await pokemonService.getByRegion(region);

    expect(result).toEqual(pokemonData);
    expect(result?.[0].name).toBe('bulbasaur');
    expect(PokeApiPokemonRepository).toHaveBeenCalledTimes(1);
    expect(getByRegionMock).toHaveBeenCalledWith(region);
  });

  test('should return undefined if repository returns undefined', async () => {
    getByRegionMock.mockResolvedValueOnce(undefined);

    const result = await pokemonService.getByRegion(region);

    expect(result).toBeUndefined();

    expect(getByRegionMock).toHaveBeenCalledWith(region);
  });

  test('should propagate errors from the repository', async () => {
    const error = new Error('Network error');
    getByRegionMock.mockRejectedValueOnce(error);

    await expect(pokemonService.getByRegion(region)).rejects.toThrow(
      'Network error'
    );

    expect(getByRegionMock).toHaveBeenCalledWith(region);
  });

  test('should handle invalid region gracefully (e.g., unknown region)', async () => {
    const invalidRegion = 'unknown-region' as Region;
    getByRegionMock.mockResolvedValueOnce([]);

    const result = await pokemonService.getByRegion(invalidRegion);

    expect(result).toEqual([]);
    expect(getByRegionMock).toHaveBeenCalledWith(invalidRegion);
  });

  test('should call repository with correct region parameter', async () => {
    getByRegionMock.mockResolvedValue([]);

    await pokemonService.getByRegion(region);
    expect(getByRegionMock).toHaveBeenCalledWith(region);
  });

  test('should return empty array when no Pokemon found in region', async () => {
    getByRegionMock.mockResolvedValue([]);

    const result = await pokemonService.getByRegion(region);

    expect(result).toEqual([]);
  });
});
