'use client' 
import { useEffect, useState } from "react"; 
import Home from "@/sections/home";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";


export default function MainHome() {
  const { dispatch } = useAuthContext();
  const { isAuthenticated, user } = useAuthContext();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
    if (token) {
      const user = jwtDecode(token);
      dispatch({
        type: "INITIAL",
        payload: {
          user,
          isAuthenticated: true,
        }
      })
    }
    setIsCheckingAuth(false);
  }, [])

  return (
    <>
      {
        isCheckingAuth ? <div>Loading...</div> :
          <Home />
      }
    </>
  );
}


