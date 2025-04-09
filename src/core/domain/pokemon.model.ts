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

export const regions = {
  kanto: {
    offset: 0,
    limit: 151,
  },
  johto: {
    offset: 151,
    limit: 100,
  },
  hoenn: {
    offset: 251,
    limit: 135,
  },
  sinnoh: {
    offset: 386,
    limit: 107,
  },
  unova: {
    offset: 494,
    limit: 155,
  },
  kalos: {
    offset: 649,
    limit: 72,
  },
  alola: {
    offset: 721,
    limit: 88,
  },
  galar: {
    offset: 809,
    limit: 96,
  },
  paldea: {
    offset: 905,
    limit: 120,
  },
};

export type Region = keyof typeof regions;
