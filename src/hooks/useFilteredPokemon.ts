import { useMemo } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';

export const useFilteredPokemon = (data: Pokemon[], query: string) => {
  const trimmedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      data.filter((res) => {
        return (
          res.name.toLowerCase().includes(trimmedQuery) ||
          !!res.types.includes(query)
        );
      }),
    [trimmedQuery, data]
  );

  return filtered;
};
