import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './LinkIcon.module.css';
interface Icon{
    href:string;
    imgUrl:string;
}
function LinkIcon({href,imgUrl}:Icon) {
  return (
    <Link href={href}><Image src={imgUrl} className={styles.icon} width={30} height={30} alt=''/></Link>
  )
}

export default LinkIcon;