import { Request, Response } from 'express';
import { z } from 'zod';
import { makeAuthUserUseCase } from '../../factories/makeAuthUserUseCase';


export class AuthUserController {
	async handle(request: Request, response: Response) {
		const authUserSchemaBody = z.object({
			email: z.string(),
			password: z.string().min(6)
		});

		const { email, password } = authUserSchemaBody.parse(request.body);

		const authUserUseCase = makeAuthUserUseCase();

		const token = await authUserUseCase.execute({
			email,
			password
		});

		return response.status(200).json(token);
	}
}
