import React from 'react';
import { FirebaseAuthContex } from '../FirebaseAuthContex/FirebaseAuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children }) => {


    // create user
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    // login user

    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            console.log("has current user",currentUser);
        }

        else{
            console.log("current user",currentUser)
        }
    })


    const userInfo={
        createUser,
        LoginUser
    }
    return (

       <FirebaseAuthContex value={userInfo}>
        {children}
       </FirebaseAuthContex>
    );
};

export default AuthProvider;