import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../util/AppError';
import { UserRepository } from '../../repositories/userRepository';
import { env } from '../../../../env';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	token: string;
}

export class AuthUserUseCase {
	constructor (
		private readonly userRepository: UserRepository
	) {}
	async execute ({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.userRepository.findByEmail(email);

		if (!user) {
			throw new AppError('User or password is incorrect');
		}

		const isPasswordMatched = await compare(password, user.password);

		if (!isPasswordMatched) {
			throw new AppError('User or password is incorrect');
		}

		const token = sign({},
			env.JWT_SECRET,
			{
				subject: user.id,
				expiresIn: '1d'
			}
		);

		return {
			token
		};
	}
}
