"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 font-sans">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              <path d="M3.88 10.59L12 15l8.12-4.41V12.5c0 1.25-1.5 2.5-4 3s-5.5.5-8 0-4-1.75-4-3v-1.91z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-[#1a1a1a]">
            College Campus
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#" className="hover:text-blue-600">Search</a>
            <a href="#" className="hover:text-blue-600">My List</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
            <a href="#" className="hover:text-blue-600">Profile</a>
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-6 py-2 text-sm font-bold text-white bg-[#3182ce] rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="px-6 py-2 text-sm font-bold text-gray-700 bg-[#f1f3f5] rounded-lg hover:bg-gray-200"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 pb-4 space-y-4 text-sm font-semibold text-gray-700">
          <a href="#" className="block hover:text-blue-600">Search</a>
          <a href="#" className="block hover:text-blue-600">My List</a>
          <a href="#" className="block hover:text-blue-600">Blog</a>
          <a href="#" className="block hover:text-blue-600">Profile</a>

          <div className="flex gap-3 pt-3">
            <Link
              href="/login"
              className="flex-1 text-center px-4 py-2 font-bold text-white bg-[#3182ce] rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="flex-1 text-center px-4 py-2 font-bold text-gray-700 bg-[#f1f3f5] rounded-lg"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
