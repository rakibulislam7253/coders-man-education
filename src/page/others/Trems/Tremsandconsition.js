import React from 'react';
import { Link } from 'react-router-dom';

const Tremsandconsition = () => {
    return (
        <div>
            <h2>Here is our trems and condition</h2>
            <p>Go back to home <Link to={'/register'}>Register</Link> </p>
        </div>
    );
};

export default Tremsandconsition;