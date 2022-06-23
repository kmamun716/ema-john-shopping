import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../Data/utilities/fakedb';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const deleteHandler = id => {
        const rest = cart.filter(pd=>pd._id !== id);
        setCart(rest);
        removeFromDb(id);
    };
    return (
        <div className='shop-container'>
            <div className="review-items-container" style={{marginTop: "50px"}}>
               {
                  cart.length ? cart.map(pd=><ReviewItem key={pd._id} product={pd} deleteHandler={deleteHandler}/>) : <h3 style={{textAlign: "center"}}>Cart is Empty! or waiting for net response</h3>
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><button onClick={()=>navigate("/shipment")}>Proceed Checkout</button> </Cart>
            </div>
    </div>
    );
};

export default Orders;