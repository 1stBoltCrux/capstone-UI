import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';

class List extends React.Component {
  render() {
    return (
      <div className={styles.listWrapper}>
        <ListItem></ListItem>
      </div>
    );
  }
}

export  default List;
