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
    <Card
      $mainType={mainType}
      tabIndex={0}
      aria-label={`Details for ${pokemon.name}`}
    >
      <Header>
        <h2>{pokemon.name}</h2>
        <Number>{`#${pokemon.id.toString().padStart(3, '0')}`}</Number>
      </Header>

      <Figure>
        <StyledImage tabIndex={0} src={pokemon.image} alt={pokemon.name} />
      </Figure>

      <StatsSection>
        <TypeList>
          {pokemon.types.map((type) => (
            <TypeBadge type={type} key={`${type}-${pokemon.id}`} tabIndex={0}>
              <img
                src={icons[type]}
                alt={`${type} icon`}
                width={'20px'}
                aria-hidden
              />{' '}
              {type}
            </TypeBadge>
          ))}
        </TypeList>

        <Info>
          <span tabIndex={0} aria-label={`Weight: ${pokemon.weight} kilograms`}>
            ⚖️ {pokemon.weight} kg
          </span>
          <span tabIndex={0} aria-label={`Height: ${pokemon.height} meters`}>
            📏 {pokemon.height} m
          </span>
        </Info>

        <StatsList role="list" aria-label="Base stats" tabIndex={0}>
          {pokemon.stats.map((stat) => (
            <StatRow key={stat.name + '-' + pokemon.id}>
              <StatLabel>{stat.name}</StatLabel>
              <span>{stat.value.toString().padStart(3, '0')}</span>
              <StatBar max="255" value={stat.value} aria-hidden />
            </StatRow>
          ))}
        </StatsList>
      </StatsSection>
    </Card>
  );
};

export default PokemonCard;
