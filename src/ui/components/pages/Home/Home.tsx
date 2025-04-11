import { useMemo, useState } from 'react';
import { Region } from '@/core/domain/region.model';
import SearchBar from '@/ui/components/molecules/searchBar/SearchBar';
import PokemonCard from '@/ui/components/molecules/pokemonCard/PokemonCard';
import CardSkelleton from '@/ui/components/atoms/skelletons/CardSkelleton';
import { useFetchPokemonByRegion } from '@/hooks/useFetchPokemonByRegion';
import { useFilteredPokemon } from '@/hooks/useFilteredPokemon';
import { useDebounce } from '@/hooks/useDebounce';
import Layout from '@/ui/components/templates/Layout';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('kanto');

  const { data, loading } = useFetchPokemonByRegion(region);
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
