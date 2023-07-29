import { Request, Response } from 'express';
import { makeListTaskUseCase } from '../../factories/makeListTaskUseCase';



export class ListTaskController {
	async handle(request: Request, response: Response) {

		const userId = request.user_id;

		const listTaskUseCase = makeListTaskUseCase();

		const tasks = await listTaskUseCase.execute(userId);

		return response.status(201).json(tasks);
	}
}
