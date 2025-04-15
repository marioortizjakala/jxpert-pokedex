import { useFetchPokemonByRegion } from '../useFetchPokemonByRegion';
import { Mock } from 'vitest';
import { pokemonService } from '@/core/application/pokemon.service';
import { Region } from '@/core/domain/region.model';
import { pokemonData } from '../__fixtures__/pokemonData';
import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

vi.mock('@/core/application/pokemon.service', () => ({
  pokemonService: {
    getByRegion: vi.fn(),
  },
}));

describe('useFetchPokemonByRegion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch Pokémon data and return it', async () => {
    const region: Region = 'kanto';

    (pokemonService.getByRegion as Mock).mockResolvedValue(pokemonData);
    const { result } = renderHook(() => useFetchPokemonByRegion(region));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual(pokemonData);
  });

  test('renders error message on fetch failure', async () => {
    const region: Region = 'kanto';
    (
      pokemonService.getByRegion as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValue(new Error('API error'));

    const { result } = renderHook(() => useFetchPokemonByRegion(region));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('Failed to fetch Pokémon data.');
    expect(result.current.data).toEqual([]);
  });

  test('changes to loading when retrieving data', async () => {
    const region: Region = 'kanto';

    let resolveFn: (data: any) => void = () => {};
    const delayedPromise = new Promise((resolve) => {
      resolveFn = resolve;
    });

    (pokemonService.getByRegion as Mock).mockReturnValue(delayedPromise);

    const { result } = renderHook(() => useFetchPokemonByRegion(region));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBe(null);

    await act(async () => {
      resolveFn(pokemonData);
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(pokemonData);
    expect(result.current.error).toBe(null);
  });
});
