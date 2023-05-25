'use client';
import React,{useEffect, useState} from 'react';
import styles from './page.module.css';
// import ImagesContainer from '@/app/Components/ImagesContainer/ImagesContainer';
type PageProps ={
    params:{
        ProductID:string;
    }
}

async function ProdutPage({params:{ProductID}}:PageProps) {
  const [pageData,setData] = useState<any>([{affiliated_images:[]}]);
    console.log(ProductID);
    useEffect(()=>{
      (async()=>{
        //const reponse = await fetch(`http://localhost:3000/api/products/${ProductID}`)
        //const jsonResponse =await reponse.json();
        console.log(ProductID);
      })()
    },[]);
  
  return (
    <div className={styles.pageContainer}>
        <div className={styles.imagesContainer}>
          dsadad
        </div>
        <div className={styles.productData}></div>
    </div>
  )
}

export default ProdutPage