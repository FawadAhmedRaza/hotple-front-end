import React from 'react'
import Iconify from '../Iconify-icons/Iconify'

const Input = ({ className, type, placeholder, icon , ...others}) => {
    return (
        <div className={`flex items-center gap-2 px-3 py-2 dark:bg-brown bg-light_bg_grey rounded-full $${className} `}>
            {
                icon && (
                    <Iconify icon={icon} className={' dark:!text-dark_tertiary_label !text-gray-400'} />
                )
            }
            <input type={type} placeholder={placeholder} className={`bg-transparent text-sm  focus:outline-none w-full placeholder:dark:text-neutral-500 ${!icon && 'px-1'}`} {...others}
            />
        </div>
    )
}

export default Input