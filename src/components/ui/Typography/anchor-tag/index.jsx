import React from 'react'

const AnchotTag = ({ children, className, link ,...others }) => {
    return (
        <a href={link} {...others} className={` hover:underline cursor-pointer text-15fs font-mdeium md:text-base leading-6  dark:text-dark_link_label text-light_link_label ${className}`}>{children}</a>
    )
}

export default AnchotTag