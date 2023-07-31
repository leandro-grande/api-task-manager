import { AppError } from '../../../../util/AppError';
import { ITaskRepository } from '../../repositories/ITaskRepository';


export class DeleteTaskUseCase {
	constructor (
		private readonly taskRepository: ITaskRepository
	) {}
	async execute(taskId: string): Promise<void> {
		const task = await this.taskRepository.findById(taskId);

		if (!task) {
			throw new AppError('Task does not exists');
		}

		await this.taskRepository.delete(taskId);
	}
}
