import mongoose from "mongoose";
const connectMongo = async () => {
  if(mongoose.connection.readyState >= 1){
    console.log('connect');
    return
  }
  console.log('connect2');
  mongoose.connect(process.env.MONGODB_URI ||'');
};

export default connectMongo;
