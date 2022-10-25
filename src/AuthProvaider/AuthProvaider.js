import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

export const AuthContext=createContext()

const auth=getAuth(app)
const AuthProvaider = ({children}) => {
   const user={displayName:'Nahid Hassan'}


   
    const authInfo={user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvaider;