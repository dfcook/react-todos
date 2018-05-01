import { observable, computed } from 'mobx';
import api from '../api';

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

  async addTodo(title: string) {
    const todo = await api.add(title);    
    this.todos.push(todo.data);
  }

  async deleteTodo(todo: Todo) {
    await api.delete(todo);
    this.todos = this.todos.filter(t => todo.id !== t.id);
  }

  async toggleTodo(todo: Todo) {
    const updated = await api.update({
      ...todo,
      completed: !todo.completed
    });

    this.todos = this.todos.map(t => todo.id === t.id ? updated.data : t);
  }

  async refreshTodos() {
    this.todosLoading = true;

    const response = await api.fetch();
    this.todos = response.data;

    this.todosLoading = false;
  }
}

const todoStore = new TodoStore();
export default todoStore;
