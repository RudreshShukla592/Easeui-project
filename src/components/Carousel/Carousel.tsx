import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

const Carousel = ({ items, className }: CarouselProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextHandler = () => {
    setCurrentIdx((prev) =>
      prev === items.length - 1 ? (prev = 0) : prev + 1,
    );
  };

  const pervHandler = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? (prev = items.length - 1) : prev - 1,
    );
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full ${
        className ?? ""
      }`}
    >
      <div className="relative flex items-center justify-center w-full">
        {/* Previous button */}
        <button
          onClick={pervHandler}
          className="absolute left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Carousel content */}
        <div
          key={currentIdx}
          className="flex h-[300px] w-[390px] items-center justify-center rounded-xl border border-gray-200 bg-white text-4xl font-bold text-gray-800 shadow-sm animate-[fadeIn_300ms_ease-in-out]"
        >
          {items[currentIdx]}
        </div>

        {/* Next button */}
        <button
          onClick={nextHandler}
          className="absolute right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex items-center gap-2 mt-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIdx === index ? "bg-gray-800 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
