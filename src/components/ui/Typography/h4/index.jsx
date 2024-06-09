import React from 'react'

const H4 = ({ children, className }) => {
    return (
        <h1 className={` text-lg leading-22lh md:leading-25lh font-semibold dark:text-white text-light_primary_label  ${className} `}>
            {children}
        </h1>
    )
}

export default H4