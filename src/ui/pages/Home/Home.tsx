import { useEffect, useState } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';
import { Region } from '@/core/domain/region.model';
import { pokemonService } from '@/core/application/pokemon.service';
import Header from '@/ui/components/header/Header';
import SearchBar from '@/ui/components/searchBar/SearchBar';
import PokemonCard from '@/ui/components/pokemonCard/PokemonCard';
import Footer from '@/ui/components/footer/Footer';
import CardSkelleton from '@/ui/components/skelletons/CardSkelleton';
import { useFetchPokemonByRegion } from '@/hooks/useFetchPokemonByRegion';
import { useFilteredPokemon } from '@/hooks/useFilteredPokemon';
import { useDebounce } from '@/hooks/useDebounce';
import Layout from '@/ui/components/layout/Layout';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('kanto');

  const { data, loading, error } = useFetchPokemonByRegion(region);
  const debouncedQuery = useDebounce(query, 500);
  const finalResult = useFilteredPokemon(data, debouncedQuery);

  return (
    <Layout>
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
          {data.length > 0 && (
            <>
              {finalResult.map((res) => (
                <PokemonCard pokemon={res} key={res.id} />
              ))}
            </>
          )}
        </section>
        {!loading && finalResult.length === 0 && (
          <p className="noresults">No results</p>
        )}
      </main>
    </Layout>
  );
};
