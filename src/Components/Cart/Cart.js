import React from 'react';
import './Cart.css';

const Cart = ({cart, children}) => {
    let total = 0;
    let shipping = 0;
    let qty = 0;
    for(const product of cart){
        qty = qty + product.quantity;
        total = total + (product.quantity * product.price);
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summery:</h4>
            <p>Selected items: {qty}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;