import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import okButton from './../imgs/okbutton.svg';
import styles from './menu.css';

class Menu extends React.Component {

  render (){
    return(

      <div className={styles.gradeMenuWrapper}>
        <div className={styles.gradeMenu}></div>
        <div className={styles.okButton}><img src={okButton}/></div>
      </div>

    );
  }
}

export default Menu;
