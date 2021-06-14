import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYEMENT,
  CART_SAVE_SHIPPING,
} from "../constants/cartConstants";

function cartReducer(state = { cartItems: [],shipping:{},payment:{} }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
    //verifier si l'objet exsit dans la carte
      const item = action.payload; 
      //product: data._id,
      const existproduct = state.cartItems.find((x) => x.productId === item.productId);
      if (existproduct) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existproduct.productId ? item : x
          ),
        };
      }
      return {
        ...state,
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
