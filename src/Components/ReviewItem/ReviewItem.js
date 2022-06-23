import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {_id, name, img, price, shipping, quantity} = props.product;
    return (
        <>
            <div className='reveiw-item'>
                <div className='item-details'>
                    <img src={img} alt="" />
                    <div>
                        <h4>{name.length ? name.slice(0,20)+"..." : name}</h4>
                        <p><small>price: ${price}</small></p>
                        <p><small>Shipping Charge: ${shipping}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                </div>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} onClick={()=>props.deleteHandler(_id)} />
            </div>
        </>
    );
};

export default ReviewItem;