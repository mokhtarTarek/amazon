import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/productsConstants'
const addToCart = (productId,qty) =>{
 return async (dispatch)=>{
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
        })
     } catch (error) {
         
     }
 }
}
export default addToCart;
