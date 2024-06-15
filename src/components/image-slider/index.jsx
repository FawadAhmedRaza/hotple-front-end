import React, { useState } from "react";
import Iconify from "../ui/Iconify-icons/Iconify";
import Span from "../ui/Typography/span";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const updateSlider = (index) => {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full h-80 sm:h-400ph md:h-550ph lg:h-550ph xl:h-600ph 2xl:h-680ph mx-auto dark:bg-black bg-light_bg_grey"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="slider" className="relative overflow-hidden h-full">
        <div
          className="absolute inset-0 flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides?.map((slide, index) => (
            <div key={slide?.flowId} className="flex flex-shrink-0 justify-center items-center w-full h-full">
              <img src={slide?.filePath} className="h-full object-cover z-50" loading="lazy"  alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Slide number display */}
      <div className={` ${slides?.length > 1 ? 'flex' : 'hidden'} justify-center items-center rounded-full bg-black bg-opacity-15 py-1 px-2 absolute top-5 lg:top-8 right-7 lg:right-5 transform -translate-y-1/2 text-white ${isHovered ? 'visible' : 'invisible'}`} onClick={() => updateSlider(currentSlide - 1)}>
        <Span className={'!text-dark_secondary_label'}>{currentSlide + 1}/{slides?.length}</Span>
      </div>

      {/* Previous button */}
      <div className={` ${slides?.length > 1 ? 'flex' : 'hidden'} justify-center items-center rounded-full bg-black bg-opacity-15 w-8 h-8 absolute top-1/2 left-2 sm:left-5 lg:left-2 transform -translate-y-1/2 text-white ${isHovered ? 'visible' : 'invisible'}`} onClick={() => updateSlider(currentSlide - 1)}>
        <Iconify icon={'iconamoon:arrow-left-2-duotone'} className="!w-6 !h-6 !text-dark_secondary_label" />
      </div>

      {/* Next button */}
      <div className={` ${slides?.length > 1 ? 'flex' : 'hidden'} justify-center items-center rounded-full bg-black bg-opacity-15 w-8 h-8 absolute top-1/2 right-5 sm:right-7 lg:right-2 transform -translate-y-1/2 text-white ${isHovered ? 'visible' : 'invisible'}`} onClick={() => updateSlider(currentSlide + 1)}>
        <Iconify icon={'iconamoon:arrow-right-2-duotone'} className="!w-6 !h-6 !text-dark_secondary_label" />
      </div>

      {/* Bottom navigation */}
      <div className={`${slides?.length > 1 ? 'flex' : 'hidden'} absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 mt-4`}>
        {slides?.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${currentSlide === index ? "bg-dark_primary_label" : "bg-gray-300"}`}
            onClick={() => updateSlider(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
