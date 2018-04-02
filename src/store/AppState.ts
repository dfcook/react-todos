import Todo from '../types/Todo';

export default interface AppState {
  filter: string;
  todosLoading: boolean;
  todos: Todo[];
}
