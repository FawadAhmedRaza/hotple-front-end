'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '@/components/sections/side-bar'
import BottomBar from '@/components/sections/bottom-bar'
import Card from '@/components/card'
import Img from '@/app/assets/images/img.webp'
import Modal from '@/components/modal'
import DynamicSlider from '@/components/slider'
import { useAuthContext } from "@/context/auth/useAuthContext";
import UserRegisterView from "@/sections/auth/userRegisterView";
import UserLoginView from "@/sections/auth/userLoginView";


const Home = () => {
  const { isAuthenticated } = useAuthContext();
    const { user } = useAuthContext();
    console.log("isAuthenticated in home",isAuthenticated)
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(false);
    } else{
      setIsOpen(true);
    }
  }, [isAuthenticated]); // Depend on isAuthenticated to trigger the effect
  return (
    <div className='flex gap-3 flex-col-reverse lg:flex-row w-full h-screen border border-yellow-300 pt-16'>
        {/* <UserRegisterView isOpen={isOpen} setIsOpen={setIsOpen}  /> */}
        <UserLoginView isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideBar />

        {/* // Card sections */}
        <section>
          <Card img={Img} userImg={Img} userName={'瘦弱小鱼'} title={'瘦弱小鱼😅'} />
        </section>
        
        {/* bottom bar  */}
        <BottomBar />

  
      </div>

  )
}

export default Home

