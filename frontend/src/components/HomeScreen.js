import  React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
//import data from '../data'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productAction";
function HomeScreen (props){

  //const[products,setProducts] = useState([]);
  //store.state{productList:{products:[],loading:false,error:''}}
  const productList = useSelector(state =>state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch()
  useEffect(()=>{ 
    // const fetchData = async () => {
    // const {data} = await axios.get("/api/products");
    // setProducts(data)
    // }
    // fetchData();

    dispatch(listProducts())

    // return ()=>{

    // }
  },[])
    return(
      loading?<div>Loading...</div>:
      error?<div>{error}</div>:
        <div>
            <ul className="products">
            { 
            products.map((product) => 
              <li key={product._id}>
                <div className="product">
                <Link to={"/products/"+ product._id} >
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                  </Link>

                  <div className="product-name">
                      <Link to={"/products/"+ product._id} >{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">{product.rating} Starts ({product.numReviews})</div>
                </div>
              </li>
            )
            }
          </ul>
        </div>
    )
}
export default HomeScreen;