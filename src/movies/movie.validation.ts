import { body, validationResult, check } from 'express-validator';

// export interface BaseMovie {
//     // id: string
//     title: string;
//     description: string;
//     releaseDate: string;
//     director: string;
//     genres: string[];
//   }

export const movieDataValidate = [
  body('title').isString().withMessage('Movie name should be string'),
  body('description')
    .exists()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description should be string')
    .isLength({ min: 10 }),
  body('releaseDate').isDate().withMessage('release Date should be date'),
  body('director').optional().isString().withMessage('invalid'),
];
