import React from 'react'
import { Icon } from '@iconify/react'

const Iconify = ({icon , className  , onClick}) => {
  return (
    <Icon icon={icon} className={`w-5 h-5 dark:text-dark_primary_label text-light_primary_label  cursor-pointer ${className}`} onClick={onClick}/>
  )
}

export default Iconify