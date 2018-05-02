import {
  AddTodoSuccessAction,
  FetchTodosSuccessAction,
  TodoAction,
  ToggleTodoAction,
  UpdateFilterAction,
  TodosLoadingAction,
  DeleteTodoAction
} from '../actions';

import AppState from '../AppState';
import initialState from '../initialState';
import ActionTypes from '../actionTypes';

export default (state: AppState = initialState, action: TodoAction): AppState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [ ...state.todos, (action as AddTodoSuccessAction).todo]
    };

    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: (action as FetchTodosSuccessAction).todos
      };

    case ActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(t => (action as DeleteTodoAction).todo.id !== t.id)
      };

    case ActionTypes.TOGGLE_TODO_SUCCESS:
      const todo = (action as ToggleTodoAction).todo;

      return {
        ...state,
        todos: state.todos.map(t => todo.id === t.id ? todo : t)
      };

    case ActionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: (action as UpdateFilterAction).filter
      };

    case ActionTypes.UPDATE_TODOS_LOADING:
      return {
        ...state,
        todosLoading: (action as TodosLoadingAction).loading
      };

    default:
      return state;
  }
};
