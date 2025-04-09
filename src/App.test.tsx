import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App } from './App';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

const mockData = {
  results: [
    { url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
};

vi.mock('node-fetch', () => ({
  default: vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ),
}));
globalThis.fetch = vi.fn() as Mock;

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
    // Mock the first API response (Pokemon list)
    (fetch as Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockData),
    });

    // Mock the second API response (individual Pokemon details)
    (fetch as Mock).mockResolvedValue({
      json: () => Promise.resolve(pokemonData[0]),
    });

    (fetch as Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(pokemonData[1]),
    });
  });

  test('renders Pokémon search input', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/search a pokémon.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    render(<App />);

    expect(screen.getByText('Pokédex')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('No results')).toBeInTheDocument();
    });
  });

  test('renders Pokémon data after fetch', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });
  });

  test('filters Pokémon data based on search query', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    //userEvent.type -> todo
    fireEvent.change(screen.getByPlaceholderText('Search a Pokémon...'), {
      target: { value: 'bul' },
    });

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();

    expect(screen.queryByText('ivysaur')).not.toBeInTheDocument();
  });

  test("displays 'No results' when no Pokémon match the search", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText('No results')).not.toBeInTheDocument();
    });

    //userEvent.type -> todo
    fireEvent.change(screen.getByPlaceholderText('Search a Pokémon...'), {
      target: { value: 'xyz' },
    });

    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  //   test.only('handles region dropdown interaction', async () => {
  //     render(<App />);

  //     await waitFor(() => {
  //       expect(screen.queryByText('No results')).not.toBeInTheDocument();
  //     });

  //     expect(screen.getByRole('button')).toHaveTextContent('kanto');

  //     await userEvent.click(screen.getByRole('button'));

  //     expect(screen.getByText('johto')).toBeInTheDocument();

  //     await userEvent.click(screen.getByText('johto'));

  //     expect(screen.getByRole('button')).toHaveTextContent('johto');
  //   });
});
