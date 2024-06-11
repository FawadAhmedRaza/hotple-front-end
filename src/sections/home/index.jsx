'use client'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from "@/context/auth/useAuthContext";
import UserLoginView from "@/sections/auth/userLoginView";
import Explore from '../explore'

const Home = () => {
  const { isAuthenticated } = useAuthContext();
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isAuthenticated]);
  
  return (
    
    <div className='lg:pt-16'>
      {/* <UserRegisterView isOpen={isOpen} setIsOpen={setIsOpen}  /> */}
      <UserLoginView isOpen={isOpen} setIsOpen={setIsOpen}  />
      
      <Explore />

    </div>

  )
}

export default Home

