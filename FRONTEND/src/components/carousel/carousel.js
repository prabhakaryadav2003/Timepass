import React, { useState, useEffect } from "react";

import "./carousel.css";

const Carousel = ({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 4000,
}) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden w-[95vw] h-full rounded-3xl mt-[5rem] md:mt-0 z-1 none-black">
      <div
        className={`flex transition-transform ease-out duration-[2s] rounded-3xl `}
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 rounded-3xl overflow-hidden">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;