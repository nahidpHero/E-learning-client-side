import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

export const AuthContext=createContext()

const auth=getAuth(app)
const AuthProvaider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const githubProvaider=new GithubAuthProvider()
    const user={displayName:'Nahid Hassan'}
   
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

    const authInfo={user,signUpwithGoogle,createUser,login,signInGithub}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;