import React from 'react'

const AnchotTag = ({ children, className, link }) => {
    return (
        <a href={link} className={` text-15fs md:text-base leading-6  dark:text-dark_link_label text-light_link_label ${className}`}>{children}</a>
    )
}

export default AnchotTag