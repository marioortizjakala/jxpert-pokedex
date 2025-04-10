import '@testing-library/jest-dom';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { App } from './App';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { getByRegion } from './core/application/pokemon.service';

vi.mock('./core/application/pokemon.service');
const mockGetByRegion = getByRegion as Mock;

const pokemonData = [
  {
    id: 1,
    name: 'bulbasaur',
    types: [{ type: { name: 'grass' } }],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
        },
      },
    },
    stats: [
      { base_stat: 45 },
      { base_stat: 49 },
      { base_stat: 49 },
      { base_stat: 65 },
      { base_stat: 65 },
      { base_stat: 45 },
    ],
  },
  {
    id: 2,
    name: 'ivysaur',
    types: [{ type: { name: 'grass' } }],
    sprites: {
      other: {
        'official-artwork': {
          front_default: 'https://img.pokemondb.net/artwork/large/ivysaur.jpg',
        },
      },
    },
    stats: [
      { base_stat: 60 },
      { base_stat: 62 },
      { base_stat: 63 },
      { base_stat: 80 },
      { base_stat: 80 },
      { base_stat: 60 },
    ],
  },
];

describe('App Component', () => {
  beforeEach(() => {
    mockGetByRegion.mockReset();
  });

  test('renders Pokémon search input', async () => {
    await act(async () => {
      render(<App />);
    });
    const inputElement = screen.getByPlaceholderText(/search a pokémon.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('Pokédex')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('No results')).toBeInTheDocument();
    });
  });

  test('renders Pokémon data after fetch', async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<App />);
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
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    await userEvent.type(
      screen.getByPlaceholderText('Search a Pokémon...'),
      'bul'
    );

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();

    expect(screen.queryByText('ivysaur')).toBeNull();
  });

  test("displays 'No results' when no Pokémon match the search", async () => {
    mockGetByRegion.mockResolvedValue(pokemonData);
    await act(async () => {
      render(<App />);
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
      render(<App />);
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
