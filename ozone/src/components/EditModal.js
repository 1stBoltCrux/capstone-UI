import  React from 'react';
import ReactDom from 'react-dom';
import styles from './editmodal.css'
import okButton from './../imgs/okbutton.svg';
import { Link } from 'react-router-dom';
import EditGrade from './EditGrade.js'

class EditModal extends React.Component {
  render() {
    return (
      <div className={styles.editModalWrapper}>
        <div className={styles.modalContent}>
        <div className={styles.topBar}>
          <h3>Place Holder</h3>
          <Link to="/detailpage"><div className={styles.closeButton}></div></Link>
        </div>
        <EditGrade></EditGrade>
      </div>
        <div className={styles.bottomLogo}></div>

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
