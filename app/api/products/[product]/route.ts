import { NextResponse } from "next/server";
import connectMongo from "../../DAL/ConnectDb";
import mongoose from "mongoose";
import Product from "../../models/productModel";
type RouteParams = {
    product:string;
}
export async function GET(request: Request, context: { params : RouteParams }) {
    try{
    connectMongo(); // {gender:0,name:0,category:0,price:0}
    const id = new mongoose.Types.ObjectId(context.params.product);
    const product:any = await Product.aggregate([{'$match':{_id:id}},
    {
        '$unwind': "$stock",
    },
    {'$group': {
        '_id': "$stock.size",
        'name':{'$first':'$name'},
        'affiliated_images':{'$first':'$affiliated_images'},
        'mainImageUrl':{'$first':'$mainImageUrl'}
      },},  {'$project': { size:'$_id',
      affiliated_images:'$affiliated_images',mainImageUrl:'$mainImageUrl' } },
]);
    return new Response(product);
    } catch(ex){
        console.log(ex);
        return new Response('failed to load try again later',{status:500});
    }
  }
  