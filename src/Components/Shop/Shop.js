import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb, getStoredCart} from "../../Data/utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("products.json")
            .then(res=>res.json())
            .then(result=>setProducts(result))
    },[]);
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
           const product =products && products.find(product=>product.id===id);
           if(product){
            //    const qty = storedCart[id];
            //    product.quantity = qty;
               savedCart.push(product)
           }
        };
        setCart(savedCart);
    },[products, cart]);

    const addProductToCart=selectedProduct=>{
        let newCart = [];
        const exists = cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product=>product.id!==selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                                            key={product.id} 
                                            addProductToCart={addProductToCart} 
                                            product={product} 
                                        />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;