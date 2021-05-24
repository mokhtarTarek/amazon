import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import data from "../data";
import { detailsProduct } from "../redux/actions/productAction";

function ProductScreen(props) {
  console.log(props)
  //console.log(props.match.params.id)
  //const product = data.products.find(x=>x._id===props.match.params.id)
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const qtyHandler = (e) => {
    setQty(e.target.value);
  };
  const handleAddToCart = () => {
    //redirect to onother URL
    //the query string : qty=${qty}
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };
  //console.log(Array([...Array(6).keys()]))

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div> {error} </div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-infos">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} Reviews)
              </li>
              <li>
                <b>Price: ${product.price}</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>price: {product.price}</li>
              <li>status: {product.status}</li>
              <li>
                Quantity:
                {product.countInStock > 0 ? " in Stock" : " Out of stock"}
              </li>
              <li>
                <select value={qty} onChange={qtyHandler}>
                  {
                    //convert number to array
                    [...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))
                  }
                </select>
              </li>

              <li>
                {product.countInStock ?
                  <button className="button" onClick={handleAddToCart}>
                    Add to Cart
                  </button>:''
                }
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
