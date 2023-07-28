import { TaskRepository } from '../repositories/taskRepository';
import { UpdateTaskUseCase } from '../useCases/update/updateTaskUseCase';


export function makeUpdateTaskUseCase() {

	const taskRepository = new TaskRepository;
	const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);

	return updateTaskUseCase;
}
