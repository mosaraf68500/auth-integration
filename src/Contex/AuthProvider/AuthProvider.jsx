import React, { useEffect, useState } from 'react';
import { FirebaseAuthContex } from '../FirebaseAuthContex/FirebaseAuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);


    // create user
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // login user

    const LoginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

const LogOutUSer=()=>{
    setLoading(true)
    return signOut(auth);
}


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('has current user',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    const userInfo={
        createUser,
        LoginUser,
        user,
        LogOutUSer,
        loading
    }
    return (

       <FirebaseAuthContex value={userInfo}>
        {children}
       </FirebaseAuthContex>
    );
};

export default AuthProvider;