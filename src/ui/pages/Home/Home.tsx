import { useEffect, useState } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';
import { Region } from '@/core/domain/region.model';
import { pokemonService } from '@/core/application/pokemon.service';
import Header from '@/ui/components/header/Header';
import SearchBar from '@/ui/components/searchBar/SearchBar';
import PokemonCard from '@/ui/components/pokemonCard/PokemonCard';
import Footer from '@/ui/components/footer/Footer';
import CardSkelleton from '@/ui/components/skelletons/CardSkelleton';

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
              {Array.from({ length: 6 }, (_, index) => (
                <CardSkelleton key={`placeholder-card-${index}`} />
              ))}
            </>
          )}
          {result.length > 0 && (
            <>
              {finalResult.map((res) => (
                <PokemonCard pokemon={res} />
              ))}
            </>
          )}
        </section>
        {finalResult.length === 0 && <p className="noresults">No results</p>}
      </main>

      <Footer />
    </div>
  );
};
