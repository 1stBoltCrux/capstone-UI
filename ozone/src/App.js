import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from './components/Home.js';
import List from './components/List.js';
import  Nav from './components/Nav.js';

class App extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        <Nav></Nav>
        <Home></Home>
        <List></List>

      </div>
    );
  }
}

export default App;
