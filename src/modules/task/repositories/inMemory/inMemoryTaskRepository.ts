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
			isCompleted: false,
			created_at: new Date()
		};

		this.items.push(task);

		return task;
	}

	async findMany(userId: string) {
		const tasks = this.items.filter(item => item.userId === userId);

		return tasks;
	}

	async findById(taskId: string) {
		const task = this.items.find(item => item.id === taskId);

		if (!task) {
			return null;
		}

		return task;
	}

	async update(taskId: string, completed: boolean) {
		const taskIndex = this.items.findIndex(item => item.id === taskId);

		if (taskIndex < 0) {
			return null;
		}

		this.items[taskIndex].isCompleted = completed;

		return this.items[taskIndex];
	}

	async delete(taskId: string) {
		const taskIndex = this.items.findIndex(item => item.id === taskId);

		if (taskIndex < 0) {
			return null;
		}

		this.items.splice(taskIndex, 1);
	}
}
