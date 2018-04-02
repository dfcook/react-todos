import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AppState from './AppState';

export default createStore<AppState>(
  rootReducer,
  applyMiddleware(thunk)
);
