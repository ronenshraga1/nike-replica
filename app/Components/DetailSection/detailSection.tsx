import { Item } from '@/typings'
import React from 'react'
type PageProps ={
    productDetails:Item;
    size:Array<any>;
}
function DetailSection({productDetails,size}:PageProps) {
  return (
    <div>
      <h2>{productDetails.name}</h2>
      <h5>{productDetails.category}</h5>
      <br></br>
      <h5>{productDetails.price}</h5>
    </div>
  )
}

export default DetailSection;