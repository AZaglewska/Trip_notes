/**
 * Data Model Interfaces
 */

import { BaseMovie, Movie } from './movie.interface';
import { Movies } from './movies.interface';

/**
 * In-Memory Store
 */

let movies: Movies = {
  1: {
    id: 1,
    title: 'Batman Begins',
    director: 'Christopher Nolan',
    releaseDate: '2005',
    description:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'sci-fi'],
  },

  2: {
    id: 2,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    releaseDate: '2008',
    description:
      '2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'crime', 'drama', 'thriller'],
  },

  3: {
    id: 3,
    title: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    releaseDate: '2012',
    description:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'drama'],
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Movie[]> => Object.values(movies);

export const find = async (id: number): Promise<Movie> => movies[id];

export const create = async (newMovie: BaseMovie): Promise<Movie> => {
  const id = new Date().valueOf();

  movies[id] = {
    id,
    ...newMovie,
  };

  return movies[id];
};

export const update = async (
  id: number,
  movieUpdate: BaseMovie
): Promise<Movie | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  movies[id] = { id, ...movieUpdate };

  return movies[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const movieEl = await find(id);

  if (!movieEl) {
    return null;
  }

  delete movies[id];
};
