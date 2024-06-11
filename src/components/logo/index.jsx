import Image from 'next/image'
import React from 'react'

const Logo = ({className}) => {
  return (
    <Image alt="" src={'/assets/images/logo.png'} width={68} height={10} className={`${className}`}/>
  )
}

export default Logo