import React from 'react'

const H3 = ({ children, className }) => {
    return (
        <h3 className={` text-lg md:text-2xl leading-22lh md:leading-7 font-semibold dark:text-dark_primary_label text-light_primary_label  ${className} `}>
            {children}
        </h3> 
    )
}

export default H3