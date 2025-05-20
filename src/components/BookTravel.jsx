import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
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

  // Primary tab state
  const [activePrimary, setActivePrimary] = useState("book");
  // Sub-tab state for Book tab
  const [activeSub, setActiveSub] = useState("flight");

  // Shared booking form state
  const [flightType, setFlightType] = useState("roundTrip");
  const [award, setAward] = useState(false);
  const [flexible, setFlexible] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [cabin, setCabin] = useState("Economy");

  // Flight status state
  const [statusOrigin, setStatusOrigin] = useState("");
  const [statusDest, setStatusDest] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [statusDate, setStatusDate] = useState("");

  // Check-in state
  const [confNum, setConfNum] = useState("");
  const [checkLastName, setCheckLastName] = useState("");

  // My trips state
  const [tripConf, setTripConf] = useState("");
  const [tripLastName, setTripLastName] = useState("");

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleBooking = (e) => {
    e.preventDefault();
  };
  const handleStatusSearch = (e) => {
    e.preventDefault();
  };
  const handleCheckin = (e) => {
    e.preventDefault();
  };
  const handleTripSearch = (e) => {
    e.preventDefault();
  };

  // Reusable booking form for Flight/Packages/Hotel/Car
  const BookingForm = () => (
    <form onSubmit={handleBooking} className="space-y-4">
      <div className="flex flex-wrap items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="roundTrip"
            checked={flightType === "roundTrip"}
            onChange={() => setFlightType("roundTrip")}
          />
          <span>Roundtrip</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="oneWay"
            checked={flightType === "oneWay"}
            onChange={() => setFlightType("oneWay")}
          />
          <span>One-way</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={award}
            onChange={() => setAward(!award)}
          />
          <span>Book with miles</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={flexible}
            onChange={() => setFlexible(!flexible)}
          />
          <span>Flexible dates</span>
        </label>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          required
        />
        <button
          type="button"
          onClick={swapLocations}
          className="self-center text-blue-600"
          aria-label="Swap origin and destination"
        >
          <FaExchangeAlt />
        </button>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Jul 18 - Jul 20"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="1 Adult"
          value={`${passengers} Adult`}
          onChange={(e) => setPassengers(Number(e.target.value))}
          className="border rounded px-3 py-2"
        />
      </div>
      <select
        value={cabin}
        onChange={(e) => setCabin(e.target.value)}
        className="border rounded px-3 py-2 w-full md:w-auto"
      >
        <option>Economy</option>
        <option>Premium economy</option>
        <option>Business or First</option>
      </select>
      <div className="w-full flex lg:flex-row flex-col justify-between ">
        <p className="text-sm ">
          <p className="text-blue-700 font-bold ">
            Advanced search <IoIosArrowForward />
          </p>
          <span className="text-[0.6rem]">
            (Certificates, multi-city and upgrades)
          </span>
          <p className="text-[0.6rem]">
            <span className="text-blue-700">Changed bag rules</span> and
            <span className="text-blue-700"> fees for optional services</span>
          </p>
        </p>

        <div className="flex flex-col  space-y-4 lg:space-y-2 w-50  ">
          <button
            type="submit"
            className="flex-1 bg-[#1315d2] text-white py-2 rounded-2xl w-full md:w-auto"
          >
            Find flights
          </button>
          <button
            type="button"
            className="flex justify-center items-center gap-2 border border-blue-600 text-[#1315d2] py-2 rounded-2xl w-full md:w-auto "
          >
            <IoWalletSharp className="text-sm" /> Find your travel credits
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      {/* Primary tabs */}
      <div className="flex space-x-0.5 mb-6 w-full" role="tablist">
        {PRIMARY_TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => setActivePrimary(tab.id)}
            className={`flex-1 flex items-center justify-center py-4   text-sm font-medium ${
              activePrimary === tab.id
                ? " text-black bg-white"
                : "border-transparent text-white bg-[#002244]"
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Book panel */}
      {activePrimary === "book" && (
        <div>
          <div className="flex space-x-2 mb-4" role="tablist">
            {SUB_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                onClick={() => setActiveSub(tab.id)}
                className={`flex-1 text-center py-1 rounded-lg text-sm ${
                  activeSub === tab.id
                    ? "bg-white text-black border-b-2 border-black"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <a
              href="https://cruises.united.com"
              target="_blank"
              rel="noopener"
              className="ml-2 gap-1 flex items-center text-blue-600 text-sm hover:underline"
            >
              Cruise <FaExternalLinkAlt />
            </a>
          </div>
          <BookingForm />
        </div>
      )}

      {/* Flight status panel */}
      {activePrimary === "status" && (
        <form onSubmit={handleStatusSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">From</label>
              <input
                type="text"
                placeholder="From"
                value={statusOrigin}
                onChange={(e) => setStatusOrigin(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">To</label>
              <input
                type="text"
                placeholder="To"
                value={statusDest}
                onChange={(e) => setStatusDest(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">and/or</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Flight number</label>
              <input
                type="text"
                placeholder="Flight no."
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Date</label>
              <select
                value={statusDate}
                onChange={(e) => setStatusDate(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                <option>May 20, 2025</option>
              </select>
            </div>
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Receive flight status notifications by email or text message
          </a>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded w-full"
          >
            Search
          </button>
        </form>
      )}

      {/* Check-in panel */}
      {activePrimary === "checkIn" && (
        <form onSubmit={handleCheckin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Confirmation or ticket number
            </label>
            <input
              type="text"
              placeholder="Confirmation number"
              value={confNum}
              onChange={(e) => setConfNum(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={checkLastName}
              onChange={(e) => setCheckLastName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Check in with your MileagePlus number
          </a>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded w-full"
          >
            Search
          </button>
          <p className="text-xs text-gray-300">
            Check-in is available starting 24 hours before your scheduled
            departure.
          </p>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Check-in and Airport Processing Times
          </a>
        </form>
      )}

      {/* My trips panel */}
      {activePrimary === "trips" && (
        <form onSubmit={handleTripSearch} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Confirmation number
            </label>
            <input
              type="text"
              placeholder="Confirmation number"
              value={tripConf}
              onChange={(e) => setTripConf(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={tripLastName}
              onChange={(e) => setTripLastName(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Find your travel credits ➔
          </a>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded w-full"
          >
            Search
          </button>
          <p className="text-sm text-gray-300">
            Looking for past or canceled flights?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign in.
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
