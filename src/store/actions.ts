import { createAction } from 'typesafe-actions';
import { Action } from 'redux';

import Todo from './../types/Todo';
import ActionTypes from './actionTypes';

export interface FetchTodosAction extends Action {  
}

export interface FetchTodosSuccessAction extends Action {
  todos: Todo[];
}

export interface AddTodoAction extends Action {
  title: string;
}

export interface AddTodoSuccessAction extends Action {
  todo: Todo;
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

export interface TodosLoadingAction extends Action {
  loading: boolean;
}

export type TodoAction = 
  | DeleteTodoAction
  | DeleteTodoSuccessAction
  | ToggleTodoAction
  | ToggleTodoSuccessAction
  | FetchTodosAction
  | FetchTodosSuccessAction
  | AddTodoAction
  | AddTodoSuccessAction
  | UpdateFilterAction
  | TodosLoadingAction;

export const todosFetchAction = createAction(
  ActionTypes.FETCH_TODOS, () => ({  type: ActionTypes.FETCH_TODOS }));

export const todoAddAction = createAction(
  ActionTypes.ADD_TODO, (title: string) => ({ type: ActionTypes.ADD_TODO, title }));

export const todoToggleAction = createAction(
  ActionTypes.TOGGLE_TODO, (todo: Todo) => ({ type: ActionTypes.TOGGLE_TODO, todo }));

export const todoDeleteAction = createAction(
  ActionTypes.DELETE_TODO, (todo: Todo) => ({ type: ActionTypes.DELETE_TODO, todo }));

export const filterUpdateAction = createAction (
  ActionTypes.UPDATE_FILTER, (filter: string) => ({ type: ActionTypes.UPDATE_FILTER, filter }));

export const todosLoadingAction = createAction (
  ActionTypes.UPDATE_TODOS_LOADING, (loading: boolean) => ({ type: ActionTypes.UPDATE_TODOS_LOADING, loading }));
