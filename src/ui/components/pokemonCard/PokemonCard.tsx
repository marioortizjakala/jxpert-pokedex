import { Pokemon } from '@/core/domain/pokemon.model';
import bug from '@/assets/bug.svg';
import dark from '@/assets/dark.svg';
import dragon from '@/assets/dragon.svg';
import electric from '@/assets/electric.svg';
import fairy from '@/assets/fairy.svg';
import fighting from '@/assets/fighting.svg';
import fire from '@/assets/fire.svg';
import flying from '@/assets/flying.svg';
import ghost from '@/assets/ghost.svg';
import grass from '@/assets/grass.svg';
import ground from '@/assets/ground.svg';
import ice from '@/assets/ice.svg';
import normal from '@/assets/normal.svg';
import poison from '@/assets/poison.svg';
import psychic from '@/assets/psychic.svg';
import rock from '@/assets/rock.svg';
import steel from '@/assets/steel.svg';
import water from '@/assets/water.svg';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const icons: any = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

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
