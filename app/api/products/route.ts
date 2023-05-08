import { NextResponse } from 'next/server';
import Product from '../models/productModel';
import connectMongo from '../DAL/ConnectDb';
import { Item, Stock } from '@/typings';
type Filter ={
  gender?:string;
  price?:object;
  'stock.size'?:number;
  category?:string;
}
export async function GET(request: Request,response:NextResponse) {
  try{
    connectMongo();
    const { searchParams } = new URL(request.url);
    const gender = searchParams.get('gender');
    const category = searchParams.get('category');
    const priceType = parseInt(searchParams.get('price')|| '0');
    const size = parseInt(searchParams.get('size')|| '0');
    const startIndex =  parseInt(searchParams.get('startIndex') || '0');
    const filter: Filter = {};
    if(gender)filter.gender = gender;
    if(category)filter.category = category;
    if(size)filter['stock.size']= size;
    if(priceType)filter.price = priceQuery(priceType);
    const products = await Product.find(filter,{name:1,description:1,mainImageUrl:1,price:1,createDate:1}).limit(10).skip(startIndex);
    let newproducts = products.map((item)=>item);
    newproducts.forEach(function(item){
      if(item.createDate !== undefined){
        const result = isProductNew(item.createDate);
        item.isNew = result;
      } else{
        item.isNew = false;
      }
    });
    return NextResponse.json({ products })
  }catch(ex){
    console.log(ex);
    return NextResponse.json({ex},{status:500})

  }

  }
  function isProductNew(date:Date){
    const now = new Date();
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
    const timeDiffInMs = now.getTime() - date.getTime();
    return timeDiffInMs <= thirtyDaysInMs;
  }
  function priceQuery(id:number){
    switch(id){// each id specifies a diffrent calculation for price
      case 1: return {'$lt': 260};
      case 2: return {'$gt': 260,'$lt':520};
      case 3: return{'$gt': 520,'$lt':710};
      case 4: return {'$gt': 720};
    }
  }