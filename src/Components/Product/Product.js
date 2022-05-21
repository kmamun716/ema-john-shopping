import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, addProductToCart}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratigns: {ratings} stars</small></p>
            </div>
            <p className='product-btn' onClick={()=>addProductToCart(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}/></p>
        </div>
    );
};

export default Product;