import React from "react";
import BookTravel from "./BookTravel";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative bg-[#01164F] text-white mt-16">
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
        {/* Left: booking form */}
        <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl w-full lg:w-5/12">
          <BookTravel />
        </div>

        {/* Right: hero image + overlay */}
        <div className="relative mt-12 lg:mt-0 lg:ml-12 w-full lg:w-7/12 h-[600px] rounded-lg overflow-hidden">
          {/* Carousel backgrounds */}
          <Carousel />

          {/* Overlay panel with updated content */}
          <div className="absolute top-20 right-0 bg-black bg-opacity-60 text-white p-8 rounded-lg max-w-md">
            <article
              aria-labelledby="carousel-homepage-title"
              aria-describedby="carousel-homepage-desc"
            >
              <div
                role="complementary"
                aria-live="off"
                id="carousel-homepage-container"
                aria-label="You are navigating a sliding carousel, you are at slide 5 of 6 carousel."
              >
                <p
                  id="carousel-homepage-pretitle"
                  className="text-xs uppercase tracking-wider"
                >
                  NEW 2025 ROUTES
                </p>
                <button
                  type="button"
                  id="carousel-homepage-title"
                  role="link"
                  aria-label="Check out our new flights to Asia and Australia!, you will be redirect away from united.com homepage"
                  className="mt-2 text-3xl font-semibold leading-tight text-left"
                >
                  Check out our new flights to Asia and Australia!
                </button>
                <button
                  type="button"
                  id="carousel-homepage-link"
                  role="link"
                  aria-label="Explore routes, you will be redirect away from united.com homepage"
                  className="mt-4 inline-flex items-center font-medium hover:underline"
                >
                  Explore routes
                </button>
              </div>
              <fieldset
                className="mt-6 flex items-center space-x-4"
                aria-label="Carousel buttons"
                aria-controls="carousel-homepage-container"
                aria-live="off"
              >
                <button
                  aria-label="Pause slideshow"
                  className="text-white text-xl"
                  type="button"
                  value="Play"
                >
                  ⏸
                </button>
                <div className="flex space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
                  <span className="w-2 h-2 rounded-full bg-white block"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-600 block"></span>
                </div>
              </fieldset>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
