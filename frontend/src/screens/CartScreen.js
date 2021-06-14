import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from '../redux/actions/cartActions'

function CartScreen(props) {
    const productId = props.match.params.id
    const qty = props.location.search
        ?Number(props.location.search.split('=')[1])
        :1
    //const state = useSelector(state => state.state)(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addToCart(productId,qty))
      
    }, [dispatch,productId,qty])

    return (
        <div>
            <h1>CartScreen</h1>
            <p>
                {productId}<br/>
                {qty}
            </p>
        </div>
    )
}

export default CartScreen
