export type StockItem ={
    product_id:Number;
    size:Number
};
export interface Item{
    _id:string;
    description:string;
    name:string;
    mainImageUrl:string;
    price:number;
    createDate:Date;
    isNew?:boolean;
};