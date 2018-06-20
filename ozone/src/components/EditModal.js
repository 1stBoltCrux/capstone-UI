import  React from 'react';
import ReactDom from 'react-dom';
import './editmodal.css'
import okButton from './../imgs/okbutton.svg';


class EditModal extends React.Component {
  render() {
    return (
      <div className='edit-modal-wrapper'>
        <div className='modal-content'>
        <div className='top-bar'>
          <h3>Place Holder</h3>
          <div className='close-button'></div>
        </div>
        <div className='content-container'>
          <div className='notes-container'>

          </div>
          <img src={okButton}/>
        </div>
      </div>
        <div className='bottom-logo'></div>

      </div>
    );
  }
}

export default EditModal;
