import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaGlobe,
  FaBars,
  FaTimes,
  FaCaretDown,
  FaCaretRight,
} from "react-icons/fa";

const PRIMARY_ITEMS = [
  { label: "Book", hasDropdown: true },
  { label: "My trips", hasDropdown: true },
  { label: "Travel info", hasDropdown: true },
  { label: "MileagePlus", hasDropdown: true },
  { label: "Deals", hasDropdown: true },
  { label: "Help", hasDropdown: false, isLink: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      {/* ─── Desktop / Tablet Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 w-full h-16  bg-black  bg-opacity-30 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between lg:justify-evenly h-16 px-4">
          <div className="flex gap-5">
            <a href="/" className="flex-shrink-0">
              <img
                src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
                alt="United logo link to homepage"
                className="h-12"
              />
            </a>
            {/* Primary nav (md+) */}
            <nav aria-label="primary" className="hidden md:flex space-x-6">
              {PRIMARY_ITEMS.map(({ label, hasDropdown, isLink }) =>
                isLink ? (
                  <a
                    key={label}
                    href="/en/us/fly/help-center.html"
                    className="flex items-center text-sm font-medium text-white hover:text-[#8fb3f1] hover:underline"
                  >
                    {label}
                    <FaCaretRight className="ml-1 text-xs" />
                  </a>
                ) : (
                  <button
                    key={label}
                    className="flex items-center text-sm font-medium  text-white hover:text-[#8fb3f1] hover:underline"
                  >
                    {label}
                    {hasDropdown && <FaCaretDown className="ml-1 text-xs" />}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Secondary actions (md+) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="flex items-center space-x-1 text-white  py-2 px-1 rounded-2xl hover:bg-[#93b7f8]  hover:text-black  active:ring-[#8fb3f1]  active:border-4 active:border-white"
              aria-label="Language selector"
            >
              <FaGlobe />
              <span className="text-sm font-bold">English – US $</span>
            </button>
            <button
              aria-label="Search"
              className=" text-white p-1 rounded-2xl hover:bg-[#93b7f8] hover:text-black "
            >
              <FaSearch />
            </button>
            <button
              aria-label="Sign in"
              className=" text-white p-1 rounded-2xl hover:bg-[#93b7f8] hover:text-black "
            >
              <FaUser />
            </button>
            <button
              aria-label="View cart"
              className=" text-white p-1 rounded-2xl hover:bg-[#93b7f8] hover:text-black "
            >
              <FaShoppingCart />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-gray-700 hover:text-gray-900"
            aria-label="Open main menu"
          >
            <FaBars size={20} />
          </button>
        </div>
      </header>

      {/* ─── Mobile Drawer ─────────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setMobileOpen(false)}
          />

          {/* panel */}
          <div className="relative w-64 max-w-full bg-white p-4">
            {/* close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            {/* logo + language */}
            <div className="flex items-center mb-6">
              <img
                src="/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
                alt="United logo"
                className="h-8"
              />
              <button className="ml-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <FaGlobe className="mr-1" />
                English – US $
              </button>
            </div>

            {/* search */}
            <form className="mb-6 flex">
              <input
                type="search"
                placeholder="Search united.com"
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm"
              >
                Search
              </button>
            </form>

            {/* menu items */}
            <nav className="flex flex-col space-y-2">
              {PRIMARY_ITEMS.map(({ label, hasDropdown, isLink }) => (
                <button
                  key={label}
                  className="flex justify-between items-center w-full text-left py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <span>{label}</span>
                  {isLink ? (
                    <FaCaretRight className="text-xs" />
                  ) : hasDropdown ? (
                    <FaCaretDown className="text-xs" />
                  ) : null}
                </button>
              ))}

              <a
                href="/en/us/fly/help-center.html"
                className="mt-4 flex items-center text-blue-600 font-medium"
              >
                Help <FaCaretRight className="ml-1 text-xs" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
