import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [logUser, setLogUser] = useState({
        email:"",
        password:""
    });
    const navigate=useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
    const handleChange=e=>{
        setLogUser({
            ...logUser,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit=e=>{
        const {email, password} = logUser;
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleChange} id='email' placeholder='Type your valid email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={handleChange} id='password' placeholder='Type your Password' required/>
                    </div>
                    <input type="submit" value="Login" className='form-submit'/>
                </form>
                <p className='form-link-text'>Not Have any Account? <Link to="/register">Register Here</Link></p>
                <div className='line-container'>
                    <div className='line'></div>
                        <p>or</p>
                    <div className='line'></div>
                </div>
                <button className='login-with-google'><img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="Login With Google"/> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;