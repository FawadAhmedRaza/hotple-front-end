import Image from 'next/image'
import React from 'react'

const PostAvatar = ({ img }) => {
    return (
            <Image src={img} alt='avatar' width={30} height={10} className=' rounded-full !w-5 !h-5'/>
    )
}

export default PostAvatar

