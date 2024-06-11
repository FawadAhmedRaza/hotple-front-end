import React from 'react'

const H5 = ({ children, className }) => {
    return (
        <h5 className={`text-base leading-18lh font-semibold dark:text-white text-light_primary_label ${className} `}>
            {children}
        </h5>
    )
}

export default H5