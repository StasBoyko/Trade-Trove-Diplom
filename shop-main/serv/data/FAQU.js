// user.js
import mongoose from "mongoose";

const Faqu = new mongoose.Schema({
  Question:{type:String,required:true},
  Ansver:{type:String,required:true},
});

export default mongoose.model('Faqu',Faqu)