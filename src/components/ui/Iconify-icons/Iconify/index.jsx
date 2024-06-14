import React from 'react'
import { Icon } from '@iconify/react'

const Iconify = ({icon , className  , onClick,height,width}) => {
  return (
    <Icon icon={icon}   width={width} height={height} className={`w-4 h-4 dark:text-dark_primary_label text-light_primary_label  cursor-pointer ${className}`} onClick={onClick}/>
  )
}

export default Iconify