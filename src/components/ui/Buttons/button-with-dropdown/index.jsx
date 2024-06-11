'use client'
import React, { useState } from 'react'
import BgLinkButton from '../bg-link-button'

const HoverDropdownButton = ({ className, children, onClick, options, dropdownClasses }) => {
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
                            <BgLinkButton icon={opt?.icon} link={opt?.link}>
                                {opt?.label}
                            </BgLinkButton>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default HoverDropdownButton