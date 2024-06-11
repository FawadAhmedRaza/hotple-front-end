import React from 'react'

const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-15fs md:text-base leading-6 font-normal dark:text-dark_primary_label  text-light_primary_label    ${className}`}>
            {children} 
        </p>
    )
}

export default Paragraph