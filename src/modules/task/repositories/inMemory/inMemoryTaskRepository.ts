import { Prisma, Task } from '@prisma/client';
import { randomUUID } from 'node:crypto';

import { ITaskRepository } from '../ITaskRepository';

export class inMemoryTaskRepository implements ITaskRepository {
	public items: Task[] = [];

	async create(data: Prisma.TaskUncheckedCreateInput) {
		const task = {
			id: randomUUID(),
			title: data.title,
			userId: data.userId,
			completed: false,
			created_at: new Date()
		};

		return task;
	}

	async findById(taskId: string) {
		const task = this.items.find(item => item.id === taskId);

		if (!task) {
			return null;
		}

		return task;
	}

}
