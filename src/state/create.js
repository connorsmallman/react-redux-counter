// @flow
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({
  collapsed: true
});

export default function configureStore(preloadedState: Object): Object {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(loggerMiddleware));
  return store;
}
