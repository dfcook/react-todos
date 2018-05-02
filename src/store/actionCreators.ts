import { ActionCreator } from 'redux';

import ActionTypes from './ActionTypes';
import { 
  ToggleTodoSuccessAction, 
  AddTodoSuccessAction, 
  AddTodoAction,
  LoadTodosAction,
  TodosLoadingAction,
  DeleteTodoAction,
  ToggleTodoAction,
  UpdateFilterAction,
  DeleteTodoSuccessAction
} from './actions';

import Todo from '../types/Todo';

export const addTodoSuccess: ActionCreator<AddTodoSuccessAction> = (todo: Todo) => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  todo
});

export const addTodo: ActionCreator<AddTodoAction> = (title: string) => ({
  type: ActionTypes.ADD_TODO,
  title
});

export const loadTodosSuccess: ActionCreator<LoadTodosAction> = (todos: Todo[]) => ({
  type: ActionTypes.LOAD_TODOS_SUCCESS,
  todos
});

export const updateLoading: ActionCreator<TodosLoadingAction> = (loading: boolean) => ({
  type: ActionTypes.UPDATE_TODOS_LOADING,
  loading
});

export const loadTodos: ActionCreator<LoadTodosAction> = () => ({
  type: ActionTypes.LOAD_TODOS
});

export const deleteTodoSuccess: ActionCreator<DeleteTodoSuccessAction> = (todo: Todo) => ({
  type: ActionTypes.DELETE_TODO_SUCCESS,
  todo
});

export const deleteTodo: ActionCreator<DeleteTodoAction> = (todo: Todo) => ({
  type: ActionTypes.DELETE_TODO,
  todo
});

export const toggleTodoSuccess: ActionCreator<ToggleTodoSuccessAction> = (todo: Todo) => ({
  type: ActionTypes.TOGGLE_TODO_SUCCESS,
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