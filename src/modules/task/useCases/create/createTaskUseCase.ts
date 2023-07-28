import { Task } from '@prisma/client';
import { ITaskRepository } from '../../repositories/ITaskRepository';

interface IRequest {
	userId: string;
	title: string;
}

export class CreateTaskUseCase {
	constructor(
		private readonly taskRepository: ITaskRepository
	) {}
	async execute({ title, userId }: IRequest): Promise<Task> {
		const task = await this.taskRepository.create({
			title,
			userId
		});

		return task;
	}
}
