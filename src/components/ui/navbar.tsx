"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    `block py-2 px-3 rounded-sm md:p-0 ${
      pathname === path
        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
    }`;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyPortfolio
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>

            {/* About Me Dropdown (untouched) */}
            <li className="relative group">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className={`flex items-center justify-between w-full py-2 px-3 rounded-sm md:p-0 ${
                  ["/pages/resume", "/pages/testimonials"].includes(pathname)
                    ? "text-blue-700 md:dark:text-blue-500"
                    : "text-gray-900 dark:text-white md:hover:text-blue-700 md:dark:hover:text-blue-500"
                }`}
              >
                About Me
                <svg
                  className="w-3 h-3 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul className="absolute left-0 hidden group-hover:block mt-2 w-44 bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
                <li>
                  <Link
                    href="/pages/resume"
                    className={`block px-4 py-2 ${
                      pathname === "/pages/resume"
                        ? "text-blue-700 dark:text-blue-500 font-medium"
                        : "text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/testimonials"
                    className={`block px-4 py-2 ${
                      pathname === "/pages/testimonials"
                        ? "text-blue-700 dark:text-blue-500 font-medium"
                        : "text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/pages/projects"
                className={getLinkClass("/pages/projects")}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/pages/skills"
                className={getLinkClass("/pages/skills")}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link href="/pages/testimonials" className={getLinkClass("/blog")}>
                Blog
              </Link>
            </li>

            <li>
              <Link href="/pages/testimonials" className={getLinkClass("/services")}>
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/pages/contact"
                className={getLinkClass("/pages/contact")}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;