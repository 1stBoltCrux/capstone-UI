import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';

class List extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.listWrapper}>
        {this.props.routes.map((route) =>

          <ListItem
          name={route.name}
          rating={route.rating}
          location={route.location[route.location.length-1]}
          />
        )}

      </div>
    );
  }
}

export  default List;
