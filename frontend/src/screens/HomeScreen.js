import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Product from "../components/Product";



//import data from '../data'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productAction";
function HomeScreen(props) {
  //const[products,setProducts] = useState([]);
  //store.state{productList:{products:[],loading:false,error:''}}
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchData = async () => {
    // const {data} = await axios.get("/api/products");
    // setProducts(data)
    // }
    // fetchData();

    dispatch(listProducts());
    
    // return ()=>{

    // }
  }, []);
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
export default HomeScreen;
