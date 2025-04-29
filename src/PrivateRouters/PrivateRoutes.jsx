import React, { use } from 'react';
import { FirebaseAuthContex } from '../Contex/FirebaseAuthContex/FirebaseAuthContex';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loading}=use(FirebaseAuthContex);
    console.log(user)
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>

    }

    if(!user){
       return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoutes;