import React from 'react';
import ReactDom from 'react-dom';
import styles from './list.css';
import Nav from './Nav.js';
import ListItem from './ListItem.js';
import { v4 } from 'uuid';

class List extends React.Component {
  render() {
    return (
      <div className={styles.listWrapper}>
        {this.props.routes.map((route, key) =>
          <ListItem
            routeList={this.props.routes}
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

export  default List;
