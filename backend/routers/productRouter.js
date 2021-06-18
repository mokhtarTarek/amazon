import express from "express";
import expressAsyncHandler from 'express-async-handler'

//import {  isAdmin, isAuth } from "../util";
import Product from "../models/productModel.js";
import data from "../data.js";

const ProductRouter = express.Router();
   
ProductRouter.get("/",expressAsyncHandler(async(req,res)=>{
  const products = await Product.find({});
  res.send(products);
}))

ProductRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
  //await Product.remove({})
  const createdProducts = await Product.insertMany(data.products);
  res.send(createdProducts);
}))


ProductRouter.get("/:id",expressAsyncHandler(async(req,res)=>{
 const product = await Product.findById(req.params.id)
 if(product){
   res.send(product);
 }else{
   res.status(404).send({message:'product not found'})
 }
}))


// ProductRouter.post('/',isAuth,isAdmin,async(req,res)=>{

//   const product = new Product({
//     name: req.body.name,
//     price: req.body.price,
//     image: req.body.image,
//     brand: req.body.brand,
//     category: req.body.category,
//     countInStock: req.body.countInStock,
//     description: req.body.description,
//     rating: req.body.rating,
//     numReviews: req.body.numReviews,
//   })
  
//   const newProduct = await product.save();
//   if(newProduct){
//     return res.status(201).send({message:'New product created',data:newProduct})
//   }
//   return res.status(500).send({message:'error in creating product'})
// })

// ProductRouter.put(`/:id`,isAuth,isAdmin,async(req,res)=>{

//   const productId = req.params.id
//   // const product = await Product.findOne({_id: productId});
//   const product = await Product.findById(productId);
  
//   if(product){
//     product.name= req.body.name;
//     product.price= req.body.price;
//     product.image= req.body.image;
//     product.brand= req.body.brand;
//     product.category= req.body.category;
//     product.countInStock= req.body.countInStock;
//     product.description= req.body.description;

//     const updatedProduct = await product.save();
//     if(updatedProduct){
//       return res.status(200).send({message:'Product Updated',data:updatedProduct})
//     }
//   }
//   return res.status(500).send({message:'error updating product'})
// })

// ProductRouter.delete('/:id',isAuth,isAdmin, async(req,res)=>{
//   const deletedProduct = Product.findById(req.params.id)
//   if (deletedProduct){
//     await deletedProduct.remove() 
//     res.send({message:'product deleted'})
//   }else
//   res.send('error in deletion')
// })


export default ProductRouter;
