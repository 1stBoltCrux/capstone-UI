import React from 'react';
import ReactDom from 'react-dom';
import './detailpage.css';
import Nav from './Nav.js'
import star from './../imgs/icon-star.svg'
import moreInfo from './../imgs/icon-more-info.svg'
import {Link} from 'react-router-dom';
class DetailPage extends React.Component {
  render() {
    return (
      <div className='detail-page-wrapper'>
        <Nav></Nav>
        <div className='detail-info-box'>
            <div className='detail'><h3>The Crumbling</h3></div>
            <div className='detail'><p>5.12a</p></div>
            <div className='detail'><p>Mordor Wall</p></div>
            <div className='detail'><p><span className='bright-green'>Pitches: 1</span></p></div>
            <div className='detail'><img src={star}/></div>
            <div className='detail'><img src={moreInfo}/></div>
        </div>
        <div className='route-image'>


        </div>
        <div className='button-backdrop'>
          <div className='top-buttons'>
            <Link to="/editmodal"><div className='top-button1'><p><span className='bright-green'>Grade</span></p></div></Link>
            <Link to="/editmodal"><div className='top-button2'><p><span className='bright-green'>Complete</span></p></div></Link>
            <Link to="/editmodal"><div className='top-button3'><p><span className='bright-green'>Notes</span></p></div></Link>
          </div>
          <div className='bottom-buttons'>
            <Link to="/editmodal"><div className='bottom-button1'><p><span className='bright-green'>Add to List</span></p></div></Link>
            <Link to="/editmodal"><div className='bottom-button2'><p><span className='bright-green'>Rate</span></p></div></Link>
          </div>

        </div>

      </div>
    );
  }
}

export default DetailPage;
