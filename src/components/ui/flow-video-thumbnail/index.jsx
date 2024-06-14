import React from 'react'
import Iconify from '../Iconify-icons/Iconify'


const FlowVideoTumbnail = ({videoSrc}) => {
    console.log(videoSrc,'filePath');
  return (

      <div className="relative w-full max-h-72 rounded-2xl overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out"></div>
          <video className="w-full h-full object-cover">
              <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-start justify-end opacity-100 group-hover:opacity-1 transition duration-300 ease-in-out p-3">
              <div className="flex justify-center items-center rounded-full backdrop-blur-sm  bg-transparent w-6 h-6 ">
                  <Iconify icon={'ph:play-fill'} className="!w-3.5 !h-3.5 text-white" />
              </div>
          </div>
      </div>
)
}

export default FlowVideoTumbnail