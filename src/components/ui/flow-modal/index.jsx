'use client'
import React, { useRef, useEffect, useState } from 'react'
import FlowModalDesktop from './destop-ui';
import Iconify from '../Iconify-icons/Iconify';
import FlowModalMobile from './mobile-ui';

const FlowModal = ({ isFlowModalOpen, setIsFlowModalOpen, flowData , updateLikes }) => {
  // States
  const flowModalRef = useRef(null);

  // Close Modal Click on Outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flowModalRef.current && !flowModalRef.current.contains(event.target)) {
        setIsFlowModalOpen(false);
      }
    };
    if (isFlowModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlowModalOpen,setIsFlowModalOpen]);

  if (!isFlowModalOpen) return null;

  return (
    <div className="fixed justify-center inset-0 !z-50 flex items-center bg-black bg-opacity-50">
      <span className='fixed top-2 left-3 xl:top-10 xl:left-10 hidden  lg:flex justify-center items-center w-10 h-10 bg-transparent backdrop-blur-md rounded-full'>
        <Iconify icon={'charm:cross'} onClick={()=>setIsFlowModalOpen(false) } className={'!w-7 !h-7 !text-dark_primary_label '} />
      </span>
      <div ref={flowModalRef} className='relative w-screen lg:w-fit h-screen lg:h-550ph xl:h-600ph 2xl:h-680ph bg-white lg:rounded-3xl shadow dark:bg-brownish_black dark:border dark:border-neutral-800 overflow-hidden'>
        <FlowModalDesktop flowData={flowData} />
        <FlowModalMobile flowData={flowData} setIsFlowModalOpen={setIsFlowModalOpen}  />
      </div> 
    </div>
  )
}

export default FlowModal
