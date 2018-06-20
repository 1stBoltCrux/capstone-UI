import React from 'react';
import ReactDom from 'react-dom';
import './nav.css'
import {Link} from 'react-router-dom';

class List extends React.Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <div className='nav'>
          <Link to ="/list"><div className='nav-button'>My List</div></Link>
          <Link to ="/"><div className='nav-button'>Home</div></Link>
          <Link to ="/list"><div className='nav-button'>Route List</div></Link>
        </div>
      </div>
    );
  }
}

export  default List;
