// src/components/Hero.jsx
import React from "react";
import BookTravel from "./BookTravel";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative text-white mt-16 overflow-hidden">
      {/* Full-section background carousel */}
      <Carousel />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left: booking form */}
        <div
          className="bg-white text-gray-900 p-0 rounded-xl  shadow-xl lg:mt-0 mt-60
                        w-full sm:w-11/12 md:w-3/4 lg:w-6/15"
        >
          <BookTravel />

          {/* GIF under form on screens smaller than lg */}
          <img
            src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
            alt="card gif"
            className="block lg:hidden mt-4 w-full h-28 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
