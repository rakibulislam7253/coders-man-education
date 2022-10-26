import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { Autcontext } from '../../context/Authprovider/Authprovider';

const PrivateRouter = ({ children }) => {
    const { user,loading } = useContext(Autcontext)
    const location=useLocation()
    if(loading)
    {
       return <Spinner animation="border" variant="dark" />
    }

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;