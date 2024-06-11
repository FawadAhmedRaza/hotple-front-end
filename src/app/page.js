'use client' 
import { useEffect, useState } from "react"; 
import Home from "@/sections/home";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { jwtDecode } from "jwt-decode";


export default function MainHome() {

  return (
    <>
      {
          <Home />
      }
    </>
  );
}


