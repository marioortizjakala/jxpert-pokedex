import { Pokemon } from './pokemon.model';
import { Region } from './region.model';

export interface PokemonRepository {
  getByRegion(region: Region): Promise<Pokemon[] | undefined>;

  getPokemon(url: string): Promise<Pokemon | undefined>;
}
