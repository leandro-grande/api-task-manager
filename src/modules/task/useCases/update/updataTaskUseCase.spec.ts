import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryTaskRepository } from '../../repositories/inMemory/inMemoryTaskRepository';
import { UpdateTaskUseCase } from './updateTaskUseCase';

let taskRepository: inMemoryTaskRepository;
let updateTaskUseCase: UpdateTaskUseCase;

describe('Update task', () => {
	beforeEach(() => {
		taskRepository = new inMemoryTaskRepository;
		updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
	});

	it('should be able to complete a task', async () => {
		const task = await taskRepository.create({
			title: 'Task',
			userId: 'user-id'
		});

		await updateTaskUseCase.execute({
			taskId: task.id,
			completed: false
		});

		expect(task.completed).toBe(false);
	});
});
