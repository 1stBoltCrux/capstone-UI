import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
store.getState()
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <div>
  <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/list" exact component={List}/>
    <Route path ="/detailpage" exact component={DetailPage}/>
    <Route path ="/editmodal" exact component={EditModal}/>
  </Switch>
</div>
</BrowserRouter>
</Provider>
, document.getElementById('root'));


registerServiceWorker();
