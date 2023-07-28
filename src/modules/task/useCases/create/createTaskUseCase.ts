import { Task } from '@prisma/client';
import { TaskRepository } from '../../repositories/taskRepository';

interface IRequest {
	userId: string;
	title: string;
}

export class CreateTaskUseCase {
	constructor(
		private readonly taskRepository: TaskRepository
	) {}
	async execute({ title, userId }: IRequest): Promise<Task> {
		const task = await this.taskRepository.create({
			title,
			userId
		});

		return task;
	}
}
