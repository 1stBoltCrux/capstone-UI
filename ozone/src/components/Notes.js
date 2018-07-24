import React from 'react';
import ReactDom from 'react-dom';
import styles from './notes.css';
import { handleSubmitNotes } from './../actions'

export default function Notes(props){
  const {firebaseId} = props;
  let _note = null;
  return (
    <div className={styles.notesWrapper}>
      <div className={styles.modalContent}>
      <div className={styles.topBar}>
        <h3>Place Holder</h3>
      <div className={styles.closeButton}></div>
      </div>
      <div className={styles.notesArea}>
        <textarea ref={(textarea) => {_note = textarea;}}/>
      </div>
      <button type='submit' onClick={()=> handleSubmitNotes(_note, firebaseId)}>Submit Notes</button>
    </div>
      <div className={styles.bottomLogo}></div>
    </div>
  );
}
