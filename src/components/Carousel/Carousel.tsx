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
      className={`relative flex items-center justify-center w-full ${className ?? ""}`}
    >
      <button
        onClick={pervHandler}
        className="absolute left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>

      <div
        key={currentIdx}
        className="flex h-[300px] w-[390px] items-center justify-center rounded-xl border border-gray-200 bg-white text-4xl font-bold text-gray-800 shadow-sm animate-[fadeIn_300ms_ease-in-out]"
      >
        {items[currentIdx]}
      </div>

      <button
        onClick={nextHandler}
        className="absolute right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
