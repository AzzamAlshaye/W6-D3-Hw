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
    <footer className="mt-12 text-white ">
      {/* 1) Dark-blue Popular Topics */}
      <div className="bg-[#011840] py-12">
        <div className="container mx-auto px-50 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left: topics grid */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Popular topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-6">
              {popularTopics.map(({ title, href, Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="flex items-center space-x-2 text-white hover:underline"
                >
                  <Icon className="w-5 h-5" />
                  <span>{title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: search box */}
          <div className="mt-8 lg:mt-0 w-full lg:w-1/4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search united"
                className="w-full h-12 pl-4 pr-12 rounded-lg text-black"
              />
              <button className="absolute top-1/2 right-4 -translate-y-1/2 text-white">
                <FiSearch size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2) Light-gray nav bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-[#1d09ff]">
          <nav className="flex flex-wrap gap-6">
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
            className="mt-4 md:mt-0 flex items-center text-sm text-[#1d09ff] hover:underline"
          >
            <FiInfo className="mr-2" />
            Important notices
          </a>
        </div>
      </div>

      {/* 3) Black section */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 space-y-8">
          {/* Search button + locale/social */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button className="flex items-center space-x-2 bg-white text-[#1d09ff] px-6 py-3 rounded-full hover:bg-gray-200 transition">
              <FiSearch />
              <span>Search</span>
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-white">
              <div className="flex items-center space-x-2">
                <FiGlobe />
                <span>English – United States $</span>
                <FiExternalLink size={14} />
              </div>
              <a href="#" className="hover:underline">
                Español
              </a>
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
          <div className="flex flex-wrap gap-4 text-xs text-white">
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
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <FiExternalLink />
              <span>
                Indicates an external site that may or may not meet
                accessibility guidelines.
              </span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <img
                src="/UnitedLogoInverted.svg"
                alt="United logo"
                className="h-8"
              />
              <img
                src="/StarAlliance.svg"
                alt="Star Alliance logo"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4) CoBrowse button */}
      <div className="relative">
        <button className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1d09ff] px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition flex items-center space-x-2">
          <FiChevronRight />
          <span>CoBrowse</span>
        </button>
      </div>
    </footer>
  );
}
