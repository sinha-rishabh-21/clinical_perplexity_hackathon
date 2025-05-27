"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-50 shadow-sm px-4 sm:px-6 lg:px-12 py-4 font-manrope">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/" className="hover:text-indigo-700 transition-colors">
            TrialSight
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-12 text-gray-700 font-bold">
          <li>
            <Link href="/" className="hover:text-indigo-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="hover:text-indigo-700 transition-colors"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/us"
              className="hover:text-indigo-700 transition-colors"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2 px-2 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              className="block px-2 py-1 rounded hover:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="block px-2 py-1 rounded hover:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              href="/us"
              className="block px-2 py-1 rounded hover:bg-indigo-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
