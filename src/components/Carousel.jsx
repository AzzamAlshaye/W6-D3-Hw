// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero-images/hero-1.jpg";
import hero2 from "../assets/hero-images/hero-2.jpg";
import hero3 from "../assets/hero-images/hero-3.jpg";
import hero4 from "../assets/hero-images/hero-4.jpg";
import { IoIosPause } from "react-icons/io";

const IMAGES = [
  "https://media.united.com/assets/m/178313ba33aca8b4/original/1265_Starlink_HP_Takeover_Desktop_img_1366x768-2x.jpg",
  "https://media.united.com/assets/m/6036467b6c6c2366/original/040125_FOC_95K_HPCARSUL1_2732x1536_TY.jpg",
  hero1,
  hero2,
  hero3,
  hero4,
];

const SLIDES = [
  {
    pretitle: "FAST WI-FI",
    title:
      "Break the Wi-Fi barrier. Free Wi-Fi on select flights. Only with MileagePlus.",
    linkText: "Join MileagePlus",
  },
  {
    pretitle: "UNITED MILEAGEPLUS CARDS",
    title: "If you ever fly United, you should probably have a United card.",
    linkText: "Learn more",
  },
  {
    pretitle: "WANT FLIGHT DEALS?",
    title: "Text JOIN to 71529, and we’ll send low fares and sales!",
    linkText: "Subscribe now",
  },
  {
    pretitle: "TAKE THE TRIP",
    title: "Get expert travel guides from Hemispheres.",
    linkText: "Start planning",
  },
  {
    pretitle: "NEW 2025 ROUTES",
    title: "Check out our new flights to Asia and Australia!",
    linkText: "Explore routes",
  },
  {
    pretitle: "WIN A TRIP",
    title: "Enter by June 5 to win a trip to Hawaii with United Packages.",
    linkText: "Enter sweepstakes",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % IMAGES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-500"
        style={{ backgroundImage: `url(${IMAGES[index]})` }}
      />

      {/* Overlay panel */}
      <div
        className="absolute top-20 right-72 m-8
             bg-black/50
             text-white
             p-4 w-80 rounded-lg max-w-md"
      >
        <article
          aria-labelledby="carousel-homepage-title"
          aria-describedby="carousel-homepage-desc"
        >
          <div
            role="complementary"
            aria-live="polite"
            id="carousel-homepage-container"
            aria-label={`Slide ${index + 1} of ${IMAGES.length} carousel`}
          >
            <p className="text-xs uppercase tracking-wider">{slide.pretitle}</p>
            <h2
              id="carousel-homepage-title"
              className="mt-2 text-3xl font-semibold leading-tight"
            >
              {slide.title}
            </h2>
            <button
              type="button"
              id="carousel-homepage-link"
              role="link"
              className="mt-2 inline-flex items-center font-medium hover:underline"
            >
              {slide.linkText}
            </button>
          </div>
          <fieldset
            className="mt-6 flex items-center space-x-2"
            aria-label="Carousel navigation"
          >
            <button
              aria-label={
                index === index ? "Pause slideshow" : "Play slideshow"
              }
              className="text-white text-xl"
            >
              <IoIosPause />
            </button>
            {IMAGES.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full block ${
                  i === index ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </fieldset>
        </article>
      </div>
      <img
        src="https://apps.rokt.com/userfiles/7325596850474455043.gif"
        alt="card gif"
        className="absolute bottom-10 right-80 w-100 h-28  pointer-events-none"
      />
    </div>
  );
}
