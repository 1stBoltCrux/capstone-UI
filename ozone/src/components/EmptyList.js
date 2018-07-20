import React from 'react';
import styles from './emptylist.css'

export default function EmptyList(){
  return(
    <div className={styles.emptyListWrapper}>
      <div className={styles.emptyListMessage}>
        <p>There are currently no climbing routes in your list.</p>
      </div>

    </div>
  )
}
