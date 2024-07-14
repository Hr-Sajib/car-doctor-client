import axios from "axios";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { Children, createContext } from "react";
import auth from '../../../firebase.config'


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loader, setLoader] = useState(true);



    //google sign in
    const gProvider = new GoogleAuthProvider()
    const googleSignIn =()=>{
        setLoader(true);
        return signInWithPopup(auth, gProvider)
    }

    //create user with email password and update info
    const createUser = async (name, email, password, providedImageUrl)=>{
       setLoader(true);

       const res = await createUserWithEmailAndPassword(auth, email, password)
            if(res.user){
                await updateProfile(auth.currentUser, {
                    displayName:name,
                    photoURL:providedImageUrl,
                })
                return auth.currentUser;
            }
    }
    
    //log in
    const loginUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logOut=()=>{
        setLoader(true);
        return signOut(auth);
    }






    //retain user info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        createUser,
        googleSignIn,
        loginUser,
        logOut,
        user,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;