import React from 'react'

const H6 = ({ children, className }) => {
  return (
    <h6 className={` text-sm font-normal leading-5 dark:text-dark_primary_label  text-light_primary_label ${className}`}>{children}</h6>
  )
}

export default H6