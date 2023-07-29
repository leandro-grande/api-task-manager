import { Prisma, Task } from '@prisma/client';


export interface ITaskRepository {
	create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
	findById(taskId: string): Promise<Task>;
	findMany(userId: string): Promise<Task[]>;
	update(taskId: string, completed: boolean): Promise<Task>;
}
