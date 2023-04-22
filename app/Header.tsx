import React from 'react'
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <nav className={styles.header}>
        <Link href="/sale" ><Image src="/icons/Logo_NIKE.svg" height={80} width={80} alt={''} /></Link>
        <div>
            <Link href="/new"  className={styles.link}>New & Featured</Link>
            <Link href="/men" className={styles.link}>Men</Link>
            <Link href="/women" className={styles.link}>Women</Link>
            <Link href="/sale" className={styles.link}>Sale</Link>
        </div>
        <div className={styles.icons}>
            <Link href="/sale" className={styles.icon}><Image src="/icons/favorite.svg" height={24} width={24} alt={''} /></Link>
            <Link href="/sale" className={styles.icon}><Image src="/icons/bag.svg" height={24} width={24} alt={''} /></Link>
        </div>
    </nav>
  )
}

export default Header