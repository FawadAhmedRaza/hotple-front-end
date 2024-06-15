import React from "react";

const PersonAvator = ({ url, height = 10, width = 10, alt, ...props }) => {
  if (!url) {
    return (
      <div
        {...props}
        className="flex justify-center items-center bg-gray-200 shadow-md p-4 rounded-full"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        {alt?.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={url}
      alt={alt}
      style={{ height: `${height}px`, width: `${width}px` }}
      className={`rounded-full shadow-md`}
    />
  );
};

export default PersonAvator;
