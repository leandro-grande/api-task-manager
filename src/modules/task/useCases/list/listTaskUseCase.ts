import { Task } from '@prisma/client';
import { ITaskRepository } from '../../repositories/ITaskRepository';


export class ListTaskUseCase {
	constructor (
		private readonly taskRepository: ITaskRepository
	) {}
	async execute(userId: string): Promise<Task[]> {
		const tasks = await this.taskRepository.findMany(userId);

		return tasks;
	}

}
