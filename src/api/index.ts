import axios from 'axios';
import Todo from '../types/Todo';

const baseUrl = 'https://todobackend.apphb.com/todo-backend';

export default {
  async add(title: string) {
    return await axios.post<Todo>(baseUrl, {
      title,
      completed: false
    });
  },
  async fetch() {
    return await axios.get<Todo[]>(baseUrl);
  },
  async delete(todo: Todo) {
    await axios.delete(todo.url);
  },
  async update(todo: Todo) {
    return await axios.patch<Todo>(todo.url, todo);
  }
};