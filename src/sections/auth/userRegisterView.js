"use client"
import React from 'react'
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import Modal from "@/components/ui/modal";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SolidButton from "@/components/ui/Buttons/solid-button";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { registerNewUser } from "@/api/auth";
import { useAuthContext } from '@/context/auth/useAuthContext';

const UserRegisterView = ({ isOpen, setIsOpen }) => {


  const closeModal = () => {
    setIsOpen(false);
  };

  const schema = yup.object().shape({
    username: yup.string().required("username is Requried"),
    email: yup.string().email("Invalid email").required("email is Requried"),
    password: yup.string().required("password  is Requried"),

  })

  const methods = useForm({ resolver: yupResolver(schema) });
  let {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = methods;


  const onSubmit = handleSubmit(async (data) => {
    
    try {
      const res = await registerNewUser(data)
      const user = res.data;
      reset();
      closeModal();
    } catch (err) {
      console.log("err", err)
    }
  });

  return (
    <Modal isOpen={isOpen} onClose={() => closeModal('topRight')} title="Sign Up"  className={'max-w-md'}>
      <div className='flex justify-between items-center w-full flex-col  '>
        <RHFFormProvider methods={methods} onSubmit={onSubmit}>
          <div className=' w-full' >
            <RHFTextInput
              name="username"
              placeholder="User Name"

            />
            <RHFTextInput
              name="email"
              placeholder="email"

            />
            <RHFTextInput
              name="password"
              placeholder="password"

              type="password"
            />
            <SolidButton type="submit" className='w-full bg-red font-bold my-2' >
              Sign In
            </SolidButton>
          </div>
        </RHFFormProvider>
      </div>
    </Modal>
  )
}

export default UserRegisterView