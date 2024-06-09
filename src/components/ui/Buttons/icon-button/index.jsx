import React from 'react'
import Iconify from '../../Iconify'

const IconButton = ({ className, children, icon, iconClass, onClick }) => {
    return (
        <button className={` flex items-end gap-3 py-2.5 px-4 md:px-5 !leading-4 font-semibold  dark:text-white text-light_primary_label dark:hover:bg-dark_bg_grey  hover:bg-light_bg_grey outline-none rounded-full  ${className}`} onClick={onClick}>
            {icon && (<Iconify icon={icon} className={`  ${iconClass}`} />)}
            <span className=' !leading-4 mb-0.5'>{children}</span>
        </button>
    )
}

export default IconButton