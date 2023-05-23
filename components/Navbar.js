import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeCharger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <nav className="bg-slate-50 dark:bg-slate-500 sticky top-0 z-50">
      <div className="px-0 lg:px-2 xl:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="w-40 md:w-32 lg:w-36 xl:w-auto xl:h-auto"
                  src="/istockphoto-1216719216-1024x1024-removebg-preview.png"
                  width={150}
                  height={150}
                  alt="Image"
                ></Image>
              </Link>
            </div>
            <div className="hidden md:block ml-3 lg:ml-12 xl:ml-24">
              <div className="flex items-baseline space-x-0 lg:space-x-7 xl:space-x-12">
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  PROBLEM_STATEMENTS
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  PRIZE
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  SPONSOR
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-base font-bold"
                  href="/about"
                >
                  FAQ
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  AGENDA
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  RULES
                </Link>
                <Link
                  className="text-black dark:text-white hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-bold"
                  href="/about"
                >
                  CONTACT
                </Link>
                {/* Add more menu items here */}
              </div>
            </div>
          </div>
          <div className="flex pr-1 md:hidden">
            <button
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute top-5 right-16 md:right-3 lg:right-5">
        {renderThemeCharger()}
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              PROBLEM_STATEMENTS
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              PRIZE
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              SPONSOR
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              AGENDA
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              RULES
            </Link>
            <Link
              href="/"
              className="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-bold"
            >
              CONTACT
            </Link>

            {/* Add more menu items here */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
//  <div className=" absolute top-7 right-10">{renderThemeCharger()}</div>
