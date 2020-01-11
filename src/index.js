import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({

});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching ', action);
      const result = next(action);
      console.log('[Middleware]', store.getState());
      return result;
    }
  }
}

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();