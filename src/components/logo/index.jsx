import Image from 'next/image'
import React from 'react'
import logoImg from '@/app/assets/images/logo.png'

const Logo = ({className}) => {
  return (
    <Image src={logoImg} width={68} className={`${className}`}/>
  )
}

export default Logo