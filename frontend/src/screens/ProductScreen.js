import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data";

function ProductScreen(props) {
  const product = data.products.find((p) => p._id === props.match.params.id);
  if (!product) {
    <div>Product not exist</div>;
  }
  return (
    <div>
      <Link to='/'>back to result</Link>
      <div className="row top" >
        <div className="col-2">
          <img className="medium" src={product.image} alt="product" />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1> {product.name} </h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li> Price: ${product.price} </li>
            <li>
              <p>
                Description:
                {product.description}
              </p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body short-card">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                <div className="price"> ${product.price} </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                <div> {
                  product.countInStock>0?<span className='success' >In stock</span>:
                  <span className='error' >unavailable</span>
                } </div>
                </div>
              </li>
              <li>
                <button className='primary block'>
                  Add to Card
                </button>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
