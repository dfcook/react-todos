import React from 'react';
import Todo from './types/Todo';

export interface AppState {
  filter: string;
  loading: boolean;
  todos: Todo[];
  updateFilter: (filter: string) => void;
  addTodo: (title: string) => void;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}

export const TodoContext = React.createContext<AppState>({
  filter: 'ALL',
  loading: false,
  todos: [],
  updateFilter: (filter: string) => {},
  addTodo: (title: string) => {},
  toggleTodo: (todo: Todo) => {},
  deleteTodo: (todo: Todo) => {}
});
