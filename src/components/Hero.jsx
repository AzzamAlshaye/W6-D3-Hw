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
        <div className="bg-white text-gray-900 p-8 pt-0 rounded-xl shadow-xl w-full lg:w-6/15">
          <BookTravel />
        </div>
      </div>
    </section>
  );
}
