import React, { useState, ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// interface Props {
//     children: React.ReactNode;
// }

// export const Carousel: React.FC<Props> = ({ children: slides4 }) => {
export default function Carousel4({ children: slides4 }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides4.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides4.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides4}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow text-yellow-50"
        >
          <AiOutlineLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow text-yellow-50"
        >
          <AiOutlineRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides4.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
