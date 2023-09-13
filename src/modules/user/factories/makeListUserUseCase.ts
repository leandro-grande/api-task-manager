import { UserRepository } from '../repositories/userRepository';
import { ListUserUseCase } from '../useCases/list/listUserUseCase';

export function makeListUserUseCase() {
	const userRepository = new UserRepository;
	const listUserUseCase = new ListUserUseCase(userRepository);

	return listUserUseCase;
}
