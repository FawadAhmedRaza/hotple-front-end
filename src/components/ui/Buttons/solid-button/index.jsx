import React from 'react'

const SolidButton = ({ className, children ,onClick }) => {
    return (
        <button className={` text-center rounded-full bg-red py-2.5 px-4 md:px-5 text-white font-550  ${className}`} onClick={onClick}> {children}</button>
    )   
}

export default SolidButton