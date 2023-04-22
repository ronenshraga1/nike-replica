import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './Product.module.css';
interface PageProps{
        id:number;
        name:string;
        description:string;
        url:string;
        price:number;
};

function Product({url,id,description,price,name}:PageProps) {
  return (
    <div className={styles.product}>
        <div className={styles.imageContainer}>
            <Image src={url} alt='' fill/>
        </div>
        <section className={styles.productData}>
            <div>
                <p>{name}</p>
                <p className={styles.description}>{description}</p>
            </div>
                <p>&#8362;{price}</p>
        </section>
    </div>
  )
}

export default Product;