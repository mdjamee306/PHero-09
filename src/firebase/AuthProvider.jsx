import { createContext, useEffect, useState,  } from "react";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [userr,setUserr] = useState(null)
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const signUP = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo ={
        googleSignIn,signUP
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged (auth, loggedUser => {setUserr(loggedUser)} )
    },[])
    const user = {
        signUP, authInfo ,googleSignIn,signIn ,logOut , userr
    } 

    

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;