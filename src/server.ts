/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import cors from 'cors';

import { AppError } from './util/AppError';
import { env } from './env';
import { routes } from './routes';

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({error: err.message});
	} else if (err instanceof ZodError)  {
		console.log(err);
		return response.status(400).json({ error: err.format() });
	}

	return response.status(500).json({status: 'error', message: 'Internal server error'});
});

app.listen(env.PORT, () => console.log(`Server is running! on port ${env.PORT} ✅`));
