import React from 'react';
import "./Header.css";
import logo from '../../../Data/images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" /> 
           <div className='nav-link'>
               <a href="/shop">Shop</a>
               <a href="/order">Order</a>
               <a href="/inventory">Inventory</a>
               <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Header;