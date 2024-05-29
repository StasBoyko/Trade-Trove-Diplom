// user.js
import mongoose from "mongoose";

const User = new mongoose.Schema({
  firstname:{type:String,required:true},
  lastname:{type:String,required:true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('User',User)