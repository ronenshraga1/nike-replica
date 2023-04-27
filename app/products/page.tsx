"use client";

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import styles from './page.module.css';
import Product from '../Components/ProductComponent/Product';
import { Item } from '../../typings';
const getProducts = async(startIndex:number) =>{
  try{
  const response =await fetch(`http://localhost:3000/api/products?gender=male&startIndex=${startIndex}`);
  const productsJson = await response.json();
  return productsJson.products;
  } catch(ex){
    throw new Error('FAILED');
  }
}

type items ={
  products:Item[]
}
function LoadItems({products}:items){
  return(
    <>
            { products.map((item:Item,index)=>(
          <Product id={item._id} key={item._id} url={item.mainImageUrl} productUrl='/' description={item.description} name={item.name} price={item.price} isNew={item.isNew} isMainPage={false}/>
        ))}
    </>
  )
}
function page() {
  const [products,setProducts] = useState<Item[]>([]);
  const [y, setY] = useState(window.scrollY || 0);
  const [isloading,setLoading] = useState<boolean>(true);
  useEffect(()=>{
    (async()=>{
     const products : Item[] = await getProducts(0);
     setProducts(products);
     setLoading(false);
    })()
  },[]);
  const handleNavigation = useCallback(async(e: any)=>{
    if(window.scrollY !==y){
      console.log(window.scrollY);
      console.log(y);
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight -200;
      console.log(isloading);
      if(bottom && !isloading){
        console.log('call');
        setLoading(true);
        console.log(products);
        const newproducts : Item[] = await getProducts(products.length);
        setLoading(false);
        setProducts([...products,...newproducts]);
      }
    }
    console.log('run');
    setY(window.scrollY);
    
  },[y]);
  
  
  useEffect(() => {
    window.addEventListener("scroll",handleNavigation);
  
    return () => { // return a cleanup function to unregister our function since it's going to run multiple times
      console.log('another');
      window.removeEventListener("scroll",handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <section className={styles.pageContainer}>
      <div className={styles.filters}>
        <h3>dsadad</h3>
      </div>
      <div className={styles.products}>
        <LoadItems products={products} />

      </div>

    </section>
  )
}

export default page;

