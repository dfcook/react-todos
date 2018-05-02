import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import ActionTypes from './ActionTypes';
import api from '../api';

import { 
  AddTodoAction, 
  ToggleTodoAction,
  DeleteTodoAction
} from './actions';

import {
  updateLoading, 
  loadTodosSuccess, 
  addTodoSuccess,
  toggleTodoSuccess,
  deleteTodoSuccess, 
} from './actionCreators';

export function* fetchTodos() {   
  yield put(updateLoading(true));
  const response = yield call(api.fetch);
  yield put(loadTodosSuccess(response.data));   
  yield put(updateLoading(false));
}

export function* addTodo(action: AddTodoAction) {       
  const response = yield call(api.add, action.title);
  yield put(addTodoSuccess(response.data));     
}

export function* toggleTodo({ todo }: ToggleTodoAction) {       
  const response = yield call(api.update, {
    ...todo,
    completed: !todo.completed
  });
  yield put(toggleTodoSuccess(response.data));     
}

export function* deleteTodo({ todo }: DeleteTodoAction) {       
  yield call(api.delete, todo);
  yield put(deleteTodoSuccess(todo));     
}

export default function* rootSaga() {
  yield takeLatest(ActionTypes.LOAD_TODOS, fetchTodos);
  yield takeEvery(ActionTypes.ADD_TODO, addTodo);
  yield takeEvery(ActionTypes.TOGGLE_TODO, toggleTodo);
  yield takeEvery(ActionTypes.DELETE_TODO, deleteTodo);
}
