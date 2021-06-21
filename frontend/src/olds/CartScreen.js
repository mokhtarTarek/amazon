import React, { useEffect } from "react";
import {  Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToCart,removeFromCart} from "../redux/actions/cartActions";


function CartScreen(props) {
  //---------------------CONST-----------------------------

  const cart = useSelector((state) => state.cart);
  //distructuring cart obj
  const { cartItems } = cart;
  const dispatch = useDispatch();
  //get the id from the url
  const productId = props.match.params.id;
  //get the qty from the query string 'qty=3' :if it not exist the qty =1
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

    //----------------------HOOKS---------------------------
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  console.log(Array(5))


//-----------------------EVENTS HANDLERS---------------------
  const removeFromCartHandler = (productId)=>{
    dispatch(removeFromCart(productId));
  }
const checkOutHandler=()=>{
  //REDIRECT USER TO THE SINGIN PAGE
  props.history.push("/signin?redirect=shipping")
}

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="cart">
        {cartItems.length === 0 ? 
          <div>the cart is empty</div>
        : 
          cartItems.map((item) => (
            <li key={item.product}>
              <div className="cart-image">
                <img src={item.image} />
              </div>
              <div className="cart-list">
                <div>
                  <Link to={`/product/${item.product}`} >
                  {item.name}
                  </Link>
                  </div>
                <div>
                  Quantity:
                  {/* NEED TO UPDATE THE QUANTITY IN STOCK FROM THE BACKEND */}
                  <select value={item.qty} onChange={e=>dispatch(addToCart(item.product,e.target.value))} >
                  {
                    //convert number to array
                    [...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))
                  }
                  </select>
                </div>
                <div>
                  <div>Price: {item.price}$</div>
                </div>
                <button className="button" onClick={()=>removeFromCartHandler(item.product)} >Delete</button>
              </div>
              <div className="cart-action">
                <h3>
                  {/* Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                  $ {cartItems.reduce((a, c) => a + c.qty * c.price, 0)} */}
                  Sub-Total: {item.qty} items : $ {item.qty * item.price}
                </h3>
                <button
                  className="button primary"
                  disabled={cartItems.lenghth === 0}//disabled true or false
                  onClick={checkOutHandler}
                >
                  Preceed to checkout
                </button>
              </div>
            </li>
          ))
        }
        <div></div>
      </div>
    </div>
  );
}

export default CartScreen;

