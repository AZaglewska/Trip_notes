export interface BaseMovie {
  // id: string
  title: string;
  description: string;
  releaseDate: string;
  director: string;
  genres: string[];
}

export interface Movie extends BaseMovie {
  id: string;
}
