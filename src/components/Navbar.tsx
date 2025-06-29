'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react'; // Lucide for modern icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-4xl font-extrabold text-white tracking-widest">
          DH
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Desktop Menu */}
        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-lg">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/#about' },
              { name: 'Projects', href: '/#projects' }
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 rounded-md transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-blue-500'
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 py-2 px-3 text-white hover:text-blue-400 transition-colors"
              >
                More <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute md:absolute left-0 mt-2 w-48 bg-slate-800 text-gray-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-20 z-50"
                  >
                    <Link
                      href="/certificates"
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block px-4 py-2 hover:bg-slate-700 transition`}
                    >
                      Certificates
                    </Link>
                    <Link
                      href="https://medium.com/@daiwiikharihar17147"
                      target="_blank"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-700 transition"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/designs"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-700 transition"
                    >
                      Designs
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Contact Button */}
            <li>
              <Link
                href="/#contact"
                className="mt-2 md:mt-0 block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-center transition-colors duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
