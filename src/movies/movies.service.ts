/**
 * Data Model Interfaces
 */

import { BaseMovie, Movie } from './movie.interface';
import { randomUUID } from 'crypto';

/**
 * In-Memory Store
 */

let movies: Movie[] = [
  {
    id: '1',
    title: 'Batman Begins',
    director: 'Christopher Nolan',
    releaseDate: '2005',
    description:
      '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'sci-fi'],
  },

  {
    id: '2',
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    releaseDate: '2008',
    description:
      '2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'crime', 'drama', 'thriller'],
  },

  {
    id: '3',
    title: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    releaseDate: '2012',
    description:
      '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    genres: ['action', 'drama'],
  },
];

/**
 * Service Methods
 */
export class MovieService {
  //  async findAll() {
  //     return Object.values(movies);
  //   }
  static findAll(): Movie[] {
    return movies;
  }
  static find(id: string): Movie | undefined {
    return movies.find((el) => el.id === id);
  }

  static create(newMovie: BaseMovie): Movie {
    // const id = new Date().valueOf();
    const id = randomUUID();

    // movies : string[]
    const movieEl = { id, ...newMovie };

    movies.push(movieEl);

    return movieEl;
  }

  static update(id: string, movieUpdate: BaseMovie): Movie | null {
    // const item = MovieService.find(id);

    const index = movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
      return null;
    }

    movies[index] = { id, ...movieUpdate };

    return movies[index];
  }

  static remove(id: string): void {
    movies.splice(
      movies.findIndex((i) => i.id === id),
      1
    );
  }
}

// export const findAll = async (): Promise<Movie[]> => Object.values(movies);

// export const find = async (id: number): Promise<Movie> => movies[id];

// export const create = async (newMovie: BaseMovie): Promise<Movie> => {
//   const id = new Date().valueOf();

//   movies[id] = {
//     id,
//     ...newMovie,
//   };

//   return movies[id];
// };

// export const update = async (
//   id: number,
//   movieUpdate: BaseMovie
// ): Promise<Movie | null> => {
//   const item = await find(id);

//   if (!item) {
//     return null;
//   }

//   movies[id] = { id, ...movieUpdate };

//   return movies[id];
// };

// export const remove = async (id: number): Promise<null | void> => {
//   const movieEl = await find(id);

//   if (!movieEl) {
//     return null;
//   }

//   delete movies[id];
// };
