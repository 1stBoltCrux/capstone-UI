import React from 'react';
import ReactDom from 'react-dom';
import styles from './listitem.css';
import star from './../imgs/icon-star.svg'
import {Link} from 'react-router-dom';
/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

class ListItem extends React.Component {
  render() {
    return (
      <Link to={{
        pathname: '/detailpage',
        state: {
          name: this.props.name
        }
      }}><div className={styles.listItemWrapper}>
        <div className={styles.itemType}></div>
        <div className={styles.itemInfoBox}>
          <div className={styles.itemInfo}>
            <h3>{this.props.name}</h3>
            <p> {this.props.rating} </p>
            <p>{this.props.routeId}</p>
            <img src={star}/>
          </div>
          <div className={styles.expandButton}></div>

        </div>

      </div></Link>
    );
  }
}

export default ListItem;
