// components/DynamicSlider.js

import { useState } from 'react';
import ReactPlayer from 'react-player'; 

const DynamicSlider = ({ posts }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {posts.map((post, index) => (
        <div key={index} className="mb-8">
          {post.type === 'video' && (
            <ReactPlayer url={post.url} controls className="w-full h-full" />
          )}
          {post.type === 'image' && post.images.length === 1 && (
            <img src={post.images[0]} alt="Post image" className="w-full h-auto" />
          )}
          {post.type === 'image' && post.images.length > 1 && (
            <Carousel images={post.images} />
          )}
        </div>
      ))}
    </div>
  );
};

export const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <img src={images[current]} alt={`Slide ${current}`} className="w-full h-auto" />
      {images?.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            onClick={handleNext}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default DynamicSlider;
