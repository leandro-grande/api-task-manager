import { Prisma } from '@prisma/client';
import { prisma } from '../../../database/prisma';

import { IUserRepository } from './IUserRepository';


export class UserRepository implements IUserRepository {

	async create(data: Prisma.UserCreateInput){
		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: data.password,
			}
		});

		return user;
	}

	async findByEmail(email: string) {
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		return user;
	}

}
