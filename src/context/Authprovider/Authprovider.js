import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const Autcontext = createContext()
const auth = getAuth(app)



const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
     const [loading, setloading] = useState(true)


    const createuser = (email, password) => {
         setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerlogin = (provider) => {
         setloading(true)
        return signInWithPopup(auth, provider)
    }



    const signin = (email, password) => {
         setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logout = () => {
        // setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("current user:", currentuser)
            setuser(currentuser)
             setloading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])

    const authinfo = { user, providerlogin, logout, createuser, signin,loading }
    return (
        <Autcontext.Provider value={authinfo}>
            {children}
        </Autcontext.Provider>

    );
};

export default Authprovider;