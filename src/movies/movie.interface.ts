export interface BaseMovie {
  title: string;
  description: string;
  releaseDate: string;
  director: string;
  genres: string[];
}

export interface Movie extends BaseMovie {
  id: number;
}
