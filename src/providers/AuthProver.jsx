/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

//create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email and password
  const registerUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        setLoading(false);
        throw error;
      }
    );
  };

  //log in user
  const loginUser = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setLoading(false);
      throw error;
    });
  };

  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setLoading(false);
      throw error;
    });
  };

  //observing user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(
      //   "observing current user inside useEffect of auth",
      //   currentUser
      // );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //signOut user
  const LogOut = () => {
    return signOut(auth);
  };

  //passing the data as object
  const authInfo = {
    user,
    loading,
    registerUser,
    signInWithGoogle,
    loginUser,
    LogOut,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
