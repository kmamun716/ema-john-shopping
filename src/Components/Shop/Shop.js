import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from "../../Data/utilities/fakedb";
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {    
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useCart();
    //pagination
    const [pageCount, setPageCount]=useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(()=>{
        fetch("http://localhost:4000/productCount")
        .then(res=>res.json())
        .then(data=>{
            const count = data.count;
            const pages = Math.ceil(count/15);
            setPageCount(pages)
        })
    },[]);

    useEffect(()=>{
        fetch(`http://localhost:4000/products?page=${page}&size=${size}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[page, size]);

    const addProductToCart=selectedProduct=>{
        let newCart = [];
        const exists = cart.find(product=>product._id===selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product=>product._id!==selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                   !products.length? <p className='loading'>Loading........</p> : products.map(product=><Product 
                                            key={product._id} 
                                            addProductToCart={addProductToCart} 
                                            product={product} 
                                        />)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number=><button key={number} className={page===number? "selected": ""} onClick={()=>setPage(number)}>{number + 1}</button>)
                    }
                    <select defaultValue={10} onChange={(e)=>setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} >  <Link to='/orders'><button>Review Order</button></Link> </Cart>
            </div>
        </div>
    );
};

export default Shop;