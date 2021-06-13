import express from 'express';
import data from './data.js';
// import dotenv from 'dotenv';
// import config from './config';
// import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
// import userRoute from './routes/userRoute'
// import productRoute from './routes/productRoute'

// dotenv.config()

// const mongodbUrl = config.MONGODB_URL
// //console.log(mongodbUrl)
// mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const app = express();
// app.use(bodyParser.json())

// app.use('/api/users',userRoute)
// app.use('/api/products',productRoute)

//-----------------------STATIC API------------------------

app.get("/api/products/:id",(req,res)=>{
    const productId = req.params.id
    const product = data.products.find(p=>p._id===productId)
    if (product) {
        res.send(product)
    } else {
        res.status(404)
        .send({message:'product not found'})
    }
    
})
app.get("/api/products",(req,res)=>{
    res.send(data.products);
})

//---------------------------------------------------------
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server started at http://localhost:${port}`))
