import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryUserRepository } from '../../repositories/inMemory/inMemoryUserRepsitory';
import { CreateUserUseCase } from './createUserUseCase';
import { AppError } from '../../../../util/AppError';

let userRepository: inMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
	beforeEach(() => {
		userRepository = new inMemoryUserRepository;
		createUserUseCase = new CreateUserUseCase(userRepository);
	});

	it('should be able to create a user', async () => {
		const user = await createUserUseCase.execute({
			name: 'John Due',
			email: 'teste@email.com',
			password: '123456',
		});

		expect(user.id).toBeTruthy();
	});

	it('should not be able to create user already exists', async () => {
		await createUserUseCase.execute({
			name: 'John Due',
			email: 'teste@email.com',
			password: '123456',
		});

		await expect(() =>
			createUserUseCase.execute({
				name: 'John Due',
				email: 'teste@email.com',
				password: '123456',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

});
