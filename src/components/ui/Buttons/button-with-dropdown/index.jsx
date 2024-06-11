'use client'
import React, { useState } from 'react'
import Iconify from '../../Iconify-icons/Iconify'
import H5 from '../../Typography/h5'

const HoverDropdownButton = ({ className, children, onClick, options ,dropdownClasses }) => {
    const [hover, setHover] = useState(false)


    return (
        <div className='relative z-50 h-12' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <button className={`  rounded-full py-2 px-4 font-normal dark:hover:text-dark_primary_label dark:text-dark_secondary_label text-light_secondary_label hover:text-light_primary_label dark:hover:bg-dark_bg_grey hover:bg-light_bg_grey outline-none  ${className}`} onClick={onClick}>
                {children}
            </button>

            {hover && (
                <div className={`absolute top-11 flex flex-col min-w-44 max-w-64 dark:bg-custom_black bg-white p-1 drop-shadow-xl rounded-xl  ${hover ? 'flex' : 'hidden'} ${dropdownClasses}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    {
                        options?.map((opt) => (
                            <div className="group flex justify-between items-center dark:hover:bg-dark_bg_grey hover:bg-light_bg_grey h-10 px-3 cursor-pointer rounded-lg" >
                                <H5 className={'!text-nowrap !font-normal  group-hover:!text-dark_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'}>{opt?.label}</H5> 
                                <Iconify icon={opt?.icon} className={'hidden group-hover:flex dark:text-light_primary_label text-gray-400 !w-6 -rotate-45 '} />
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default HoverDropdownButton