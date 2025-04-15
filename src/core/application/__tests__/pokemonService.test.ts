import { pokemonService } from '@/core/application/pokemon.service';

const getByRegionMock = vi.fn();
vi.mock('@/core/infrastructure/pokeApiPokemonRepository', () => {
  return {
    PokeApiPokemonRepository: vi.fn().mockImplementation(() => ({
      getByRegion: getByRegionMock,
    })),
  };
});

describe('getByRegion', () => {
  test('should return Pokemon array for a valid region', async () => {
    const region = 'kanto';

    await pokemonService.getByRegion(region);

    expect(getByRegionMock).toHaveBeenCalledWith(region);
  });
});
