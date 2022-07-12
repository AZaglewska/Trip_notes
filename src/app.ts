import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';
import { config } from 'dotenv';
import { movieRouter } from './movies/movies.router';

config();

const app: Application = express();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(express.json());
app.use(errorHandler);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});
app.use('/api/movies', movieRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const PORT: number = Number(process.env.PORT) || 3000;
const server: Server = app.listen(PORT, () =>
  console.log(`server is on Port ${PORT}`)
);

console.log('welcome');
