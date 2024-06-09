import React from 'react'

const Button = ({ className, children, onClick }) => {
    return (
        <button className={` rounded-full py-2 px-4 font-normal dark:hover:text-dark_primary_label dark:text-dark_secondary_label text-light_secondary_label hover:text-light_primary_label dark:hover:bg-dark_bg_grey hover:bg-light_bg_grey outline-none  ${className}`} onClick={onClick}> {children} 
        </button>
    )
}

export default Button