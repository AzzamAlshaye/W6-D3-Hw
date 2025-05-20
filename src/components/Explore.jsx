// src/pages/Explore.jsx
import React, { useState } from "react";
import {
  FiCalendar,
  FiSettings,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Explore() {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 lg:px-50 py-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Explore destinations</h1>
        <p className="text-gray-700">
          Not sure where to go? Use our interactive map to find flights to great
          destinations.
        </p>
      </div>

      {/* Error box */}
      <div className="border border-red-500 bg-red-50 text-red-700 rounded px-4 py-3">
        <span className="font-medium">
          ⚠️ Sorry, no results have been found.
        </span>{" "}
        Please enter a different origin location or expand your search area.
      </div>

      {/* Search form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
        {/* Flying from */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Flying from</label>
          <input
            type="text"
            defaultValue="Riyadh RUH"
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
          />
        </div>

        {/* Search type */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Search type</label>
          <select className="border rounded px-3 py-2 focus:outline-none focus:ring">
            <option>Roundtrip</option>
            <option>One-way</option>
          </select>
        </div>

        {/* Dates */}
        <div className="flex flex-col relative">
          <label className="mb-1 font-medium">Dates</label>
          <button
            type="button"
            className="flex items-center justify-between border rounded px-3 py-2 focus:outline-none focus:ring"
          >
            Flexible dates
            <FiCalendar className="ml-2 text-lg" />
          </button>
        </div>

        {/* Max price */}
        <div className="flex flex-col relative">
          <label className="mb-1 font-medium">Max price</label>
          <button
            type="button"
            className="flex items-center justify-between border rounded px-3 py-2 focus:outline-none focus:ring"
          >
            $2000
            <FiSettings className="ml-2 text-lg" />
          </button>
        </div>

        {/* Search button */}
        <div className="md:col-span-1 flex items-center space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
          <a href="#" className="text-blue-600 hover:underline">
            Refine search
          </a>
        </div>
      </form>

      {/* Collapsible “List of search results” */}
      <div className="space-y-2">
        <button
          onClick={() => setListOpen((o) => !o)}
          className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          <span className="font-medium">List of search results</span>
          {listOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
        {listOpen && (
          <div className="border rounded p-4 bg-white text-gray-700">
            {/* render your list items here */}
            <p>No results to display.</p>
          </div>
        )}
      </div>

      {/* Map embed */}
      <div className="w-full h-[450px] rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24506021.988728344!2d-94.06739!3d41.429288!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1747777480030!5m2!1sen!2sus"
          title="Destination Map"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Disclaimer */}
      <p className="text-center text-sm text-gray-500">
        *The prices shown are roundtrip fares and have been available within the
        last 48 hours. Additional baggage fees may apply. Fare prices in miles
        will include additional taxes and fees.
      </p>
    </div>
  );
}
