"use client";

import React, { useEffect, useState } from 'react'
import styles from './page.module.css';
import Product from '../Components/ProductComponent/Product';
import { Item } from '../../typings';
const getProducts = async() =>{
  try{
  const response =await fetch('http://localhost:3000/api/products?gender=male');
  const products = await response.json();
  console.log(products);
  return products.products;
  } catch(ex){
    throw new Error('FAILED');
  }
}
function page() {
  const [products,setProducts] = useState<Item[]>([]);
  useEffect(()=>{
    (async()=>{
     const products : Item[] = await getProducts();
     setProducts(products);
    })()
  },[]);
  console.log(products);
  return (
    <section className={styles.pageContainer}>
      <div className={styles.filters}>
        <h3>dsadad</h3>
      </div>
      <div className={styles.products}>
        {products.map((item)=>(
          <Product id={item._id} url={item.mainImageUrl} productUrl='/' description={item.description} name={item.name} price={item.price}/>
        ))}
      </div>

    </section>
  )
}

export default page;