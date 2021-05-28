import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'

dotenv.config()
const mongodbUrl = process.env.MONGODB_URL
console.log(mongodbUrl)
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })



const app = express();

app.use('/api/users',userRoute)

app.get("/api/products/:id",(req,res)=>{
    const productId = req.params.id
    const product = data.products.find(x=>x._id===productId)
    if (product) {
        res.send(product)
    } else {
        res.status(404)
        .send({msg:'product not found'})
    }
    
})
app.get("/api/products",(req,res)=>{
    res.send(data.products);
})
app.listen(5000,()=>console.log("server started at http://localhost:5000"))
