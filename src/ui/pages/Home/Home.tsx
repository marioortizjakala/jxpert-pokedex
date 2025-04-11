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

export const Home = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('kanto');

  const { data, loading, error } = useFetchPokemonByRegion(region);
  const finalResult = useFilteredPokemon(data, query);

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
          {data.length > 0 && (
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
