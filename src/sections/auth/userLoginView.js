"use client"
import React, { useState } from 'react'
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
import Paragraph from '@/components/ui/Typography/paragraph';
import Iconify from '@/components/ui/Iconify-icons/Iconify';
import BgIcon from '@/components/ui/Iconify-icons/bg-icon';
import CheckBox from '@/components/ui/checkbox';
import Span from '@/components/ui/Typography/span';
import H6 from '@/components/ui/Typography/h6';
import Logo from '@/components/logo';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const UserLoginView = ({ isOpen, setIsOpen }) => {
  const [onHover, setOnHover] = useState(false)
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

    <Modal isOpen={isOpen} onClose={closeModal} title="휴대폰번호로 로그인" className={' hide-scrollbar max-h-80 md:max-h-full !max-w-4xl !py-0  overflow-y-auto '} titleClass="border-none hidden " contentClass={' p-3 md:p-0'}>
      <div className=' flex flex-col-reverse md:flex-row items-center justify-center w-full gap-5 md:gap-5 md:divide-x dark:divide-neutral-800 divide-gray-200  '>

        <div className='flex justify-between items-center flex-col gap-5 md:gap-0 w-full py-3 md:py-10 px-3 '>
          {/* headign  */}
          <div className=' bg-light_blue rounded-full p-3 opacity-100'>
            <Paragraph className={' !font-black !text-sm  dark:!text-[#3d8af5] !text-light_link_label !text-center'}>나를 더 잘 이해할 수 있는 노트를 추천하려면 로그인하세요.</Paragraph>
          </div>
          {/* logo  */}
          <div className='my-6 hidden md:flex'>
            <Logo />
          </div>
          {/* Qr Code  */}
          <div className={` flex items-center flex-col gap-3   `}>
            <div className=' w-40 h-40 rounded-2xl bg-white border border-gray-200 dark:border-neutral-800 p-4'>
              <Image src={'/assets/images/qr_code.png'} width={56} height={100} className='w-full h-full' />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
              <div className=' flex items-center gap-1'>
                <Paragraph className={' !text-sm dark:!text-dark_primary_label !text-light_primary_label !font-semibold'}>사용 가능</Paragraph>
                <span className='rounded-md bg-red text-[5px] p-1 '>
                  스캔 코드
                </span>
                <Paragraph className={'!text-sm dark:!text-dark_primary_label !text-light_primary_label !font-black'}>스캔 코드</Paragraph>
              </div>
              <Paragraph className={'!text-sm dark:!text-dark_primary_label !text-light_primary_label  !font-[530]'}>또는</Paragraph>
              <div className=' flex items-center gap-1'>
                <Iconify icon={'mingcute:message-3-fill'} className={'!text-green-600 !w-5 mt-0.5'} />
                <Paragraph className={'!text-sm dark:!text-dark_primary_label !text-light_primary_label !font-black'}>위챗</Paragraph>
                <Paragraph className={'!text-sm dark:!text-dark_primary_label !text-light_primary_label  !font-semibold'}>스캔 코드
                </Paragraph>

              </div>
            </div>
          </div>

          {/* // Video PLayer  */}
          <div className=' flex items-center justify-center gap-2 mt-8 px-2 py-1 rounded-full cursor-pointer dark:hover:bg-light_secondary_label dark:bg-light_tertiary_label hover:bg-light_bg_grey text-light_primary_label'>
            <Iconify icon={onHover? 'material-symbols:pause': 'ph:play-fill'} className={'!w-3 !h-3 !text-neutral-500'}/>
            <Span className={'dark:!text-dark_secondary_label'}>코드를 스캔하는 방법</Span>
          </div> 
        </div>

        <div className='flex justify-between items-center flex-col w-full py-1 md:py-10 md:px-7 h-full'>

          <div className={` flex items-center justify-between w-full mb-6 md:mb-0 md:pb-5 md:-mt-10 `}>
            <Paragraph className={" dark:!text-dark_primary_label !font-black grow !text-center "}>휴대폰번호로 로그인</Paragraph>
            <BgIcon icon={'akar-icons:cross'} className={'md:!-mt-12'} IconclassName={'!w-4 !h-4 '} onClick={() => closeModal()} />
          </div>

          <RHFFormProvider methods={methods} onSubmit={onSubmit}>
            <div className=' flex flex-col gap-3  w-full' >
              <RHFTextInput
                name="email"
                placeholder="电子邮件"
                className={'!py-3'}
              />
              <RHFTextInput
                name="password"
                placeholder="密码"
                type="password"
                className={'!py-3'}
              />
            </div>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex flex-col gap-4 md:mt-8'>
                <SolidButton type="submit" className='w-full' >
                  登录
                </SolidButton>
                <CheckBox label='我已阅读并同意' anchorTag='《사용户协议》隐私政策》《儿童/青少年个人信息保护规则》' />
              </div>
              <Span className={' dark:!text-dark_tertiary_label !text-light_secondary_label !text-center mt-6  '}>신규 사용자는 직접 로그인할 수 있습니다.</Span>
              </div> 
          </RHFFormProvider>
        </div>
      </div>
    </Modal>
  )
}

export default UserLoginView