import React from 'react'
import { Icon } from '@iconify/react'

const Iconify = ({icon , className}) => {
  return (
    <Icon icon={icon} className={` w-6 h-6 text-custom_black ${className}`}/>
  )
}

export default Iconify