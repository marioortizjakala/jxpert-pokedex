interface PokemonType {
  type: {
    name: string; // Type name, e.g., 'electric', 'fire', etc.
  };
}

interface Stat {
  base_stat: number;
}

interface OfficialArtwork {
  front_default: string; // URL for the official artwork sprite
}

interface Sprites {
  other: {
    'official-artwork': OfficialArtwork;
  };
}

export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: Sprites;
  stats: Stat[];
};
