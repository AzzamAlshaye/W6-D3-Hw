import React, { useState } from "react";
import {
  FaPlane,
  FaClock,
  FaCheckCircle,
  FaSuitcase,
  FaExchangeAlt,
} from "react-icons/fa";

export default function BookTravel() {
  const PRIMARY_TABS = [
    { id: "book", label: "Book", icon: <FaPlane /> },
    { id: "status", label: "Flight status", icon: <FaClock /> },
    { id: "checkIn", label: "Check-in", icon: <FaCheckCircle /> },
    { id: "trips", label: "My trips", icon: <FaSuitcase /> },
  ];
  const SUB_TABS = [
    { id: "flight", label: "Flight" },
    { id: "packages", label: "Packages" },
    { id: "hotel", label: "Hotel" },
    { id: "car", label: "Car" },
  ];

  const [activePrimary, setActivePrimary] = useState("book");
  const [activeSub, setActiveSub] = useState("flight");
  const [flightType, setFlightType] = useState("roundTrip");
  const [award, setAward] = useState(false);
  const [flexible, setFlexible] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [cabin, setCabin] = useState("Economy");

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleFindFlights = (e) => {
    e.preventDefault();
    // Your search handler here
  };

  return (
    <div>
      {/* Primary tabs */}
      <div className="flex space-x-2 mb-4" role="tablist">
        {PRIMARY_TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => setActivePrimary(tab.id)}
            className={`flex-1 flex items-center justify-center p-2 rounded-t-lg border-b-2 ${
              activePrimary === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600"
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activePrimary === "book" && (
        <div>
          {/* Sub tabs */}
          <div className="flex space-x-2 mb-4" role="tablist">
            {SUB_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                onClick={() => setActiveSub(tab.id)}
                className={`flex-1 text-center py-1 rounded-lg ${
                  activeSub === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <a
              href="https://cruises.united.com"
              target="_blank"
              rel="noopener"
              className="ml-2 flex items-center px-3 py-1 bg-transparent text-blue-600 hover:underline"
            >
              Cruise <span className="ml-1">↗</span>
            </a>
          </div>

          {/* Flight form */}
          {activeSub === "flight" && (
            <form onSubmit={handleFindFlights}>
              {/* Flight type */}
              <div className="flex mb-4">
                <label className="mr-4 flex items-center">
                  <input
                    type="radio"
                    value="roundTrip"
                    checked={flightType === "roundTrip"}
                    onChange={() => setFlightType("roundTrip")}
                    className="mr-1"
                  />
                  Roundtrip
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="oneWay"
                    checked={flightType === "oneWay"}
                    onChange={() => setFlightType("oneWay")}
                    className="mr-1"
                  />
                  One-way
                </label>
              </div>

              {/* Checkboxes */}
              <div className="flex mb-4 space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={award}
                    onChange={() => setAward(!award)}
                    className="mr-1"
                  />
                  Book with miles
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={flexible}
                    onChange={() => setFlexible(!flexible)}
                    className="mr-1"
                  />
                  Flexible dates
                </label>
              </div>

              {/* Origin & Destination */}
              <div className="flex mb-4 space-x-2">
                <input
                  type="text"
                  placeholder="From"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                  required
                />
                <button
                  type="button"
                  onClick={swapLocations}
                  className="p-2 bg-gray-200 rounded"
                  aria-label="Swap origin and destination"
                >
                  <FaExchangeAlt />
                </button>
                <input
                  type="text"
                  placeholder="To"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                  required
                />
              </div>

              {/* Dates */}
              <div className="flex mb-4 space-x-2">
                <input
                  type="text"
                  placeholder="Departure"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Return"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                  required={flightType === "roundTrip"}
                  disabled={flightType === "oneWay"}
                />
              </div>

              {/* Passengers & Cabin */}
              <div className="flex mb-4 space-x-2">
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-24 border px-3 py-2 rounded"
                  aria-label="Number of travelers"
                />
                <select
                  value={cabin}
                  onChange={(e) => setCabin(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded"
                  aria-label="Cabin class"
                >
                  <option>Economy</option>
                  <option>Premium economy</option>
                  <option>Business or First</option>
                </select>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-2 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Find flights
                </button>
                <button
                  type="button"
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50"
                >
                  Find your travel credits
                </button>
              </div>
            </form>
          )}

          {/* Placeholder panels for other sub-tabs */}
          {activeSub !== "flight" && (
            <div className="py-6 text-gray-500 italic text-center">
              {SUB_TABS.find((t) => t.id === activeSub)?.label} Search Coming
              Soon
            </div>
          )}
        </div>
      )}

      {/* Placeholder panels for non-'book' primary tabs */}
      {activePrimary !== "book" && (
        <div className="py-6 text-gray-500 italic text-center">
          {PRIMARY_TABS.find((t) => t.id === activePrimary)?.label} Panel Coming
          Soon
        </div>
      )}
    </div>
  );
}
