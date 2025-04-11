import { useEffect, useState } from 'react';
import { Pokemon } from '@/core/domain/pokemon.model';

export const useFilteredPokemon = (data: Pokemon[], query: string) => {
  const [filtered, setFiltered] = useState<Pokemon[]>([]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFiltered(data);
      return;
    }

    const result = data.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.types.some((type) => type.type.name.startsWith(q))
    );

    setFiltered(result);
  }, [data, query]);

  return filtered;
};
