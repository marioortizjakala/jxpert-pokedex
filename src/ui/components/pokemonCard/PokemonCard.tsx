import { Pokemon } from '@/core/domain/pokemon.model';
import { icons } from '../icons/PokemonIcons';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const style = {
    '--color-type': `var(--color-${pokemon.types[0].type.name})`,
  } as React.CSSProperties;

  return (
    <article className="card" style={style}>
      <header className="head">
        <div className="head__section">
          <p>#{pokemon.id.toString().padStart(3, '0')}</p>
        </div>
        <div className="head__section">
          <img src={icons[pokemon.types[0].type.name]} className="type" />
          {pokemon.types[1] && (
            <img src={icons[pokemon.types[1].type.name]} className="type" />
          )}
        </div>
      </header>
      <img
        loading="lazy"
        className="avatar"
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
      <section className="main-content">
        <h3 className="name">{pokemon.name}</h3>
        <ul className="stats">
          {pokemon.stats.map((stat, index) => (
            <li key={index} className="stat">
              <div className="stat__value">
                <p className="stat__name">
                  {['Hp', 'At', 'Df', 'SpA', 'SpD', 'Spd'][index]}
                </p>
                <p>{stat.base_stat}</p>
              </div>
              <progress value={stat.base_stat} max="255" />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokemonCard;
