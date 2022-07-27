/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
// import * as MovieService from './movies.service';
import { MoviesController } from './movies.controller';

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

movieRouter.post('/', MoviesController.create);

// PUT items/:id

movieRouter.put('/:id', MoviesController.put);

// DELETE items/:id

movieRouter.delete('/:id', MoviesController.delete);
