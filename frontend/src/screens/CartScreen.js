import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import MessageBox from "../components/MessageBox";

import { addToCart,deleteFromCart } from "../redux/actions/cartActions";

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeFromCartHandler =(productId)=>{
    dispatch(deleteFromCart(productId))
  }
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.productId}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small" />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.productId}`}> {item.name} </Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div> {item.price} </div>
                  <div>
                      <button onClick={()=>removeFromCartHandler(item.productId)}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartScreen;
