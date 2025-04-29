import { useState } from 'react';
import { Region } from '@/core/domain/region.model';
import SearchBar from '@/ui/components/molecules/searchBar/SearchBar';
import PokemonCard from '@/ui/components/molecules/pokemonCard/PokemonCard';
import CardSkelleton from '@/ui/components/atoms/skelletons/CardSkelleton';
import { useFetchPokemonByRegion } from '@/hooks/useFetchPokemonByRegion';
import { useFilteredPokemon } from '@/hooks/useFilteredPokemon';
import { useDebounce } from '@/hooks/useDebounce';
import Layout from '@/ui/components/templates/Layout';
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  max-width: 950px;
  justify-content: center;
  width: 100%;
`;

const MainGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: ${({ theme }) => theme.spacing.l};
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spacing.l};
`;

const Paragraph = styled.section`
  text-align: center;
`;

export const Home = () => {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState<Region>('kanto');

  const { data, loading, error } = useFetchPokemonByRegion(region);
  const debouncedQuery = useDebounce(query, 500);
  const finalResult = useFilteredPokemon(data, debouncedQuery);

  return (
    <Layout>
      <Main id="main-content">
        <SearchBar
          query={query}
          setQuery={setQuery}
          region={region}
          setRegion={setRegion}
        />

        {error && <Paragraph className="noresults">{error}</Paragraph>}
        <MainGrid className="grid">
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
        </MainGrid>
        {!loading && !error && finalResult.length === 0 && (
          <Paragraph className="noresults">No results</Paragraph>
        )}
      </Main>
    </Layout>
  );
};
