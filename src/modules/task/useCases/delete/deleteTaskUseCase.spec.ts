import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryTaskRepository } from '../../repositories/inMemory/inMemoryTaskRepository';
import { DeleteTaskUseCase } from './deleteTaskUseCase';

let taskRepository: inMemoryTaskRepository;
let deleteTaskUseCase: DeleteTaskUseCase;

describe('Delete task', () => {
	beforeEach(() => {
		taskRepository = new inMemoryTaskRepository;
		deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
	});

	it('should be able to delete a task', async () => {
		const task = await taskRepository.create({
			title: 'Task',
			userId: 'user-id'
		});

		await deleteTaskUseCase.execute(task.id);

		const tasks = await taskRepository.findMany(task.userId);

		expect(tasks).toHaveLength(0);
	});
});
