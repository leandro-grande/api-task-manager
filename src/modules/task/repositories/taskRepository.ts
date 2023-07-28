import { Prisma } from '@prisma/client';
import { ITaskRepository } from './ITaskRepository';
import { prisma } from '../../../database/prisma';



export class TaskRepository implements ITaskRepository {
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

}
