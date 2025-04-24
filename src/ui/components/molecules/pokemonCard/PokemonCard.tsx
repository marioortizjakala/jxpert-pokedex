import { Pokemon } from '@/core/domain/pokemon.model';
import { icons } from '../../atoms/icons/PokemonIcons';
import styled from 'styled-components';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCardArticle = styled.article`
  border: $;
`;

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const style = {
    '--color-type': `var(--color-${pokemon.types[0]})`,
  } as React.CSSProperties;

  return null;
};

export default PokemonCard;
