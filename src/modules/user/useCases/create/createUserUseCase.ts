import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { UserRepository } from '../../repositories/userRepository';
import { AppError } from '../../../../util/AppError';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

export class CreateUserUseCase {
	constructor( private readonly userRepository: UserRepository ) {}

	async execute({name, email, password}: IRequest): Promise<User> {
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

		return user;
	}
}
