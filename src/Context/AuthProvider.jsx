import React, {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState("Dipta");

    const createUser=(email,password)=>
    {
      return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser =(email,password)=>
    {
      return signInWithEmailAndPassword(auth,email,password)
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

    const authInfo={user,setUser,createUser,loginUser,logoutUser}
  return (
   <AuthContext value={authInfo}>
    {children}
   </AuthContext>
  );
};

export default AuthProvider;