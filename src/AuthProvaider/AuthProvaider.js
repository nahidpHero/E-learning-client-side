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
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    const githubProvaider=new GithubAuthProvider()
   
   const signUpwithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
   }
  
   const signInGithub=()=>{
    return signInWithPopup(auth,githubProvaider)
   }


  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
   

  const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logout=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser)
     setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
},[])

    const authInfo={user,signUpwithGoogle,createUser,login,signInGithub,logout,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;