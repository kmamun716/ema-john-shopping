import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Data/images/Logo.svg';
import auth from '../../../firebase.init';
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='header'>
           <img src={logo} alt="" /> 
           <div className='nav-link'>
               <Link to="/">Shop</Link>
               <Link to="/orders">Orders</Link>
               <Link to="/inventory">Inventory</Link>
               <Link to="/about">About</Link>
               {
                   user?<button to="/" onClick={()=>signOut(auth)}>Logout</button> : <Link to="/login">Login</Link>
               }
           </div>
        </nav>
    );
};

export default Header;