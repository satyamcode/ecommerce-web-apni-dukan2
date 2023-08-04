import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";
import path from 'path';
import {fileURLToPath} from 'url';
// configure env
dotenv.config();
// rest object 
//  database config
connectDB();
const app=express()
 // esmodulefix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const allowedOrigins = ['https://ecommerce-web-apni-dukan2.onrender.com'];


//  middleware

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(express.json()); //we can us body parser also 
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')));

// all routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

// rest api
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get("/",(req,res)=>{
    res.send("<h1> welcome to apki apni dukan</h1>");
});
const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`server Running on ${PORT}`.bgCyan.white);
});
