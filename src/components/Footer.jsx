import React from "react";
import {
  FiSearch,
  FiExternalLink,
  FiInfo,
  FiGlobe,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaWifi,
  FaPlane,
  FaBuilding,
  FaPaw,
  FaBookmark,
  FaSuitcase,
  FaDollarSign,
  FaHeadset,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const popularTopics = [
  { title: "Wi-Fi", href: "#", Icon: FaWifi },
  { title: "Change flight", href: "#", Icon: FaPlane },
  { title: "United Club", href: "#", Icon: FaBuilding },
  { title: "Traveling with pets", href: "#", Icon: FaPaw },
  { title: "MileagePlus", href: "#", Icon: FaBookmark },
  { title: "Baggage", href: "#", Icon: FaSuitcase },
  { title: "Refund", href: "#", Icon: FaDollarSign },
  { title: "Help Center", href: "#", Icon: FaHeadset },
];

const grayNav = [
  { title: "About United", href: "#" },
  { title: "Products and services", href: "#" },
  { title: "Popular destinations", href: "#" },
  { title: "Careers", href: "#", external: true },
];

const bottomLinks = [
  { title: "Contract of carriage", href: "#" },
  { title: "Lengthy tarmac delay plan", href: "#" },
  { title: "Legal Information", href: "#" },
  { title: "Our United Customer Commitment", href: "#" },
  { title: "Help Center", href: "#" },
  { title: "Accessible travel", href: "#" },
  { title: "Privacy Policy", href: "#" },
  {
    title: "Do Not Sell or Share My Personal Information",
    href: "#",
    external: true,
  },
  { title: "Interest Based Ads", href: "#" },
  { title: "United Jetstream", href: "#", external: true },
  { title: "Cargo", href: "#", external: true },
  { title: "Electronic Invoice", href: "#", external: true },
];

export default function Footer() {
  return (
    <footer className="mt-12 text-white">
      {/* 1) Dark-blue Popular Topics */}
      <div className="bg-[#011840] py-12">
        <div className="mx-auto px-4 max-w-full lg:max-w-7xl">
          {/* Header + search */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              Popular topics
            </h2>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search united"
                  className="w-full h-12 pl-12 pr-4 rounded-lg text-black bg-white focus:outline-none focus:ring"
                />
                <button className="absolute inset-y-0 left-4 flex items-center justify-center text-black">
                  <FiSearch size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Topics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-8">
            {popularTopics.map(({ title, href, Icon }) => (
              <a
                key={title}
                href={href}
                className="flex items-center space-x-2 text-white hover:underline"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2) Light-gray nav bar */}
      <div className="bg-gray-100">
        <div className="mx-auto px-4 py-4 max-w-full lg:max-w-7xl flex flex-col md:flex-row items-center justify-between text-sm text-[#1d09ff] gap-y-4 md:gap-y-0">
          <nav className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {grayNav.map(({ title, href, external }) => (
              <a
                key={title}
                href={href}
                className="flex items-center hover:underline"
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener" : undefined}
              >
                {title}
                {external && <FiExternalLink className="ml-1" />}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="flex items-center hover:underline text-[#1d09ff]"
          >
            <FiInfo className="mr-2" />
            Important notices
          </a>
        </div>
      </div>

      {/* 3) Black section */}
      <div className="bg-black py-8">
        <div className="mx-auto px-4 max-w-full lg:max-w-6xl space-y-8">
          {/* Search + locale/social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
            <button className="flex items-center space-x-2 bg-white text-[#1d09ff] px-6 py-3 rounded-full hover:bg-gray-200 transition">
              <FiSearch />
              <span>Search</span>
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <FiGlobe />
                <span>English – United States $</span>
                <FiExternalLink size={14} />
                <a href="#" className="hover:underline">
                  Español
                </a>
              </div>
              <div className="flex items-center space-x-4 text-xl">
                <FaTiktok />
                <FaFacebookF />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-wrap gap-4 text-xs text-white justify-center md:justify-start">
            {bottomLinks.map(({ title, href, external }) => (
              <a
                key={title}
                href={href}
                className="hover:underline"
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener" : undefined}
              >
                {title}
                {external && <FiExternalLink className="inline ml-1" />}
              </a>
            ))}
          </div>

          {/* External legend + logos */}
          <div className="flex flex-col lg:flex-row items-center justify-between text-xs text-gray-400 gap-y-4 lg:gap-y-0">
            <div className="flex items-center space-x-2 text-center lg:text-left">
              <FiExternalLink />
              <span>
                Indicates an external site that may or may not meet
                accessibility guidelines.
              </span>
            </div>
            <div className="flex items-center space-x-4 justify-center lg:justify-end">
              <img
                src="https://www.united.com/3149651732b3c9591453.UnitedLogoInverted.svg"
                alt="United logo"
                className="h-5"
              />
              <img
                src="https://www.united.com/dd45368f41b2bc6e1df9.StarAlliance.svg"
                alt="Star Alliance logo"
                className="h-5"
              />
            </div>
          </div>
        </div>
        {/* 4) CoBrowse button */}
        <div className="relative py-8">
          <button className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-white text-[#1d09ff] px-4 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition flex items-center space-x-2 font-semibold">
            <FiChevronRight />
            <span>CoBrowse</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
