import React from 'react'

const Span = ({ children, className , ...others }) => {
    return (
        <span className={` text-xs leading-14lh text-light_secondary_label ${className} `} {...others}>{children}</span>
    )
}

export default Span