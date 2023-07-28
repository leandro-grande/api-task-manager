import { hash } from 'bcryptjs';

import { UserRepository } from '../../repositories/userRepository';
import { AppError } from '../../../../util/AppError';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

interface IResponse {
	id: string,
	name: string,
	email: string,
	avatar_url: string
}

export class CreateUserUseCase {
	constructor( private readonly userRepository: UserRepository ) {}

	async execute({name, email, password}: IRequest): Promise<IResponse> {
		const userAlreadyExists = await this.userRepository.findByEmail(email);

		if(userAlreadyExists) {
			throw new AppError('User already exists');
		}

		const passwordHash = await hash(password, 8);

		const user = await this.userRepository.create({
			name,
			email,
			password: passwordHash
		});

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			avatar_url: user.avatar_url
		};
	}
}
