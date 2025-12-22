"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, { y: -50, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/favicon.ico" alt="logo" className="w-12 h-12" />
          <span className="text-white font-bold text-xl"></span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <li className="hover:text-blue-500 transition-all duration-200 text-[18px]">
            <Link href="/roadmaps">Explore Roadmaps</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200 text-[18px]">
            <Link href="/notes">Download Notes</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200 text-[18px]">
            <Link href="/skills">Most Popular Skills</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200 text-[18px]">
            <Link href="/" target="_blank">Visit our website MathsBuddy</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 overflow-hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-white">
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link href="/roadmaps">Explore Roadmaps</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link href="/notes">Download Notes</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link href="/skills">Most Popular Skills</Link>
          </li>
          <li className="hover:text-blue-500 transition-all duration-200">
            <Link href="/" target="_blank">Visit our website MathsBuddy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
