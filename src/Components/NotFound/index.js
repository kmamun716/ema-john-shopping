import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            404!!<br/>
            Page Not Found!
            Please Go <Link to='/'>Home</Link>
        </div>
    );
};

export default NotFound;