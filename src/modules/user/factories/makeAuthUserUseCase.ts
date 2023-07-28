import { UserRepository } from '../repositories/userRepository';
import { AuthUserUseCase } from '../useCases/auth/authUserUseCase';


export function makeAuthUserUseCase() {

	const userRepository = new UserRepository;
	const authUserUseCase = new AuthUserUseCase(userRepository);

	return authUserUseCase;
}
