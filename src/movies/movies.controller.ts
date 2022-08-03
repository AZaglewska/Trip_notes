import { NextFunction, Request, Response } from 'express';
import { Movie, BaseMovie } from './movie.interface';
import { MovieService } from './movies.service';
import createHttpError from 'http-errors';
import { body, validationResult } from 'express-validator';

export class MoviesController {
  public static findAll(req: Request, res: Response) {
    try {
      const movies: Movie[] = MovieService.findAll();

      res.status(200).send(movies);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  public static find(req: Request, res: Response) {
    const id: string = req.params.id;

    try {
      const movie = MovieService.find(id);

      if (movie) {
        return res.status(200).send(movie);
      }

      res.status(404).send('movie not found');
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  public static create(req: Request, res: Response) {
    try {
      (req: Request, res: Response) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
      };

      const item: BaseMovie = req.body;

      const newItem = MovieService.create(item);

      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  public static put(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;

    try {
      const movieUpdate: Movie = req.body;

      if (id !== movieUpdate.id) {
        return res.status(400).send('bad request');
      }
      const existingItem = MovieService.find(id);

      if (existingItem) {
        const updatedItem = MovieService.update(id, movieUpdate);
        return res.status(200).json(updatedItem);
      }
      // res.status(404).send('Not Found');
      next(new createHttpError.NotFound());
      // const newItem = MovieService.create(movieUpdate);

      // res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }

  public static delete(req: Request, res: Response) {
    const movies: Movie[] = MovieService.findAll();

    try {
      const id: string = req.params.id;

      const movieToDelete = MovieService.find(id);

      if (!movieToDelete) {
        return res.status(404).send('Not Found');
      }
      MovieService.remove(id);
      res.status(200).send('Deleted');

      // movies.forEach((el) => {
      //   if (el.id.includes(id)) {
      //     return MovieService.remove(id), res.status(500).send('Deleted');
      //   } else {
      //     return res.status(404).send('Not Found'); nie powinno byc
      //   }
      // });

      // MovieService.remove(id);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
}

// function test() {
//     const mockedRequest = {
//         params: {
//             id: 1,
//         }
//     };

//     class MockRes {
//         statusCalls: number[] = [];
//         sendCalls: any[] = [];

//         status(code: number) {
//             this.statusCalls.push(code);
//             return this;
//         }

//         send(response: any) {
//             this.sendCalls.push(response);
//             return this;
//         }
//     }

//     const mockRes = new MockRes();
//     MoviesController.find(mockedRequest as any, mockRes as any);

//     if (mockRes.statusCalls.length === 1) {
//         // ok;
//     }
// }
