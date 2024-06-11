'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import H6 from '../ui/Typography/h6'
import Span from '../ui/Typography/span'
import PostAvatar from '../avatars/post-avatar'
import Iconify from '../ui/Iconify-icons/Iconify'

const Card = ({ data }) => {
    const [imageHeight, setImageHeight] = useState('')
    const [imageWidth, setImageWidth] = useState('')
    const imgRef = useRef(null)

    const handleHover = () => {
        if (imgRef.current) {
            setImageHeight(imgRef.current.offsetHeight)
            setImageWidth(imgRef.current.offsetWidth)
        }
    }
    return (
        <div className='flex flex-col gap-3 '>
            {/* Image  */}
            <div className=' relative group cursor-pointer' onMouseEnter={handleHover}>
                <Image src={data?.img} alt={data?.title} ref={imgRef} className=' w-full max-h-72 rounded-2xl hover:bg-opacity-60  ' />
                <div className={`absolute top-0  hidden group-hover:block bg-light_quaternary_label rounded-2xl`} style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}>
                </div>
            </div>
            <div className=" flex flex-col gap-2 px-2.5 cursor-pointer">
                {/* Post title  */}
                <div className="max-w-full w-full">
                    <H6 className={'truncate'}>{data?.title}</H6>
                </div>
                {/* User Avatar , Name and Post Likes  */}
                <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-2">
                        <PostAvatar img={data?.img} />
                        <Span className={' dark:!text-dark_secondary_label dark:hover:!text-dark_primary_label'}>{data?.userName}</Span>
                    </div>
                    <div className=" group flex items-center gap-1 cursor-pointer">
                        <Iconify icon={'mdi:heart-outline'} className={'!w-4 group-hover:!text-dark_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'} />
                        <Span className={" dark:!text-dark_secondary_label group-hover:!text-dark_primary_label !text-light_secondary_label"}>{data?.likes}</Span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Card

