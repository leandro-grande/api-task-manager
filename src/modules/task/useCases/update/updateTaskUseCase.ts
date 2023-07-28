import { Task } from '@prisma/client';
import { ITaskRepository } from '../../repositories/ITaskRepository';

interface IRequest {
	taskId: string;
	completed: boolean;
}

export class UpdateTaskUseCase {
	constructor(
		private readonly taskRepository: ITaskRepository
	) {}
	async execute({ taskId, completed }: IRequest): Promise<Task> {
		const task = await this.taskRepository.update(taskId, completed);

		return task;
	}
}
