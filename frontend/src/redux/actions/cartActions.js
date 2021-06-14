import axios from 'axios'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, 
CART_SAVE_SHIPPING,CART_SAVE_PAYEMENT} 
from '../constants/cartConstants'

const addToCart = (productId,qty) =>{
 return async (dispatch,getState)=>{
     try {
        const {data} = await axios.get(`/api/products/${productId}`)
        
        dispatch({
            type: CART_ADD_ITEM,
            payload:{
            productId: data._id,
            name: data.name,
            image: data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
            }
        //const{cart:{cartItems}}=getState()
        //SAVE THE CART ITEMS INTO THE COOKIES
        //Cookie.set('cartItems',JSON.stringify(cartItems))
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))    
        
     } catch (error) {
         
     }
 }
}
const removeFromCart =(productId)=>{
    return (dispatch,getState)=>{
        dispatch({
            type:CART_REMOVE_ITEM,
            payload:productId
        })
        //DISTRUCT STATE {cartItems:[]}
        const{cart:{cartItems}}=getState()
        //SAVE THE CART ITEMS INTO THE COOKIES
        Cookie.set('cartItems',JSON.stringify(cartItems))
    }
}
const saveShipping = (data)=>{
    return (dispatch)=>{
        dispatch({type:CART_SAVE_SHIPPING,payload:data})
    }
}
const savePayment = (data)=>{
    return (dispatch)=>{
        dispatch({type:CART_SAVE_PAYEMENT,payload:data})
    }
}

export  {addToCart,removeFromCart,saveShipping,savePayment};
