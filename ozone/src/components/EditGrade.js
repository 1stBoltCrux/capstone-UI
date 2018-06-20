import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import okButton from './../imgs/okbutton.svg';

class EditGrade extends React.Component {
  render (){
    return(
      <div className='edit-grade-wrapper'>

        <div className='shield'><p><span className='your-grade'>5.11+</span></p></div>
        <div className='grade-dropdown'></div>
        <div className='grade-menu-container'>
        <div className='grade-menu'></div>
        <div className='ok-button'><img src={okButton}/></div>
      </div>

      </div>
    );
  }
}

export default EditGrade;
