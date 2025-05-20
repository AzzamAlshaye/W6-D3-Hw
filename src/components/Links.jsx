import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const linksData = [
  {
    title: "Plan your trip",
    body: "Find a destination and any entry requirements.",
    href: "#",
  },
  {
    title: "Visit the Help Center",
    body: "Find info on refunds, bags, seats and more.",
    href: "#",
  },
  {
    title: "Stay connected",
    body: "Get Wi-Fi for your next flight.",
    href: "#",
  },
  {
    title: "Time to start packing",
    body: "Learn more about bringing bags on your trip.",
    href: "#",
  },
  {
    title: "What to know before you go",
    body: "The world of travel has changed, find out how.",
    href: "#",
  },
  {
    title: "See what's on your flight",
    body: "View your seating, food and entertainment options.",
    href: "#",
  },
];

const slidesData = [
  {
    title: "Break the Wi-Fi barrier",
    body: "Join MileagePlus® to access the fastest connectivity in the sky, for free. Now available on select United flights.",
    btnText: "Join now",
    imgSrc:
      "https://media.united.com/assets/m/730a5b86b08a82b3/original/1265_Starlink_BelowTheFold_500x300-new.jpg",
  },
  {
    title: "Travel assistance that fits in your hand",
    body: "Do the smart thing with your smart phone. Use our app to check-in for your flight, view your boarding pass, track bags, check your flight status and binge TV shows and movies onboard.",
    btnText: "Download the app",
    imgSrc:
      "https://media.united.com/assets/m/337be9cec1909e48/original/c3483c91-7704-4c0e-b9f7-7ff46ff5ad49.jpg",
  },
  {
    title: "Travel inspiration with you in mind",
    body: "Enjoy curated itineraries and hidden gems from Hemispheres®.",
    btnText: "Get inspired",
    imgSrc:
      "https://media.united.com/assets/m/3d5fcbf8b5f1cd19/original/Final_Collage.jpg",
  },
  {
    title: "Explore modern-day Rome",
    body: "The Colosseum, the Pantheon, the Forum Romanum — visiting ancient Rome is fun. Pasta making, wine tasting, big bus tours — visiting modern Rome is better.",
    btnText: "Book now",
    imgSrc:
      "https://media.united.com/assets/m/421167b5f796bb32/original/rome.jpg",
  },
  {
    title: "New look, new planes",
    body: "Who's excited for more overhead bin space, better entertainment options, bluetooth at every seat and updated United Clubs? Because we sure are.",
    btnText: "Learn more",
    imgSrc:
      "https://media.united.com/assets/m/4cecf49eceb77eef/original/unitednext.jpg",
  },
  {
    title: "Save by bundling your flight, hotel, and car",
    body: "Take your trip to new heights with United Packages. Plus, MileagePlus members earn 1,000 bonus miles. Spend more time exploring and less time planning.",
    btnText: "Book a package",
    imgSrc:
      "https://media.united.com/assets/m/7193fb3ffaa41a7f/original/upackages_082124.jpg",
  },
];

export default function Links() {
  const [slideIndex, setSlideIndex] = useState(2); // start on slide 3 as per your example
  const total = slidesData.length;

  const prev = () => setSlideIndex((i) => (i - 1 + total) % total);
  const next = () => setSlideIndex((i) => (i + 1) % total);

  return (
    <div className="container mx-auto px-4 lg:px-80 py-8 space-y-12">
      {/* Useful links */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Useful links for you</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {linksData.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="flex justify-between items-center
                         border border-gray-300 rounded-lg
                         p-6 hover:border-blue-600
                         transition focus:outline-none focus:ring"
              aria-label={`Opens in new tab ${link.title} ${link.body}`}
            >
              <div>
                <h4 className="text-lg font-medium mb-1">{link.title}</h4>
                <p className="text-sm text-gray-600 mb-0">{link.body}</p>
              </div>
              <IoIosArrowForward className="text-2xl text-blue-600" />
            </a>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${slideIndex * 100}%)`,
            }}
          >
            {slidesData.map((slide, idx) => (
              <div
                key={idx}
                className={`flex-none w-full flex flex-col md:flex-row
                      bg-black text-white rounded-lg overflow-hidden`}
              >
                {/* Text + button */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">{slide.title}</h3>
                  <p className="mb-6">{slide.body}</p>
                  <button
                    className="inline-block border border-blue-600 text-blue-600
                         rounded-full px-4 py-2 text-sm w-max bg-white
                         hover:bg-blue-600 hover:text-white
                         transition"
                  >
                    {slide.btnText}
                  </button>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 h-48 md:h-auto">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Previous slide"
          >
            <IoIosArrowBack className="text-2xl text-blue-600 border-1 rounded-2xl" />
          </button>
          <span className="text-sm font-medium">
            {slideIndex + 1} / {total}
          </span>
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Next slide"
          >
            <IoIosArrowForward className="text-2xl text-blue-600 border-1 rounded-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
