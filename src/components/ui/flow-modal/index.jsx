'use client'
import React, { useRef, useEffect } from 'react'
import Iconify from '../Iconify-icons/Iconify';
import Image from 'next/image';
import PostAvatar from '@/components/avatars/post-avatar';
import H6 from '../Typography/h6';
import SolidButton from '../Buttons/solid-button';
import  Input  from '../input';


const FlowModal = ({ isFlowModalOpen, setIsFlowModalOpen, flowCardData }) => {
  // Sates
  const flowModalRef = useRef(null);
 
  // Close Modal Click on Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (flowModalRef.current && !flowModalRef.current.contains(event.target)) {
        setIsFlowModalOpen();
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
  }, [isFlowModalOpen, setIsFlowModalOpen]);

  if (!isFlowModalOpen) return null;

  return (
    <div className="fixed  justify-center inset-0 !z-50 flex items-center bg-black bg-opacity-50">
      <span className='fixed top-10 left-10 flex justify-center items-center w-10 h-10 bg-transparent backdrop-blur-md rounded-full'>
        <Iconify icon={'charm:cross'} onClick={() => setIsFlowModalOpen(false)} className={'!w-7 !h-7 !text-dark_primary_label '} />
      </span>

      <div ref={flowModalRef} className='relative !max-w-5xl h-[670px] sm:max-w-xl bg-white md:rounded-2xl shadow dark:bg-brownish_black dark:border dark:border-neutral-800 '>

        <div className=' flex justify-between items-center flex-row divide-x dark:divide-neutral-800 divide-gray-200 '>
          {/* Images and Video  */}
          <div>
            {
              flowCardData?.img ? (
                <>
                  <div className="relative flex items-center justify-center w-full h-[670px]  overflow-hidden">
                    <img src={flowCardData?.img} alt={flowCardData?.title} className=" max-h-[672px] w-[380px] my-auto h-full  object-contain " />
                  </div>
                </>
              ) : (
                <video controls className=' rounded-l-2xl  h-full  max-h-[672px] '>
                  <source src={flowCardData?.video} />
                </video>
              )
            }
          </div>

          {/* Content  */}
          <div className="relative  flex flex-col divide-y dark:divide-neutral-800 divide-gray-200 p-6 w-[400px] h-[670px]  ">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">
                <PostAvatar img={flowCardData?.userImg} className={'!w-11 !h-11 object-fill'} />
                <H6 className={'dark:text-dark_primary_label '}>{flowCardData?.userName}</H6>
              </div>
              <SolidButton className={'!py-2'}>집중하다</SolidButton>
            </div>
            <div className="flex justify-between items-center grow">

              <div className="flex items-center gap-3">
                <PostAvatar img={flowCardData?.userImg} className={'!w-10 !h-10 object-fill'} />
                <H6 className={'dark:text-dark_primary_label '}>{flowCardData?.userName}</H6>
              </div>
              <SolidButton className={'!py-2'}>집중하다</SolidButton>
            </div>

            {/* Commit section  */}
            <div className=" absolute bottom-0 right-0 w-full flex h-16 justify-between items-center dark:bg-brownish_black bg-white">
              <div className="flex items-center gap-3">
                <Input type='text'/>
              </div>
              <div className="">

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default FlowModal