import React, { use } from 'react';
import { FirebaseAuthContex } from '../Contex/FirebaseAuthContex/FirebaseAuthContex';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user}=use(FirebaseAuthContex);
    console.log(user)

    if(!user){
       return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoutes;