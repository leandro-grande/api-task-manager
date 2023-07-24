import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateUserUseCase } from '../../factories/makeCreateUserUseCase';


export class CreateUserController {
	async handle(request: Request, response: Response) {
		const createUserControllerSchemaBody = z.object({
			name: z.string(),
			email: z.string().email(),
			password: z.string().min(6, 'Password must be at least 6 characters long'),
		});

		const { name, email, password } = createUserControllerSchemaBody.parse(request.body);

		const createUserUseCase = makeCreateUserUseCase();

		const user = await createUserUseCase.execute({
			name,
			email,
			password
		});

		return response.status(201).json(user);
	}
}
