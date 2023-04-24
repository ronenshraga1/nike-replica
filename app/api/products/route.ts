import { NextResponse } from 'next/server';
import Product from '../models/productModel';
import connectMongo from '../DAL/ConnectDb';
export async function GET(request: Request,response:NextResponse) {
  try{
    connectMongo();
    const { searchParams } = new URL(request.url);
    const gender = searchParams.get('gender');
    const products = await Product.find({gender},{name:1,description:1,mainImageUrl:1,price:1});
    return NextResponse.json({ products })
  }catch(ex){
    console.log(ex);
    return NextResponse.json({ex},{status:500})

  }

  }
  