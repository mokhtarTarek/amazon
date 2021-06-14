import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function HomeScreen(props) {
  //store.state{productList:{products:[],loading:false,error:''}}
  const productList = useSelector((state) => state.productList);
  const {  loading, error,products } = productList;
  const dispatch = useDispatch();

<<<<<<< HEAD
    dispatch(listProducts());
    
    // return ()=>{
=======
  useEffect(() => {
    dispatch(listProducts())
    
  }, [dispatch]);
>>>>>>> 5a8dc7ca8463c3c184077ceb6d9dde38efcd0bca

  return (
    <div>
      {loading ? (
        <LoadingBox/>
      ) : error ? (
        <MessageBox variant="danger" >{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
export default HomeScreen;
