import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { env } from '../env';

interface Payload {
	sub: string;
}

export const  ensureAuthenticated = (request: Request, response: Response, next: NextFunction) => {
	const authToken = request.headers.authorization;

	if (!authToken) {
		return response.status(401).end;
	}

	const [, token] = authToken.split(' ');

	try {
		const { sub } = verify(token, env.JWT_SECRET) as Payload;

		request.user_id = sub;

		next();
	} catch {
		return response.status(401).json({
			error: 'invalid token'
		});
	}

};
