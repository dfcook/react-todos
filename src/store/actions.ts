import { Action, ActionCreator } from 'redux';
import ActionTypes from './actionTypes';
import Todo from './../types/Todo';

export interface AddTodoAction extends Action {
  title: string;
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
  | UpdateFilterAction;

export const addTodo: ActionCreator<AddTodoAction> = (title: string) => ({
  type: ActionTypes.ADD_TODO,
  title
});

export const deleteTodo: ActionCreator<DeleteTodoAction> = (todo: Todo) => ({
  type: ActionTypes.DELETE_TODO,
  todo
});

export const toggleTodo: ActionCreator<ToggleTodoAction> = (todo: Todo) => ({
  type: ActionTypes.TOGGLE_TODO,
  todo
});

export const updateFilter: ActionCreator<UpdateFilterAction> = (filter: string) => ({
  type: ActionTypes.UPDATE_FILTER,
  filter
});
