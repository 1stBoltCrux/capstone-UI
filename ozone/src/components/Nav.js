import React from 'react';
import ReactDom from 'react-dom';
import './nav.css'

class List extends React.Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <div className='nav'>
          <div className='nav-button'><p>My List</p></div>
          <div className='nav-button'>Route List</div>
        </div>
      </div>
    );
  }
}

export  default List;
