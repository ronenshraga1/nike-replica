import mongoose from "mongoose";
const connectMongo = async () => {
  console.log(mongoose.connection.readyState);
  if(mongoose.connection.readyState >= 1){
    console.log('connect');
    return
  }
  console.log('connect2');
  mongoose.set("strictQuery",false);
  mongoose.connect(process.env.MONGODB_URI ||'');
};

export default connectMongo;
