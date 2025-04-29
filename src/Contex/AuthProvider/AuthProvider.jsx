import React from 'react';
import { FirebaseAuthContex } from '../FirebaseAuthContex/FirebaseAuthContex';

const AuthProvider = ({children }) => {

    const userInfo={
        name:'mosaraf'
    }
    return (

       <FirebaseAuthContex value={userInfo}>
        {children}
       </FirebaseAuthContex>
    );
};

export default AuthProvider;