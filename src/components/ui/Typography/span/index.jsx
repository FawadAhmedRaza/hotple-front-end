import React from 'react'

const Span = ({ children, className }) => {
    return (
        <span className={` text-xs leading-14lh text-light_secondary_label ${className} `}>{children}</span>
    )
}

export default Span