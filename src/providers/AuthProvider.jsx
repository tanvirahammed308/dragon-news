import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])
    const info={
        user,createUser,signIn,logOut,loading

    }
  return (
    <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes={
    children: PropTypes.node,

}

export default AuthProvider;

