import { useEffect, useState, useCallback } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';
import { Region } from '@/core/domain/region.model';
import { pokemonService } from '@/core/application/pokemon.service';

interface UseFetchPokemonResult {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

export const useFetchPokemonByRegion = (
  region: Region
): UseFetchPokemonResult => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await pokemonService.getByRegion(region);
      setData(result || []);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch Pokémon data.');
    } finally {
      setLoading(false);
    }
  }, [region]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
