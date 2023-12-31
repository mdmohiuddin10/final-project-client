import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()
    


    const creatUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile =(name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser)
            console.log('from current User',currentUser);
            if(currentUser){
                // get token and store client side
                const userInfo = { email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        // setLoading(false)
                    }
                })
            }
            else{
                // TODO: remove token (if token stored in the client side: local storage, caching, in memory)
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;