import Image from 'next/image'
import React from 'react'

const MapView = () => {
  return (
//     <div><iframe
//     className="map-iframe"
//     src="https://www.google.com/maps/embed/v1/view?zoom=14&center=37.7749,-122.4194"
//     allowFullScreen
//   ></iframe></div>
<div className='flex h-full w-full object-contain'>
    <img height="100%" width="100%" src='/assets/images/download.jpeg'/>
</div>
  )
}

export default MapView