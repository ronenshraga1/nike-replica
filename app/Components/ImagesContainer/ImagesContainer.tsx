"use client";
import React, { useState } from 'react'
import Product from '../ProductComponent/Product';
import Image from 'next/image';
import styles from './ImagesContainer.module.css';
import SwitchImage from '../SwitchImage/SwitchImage';
type PageProps ={
    affiliated_images:Array<string>;
} 
function ImagesContainer({affiliated_images}:PageProps) {
  const [selected,setSelected] = useState<number>(0);
  return (
    <div className={styles.container}>
        <div className={styles.loadedImages}>
            {affiliated_images.map((image,index)=>(
                <><Image key={index} className={`${styles['bigImage']} ${selected === index ? styles['selected'] : undefined}`} fill src={image} alt='' /><SwitchImage /></>
            ))}
        </div>
        <div className={styles.browseImages}>
            {affiliated_images.map((image)=>(
                <Image height={60} width={60} src={image} alt='' />
            ))}
        </div>
    </div>
  )
}

export default ImagesContainer