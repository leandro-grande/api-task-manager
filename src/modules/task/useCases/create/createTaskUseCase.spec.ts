import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryTaskRepository } from '../../repositories/inMemory/inMemoryTaskRepository';
import { CreateTaskUseCase } from './createTaskUseCase';
import { inMemoryUserRepository } from '../../../user/repositories/inMemory/inMemoryUserRepsitory';

let userRepository: inMemoryUserRepository;
let taskRepository: inMemoryTaskRepository;
let createTaskUseCase: CreateTaskUseCase;

describe('Create Task', () => {
	beforeEach(() => {
		userRepository = new inMemoryUserRepository;
		taskRepository = new inMemoryTaskRepository;
		createTaskUseCase = new CreateTaskUseCase(taskRepository);
	});

	it('should be able to create a task', async () => {
		const user = await userRepository.create({
			name: 'John Due',
			email: 'teste@email.com',
			password: '123456',
		});

		const task = await createTaskUseCase.execute({
			title: 'Task',
			userId: user.id
		});

		expect(task.id).toBeTruthy();
	});

});
