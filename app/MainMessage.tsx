import React from 'react'
import styles from './page.module.css'
import Shopbutton from './button'

function MainMessage() {
  return (
    <div className={styles.mainMessage}>
        <p className={styles.smallTitle}>New in: Nike Pegasus 40</p>
        <h1 className={styles.bigTitle}>A SPRINGY RIDE FOR EVERY RUN.</h1>
        <p className={styles.mediumTitle}>Back in its fourth decade, the Pegasus 40 is springier than ever with a more cushioned, personalized fit.</p>
        <Shopbutton />
    </div>
  )
}

export default MainMessage