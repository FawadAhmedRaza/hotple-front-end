import React from 'react'

const Div = ({ children ,className}) => {
  return (
    <div className={` px-4 sm:px-6 xl:px-8 py-4 dark:bg-custom_black bg-dark_primary_label ${className}`}>
        {children}
    </div>
  )
}

export default Div