import { StockItem } from '@/typings';
import { Schema, model, models } from 'mongoose';
const productSchema = new Schema({
    name:String,
    gender:String,
    description:String,
    mainImageUrl:String,
    price:Number,
    affiliated_images:{
        type:Array<String>,
        required:true,
    },
    stock:{
        type:Array<StockItem>,
        required:true,
    },
    itemID:Number,
    createDate:Date,
    isNew:Boolean,

})
const Product = models.Product ||model('items',productSchema);
export default Product;