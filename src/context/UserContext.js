import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const authContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return unsubscribe();
    }, [])


    const signWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut =()=>{
        return signOut(auth);
        
    }
    const authInfo = {user, register, signIn, logOut, signWithGoogle, loading}
    return (
         <authContext.Provider value={authInfo}>
            {children}
         </authContext.Provider>
        
    );
};

export default UserContext;