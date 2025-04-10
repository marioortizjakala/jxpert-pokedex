import '@testing-library/jest-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import { Home } from '../Home';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { pokemonService } from '../../../../../core/application/pokemon.service';
import { pokemonData } from '../__fixtures__/pokemonData';

vi.mock('../../../../../core/application/pokemon.service');
const mockGetByRegion = pokemonService.getByRegion as Mock;

describe('Home Component', () => {
  beforeEach(() => {
    mockGetByRegion.mockReset();
  });

  test('renders Pokémon search input', async () => {
    await act(async () => {
      render(<Home />);
    });
    const inputElement = screen.getByPlaceholderText(/search a pokémon.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    await act(async () => {
      render(<Home />);
    });

    expect(screen.getByText('Pokédex')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('No results')).toBeInTheDocument();
    });
  });

  test('renders Pokémon data after fetch', async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<Home />);
    });
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });
  });

  test('filters Pokémon data based on search query', async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByPlaceholderText('Search a Pokémon...'),
      'ivy'
    );

    expect(screen.getByText('ivysaur')).toBeInTheDocument();

    expect(screen.queryByText('bulbasaur')).toBeNull();
  });

  test("displays 'No results' when no Pokémon match the search", async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByPlaceholderText('Search a Pokémon...'),
      'xyz'
    );

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  test('handles region dropdown interaction', async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<Home />);
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    await userEvent.click(screen.getByRole('button', { name: /kanto/i }));
    await userEvent.click(screen.getByText('johto'));

    expect(screen.getByRole('button')).toHaveTextContent('johto');
    expect(mockGetByRegion).toHaveBeenCalledWith('johto');
  });
});
