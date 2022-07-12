/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
// import * as MovieService from './movies.service';
import { BaseMovie, Movie } from './movie.interface';
import { MovieService } from './movies.service';

/**
 * Router Definition
 */
export const movieRouter = express.Router();

/**
 * Controller Definitions
 */

// GET movies

movieRouter.get('/', async (req: Request, res: Response) => {
  try {
    const movies: Movie[] = await MovieService.findAll();

    res.status(200).send(movies);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET items/:id

movieRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const movie: Movie = await MovieService.find(id);

    if (movie) {
      return res.status(200).send(movie);
    }

    res.status(404).send('movie not found');
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST items

movieRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: BaseMovie = req.body;

    const newItem = await MovieService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id

movieRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const movieUpdate: Movie = req.body;

    const existingItem: Movie = await MovieService.find(id);

    if (existingItem) {
      const updatedItem = await MovieService.update(id, movieUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await MovieService.create(movieUpdate);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

movieRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await MovieService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
