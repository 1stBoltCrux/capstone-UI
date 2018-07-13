import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/Nav'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
store.getState()
);

console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <div>
      <App/>
    </div>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));


registerServiceWorker();
