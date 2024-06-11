"use client"
import React from 'react'
import RHFTextInput from "@/components/rhf-hooks/RHFTextfiels";
import Modal from "@/components/ui/modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SolidButton from "@/components/ui/Buttons/solid-button";
import RHFFormProvider from "@/components/rhf-hooks/Form";
import { LoginUser } from "@/api/auth";
import { jwtDecode } from 'jwt-decode';
import { useAuthContext } from '@/context/auth/useAuthContext';

const UserLoginView = ({ isOpen, setIsOpen }) => {

  const closeModal = () => {
    setIsOpen(false);
  };

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is Requried"),
    password: yup.string().required("password  is Requried"),
  })

  const methods = useForm({ resolver: yupResolver(schema) });
  let {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

  const { dispatch } = useAuthContext();
  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data)
    try {
      const res = await LoginUser(data)
      const user = jwtDecode(res.data.token);
      localStorage.setItem("jwtToken", res.data.token)
      console.log("user in login View", user)
      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
      closeModal()
      reset();
    } catch (err) {
      console.log("err", err)
    }
  });

  return (

    <Modal isOpen={isOpen} onClose={closeModal} title="自行登录" className={'!max-w-md'}>

      <div className='flex justify-between items-center flex-col  w-full  '>
        <RHFFormProvider methods={methods} onSubmit={onSubmit}>
          <div className=' flex flex-col gap-3 w-full' >
            <RHFTextInput
              name="email"
              placeholder="电子邮件"
            />
            <RHFTextInput
              name="password"
              placeholder="密码"
              type="password"
            />

            <SolidButton type="submit" className='w-full my-2' >
              登录
            </SolidButton>
          </div>
        </RHFFormProvider>
      </div>
    </Modal>
  )
}

export default UserLoginView