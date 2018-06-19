import React from 'react';
import ReactDom from 'react-dom';
import './list.css'
import Nav from './Nav.js'

class List extends React.Component {
  render() {
    return (
      <div className='list-wrapper'>
        <Nav></Nav>
      </div>
    );
  }
}

export  default List;
