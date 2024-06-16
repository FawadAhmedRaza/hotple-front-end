import React from 'react'

const Content = ({ children }) => {
    return (
        <div className=' w-full pt-12 pb-14 lg:pl-72 lg:pt-24 overflow-x-hidden'>
            {children}
        </div>
    )
}

export default Content