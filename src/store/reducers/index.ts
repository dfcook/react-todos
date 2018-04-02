import { TodoAction, AddTodoAction, DeleteTodoAction, ToggleTodoAction, UpdateFilterAction } from '../actions';

import AppState from '../AppState';
import initialState from '../initialState';
import ActionTypes from '../actionTypes';

let nextId = 1;

export default (state: AppState = initialState, action: TodoAction): AppState => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const id = ++nextId;

      return {
        ...state,
        todos: [ ...state.todos, {
          id,
          title: (action as AddTodoAction).title,
          order: id,
          completed: false,
          url: ''
        }]
      };

    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => (action as DeleteTodoAction).todo.id !== t.id)
      };

    case ActionTypes.TOGGLE_TODO:
      const todo = (action as ToggleTodoAction).todo;
      const updated = {
        ...todo,
        completed: !todo.completed
      };

      return {
        ...state,
        todos: state.todos.map(t => todo.id === t.id ? updated : t)
      };

    case ActionTypes.UPDATE_FILTER:
      return {
        ...state,
        filter: (action as UpdateFilterAction).filter
      };

    default:
      return state;
  }
};
