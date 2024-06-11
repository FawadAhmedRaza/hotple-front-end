'use client'
import Home from "@/pages/home";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "@/context/auth/useAuthContext";


export default function MainHome() {
  const {dispatch} = useAuthContext();
  const { isAuthenticated,user } = useAuthContext();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  console.log("user from context",isAuthenticated,user)
  useEffect(()=>{
    const token = localStorage.getItem("jwtToken")
    if(token){
      const user = jwtDecode(token);
      dispatch({
        type: "INITIAL",
        payload: {
          user,
          isAuthenticated: true,
        }})}
        setIsCheckingAuth(false);
      },[])
   
    return (
      <>
      {
      isCheckingAuth? <div>Loading...</div>: 
      <Home />
      }
    </>
  );
}


