import { Action } from 'redux';
import Todo from './../types/Todo';

export interface TodosLoadingAction extends Action {
  loading: boolean;
}

export interface AddTodoAction extends Action {
  title: string;
}

export interface AddTodoSuccessAction extends Action {
  todo: Todo;
}

export interface LoadTodosSuccessAction extends Action {
  todos: Todo[];
}

export interface LoadTodosAction extends Action {

}

export interface ToggleTodoAction extends Action {
  todo: Todo;
}

export interface ToggleTodoSuccessAction extends Action {
  todo: Todo;
}

export interface DeleteTodoAction extends Action {
  todo: Todo;
}

export interface DeleteTodoSuccessAction extends Action {
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
  | LoadTodosAction
  | TodosLoadingAction;
