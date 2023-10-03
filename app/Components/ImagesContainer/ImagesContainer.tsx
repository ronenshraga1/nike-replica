"use client";
import React, { useState,useCallback } from 'react'
import Product from '../ProductComponent/Product';
import Image from 'next/image';
import styles from './ImagesContainer.module.css';
import SwitchImage from '../SwitchImage/SwitchImage';
type PageProps ={
    affiliated_images:Array<string>;
} 
function ImagesContainer({affiliated_images}:PageProps) {
  const [selected,setSelected] = useState<number>(0);
  console.log('cccc');
  console.log(affiliated_images);

  const changeImage = useCallback((imageIndex:number)=>{
    if(imageIndex<affiliated_images.length && imageIndex>=0){
        setSelected(imageIndex)
    } else{
        setSelected(0);
    }
  },[selected])
  return (
    <div className={styles.container}>
                <div className={styles.browseImages}>
            {affiliated_images.map((image,index)=>(
                <Image key={index} height={60} width={60} src={image} alt='' />
            ))}
        </div>

        <div className={styles.loadedImages}>
            {affiliated_images.map((image,index)=>(
                <><Image key={index} className={`${styles['bigImage']} ${selected === index ? styles['selected'] : undefined}`} fill src={image} alt='' />
                <SwitchImage changeImage={changeImage} selected={selected} imagesNumber={affiliated_images.length-1} /></>
            ))}
        </div>
    </div>
  )
}

export default ImagesContainer