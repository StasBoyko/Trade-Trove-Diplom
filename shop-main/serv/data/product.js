// product.js
import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  userId:{type:String,required:true,unique:false},
  brand:{type:String,required:true,unique:false},
  type:{type:String,required:true,unique:false},
});

export default mongoose.model('Product',Product)