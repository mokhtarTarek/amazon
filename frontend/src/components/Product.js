import React from "react";
import Rating from "./Rating";
import {Link} from 'react-router-dom'

function Product({ product }) {
  return (
    <div>
      <div className="card column" key={product._id}>
        <Link to={`/products/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
          <Link to={`/products/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
          <div className="price">${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
