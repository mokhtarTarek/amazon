import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYEMENT,
  CART_SAVE_SHIPPING,
} from "../constants/productsConstants";

function cartReducer(state = { cartItems: [],shipping:{},paymen:{} }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      /*
    check if the item exist in the cartItems if true
    we update the current cartItems
    esle we append the cartItems
    */

      const item = action.payload; //get the item
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, item],
      };
    case CART_REMOVE_ITEM:
      //filter OUT the product
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };

    case CART_SAVE_PAYEMENT:
      return { ...state, payment: action.payload };

    default:
      return state;
  }
}
export { cartReducer };
