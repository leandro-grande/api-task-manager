import { Prisma, Task } from '@prisma/client';


export interface ITaskRepository {
	create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
}
