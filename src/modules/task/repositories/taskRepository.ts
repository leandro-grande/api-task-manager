import { Prisma } from '@prisma/client';
import { ITaskRepository } from './ITaskRepository';
import { prisma } from '../../../database/prisma';


export class TaskRepository implements ITaskRepository {

	async findMany(userId: string) {
		const tasks = await prisma.task.findMany({
			where: {
				userId
			},
			orderBy: {
				created_at: 'asc'
			}
		});

		return tasks;
	}

	async create(data: Prisma.TaskUncheckedCreateInput){
		const task = await prisma.task.create({
			data: {
				title: data.title,
				user: {
					connect: {
						id: data.userId
					}
				}
			},
		});

		return task;
	}

	async findById(taskId: string) {
		const task = await prisma.task.findFirst({
			where: {
				id: taskId
			}
		});

		return task;
	}

	async update(taskId: string, isCompleted: boolean) {
		const task = await prisma.task.update({
			where: {
				id: taskId
			},
			data: {
				isCompleted
			}
		});

		return task;
	}

	async delete(taskId: string) {
		await prisma.task.delete({
			where: {
				id: taskId
			}
		});
	}
}
