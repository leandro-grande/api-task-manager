import { Prisma, Task } from '@prisma/client';


export interface ITaskRepository {
	create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
	findById(taskId: string): Promise<Task>;
}
