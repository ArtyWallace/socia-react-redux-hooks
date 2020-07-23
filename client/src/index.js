import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.scss';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>,
  document.getElementById('root')
);
