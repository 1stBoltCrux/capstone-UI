import React from 'react';
import ReactDom from 'react-dom';
import './listitem.css';
import star from './../imgs/icon-star.svg'
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    return (
      <Link to="/detailpage"><div className='list-item-wrapper'>
        <div className='item-type'></div>
        <div className='item-info-box'>
          <div className='item-info'>
            <h3>The Crumbling</h3>
            <p> 5.12s </p>
            <p>Mordor Wall</p>
            <img src={star}/>
          </div>
          <div className='expand-button'></div>

        </div>

      </div></Link>
    );
  }
}

export default ListItem;
