import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import { AppError } from '../errors/AppError';
import { routes } from './http/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: `Internal server error \n\n ${err.message}`,
  });
});

export { app };
