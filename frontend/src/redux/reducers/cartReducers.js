import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  
  CART_SAVE_PAYEMENT_METHOD,
  
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

function cartReducer(state = { cartItems: []}, action) {
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
        ...state,
        cartItems: state.cartItems.filter((x) => x.productId !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { 
        ...state,
         shippingAddress: action.payload };
    case CART_SAVE_PAYEMENT_METHOD:
      return { 
        ...state,
         paymentMethod: action.payload };

    default:
      return state;
  }
}
export { cartReducer };
