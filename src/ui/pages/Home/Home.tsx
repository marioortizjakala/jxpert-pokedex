import { useEffect, useState } from 'react';
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
import { Pokemon } from '@/core/domain/pokemon.model';
import { Region } from '@/core/domain/region.model';
import { pokemonService } from '@/core/application/pokemon.service';
import Header from '@/ui/components/header/Header';
import SearchBar from '@/ui/components/searchBar/SearchBar';

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

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Pokemon[]>([]);
  const [finalResult, setFinalResult] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('kanto');

  useEffect(() => {
    const getData = async () => {
      if (loading) return;
      setLoading(true);
      setResult([]);
      try {
        const result = await pokemonService.getByRegion(region);
        setResult(result || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [region]);

  useEffect(() => {
    setFinalResult(
      result.filter(
        (res: Pokemon) =>
          res.name.includes(query) ||
          !!res.types.find((type) => type.type.name.startsWith(query))
      )
    );
  }, [result, query]);
  return (
    <div className="layout">
      <Header title={'Pokédex'} />

      <main className="container">
        <SearchBar
          query={query}
          setQuery={setQuery}
          region={region}
          setRegion={setRegion}
        />

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
