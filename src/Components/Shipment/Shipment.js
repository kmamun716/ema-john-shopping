import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [Shipment, setShipment] = useState({
        name:'',
        email: user?.email,
        address:"",
        mobile:''
    });
    const handleChange=e=>{
        setShipment({
            ...Shipment,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(Shipment)
    };
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Address</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input type="name" name="name" id='name' placeholder='Enter Your Name' onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id='email' onChange={handleChange} value={user?.email} readOnly/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" name="address" id='address' onChange={handleChange} placeholder='Type your Adress' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Mobile:</label>
                        <input type="number" name="mobile" id='mobile' onChange={handleChange} placeholder='Your Mobile No' required />
                    </div>
                    <input 
                        type="submit" 
                        value="Submit" 
                        className='form-submit'
                    />
                </form>
            </div>
        </div>
    );
};

export default Shipment;