import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducers/counter'
import squareReducer from './store/reducers/square'
import factorialReducer from './store/reducers/factorial'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  ctr:counterReducer,
  msqr:squareReducer,
  mfact:factorialReducer
}) 

const logger = store => {
  return next => {
    return action => {
      console.log( '{Middleware] dispatching ', action);
      const result = next(action);
      console.log('[Middleware] next state',store.getState());
      return result;
    }
  }
}

//const enhancers = compose(
//  window.devToolsExtension ? window.devToolExtension(): f => f
//);

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,  enhancers(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
