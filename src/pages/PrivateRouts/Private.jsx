import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {userr} = useContext(AuthContext)
    if(userr){
        return children;
    } 
    return <Navigate to={'/login'}></Navigate>
};

export default Private;