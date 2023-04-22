import Link from 'next/link'
import React from 'react'
import styles from './page.module.css';

function Shopbutton() {
  return (
    <button className={styles.button}><Link href="/new">Shop</Link></button>
  )
}

export default Shopbutton;