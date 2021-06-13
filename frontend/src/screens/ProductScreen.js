import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { detailsProduct } from "../redux/actions/productAction";

function ProductScreen(props) {
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  console.log(product);

  const addToCartHandler = ()=>{
    props.history.push(`/cart/${productId}?qty=${qty}`)
  }
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt="product" />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1> {product.name} </h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
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
              <div className="static-card">
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
                      <div>
                        {" "}
                        {product.countInStock > 0 ? (
                          <span className="success">In stock</span>
                        ) : (
                          <span className="danger">unavailable</span>
                        )}{" "}
                      </div>
                    </div>
                  </li>
                  <li>
                  {product.countInStock > 0 && (
                    <>
                      <div className="row">
                        <div>Quantity</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (q) => (
                                <option key={q + 1} value={q + 1}>
                                  {q + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                      
                        <button onClick={addToCartHandler}
                         className="primary block">Add to Card</button>
                     
                    </>
                  )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
