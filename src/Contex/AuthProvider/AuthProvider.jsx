import React, { useEffect, useState } from 'react';
import { FirebaseAuthContex } from '../FirebaseAuthContex/FirebaseAuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children }) => {

    const [user,setUser]=useState(null);


    // create user
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // login user

    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

const LogOutUSer=()=>{
    return signOut(auth);
}


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('has current user',currentUser)
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    const userInfo={
        createUser,
        LoginUser,
        user,
        LogOutUSer
    }
    return (

       <FirebaseAuthContex value={userInfo}>
        {children}
       </FirebaseAuthContex>
    );
};

export default AuthProvider;