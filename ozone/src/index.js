import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';

ReactDOM.render(
  <BrowserRouter>
  <div>
  <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/list" exact component={List}/>
    <Route path ="/detailpage" exact component={DetailPage}/>
    <Route path ="/editmodal" exact component={EditModal}/>
  </Switch>
</div>
</BrowserRouter>, document.getElementById('root'));


registerServiceWorker();
