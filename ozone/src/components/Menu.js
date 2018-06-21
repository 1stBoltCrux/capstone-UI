import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import okButton from './../imgs/okbutton.svg';
import  './menu.css';

class Menu extends React.Component {

  render (){
    return(

      <div className='grade-menu-container'>
        <div className='grade-menu'></div>
        <div className='ok-button'><img src={okButton}/></div>
      </div>

    );
  }
}

export default Menu;
