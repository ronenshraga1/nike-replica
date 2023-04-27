import { NextResponse } from 'next/server';
import Product from '../models/productModel';
import connectMongo from '../DAL/ConnectDb';
import { Item } from '@/typings';
export async function GET(request: Request,response:NextResponse) {
  try{
    connectMongo();
    const { searchParams } = new URL(request.url);
    const gender = searchParams.get('gender');
    const startIndex =  parseInt(searchParams.get('startIndex') || '0');
    const products = await Product.find({gender},{name:1,description:1,mainImageUrl:1,price:1,createDate:1}).limit(10).skip(startIndex);
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