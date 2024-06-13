'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import H6 from '../ui/Typography/h6'
import Span from '../ui/Typography/span'
import PostAvatar from '../avatars/post-avatar'
import Iconify from '../ui/Iconify-icons/Iconify'
import FlowVideoTumbnail from '../ui/flow-video-thumbnail'
import FlowModal from '../ui/flow-modal'

const Flow = ({ flowCard }) => {
    // States and Variables
    const [imageHeight, setImageHeight] = useState('')
    const [imageWidth, setImageWidth] = useState('')
    const [isFlowModalOpen, setIsFlowModalOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const imgRef = useRef(null)

    // functions 
    const handleHover = () => {
        if (imgRef.current) {
            setImageHeight(imgRef.current.offsetHeight)
            setImageWidth(imgRef.current.offsetWidth)
        }
    }
    const handleModalOpen = (data) => {
        setIsFlowModalOpen(true)
        setModalData(data)
    }

    return (
        <>
            <div className='flex flex-col gap-2 '>
                {/* Image  */}
                <div className=' relative group cursor-pointer' onMouseEnter={handleHover} onClick={() => handleModalOpen(flowCard)}>
                    {
                        flowCard?.img ? (
                            <>
                                <div className="relative max-w-72 max-h-72">
                                    <Image src={flowCard?.img} alt={flowCard?.title} width={72} height={72} ref={imgRef} className=" max-h-72 w-full h-full rounded-2xl object-cover transition-opacity duration-300" />
                                    <div className="absolute h-full inset-0 bg-black bg-opacity-15 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}></div>
                                </div>

                            </>
                        ) : (
                            <FlowVideoTumbnail videoSrc={flowCard?.video} />
                        )
                    }
                </div>

                <div className="flex flex-col gap-1.5 px-2.5 cursor-pointer">
                    {/* Post title  */}
                    <div className="max-w-full w-full">
                        <H6 className={'truncate'}>{flowCard?.title}</H6>
                    </div>

                    {/* User Avatar , Name and Post Likes  */}

                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-2">
                            <PostAvatar img={flowCard?.userImg} />
                            <Span className={' dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label'}>{flowCard?.userName}</Span>
                        </div>
                        <div className=" group flex items-center gap-1 cursor-pointer">
                            <Iconify icon={'mdi:heart-outline'} className={'!w-4 group-hover:!text-light_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'} />
                            <Span className={" dark:!text-dark_secondary_label group-hover:!text-light_primary_label !text-light_secondary_label"}>{flowCard?.likes}</Span>
                        </div>
                    </div>
                </div>
            </div>

            <FlowModal isFlowModalOpen={isFlowModalOpen} setIsFlowModalOpen={setIsFlowModalOpen} flowCardData={modalData} />
        </>

    )
}


export default Flow
