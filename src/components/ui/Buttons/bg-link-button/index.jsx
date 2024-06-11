import React from 'react'
import Link from 'next/link'
import Iconify from '../../Iconify-icons/Iconify'
import H5 from '../../Typography/h5'

const BgLinkButton = ({ children, className, icon, iconClassName , link}) => {
    return (
        <Link href={link}>
            <div className={`group flex justify-between items-center dark:hover:bg-brown  hover:bg-light_bg_grey h-10 px-3 cursor-pointer rounded-lg ${className}`} >
                <H5 className={'!text-nowrap !font-normal  group-hover:!text-light_primary_label group-hover:dark:!text-dark_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'}>
                    {children}
                </H5>
                <Iconify icon={icon} className={`hidden group-hover:flex dark:!text-light_primary_label dark:!text-grey-500 !text-gray-400 !w-6 -rotate-45 ${iconClassName} `} 
                />
            </div>
        </Link>
    )
}

export default BgLinkButton