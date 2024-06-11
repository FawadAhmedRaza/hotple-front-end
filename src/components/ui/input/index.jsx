import React from 'react'

const Input = ({ className, type, placeholder }) => {
    return (

        <input type={type} placeholder={placeholder} className={` px-4 py-2.5 dark:bg-brown bg-light_bg_grey rounded-full focus:outline-none w-full placeholder:dark:text-neutral-500 ${className}`}
        />
    )
}

export default Input