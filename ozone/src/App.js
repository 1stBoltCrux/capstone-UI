import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';
import DetailPage from './components/DetailPage.js';
import  EditModal from './components/EditModal.js';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        <Nav></Nav>
        <Home></Home>
      </div>
    );
  }
}

export default App;
