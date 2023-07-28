import { Request, Response } from 'express';
import { z } from 'zod';
import { makeUpdateTaskUseCase } from '../../factories/makeUpdateTaskUseCase';


export class UpdateTaskController {
	async handle(request: Request, response: Response) {
		const updateTaskSchemaBody = z.object({
			completed: z.coerce.boolean(),
		});

		const updateTaskSchemaParams = z.object({
			taskId: z.string(),
		});

		const { completed } = updateTaskSchemaBody.parse(request.body);
		const { taskId } = updateTaskSchemaParams.parse(request.params);


		const updateTaskUseCase = makeUpdateTaskUseCase();

		const task = await updateTaskUseCase.execute({
			taskId,
			completed
		});

		return response.status(200).json(task);
	}
}
