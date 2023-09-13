import { hash } from 'bcryptjs';

import { AppError } from '../../../../util/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';
import { sign } from 'jsonwebtoken';
import { env } from '../../../../env';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

interface IResponse {
	id: string,
	name: string,
	email: string,
	avatar_url: string,
	token: string
}

export class CreateUserUseCase {
	constructor( private readonly userRepository: IUserRepository ) {}

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

		const token = sign({},
			env.JWT_SECRET,
			{
				subject: user.id,
				expiresIn: '1d'
			}
		);

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			avatar_url: user.avatar_url,
			token
		};
	}
}
