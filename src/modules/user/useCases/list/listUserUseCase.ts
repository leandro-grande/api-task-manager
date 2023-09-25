import { UserRepository } from '../../repositories/userRepository';

interface IResponse {
	id: string;
	name: string;
	email: string;

}

export class ListUserUseCase {
	constructor(
		private readonly userRepository: UserRepository
	) {}

	async execute(user_id: string): Promise<IResponse> {
		const user = await this.userRepository.findById(user_id);

		return {
			id: user.id,
			name: user.name,
			email: user.email
		};
	}
}
