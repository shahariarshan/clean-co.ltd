import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext =createContext();
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

  

    const createUser =(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const login =(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logOut =()=>{
        setIsLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const subscribe =onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        setIsLoading(false)
        });

        return()=>{
            return subscribe()
        }
    },[])

    const values={
        user,
        isLoading,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;