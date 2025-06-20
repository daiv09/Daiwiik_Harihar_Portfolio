'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-bold text-white">DH</span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
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
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
            ${scrolled ? 'md:bg-transparent' : 'bg-slate-900/95 md:bg-transparent'} 
            ${isMenuOpen ? 'bg-slate-900/95 backdrop-blur-sm' : ''}`}>
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded-md md:p-3 transition-colors text-lg ${
                  pathname === '/' ? 'text-blue-500' : 'text-white hover:text-blue-500'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="block py-2 px-3 text-white hover:text-blue-500 rounded-md md:p-3 transition-colors text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="block py-2 px-3 text-white hover:text-blue-500 rounded-md md:p-3 transition-colors text-lg"
              >
                Projects
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center py-2 px-3 text-white hover:text-blue-500 rounded-md md:p-3 transition-colors text-lg"
              >
                More
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } md:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5`}
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    href="/certificates"
                    className={`block px-4 py-2 text-base transition-colors ${
                      pathname === '/certificates' 
                        ? 'bg-slate-700 text-white' 
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Certificates
                  </Link>
                  <Link
                    href="https://medium.com/@daiwiikharihar17147"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/designs"
                    className="block px-4 py-2 text-base text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Designs
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-3.5 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-full md:ml-2 transition-colors text-center text-lg"
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