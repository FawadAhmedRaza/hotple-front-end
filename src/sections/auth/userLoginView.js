"use client"
import React from 'react'
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import Modal from "@/components/modal";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SolidButton from "@/components/ui/Buttons/solid-button";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { LoginUser } from "@/api/auth";
import { jwtDecode } from 'jwt-decode';
import { useAuthContext } from '@/context/auth/useAuthContext';
import Paragraph from '@/components/ui/Typography/paragraph';
import AnchotTag from '@/components/ui/Typography/anchor-tag';

const UserLoginView = ({isOpen,setIsOpen}) => {
  const closeModal = (position) => {
    setIsOpen( false );
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is Requried"),
    password: yup.string().required("password  is Requried"),
   
  })
  
  const methods = useForm({resolver: yupResolver(schema) });
  let {
    handleSubmit,
    reset,
    formState: { isSubmitting,errors },
  } = methods;
 
  const { dispatch } = useAuthContext();
    const onSubmit = handleSubmit(async (data) => {
      console.log("data",data)
      try{
        const res = await LoginUser(data)
        const user = jwtDecode(res.data.token);
        localStorage.setItem("jwtToken",res.data.token)
        console.log("user in login View",user)
        dispatch({
          type: "LOGIN",
          payload: {
            user,
          },
        });
      closeModal()
        reset();
      }catch(err){
        console.log("err",err)
      }
    });
    
  return (
    <Modal isOpen={isOpen} onClose={() => closeModal('topRight')} title="Top right modal">
    <div className='flex justify-between items-center flex-col w-full  '>
        <h1 className=' font-bold text-gray-600 text-2xl'>
        Login by Email
        </h1>
    <RHFFormProvider methods={methods} onSubmit={onSubmit}>
        <div className=' w-full' >
          <RHFTextInput
            name="email"     
            placeholder="email"
          />
          <RHFTextInput
             name="password"        
             placeholder="password"
            
             type="password"
          />
          <SolidButton type="submit"  className='w-full bg-red font-bold my-2' >
            Log In
          </SolidButton>
        </div>
        <div className='flex flex-row justify-between items-center'>
        
          <Paragraph className="dark:!text-dark_primary_label">
          Don't have an account? <AnchotTag>Sign Up</AnchotTag>
          </Paragraph>
          <Paragraph className="dark:!text-dark_primary_label">
           <AnchotTag>Forgot password</AnchotTag>
          </Paragraph>
        </div>
    </RHFFormProvider>
      </div>
    </Modal>
  )
}

export default UserLoginView