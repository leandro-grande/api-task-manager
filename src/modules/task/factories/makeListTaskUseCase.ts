import { TaskRepository } from '../repositories/taskRepository';
import { ListTaskUseCase } from '../useCases/list/listTaskUseCase';


export function makeListTaskUseCase() {

	const taskRepository = new TaskRepository;
	const listTaskUseCase = new ListTaskUseCase(taskRepository);

	return listTaskUseCase;
}
