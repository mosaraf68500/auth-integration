import React, { useEffect, useState } from 'react';
import { FirebaseAuthContex } from '../FirebaseAuthContex/FirebaseAuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const provider=new GoogleAuthProvider();

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


const GoogleLogin=()=>{
    setLoading(true);
    signInWithPopup(auth,provider)
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
        loading,
        GoogleLogin
    }
    return (

       <FirebaseAuthContex value={userInfo}>
        {children}
       </FirebaseAuthContex>
    );
};

export default AuthProvider;