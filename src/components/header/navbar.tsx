'use client';
import { useState } from 'react';
import { FiBookmark, FiPlus, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { navItems } from '@/data/header';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-background text-white px-6 flex items-center justify-between border-b border-white/20 fixed top-0 w-full h-20 z-40">
      {/* Logo */}
      <div className="flex xg:hidden items-center">
        <FiMenu className="cursor-pointer text-2xl" onClick={() => setIsOpen(true)} />
      </div>
      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/90 text-white flex flex-col items-start p-6">
          {/* Close Icon */}
          <div className="self-end mb-4">
            <FiX
              className="cursor-pointer text-3xl"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-5 text-lg grow">
            <Link href="#">Buy</Link>
            <Link href="#">Rent</Link>
            <Link href="#">Sell</Link>
            <Link href="#">Off-Plan</Link>
            <Link href="#">AX Journal</Link>
            <Link href="#">Catalogs</Link>
            <Link href="#">Agents</Link>
            <Link href="#">The AX Way</Link>
          </nav>

          {/* Footer icons (as in your image) */}
          <div className="pt-8 grid grid-cols-2 gap-4 w-full">
            <button className="border px-4 py-2">＋</button>
            <button className="border px-4 py-2">🔖</button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 h-full">
        <div className='relative w-36 h-full border-e border-white/0 xg:border-white/20'>
          <Image src='/assets/images/logo.webp' alt='logo' fill className='p-4' />
        </div>
        <div className="hidden xg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-primary transition xl:px-2">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Icons */}
      <div className="hidden xg:flex items-center gap-6 text-sm">
        <FaWhatsapp className="text-primary cursor-pointer text-2xl" />
        <a href="#" className="text-primary hover:underline">FOLLOW US</a>
        <a href="#" className="text-primary hover:underline">CALL US</a>

        <div className="border-l border-white/20 h-10 mx-2" />

        <div className="flex items-center gap-4">
          <div className='relative'>
            <FiPlus className="cursor-pointer text-white absolute bg-background rounded-full -top-1" />
            <FiMenu className="cursor-pointer text-2xl" />
          </div>
          <FiBookmark className="cursor-pointer text-2xl" />
        </div>
      </div>

      <div className='flex xg:hidden items-center'>
        <FaPhone className="cursor-pointer text-primary text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
