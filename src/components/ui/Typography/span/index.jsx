import React from 'react'

const Span = ({ children, className }) => {
    return (
        <span className={` text-xs leading-14lh text-dark_tertiary_label ${className}`}>{children}</span>
    )
}

export default Span