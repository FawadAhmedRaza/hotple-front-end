import React from 'react'

const TextArea = ({ row, className ,placeholder }) => { 
    return (
        <textarea name="" placeholder={placeholder} rows={row} className={` hide-scrollbar text-sm px-4 py-2.5 dark:bg-brown bg-light_bg_grey rounded-xl focus:outline-none w-full dark:text-dark_primary_label text-light_primary_label placeholder:dark:text-neutral-500 ${className}`}></textarea>
    )
}

export default TextArea