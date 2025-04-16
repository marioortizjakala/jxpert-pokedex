import { pokemonApiData, pokemonData } from '../__fixtures__/pokemonData';
import { pokeApiMapper } from '../pokeApiPokemonRepository.mapper';

describe('pokeApiMapper', () => {
  it('should map a PokemonDTO to a Pokemon domain model correctly', () => {
    const result = pokeApiMapper.mapPokemon(pokemonApiData[0]);
    expect(result).toEqual(pokemonData[0]);
  });
});
