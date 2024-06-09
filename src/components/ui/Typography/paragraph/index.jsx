import React from 'react'

const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-15fs md:text-base leading-6 font-normal text-custom_black ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph