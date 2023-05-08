"use client";

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import sizes from '../Components/Common/sizes.json' assert {type:"json"};
import categories from '../Components/Common/categories.json' assert {type:"json"};
import {Category, Price} from '../../typings';
import Product from '../Components/ProductComponent/Product';
import { Item } from '../../typings';
import Loader from '../Components/LoaderComponent/LoaderComponent';
import Filter from '../Components/FilterComponent/filter';
import { type } from 'os';

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
const prices :Price[] = [
  {id:'1',price:'₪ 260',name:'Under '},
{id:'2',price:'₪ 260 - ₪ 520',name:''},
{id:'3',price:'₪ 520 - ₪ 710',name:''},
{id:'4',price:`₪ 710`,name:'Over '}];
function page() {
  const searchParams = useSearchParams();
  const [products,setProducts] = useState<Item[]>([]);
  const [selectedCategory,setCategory] = useState<string>('');
  const [selectedPrice,setPrice] = useState<string>('');
  const [selectedSize,setSize] = useState<string>('');
  const [y, setY] = useState(0);
  const [isloading,setLoading] = useState<boolean>(true);

  const getProducts = useCallback(async(startIndex:number) =>{
    try{
      const gender = searchParams.get('gender');
      console.log(selectedCategory);
      console.log(selectedPrice);
      const url = `http://localhost:3000/api/products?gender=${gender}${selectedCategory.length> 0 ? `&category=${selectedCategory}`:''}${selectedPrice.length> 0 ? `&price=${selectedPrice}`:''}${selectedSize.length> 0 ? `&size=${selectedSize}`:''}&startIndex=${startIndex}`;
      console.log(url);
    const response =await fetch(url);
    const productsJson = await response.json();
    return productsJson.products;
    } catch(ex){
      throw new Error('FAILED');
    }
  },[selectedCategory,selectedPrice,selectedSize])

  useEffect(()=>{
    (async()=>{
      window.scrollTo(0,0);
     const products : Item[] = await getProducts(0);
     setProducts(products);
     setLoading(false);
    })()
  },[selectedCategory,selectedPrice,selectedSize]);
  const updateLoading = useCallback((value:boolean)=>{
    setLoading(value);
  },[])
  const updateCategory = useCallback(async(id:string)=>{
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
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight-350;
      console.log(isloading);
      if(bottom && !isloading){
        updateLoading(true);
        const newproducts : Item[] = await getProducts(products.length);
        console.log(newproducts);
        updateLoading(false);
        setProducts([...products,...newproducts]);
      }
    }
    setY(window.scrollY);
  },[y,isloading,getProducts,products]);
  
  
  useEffect(() => {
    console.log('run')
    window.addEventListener("scroll",handleNavigation);
  
    return () => { // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll",handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div>
    <section className={styles.pageContainer}>
      <div className={styles.filters}>
        <div className={styles.filtersContainer}>
        <div className={styles.categories}>
        {categories.categories.map((category)=>(
            <Filter key={category.name} id={category.name} name={category.name} isSelectedItem={selectedCategory} setSelected={updateCategory} />
          ))}
        </div>
        <p>Shop By Price</p>
        <div className={styles.prices}>
          {prices.map((price)=>(
            <Filter key={price.id} id={price.id} name={price.name + price.price} isCheckBox isSelectedItem={selectedPrice} setSelected={updatePrice} />
          ))}
        </div>
        <p>Size</p>
         <div className={styles.sizes}>
            {sizes.sizes.map((size)=>(
              <Filter key={size} id={size} name={size} isChooseItem isSelectedItem={selectedSize} setSelected={updateSize} />
            ))}
          </div>

        </div>
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

