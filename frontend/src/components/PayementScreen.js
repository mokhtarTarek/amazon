import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { savePayment } from '../redux/actions/cartActions';
import CheckoutSteps from './CkeckoutSteps';

function PaymentScreen
(props) {
    const [payementMethod,setPayementMethod]=useState('')
    

    const dispatch = useDispatch();

    const submitHandler = e=>{
        e.preventDefault();
        dispatch(savePayment(payementMethod));
        props.history.push('placeorder')
    }

     
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="form" >
            <form onSubmit= {submitHandler} >
            <ul className= "form-container" >
                <li>
                    <h2>Payment</h2>
                </li>
                
                <li>
                <div>
                <input 
                    type="radio" 
                    name="payementMethod"
                    id="payementMethod"
                    value="paypal"
                    onChange={e=>setPayementMethod(e.target.value)}
                    />
                    <label htmlFor="address">
                        Paypal</label>
                </div>
                    
                </li>
                
                
                <li>
                    <button type="submit" 
                    className="button primary" >Continue</button>
                </li>
                
                

            </ul>
            </form>
            
        </div>
    </div>
    
}

export default PaymentScreen

