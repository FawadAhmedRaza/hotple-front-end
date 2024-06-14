import React from 'react'
import Image from 'next/image'

const PostAvatar = ({ img, className }) => {
    return (
        <img src={img === null ? '/assets/images/card_img.webp' : img} alt='avatar' className={`rounded-full w-5 h-5 object-cover ${className}`} />
    )
}

export default PostAvatar

