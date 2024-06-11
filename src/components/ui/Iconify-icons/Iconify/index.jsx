import React from 'react'
import { Icon } from '@iconify/react'

const Iconify = ({icon , className  , onClick}) => {
  return (
    <Icon icon={icon} className={` w-6 h-6 text-custom_black cursor-pointer ${className}`} onClick={onClick}/>
  )
}

export default Iconify