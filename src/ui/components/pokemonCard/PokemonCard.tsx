import { Pokemon } from '@/core/domain/pokemon.model';

interface PokemonCardProps {
  pokemon: Pokemon;
  icons: { [key: string]: string };
}
