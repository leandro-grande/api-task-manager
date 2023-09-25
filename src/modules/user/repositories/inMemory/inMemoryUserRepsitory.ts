import { Prisma, User } from '@prisma/client';
import { randomUUID } from 'crypto';
import { IUserRepository } from '../IUserRepository';

export class inMemoryUserRepository implements IUserRepository {
	public item: User[] = [];

	async create(data: Prisma.UserCreateInput) {
		const user = {
			id: randomUUID(),
			name: data.name,
			email: data.email,
			password: data.password,
			avatar_url: null
		};

		this.item.push(user);

		return user;
	}

	async findByEmail(email: string){
		const user = this.item.find((user) => user.email === email);

		if (!user) {
			return null;
		}

		return user;
	}

	async findById(user_id: string)  {
		const user = this.item.find(item => item.id = user_id);

		if (!user) {
			return null;
		}

		return user;
	}
}
