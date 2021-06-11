import axios from 'axios'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, 
CART_SAVE_SHIPPING,CART_SAVE_PAYEMENT } 
from '../constants/productsConstants'
const addToCart = (productId,qty) =>{
 return async (dispatch,getState)=>{
     try {
        
        await axios
        .get(`/api/products/${productId}`)
        .then(response=>{
            const data = response.data
            dispatch({
                type: CART_ADD_ITEM,
                payload:{
                product: data._id,
                name: data.name,
                image: data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
                }
            })
            //DISTRUCT STATE {cartItems:[]}
        const{cart:{cartItems}}=getState()
        //SAVE THE CART ITEMS INTO THE COOKIES
        Cookie.set('cartItems',JSON.stringify(cartItems))
            
        })
        
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
