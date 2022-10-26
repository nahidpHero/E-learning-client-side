import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext=createContext()

const auth=getAuth(app)
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState([])
    const googleProvider=new GoogleAuthProvider()
    const githubProvaider=new GithubAuthProvider()
   
   const signUpwithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
   }
  
   const signInGithub=()=>{
    return signInWithPopup(auth,githubProvaider)
   }


  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
   

  const login=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logout=()=>{
    return signOut(auth)
}

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser)
    })
    return()=>{
        unSubscribe()
    }
},[])

    const authInfo={user,signUpwithGoogle,createUser,login,signInGithub,logout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;