import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import { ActionsObservable, combineEpics } from 'redux-observable';

import ActionTypes from './actionTypes';
import { 
  FetchTodosAction, 
  AddTodoAction, 
  ToggleTodoAction, 
  DeleteTodoAction 
} from './actions';
import Todo from '../types/Todo';

const fetchTodosSuccess = (todos: Todo[]) => ({ type: ActionTypes.FETCH_TODOS_SUCCESS, todos });
const addTodoSuccess = (todo: Todo) => ({ type: ActionTypes.ADD_TODO_SUCCESS, todo });
const toggleTodoSuccess = (todo: Todo) => ({ type: ActionTypes.TOGGLE_TODO_SUCCESS, todo });
const deleteTodoSuccess = (todo: Todo) => ({ type: ActionTypes.DELETE_TODO_SUCCESS, todo });

const baseUrl = 'https://todobackend.apphb.com/todo-backend';

const fetchTodoEpic = (action$: ActionsObservable<FetchTodosAction>) => 
  action$        
    .ofType(ActionTypes.FETCH_TODOS)    
    .mergeMap((action: FetchTodosAction) =>
      Observable
        .ajax({
          url: baseUrl,
          withCredentials: false,
          crossDomain: true
        })        
        .map(req => fetchTodosSuccess(req.response))
);

const addTodoEpic = (action$: ActionsObservable<AddTodoAction>) => 
  action$        
    .ofType(ActionTypes.ADD_TODO)
    .mergeMap(({ title }: AddTodoAction) => 
      Observable
        .ajax({
          url: baseUrl,
          withCredentials: false,
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: { title, completed: false }
        })   
        .map(req => addTodoSuccess(req.response as Todo))
);

const toggleTodoEpic = (action$: ActionsObservable<ToggleTodoAction>) => 
  action$        
    .ofType(ActionTypes.TOGGLE_TODO)
    .mergeMap(({ todo }: ToggleTodoAction) => 
      Observable
        .ajax({
          url: todo.url,
          withCredentials: false,
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PATCH',
          body: { ...todo, completed: !todo.completed }
        })   
        .map(req => toggleTodoSuccess(req.response as Todo))
);

const deleteTodoEpic = (action$: ActionsObservable<DeleteTodoAction>) => 
  action$        
    .ofType(ActionTypes.DELETE_TODO)
    .mergeMap(({ todo }: DeleteTodoAction) => 
      Observable
        .ajax({
          url: todo.url,
          withCredentials: false,
          crossDomain: true,
          method: 'DELETE'          
        })   
        .map(req => deleteTodoSuccess(todo))
);

export default combineEpics(
  addTodoEpic, 
  deleteTodoEpic,
  fetchTodoEpic, 
  toggleTodoEpic
);
