import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addToCart from "../redux/actions/cartActions";
function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  //distructuring
  const { cartItems } = cart;
  const dispatch = useDispatch();
  //get the id from the url
  const productId = props.match.params.id;
  //get the qty from the query string 'qty=3' :if it not exist the qty =1
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="cart">
        {cartItems.lenghth === 0 ? (
          <h3>the cart is empty</h3>
        ) : (
          cartItems.map((item) => (
            <li key={item.product}>
              <div className="cart-image">
                <img src={item.image} />
              </div>
              <div className="cart-list">
                <div>{item.name}</div>
                <div>
                  Quantity:
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <div>Price: {item.price}$</div>
                </div>
              </div>
              <div className="cart-action">
                <h3>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :
                  $ {cartItems.reduce((a, c) => a + c.qty * c.price, 0)}
                </h3>
                <button
                  className="button primary"
                  disabled={cartItems.lenghth === 0}
                >
                  Preceed to checkout
                </button>
              </div>
            </li>
          ))
        )}
        <div></div>
      </div>
    </div>
  );
}

export default CartScreen;

