import { useFilteredPokemon } from '../useFilteredPokemon';
import { renderHook } from '@testing-library/react';
import { pokemonData } from '../__fixtures__/pokemonData';

describe('useFilteredPokemon', () => {
  test('filters by name (case-insensitive)', () => {
    const { result } = renderHook(() =>
      useFilteredPokemon(pokemonData, 'bulb')
    );

    expect(result.current).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'bulbasaur' })])
    );
  });

  test('filters by type', () => {
    const { result } = renderHook(() =>
      useFilteredPokemon(pokemonData, 'fire')
    );
    expect(result.current).toEqual([pokemonData[1]]);
  });

  test('shows empty array for unmatched query', () => {
    const { result } = renderHook(() =>
      useFilteredPokemon(pokemonData, 'water')
    );
    expect(result.current).toEqual([]);
  });

  test('shows all data for empty query', () => {
    const { result } = renderHook(() => useFilteredPokemon(pokemonData, ''));
    expect(result.current).toEqual(pokemonData);
  });
});
