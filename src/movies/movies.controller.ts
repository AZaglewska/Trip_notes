import { Request, Response } from 'express';
import { Movie } from './movie.interface';
import { MovieService } from './movies.service';

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
