/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
// import * as MovieService from './movies.service';
import { BaseMovie, Movie } from './movie.interface';
import { MoviesController } from './movies.controller';
import { MovieService } from './movies.service';

/**
 * Router Definition
 */
export const movieRouter = express.Router();

/**
 * Controller Definitions
 */

// GET movies

movieRouter.get('/', MoviesController.findAll);

// GET items/:id

movieRouter.get('/:id', MoviesController.find);

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
  const id: string = req.params.id;

  try {
    const movieUpdate: Movie = req.body;

    const existingItem = await MovieService.find(id);

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
    const id: string = req.params.id;
    await MovieService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
