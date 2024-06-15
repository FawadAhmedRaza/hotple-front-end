import Image from "next/image";
import React from "react";

const PostAvatar = ({ img, className }) => {
  return (
    <img
      src={img}
      alt="avatar"
      className={`rounded-full !w-5 !h-5 ${className}`}
    />
  );
};

export default PostAvatar;
