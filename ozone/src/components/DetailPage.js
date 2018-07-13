import React from 'react';
import ReactDom from 'react-dom';
import styles from './detailpage.css';
import Nav from './Nav.js'
import star from './../imgs/icon-star.svg'
import moreInfo from './../imgs/icon-more-info.svg'
import {Link} from 'react-router-dom';

class DetailPage extends React.Component {
  render() {
    return (
      <div className={styles.detailPageWrapper}>
        <Nav></Nav>
        <div className={styles.detailInfoBox}>
            <div className={styles.detail}><h3>The Crumbling</h3></div>
            <div className={styles.detail}><p>5.12a</p></div>
            <div className={styles.detail}><p>Mordor Wall</p></div>
            <div className={styles.detail}><p><span className={styles.brightGreen}>Pitches: 1</span></p></div>
            <div className={styles.detail}><img src={star}/></div>
            <div className={styles.detail}><img src={moreInfo}/></div>
        </div>
        <div className={styles.routeImage}>


        </div>
        <div className={styles.buttonBackdrop}>
          <div className={styles.topButtons}>
            <Link to="/editmodal"><div className={styles.topButton1}><p><span className={styles.brightGreen}>Grade</span></p></div></Link>
            <Link to="/editmodal"><div className={styles.topButton2}><p><span className={styles.brightGreen}>Complete</span></p></div></Link>
            <Link to="/editmodal"><div className={styles.topButton3}><p><span className={styles.brightGreen}>Notes</span></p></div></Link>
          </div>
          <div className={styles.bottomButtons}>
            <Link to="/editmodal"><div className={styles.bottomButton1}><p><span className={styles.brightGreen}>Add to List</span></p></div></Link>
            <Link to="/editmodal"><div className={styles.bottomButton2}><p><span className={styles.brightGreen}>Rate</span></p></div></Link>
          </div>

        </div>

      </div>
    );
  }
}

export default DetailPage;
