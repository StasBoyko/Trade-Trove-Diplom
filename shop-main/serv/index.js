import mongoose from 'mongoose';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import UserRouter from './routers/UserRouter.js';
import ProductRouter from './routers/ProductRouter.js';
import CommentRouter from './routers/CommentRouter.js';
import BasketPostRouter from './routers/BasketPostRouter.js';
import FaquRouter from './routers/FAQURouter.js';
import OrderRouter from './routers/OrderRouter.js'

dotenv.config();
const PORT=process.env.PORT||5000;
const DB_URL=process.env.DB;


const app=express();
// Установка заголовков CORS для разрешения запросов от всех источников
app.use(cors({
    methods: "*" // Разрешение всех HTTP методов
}));

app.use(express.json()) 
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/tradeTrove',UserRouter)
app.use('/tradeTrove',ProductRouter)
app.use('/tradeTrove',CommentRouter)
app.use('/tradeTrove',BasketPostRouter)
app.use('/tradeTrove',FaquRouter)
app.use('/tradeTrove', OrderRouter);

async function StartApp(){
  try{
    await mongoose.connect(DB_URL)
    app.listen(PORT,()=>{console.log("server working")})
    console.log("DB URL ",DB_URL)
}catch(e){
    console.log(e)
    console.log(process.env.DB)
}
}
StartApp()

app.get('/',(req,res)=>{
    res.status(200).json(req.body)

})