import express from "express";
// import data from "./data.js";
// import dotenv from 'dotenv';
// import config from './config';
import mongoose from "mongoose";
// import bodyParser from 'body-parser'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

// dotenv.config()

// const mongodbUrl = config.MONGODB_URL
// //console.log(mongodbUrl)
mongoose.connect(
    process.env.MONGODB_URL || "mongodb+srv://amazona2020:Spartacus1986@cluster0.j4qp7.mongodb.net/amazon?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const app = express();
// app.use(bodyParser.json())

app.use('/api/users',userRouter)
app.use('/api/products',productRouter)

//error catcher middleware for all routers wrapped in  expressAssyncHandler
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})

//-----------------------STATIC API------------------------

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((p) => p._id === productId);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "product not found" });
//   }
// });
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

// app.get("/", (req, res) => {
//     res.send('server is ready');
//   });

//---------------------------------------------------------
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
