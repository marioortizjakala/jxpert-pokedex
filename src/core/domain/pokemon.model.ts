interface Stat {
  value: number;
  name: string;
}

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  image: string;
  stats: Stat[];
};
