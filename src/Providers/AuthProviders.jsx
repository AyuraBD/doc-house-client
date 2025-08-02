import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import Auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  }
  const logOut = () =>{
    setLoading(true);
    return signOut(Auth)
  }
  
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(Auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return () =>{
     return unsubscribe();
    }
  },[])

  const userInfo = {
    loading,
    setLoading,
    user,
    createUser,
    signIn,
    logOut,
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders