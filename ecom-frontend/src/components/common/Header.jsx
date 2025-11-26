"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get user from redux
  const user = useSelector((state) => state.user.value);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Shop<span className="text-blue-600">Zone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center w-1/3 bg-gray-100 rounded-full px-3 py-2">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          
          {/* 👤 Show username if logged in */}
          {user ? (
            <span className="text-gray-700 font-medium">
              Hi, {user.name}
            </span>
          ) : (
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
              <User size={22} />
            </Link>
          )}

          {/* Cart */}
          <Link href="/cart" className="relative text-gray-700 hover:text-blue-600">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 font-medium">Shop</Link>
          </nav>

          {/* Mobile Search */}
          <div className="mt-3 flex items-center bg-gray-100 rounded-full px-3 py-2">
            <Search className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
