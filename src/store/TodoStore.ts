import { observable, computed } from 'mobx';

import Todo from '../types/Todo';

export class TodoStore {
  id = 0;

  @observable filter = 'ACTIVE';
  @observable todosLoading = false;
  @observable todos: Todo[] = [];

  @computed get filteredTodos() {
    switch (this.filter) {
      case 'ACTIVE':
        return this.todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  addTodo(title: string) {
    const id = this.id++;

    this.todos.push({
      title,
      completed: false,
      id,
      order: id,
      url: ''
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => todo.id !== t.id);
  }

  toggleTodo(todo: Todo) {
    const updated = {
      ...todo,
      completed: !todo.completed
    };

    this.todos = this.todos.map(t => todo.id === t.id ? updated : t);
  }
}

const todoStore = new TodoStore();
export default todoStore;
