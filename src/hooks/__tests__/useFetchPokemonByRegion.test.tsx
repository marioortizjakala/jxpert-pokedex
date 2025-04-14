import { useFetchPokemonByRegion } from '../useFetchPokemonByRegion';
import { vi, describe, test, expect, beforeEach, Mock } from 'vitest';
import { pokemonService } from '@/core/application/pokemon.service';
import { Region } from '@/core/domain/region.model';
import { pokemonData } from '../__fixtures__/pokemonData';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

vi.mock('@/core/application/pokemon.service', () => ({
  pokemonService: {
    getByRegion: vi.fn(),
  },
}));

function TestComponent({ region }: { region: Region }) {
  const { data, loading, error } = useFetchPokemonByRegion(region);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}

describe('useFetchPokemonByRegion', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch Pokémon data and return it', async () => {
    const region: Region = 'kanto';

    (pokemonService.getByRegion as Mock).mockResolvedValue(pokemonData);

    render(<TestComponent region={region} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });

  test('renders error message on fetch failure', async () => {
    const region: Region = 'kanto';
    (
      pokemonService.getByRegion as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValue(new Error('API error'));

    render(<TestComponent region={region} />);

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to fetch Pokémon data/i)
      ).toBeInTheDocument();
    });
  });

  test('does not render any Pokémon if result is empty', async () => {
    const region: Region = 'kanto';
    (
      pokemonService.getByRegion as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue([]);

    render(<TestComponent region={region} />);

    await waitFor(() => {
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});
