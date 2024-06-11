import Image from 'next/image'
import React from 'react'

const PostAvatar = ({ img }) => {
    return (
            <Image src={img} alt='avatar' width={20} height={10} className=' rounded-full '/>
    )
}

export default PostAvatar

