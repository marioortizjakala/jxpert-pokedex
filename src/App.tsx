import { useEffect, useState } from 'react';
import bug from './assets/bug.svg';
import dark from './assets/dark.svg';
import dragon from './assets/dragon.svg';
import electric from './assets/electric.svg';
import fairy from './assets/fairy.svg';
import fighting from './assets/fighting.svg';
import fire from './assets/fire.svg';
import flying from './assets/flying.svg';
import ghost from './assets/ghost.svg';
import grass from './assets/grass.svg';
import ground from './assets/ground.svg';
import ice from './assets/ice.svg';
import normal from './assets/normal.svg';
import poison from './assets/poison.svg';
import psychic from './assets/psychic.svg';
import rock from './assets/rock.svg';
import steel from './assets/steel.svg';
import water from './assets/water.svg';

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

const regions: any = {
  kanto: {
    offset: 0,
    limit: 151,
  },
  johto: {
    offset: 151,
    limit: 100,
  },
  hoenn: {
    offset: 251,
    limit: 135,
  },
  sinnoh: {
    offset: 386,
    limit: 107,
  },
  unova: {
    offset: 494,
    limit: 155,
  },
  kalos: {
    offset: 649,
    limit: 72,
  },
  alola: {
    offset: 721,
    limit: 88,
  },
  galar: {
    offset: 809,
    limit: 96,
  },
  paldea: {
    offset: 905,
    limit: 120,
  },
};

export const App = () => {
  //services -> pokemon.services.getAll
  //
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>([]);
  const [finalResult, setFinalResult] = useState<any>([]);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('kanto');
  const [showRegions, setShowRegions] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const { results }: any = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${regions[region].offset}&limit=${regions[region].limit}`
      ).then((res) => res.json());

      const result = await Promise.all(
        results?.map(
          async ({ url }) => await fetch(url).then((res) => res.json())
        )
      );
      setResult(result);
      setLoading(false);
    };
    getData();
  }, [region]);

  useEffect(() => {
    setFinalResult(
      result.filter(
        (res) =>
          res.name.includes(query) ||
          !!res.types.find((type) => type.type.name.startsWith(query))
      )
    );
  }, [result, query]);

  return (
    <div className="layout">
      <header className="header">
        <img src="/images/pokeball.svg" alt="" className="header__logo" />
        <p className="header__title">Pokédex</p>
      </header>

      <main className="container">
        <section className="search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
              stroke="var(--color-neutral-400)"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L15 15"
              stroke="var(--color-neutral-400)"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            placeholder="Search a Pokémon..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="dropdown">
            <button
              className="dropdown__button"
              onClick={() => setShowRegions((prev) => !prev)}
            >
              {region}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33337 5.99999L8.00004 3.33333L10.6667 5.99999"
                  stroke="var(--color-neutral-600)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 10L8.00004 12.6667L5.33337 10"
                  stroke="var(--color-neutral-600)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ol className={`dropdown__list ${!showRegions ? 'hide' : ''}`}>
              {Object.keys(regions).map((key) => (
                <li
                  key={key}
                  className={region === key ? 'active' : ''}
                  onClick={() => {
                    setRegion(key);
                    setShowRegions(false);
                  }}
                >
                  {key}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="grid">
          {loading && (
            <>
              {Array.from({ length: 6 }, (_, index) => {
                return (
                  <article
                    key={`placeholder-card-${index}`}
                    className="card card-placeholder"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.92,4 4.55,7.05 4.06,11H8.13C8.57,9.27 10.14,8 12,8C13.86,8 15.43,9.27 15.87,11H19.94C19.45,7.05 16.08,4 12,4M12,20C16.08,20 19.45,16.95 19.94,13H15.87C15.43,14.73 13.86,16 12,16C10.14,16 8.57,14.73 8.13,13H4.06C4.55,16.95 7.92,20 12,20M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z" />
                    </svg>
                  </article>
                );
              })}
            </>
          )}
          {result.length > 0 && (
            <>
              {finalResult.map((res) => {
                const customStyles: any = {
                  '--color-type': `var(--color-${res.types[0].type.name}`,
                };

                return (
                  <article
                    key={`pokemon-card-${res.id}`}
                    className="card"
                    style={customStyles}
                  >
                    <header className="head">
                      <div className="head__section">
                        <p>#{res.id.toString().padStart(3, '0')}</p>
                      </div>
                      <div className="head__section">
                        <img
                          src={icons[res.types[0].type.name]}
                          className="type"
                        />
                        {res.types[1] && (
                          <img
                            src={icons[res.types[1].type.name]}
                            className="type"
                          />
                        )}
                      </div>
                    </header>
                    <img
                      className="avatar"
                      src={res.sprites.other['official-artwork'].front_default}
                    />
                    <section className="main-content">
                      <h3 className="name">{res.name}</h3>

                      <ul className="stats">
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">Hp</p>
                            <p>{res.stats[0].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[0].base_stat}
                            max="255"
                          ></progress>
                        </li>
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">At</p>
                            <p>{res.stats[1].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[1].base_stat}
                            max="255"
                          ></progress>
                        </li>
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">Df</p>
                            <p>{res.stats[2].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[2].base_stat}
                            max="255"
                          ></progress>
                        </li>
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">SpA</p>
                            <p>{res.stats[3].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[3].base_stat}
                            max="255"
                          ></progress>
                        </li>
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">SpD</p>
                            <p>{res.stats[4].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[4].base_stat}
                            max="255"
                          ></progress>
                        </li>
                        <li className="stat">
                          <div className="stat__value">
                            <p className="stat__name">Spd</p>
                            <p>{res.stats[5].base_stat}</p>
                          </div>
                          <progress
                            value={res.stats[5].base_stat}
                            max="255"
                          ></progress>
                        </li>
                      </ul>
                    </section>
                  </article>
                );
              })}
            </>
          )}
        </section>
        {finalResult.length === 0 && <p className="noresults">No results</p>}
      </main>

      <footer className="footer">
        <p>
          ©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc.
          TM, ®Nintendo.
        </p>
      </footer>
    </div>
  );
};
