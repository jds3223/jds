'use client';
import React from 'react';
import { FiBookmark, FiPlus, FiMenu } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { navItems } from '@/data/header';


const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 flex items-center justify-between border-b border-white/50 fixed top-0 w-full h-20">
      {/* Logo */}
      <div className="flex items-center gap-4 h-full">
        <div className="text-2xl font-bold text-amber-500 tracking-widest border-e-2 border-white/50 px-4 h-full flex items-center">AX</div>
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-amber-500 transition">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-sm">
        <FaWhatsapp className="text-amber-500 cursor-pointer" />
        <a href="#" className="text-amber-500 hover:underline">FOLLOW US</a>
        <a href="#" className="text-amber-500 hover:underline">CALL US</a>

        <div className="border-l border-gray-700 h-6 mx-2" />

        <div className="flex items-center gap-4">
          <FiPlus className="cursor-pointer" />
          <FiMenu className="cursor-pointer" />
          <FiBookmark className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
