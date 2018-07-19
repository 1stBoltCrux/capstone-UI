import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';
import { v4 } from 'uuid';

class MyList extends React.Component {
  render() {
    return (
      <div className={styles.listWrapper}>
        {this.props.myRoutes.map((route, key) =>
          <ListItem
            type={route.type}
            route={route}
          pitches={route.pitches}
          routeId={route.id}
          name={route.name}
          rating={route.rating}
          location={route.location[route.location.length-1]}
          key={v4()}
          />
        )}

      </div>
    );
  }
}

export  default MyList;
