import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AppState from './AppState';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore<AppState>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
