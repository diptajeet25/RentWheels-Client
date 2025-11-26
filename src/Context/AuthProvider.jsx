import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();
    const [user,setUser]=useState("Dipta");

    const createUser=(email,password)=>
    {
      return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser =(email,password)=>
    {
      return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>
    {
      return signInWithPopup(auth , provider)
    }
    const logoutUser=()=>
    {
      return signOut(auth)
    }

    useEffect(()=>
    {
      const unsubscribe=onAuthStateChanged(auth,currentUser=>
      {
        setUser(currentUser);
      }
      )
      return ()=>
        {
            unsubscribe();
        }

    },[])

    const authInfo={user,setUser,createUser,loginUser,logoutUser,googleSignIn}
  return (
   <AuthContext value={authInfo}>
    {children}
   </AuthContext>
  );
};

export default AuthProvider;