import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateTaskUseCase } from '../../factories/makeCreateTaskUseCase';



export class CreateTaskController {
	async handle(request: Request, response: Response) {
		const createTaskSchemaBody = z.object({
			title: z.string(),
		});

		const { title } = createTaskSchemaBody.parse(request.body);

		const userId = request.user_id;

		const createTaskUseCase = makeCreateTaskUseCase();

		const task = await createTaskUseCase.execute({
			title,
			userId
		});

		return response.status(201).json(task);
	}
}
