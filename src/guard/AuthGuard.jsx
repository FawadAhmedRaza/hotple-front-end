"use client";
import { useAuthContext } from '@/context/auth/useAuthContext';
import UserLoginView from '@/sections/auth/userLoginView';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const AuthGuard = ({ children }) => {
    const { user,isAuthenticated } = useAuthContext();
    console.log("user,isAuthenticated",user,isAuthenticated)
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isAuthenticated) {
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      }, [isAuthenticated]);
  
  if (!isAuthenticated && !user) {
    return <UserLoginView isOpen={isOpen} setIsOpen={setIsOpen}  />
    }
    else {
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default AuthGuard