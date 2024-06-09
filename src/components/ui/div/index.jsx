import React from 'react'

const Div = ({ children ,className}) => {
  return (
    <div className={` px-4 sm:px-6 xl:px-8 py-4 ${className}`}>
        {children}
    </div>
  )
}

export default Div