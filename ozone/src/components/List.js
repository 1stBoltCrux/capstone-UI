import React from 'react';
import ReactDom from 'react-dom';
import './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';

class List extends React.Component {
  render() {
    return (
      <div className='list-wrapper'>
        <Nav></Nav>
        <ListItem></ListItem>
      </div>
    );
  }
}

export  default List;
