"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-semibold">
            <Link href="/" className="hover:text-gray-600">
              <FaHome />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/add-apartment" className="hover:text-gray-600">
              Add Apartment
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/add-apartment"
              className="hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Add Apartment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
