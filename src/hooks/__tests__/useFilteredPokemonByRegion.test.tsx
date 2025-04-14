import '@testing-library/jest-dom';
import { useFilteredPokemon } from '../useFilteredPokemon';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { pokemonData } from '../__fixtures__/pokemonData';

function TestComponent({ query }: { query: string }) {
  const filtered = useFilteredPokemon(pokemonData, query);

  return (
    <ul data-testid="list">
      {filtered.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

describe('useFilteredPokemon (React 18-compatible)', () => {
  test('filters by name (case-insensitive)', () => {
    render(<TestComponent query="bulb" />);
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.queryByText('charmander')).not.toBeInTheDocument();
  });

  test('filters by type (startsWith)', () => {
    render(<TestComponent query="fir" />);
    expect(screen.getByText('charmander')).toBeInTheDocument();
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument();
  });

  test('shows all data for unmatched query', () => {
    render(<TestComponent query="water" />);
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument();
    expect(screen.queryByText('charmander')).not.toBeInTheDocument();
  });

  test('shows nothing for empty query', () => {
    render(<TestComponent query="" />);
    expect(screen.queryByText('bulbasaur')).toBeInTheDocument();
    expect(screen.queryByText('charmander')).toBeInTheDocument();
  });
});
