export type StockItem ={
    product_id:Number;
    size:Number
};
export type Category ={
    _id:string;
    name:string;
}
export type Price ={
    id:string;// the id detriemnts which query should be in the backend. example: id 1 means under 260
    name:string;
    price:string;
}
export interface Item{
    _id:string;
    description:string;
    name:string;
    mainImageUrl:string;
    price:number;
    createDate:Date;
    isNew?:boolean;
};