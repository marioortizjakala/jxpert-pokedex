import { Pokemon } from '@/core/domain/pokemon.model';
import { icons } from '../../atoms/icons/PokemonIcons';
import {
  Card,
  Figure,
  Header,
  Info,
  Number,
  StatBar,
  StatLabel,
  StatRow,
  StatsList,
  StatsSection,
  StyledImage,
  TypeBadge,
  TypeList,
} from './PokemonCard.styled';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const mainType = pokemon.types[0];

  return (
    <Card $mainType={mainType}>
      <Header>
        <h2>{pokemon.name}</h2>
        <Number>{`#${pokemon.id.toString().padStart(3, '0')}`}</Number>
      </Header>

      <Figure>
        <StyledImage src={pokemon.image} alt="Bulbasaur" />
      </Figure>

      <StatsSection aria-label="Stats">
        <TypeList>
          {pokemon.types.map((type) => (
            <TypeBadge type={type} key={`${type}-${pokemon.id}`}>
              <img src={icons[type]} alt={`${type} icon`} width={'20px'} />{' '}
              {type}
            </TypeBadge>
          ))}
        </TypeList>

        <Info>
          <span>⚖️ {pokemon.weight} kg</span>
          <span>📏 {pokemon.height} m</span>
        </Info>

        <StatsList>
          {pokemon.stats.map((stat) => (
            <StatRow key={stat.name + '-' + pokemon.id}>
              <StatLabel>{stat.name}</StatLabel>
              <span>{stat.value.toString().padStart(3, '0')}</span>
              <StatBar max="255" value={stat.value} />
            </StatRow>
          ))}
        </StatsList>
      </StatsSection>
    </Card>
  );
};

export default PokemonCard;
