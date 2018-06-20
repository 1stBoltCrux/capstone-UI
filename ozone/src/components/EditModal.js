import  React from 'react';
import ReactDom from 'react-dom';
import './editmodal.css'
import okButton from './../imgs/okbutton.svg';
import { Link } from 'react-router-dom';
import EditGrade from './EditGrade.js'
class EditModal extends React.Component {
  render() {
    return (
      <div className='edit-modal-wrapper'>
        <div className='modal-content'>
        <div className='top-bar'>
          <h3>Place Holder</h3>
          <Link to="/detailpage"><div className='close-button'></div></Link>
        </div>
        <EditGrade></EditGrade>
      </div>
        <div className='bottom-logo'></div>

      </div>
    );
  }
}

export default EditModal;

{/* <div className='content-container'>
<div className='notes-container'>

</div>
<img src={okButton}/>
</div> */}
