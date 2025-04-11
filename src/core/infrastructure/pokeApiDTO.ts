export interface PokemonDataDTO {
  count: number;
  next: string;
  previous: string;
  results: PokemonTeaserDTO[];
}

interface PokemonTeaserDTO {
  name: string;
  url: string;
}
