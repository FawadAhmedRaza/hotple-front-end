import React from 'react'

const H4 = ({ children, className }) => {
    return (
        <h4 className={` text-lg leading-22lh md:leading-25lh font-semibold dark:text-white text-heading_black  ${className} `}>
            {children}
        </h4>
    )
}

export default H4