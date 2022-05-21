import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order Summery:</h4>
            cart item: {cart.length}
        </div>
    );
};

export default Cart;