import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/list" exact component={List}/>
              <Route path ="/detailpage" exact component={DetailPage}/>
              <Route path ="/editmodal" exact component={EditModal}/>
            </Switch>      
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
