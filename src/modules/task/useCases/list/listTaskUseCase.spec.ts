import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryTaskRepository } from '../../repositories/inMemory/inMemoryTaskRepository';
import { ListTaskUseCase } from './listTaskUseCase';

let taskRepository: inMemoryTaskRepository;
let listTaskUseCase: ListTaskUseCase;

describe('List Task', () => {
	beforeEach(() => {
		taskRepository = new inMemoryTaskRepository;
		listTaskUseCase = new ListTaskUseCase(taskRepository);
	});

	it('should be able to list the tasks', async () => {
		const task = await taskRepository.create({
			title: 'Task',
			userId: 'user-id'
		});

		const tasks = await listTaskUseCase.execute(task.userId);

		expect(tasks).toHaveLength(1);
	});

});
