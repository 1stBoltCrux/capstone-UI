import React from 'react';
import ReactDom from 'react-dom';
import styles from './notes.css';

export default function Notes(){
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
    </div>
      <div className={styles.bottomLogo}></div>
    </div>
  );
}
