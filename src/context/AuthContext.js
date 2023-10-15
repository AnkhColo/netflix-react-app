import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContexProvider({children}){

    const [user, setUser] = useState({})

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function LogIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function LogOut(){
        return signOut(auth)
    }

    return(
        <AuthContex.Provider value={{signUp,user}}>
            ({children})
        </AuthContex.Provider>
    )
}

export function userAuth(){
    return useContext(AuthContext)
}