"use client";

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import styles from './page.module.css';
import Product from '../Components/ProductComponent/Product';
import { Item } from '../../typings';
import Loader from '../Components/LoaderComponent/LoaderComponent';
import Filter from '../Components/FilterComponent/filter';
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
  const [selectedCategory,setCategory] = useState<string>('');
  const [selectedPrice,setPrice] = useState<string>('');
  const [selectedSize,setSize] = useState<string>('');
  const [y, setY] = useState(0);
  const [isloading,setLoading] = useState<boolean>(true);
  useEffect(()=>{
    (async()=>{
     const products : Item[] = await getProducts(0);
     setProducts(products);
     setLoading(false);
    })()
  },[]);

  const updateLoading = useCallback((value:boolean)=>{
    setLoading(value);
  },[])
  const updateCategory = useCallback((id:string)=>{
    console.log(id);
    console.log(selectedCategory);
    if(id !== selectedCategory){
      setCategory(id);
    } else{
      setCategory('');
    }
  },[selectedCategory])
  const updatePrice = useCallback((id:string)=>{
    console.log(id);
    console.log(selectedPrice);
    if(id !== selectedPrice){
      setPrice(id);
    } else{
      setPrice('');
    }
  },[selectedPrice])
  const updateSize = useCallback((id:string)=>{
    if(id !== selectedSize){
      setSize(id);
    } else{
      setSize('');
    }
  },[selectedSize])
  const handleNavigation = useCallback(async(e: any)=>{
    if(window.scrollY !==y && window.scrollY+60 !==y  && y+160 !== window.scrollY){
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      console.log(isloading);
      if(bottom && !isloading){
        updateLoading(true);
        const newproducts : Item[] = await getProducts(products.length);
        updateLoading(false);
        setProducts([...products,...newproducts]);
      }
    }
    setY(window.scrollY);
  },[y]);
  
  
  useEffect(() => {
    window.addEventListener("scroll",handleNavigation);
  
    return () => { // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll",handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div>
    <section className={styles.pageContainer}>
      <div className={styles.filters}>
        <Filter id='1' name='pinhas' isCheckBox query='link' currentFetchUrl='' isSelectedItem={selectedPrice} setSelected={updatePrice}/>
        <Filter id='2'name='pinhas' query='link' currentFetchUrl=''isSelectedItem={selectedCategory} setSelected={updateCategory} />
        <Filter id='3' name='pinhas' query='link' currentFetchUrl=''isSelectedItem={selectedCategory} setSelected={updateCategory}/>
        <Filter id='4' name='35' query='link' isChooseItem currentFetchUrl=''isSelectedItem={selectedSize} setSelected={updateSize}/>
      </div>
      <div className={styles.products}>
        <LoadItems products={products} />
      </div>
    </section>
    {isloading? <Loader /> : undefined}

    </div>
  )
}

export default page;

