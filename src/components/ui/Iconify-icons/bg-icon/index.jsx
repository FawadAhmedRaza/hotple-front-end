import React from 'react'
import { Icon } from '@iconify/react'

const BgIcon = ({ className, icon, onClick }) => {
    return (
        <div className={`group flex justify-center items-center w-9 h-9 rounded-full dark:hover:bg-dark_bg_grey hover:bg-light_bg_grey cursor-pointer ${className}`} onClick={onClick} >
            <Icon icon={icon} className={`w-5 h-5 dark:group-hover:!text-dark_primary_label group-hover:!text-light_primary_label dark:!text-dark_secondary_label  !text-light_secondary_label`} />
        </div>
    )
}

export default BgIcon 

