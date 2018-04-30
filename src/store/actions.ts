import { Action, ActionCreator } from 'redux';
import ActionTypes from './actionTypes';
import Todo from './../types/Todo';
import Axios from 'axios';
import Dispatch from './dispatch';

const baseUrl = 'https://todobackend.apphb.com/todo-backend';

export interface AddTodoAction extends Action {
  todo: Todo;
}

export interface LoadTodosAction extends Action {
  todos: Todo[];
}

export interface ToggleTodoAction extends Action {
  todo: Todo;
}

export interface DeleteTodoAction extends Action {
  todo: Todo;
}

export interface UpdateFilterAction extends Action {
  filter: string;
}

export type TodoAction =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | UpdateFilterAction
  | LoadTodosAction;

export const addTodoSuccess: ActionCreator<AddTodoAction> = (todo: Todo) => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  todo
});

export const addTodo = (title: string) => {
  return async (dispatch: Dispatch) => {
    const response = await Axios.post<Todo>(baseUrl, {
      title,
      completed: false
    });
    dispatch(addTodoSuccess(response.data));
  };
};

export const loadTodosSuccess: ActionCreator<LoadTodosAction> = (todos: Todo[]) => ({
  type: ActionTypes.LOAD_TODOS_SUCCESS,
  todos
});

export const loadTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await Axios.get<Todo>(baseUrl);
    dispatch(loadTodosSuccess(response.data));
  };
};

export const deleteTodo: ActionCreator<DeleteTodoAction> = (todo: Todo) => ({
  type: ActionTypes.DELETE_TODO,
  todo
});

export const toggleTodoSuccess: ActionCreator<AddTodoAction> = (todo: Todo) => ({
  type: ActionTypes.TOGGLE_TODO_SUCCESS,
  todo
});

export const toggleTodo = (todo: Todo) => {
  return async (dispatch: Dispatch) => {
    const updated = {
      ...todo,
      completed: !todo.completed
    };

    const response = await Axios.patch<Todo>(updated.url, updated);
    dispatch(toggleTodoSuccess(response.data));
  };
};

export const updateFilter: ActionCreator<UpdateFilterAction> = (filter: string) => ({
  type: ActionTypes.UPDATE_FILTER,
  filter
});
