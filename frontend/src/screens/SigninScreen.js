import React, {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { signin } from '../redux/actions/userActions';

function SigninScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search?
    props.location.search.split("=")[1]:"/"

    const userSignIn = useSelector(state=>state.userSignIn)
    const {userInfos,loading,error} = userSignIn
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfos){
            props.history.push(redirect)
        }
        return () => {
            //
        }
    }, [props.history,redirect,userInfos])

    const submitHandler = e=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }

    return <div>
            <form className="form" 
            onSubmit= {submitHandler} >
            
                <div>
                    <h2>Sign-In</h2>
                </div>

                <div>  
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant='danger'  > {error} </MessageBox>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email"
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    id="password"
                    onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label/>
                    <button type="submit" 
                    className="primary"
                   
                    >
                    Signin</button>
                </div>
                <div>
                    <label/>
                    <div>
                    New to amazona?{' '}
                    <Link to={`/register?redirect=${redirect}`}>
                    Create your amazona account
                    </Link>
                    </div>
                </div>
            </form>
            
        </div>
        
    
}

export default SigninScreen
