import { Request, Response } from 'express';
import { z } from 'zod';
import { makeDeleteTaskUseCase } from '../../factories/makeDeleteTaskUseCase';


export class DeleteTaskController {
	async handle(request: Request, response: Response) {
		const deleteTaskSchemaParams = z.object({
			taskId: z.string(),
		});

		const { taskId } = deleteTaskSchemaParams.parse(request.params);

		const deleteTaskUseCase = makeDeleteTaskUseCase();

		await deleteTaskUseCase.execute(taskId);

		return response.status(201).send('The task was deleted.');
	}
}
