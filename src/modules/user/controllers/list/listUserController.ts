import { Request, Response } from 'express';
import { makeListUserUseCase } from '../../factories/makeListUserUseCase';


export class ListUserController {
	async handle(request: Request, response: Response) {
		const user_id = request.user_id;

		const listUserUseCase = makeListUserUseCase();

		const user = await listUserUseCase.execute(user_id);

		return response.status(200).json(user);
	}
}
