import  React from 'react';
import ReactDOM from 'react-dom';
import styles from './home.css';
import { connect } from 'react-redux';

class Home extends React.Component {
  render () {
    return (
      <div  className={styles.homeWrapper}>
        <div className={styles.filters}>
          <div className={styles.filterRoute}>
            <div className={styles.filterBox} id="filter-title"><p>Filter Routes</p></div>
            <div className={styles.filterBox}><p>name:</p><input type='text'></input></div>
            <div className={styles.filterBox}><p>grade:</p><select></select></div>
            <div className={styles.filterBox}><p>type:</p><select></select></div>
          </div>
          <div className={styles.filterRouteButton}><p>Filter Route List</p></div>

          <div className={styles.filterMyList}>
            <div className={styles.filterRoute}>
              <div className={styles.filterBox} id="filter-title"><p>Filter My List</p></div>
            <div className={styles.filterBox}><p>name:</p><input type='text'></input></div>
            <div className={styles.filterBox}><p>grade:</p><select></select></div>
            <div className={styles.filterBox}><p>type:</p><select></select></div>
          </div>
          </div>
          <div className={styles.filterRouteButton}><p>Filter My List</p></div>
        </div>

    </div>
    )
  }
}

export default connect()(Home);
