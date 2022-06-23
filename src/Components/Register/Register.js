import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css';

const Register = () => {
    const [regUser, setRegUser] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        error:""
    });
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleChange=e=>{
        setRegUser({
            ...regUser,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit=e=>{
        const {email, password} = regUser;
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    };
    return (
        <div className='form-container'>
            {user && (
                <Navigate to="/" replace={true} />
             )}
            <div>
                <h2 className='form-title'>Register Here</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id='email' placeholder='Type your valid email' onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id='password' placeholder='Type your Password' onChange={handleChange} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" name="confirmPassword" id='confirmPassword' onChange={handleChange} placeholder='Type your Password Again' required />
                    </div>
                    <input 
                        disabled={(regUser.confirmPassword !== regUser.password) || (!regUser.email || !regUser.password)} 
                        type="submit" 
                        value="Register" 
                        className='form-submit'
                    />
                </form>
                <p className='form-link-text'>Already Have Account? <Link to="/login">Login Here</Link></p>
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

export default Register;