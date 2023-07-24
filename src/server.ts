import express, { Request, Response, NextFunction } from 'express';
import { env } from './env';
import { ZodError } from 'zod';
import { AppError } from './util/AppError';

const app = express();

app.use(express.json());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({error: err.message});
	} else if (err instanceof ZodError)  {
		return response.json({ error: err.format() });
	}

	return response.status(500).json({status: 'error', message: 'Internal server error'});
});

app.listen(env.PORT, () => console.log(`Server is running! on port ${env.PORT} ✅`));
