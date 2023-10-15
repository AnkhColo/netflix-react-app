import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthContexProvider({children}){

    return(
        <AuthContex.Provider>
            ({children})
        </AuthContex.Provider>
    )
}

export function userAuth(){
    return useContext(AuthContext)
}