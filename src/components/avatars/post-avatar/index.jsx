import React from 'react'
import Image from 'next/image'

const PostAvatar = ({ src, className }) => {
    return (
        <img src={src === null ? '/assets/images/person.jpeg' : src} alt='avatar' className={`rounded-full w-5 h-5 object-cover ${className}`} />
    )
}

export default PostAvatar

