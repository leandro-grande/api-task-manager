import { UserRepository } from '../repositories/userRepository';
import { CreateUserUseCase } from '../useCases/create/createUserUseCase';

export function makeCreateUserUseCase() {
	const userRepository = new UserRepository;
	const createUserUseCase = new CreateUserUseCase(userRepository);

	return createUserUseCase;
}
