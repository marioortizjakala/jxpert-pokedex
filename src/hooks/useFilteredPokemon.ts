import { useMemo } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';

export const useFilteredPokemon = (data: Pokemon[], query: string) => {
  const trimmedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      data.filter(
        (res) =>
          res.name.toLowerCase().includes(trimmedQuery) ||
          !!res.types.find((type) => type.type.name.startsWith(query))
      ),
    [trimmedQuery, data]
  );

  return filtered;
};
