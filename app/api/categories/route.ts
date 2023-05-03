import { NextResponse } from 'next/server';
import CategoryModel from '../models/CategoryModel';
import connectMongo from '../DAL/ConnectDb';
export async function GET(request: Request) {
    try{
    connectMongo();
    const categories = await CategoryModel.find({},{name:1,_id:0});
    return NextResponse.json({categories});
    } catch(ex){
        console.log(ex);
        return NextResponse.json({message:'failed'},{status:500})
    }
}
