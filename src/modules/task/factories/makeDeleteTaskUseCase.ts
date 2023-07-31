import { TaskRepository } from '../repositories/taskRepository';
import { DeleteTaskUseCase } from '../useCases/delete/deleteTaskUseCase';


export function makeDeleteTaskUseCase() {

	const taskRepository = new TaskRepository;
	const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

	return deleteTaskUseCase;
}
