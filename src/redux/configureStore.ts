import { compose, createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = (preloadedState: {}) =>
  createStore(
    rootReducer,
    preloadedState,
    compose(
      // applyMiddleware(), // add your middlewares here
      // Conditionally add the Redux DevTools extension enhancer if it is installed.
      (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
  );

export default configureStore;
