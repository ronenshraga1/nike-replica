import Image from 'next/image';
import React from 'react';
import styles from './Product.module.css';
import Link from 'next/link';
interface PageProps{
        id?:string;
        name?:string;
        description?:string;
        url:string;
        price?:number;
        productUrl?:string;
        isMainPage?:boolean;
        isNew?:boolean;
        canBrowse?:boolean;
};

function Product({url,id,description,price,name,productUrl ="/",isMainPage,isNew,canBrowse}:PageProps) {
  if(canBrowse){
    return(
      <div className={styles.browseImage}>
        <Image src={url} alt='' fill/>
      </div>
    )
  }
  return (
    <div className={styles.product}>
      <Link href={productUrl}>
        <div className={isMainPage ? styles.imageContainer:styles.imageProduct}>
            <Image src={url} alt='' fill/>
        </div>
        <section className={styles.productData}>
            <div>
                {isNew ? <p className={styles.special}>Just In</p>:undefined}
                <p>{name}</p>
                <p className={styles.description}>{description}</p>
            </div>
                <p>&#8362;{price}</p>
        </section>
        </Link>
    </div>
  )
}

export default Product;