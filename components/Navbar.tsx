"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-white tracking-tighter font-display">
            &lt;SyntaxPrime/&gt;
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/notes" 
              className="font-label-caps text-slate-400 hover:text-white transition-colors"
            >
              Notes
            </Link>
            <Link 
              href="/roadmaps" 
              className="font-label-caps text-slate-400 hover:text-white transition-colors"
            >
              Roadmaps
            </Link>
            <Link 
              href="/skills" 
              className="font-label-caps text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:bg-white/5 transition-all duration-200 active:scale-95 rounded-full">
              <span className="material-symbols-outlined">terminal</span>
            </button>
            <button className="p-2 text-slate-400 hover:bg-white/5 transition-all duration-200 active:scale-95 rounded-full">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <Link 
              href="/console" 
              className="ml-2 bg-primary-container text-on-primary-container px-4 py-2 font-label-caps rounded-lg hover:brightness-110 transition-all active:scale-95"
            >
              Console
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-6 p-8">
          <Link href="/notes" className="font-label-caps text-lg text-white" onClick={() => setOpen(false)}>Notes</Link>
          <Link href="/roadmaps" className="font-label-caps text-lg text-white" onClick={() => setOpen(false)}>Roadmaps</Link>
          <Link href="/skills" className="font-label-caps text-lg text-white" onClick={() => setOpen(false)}>Skills</Link>
          
          <div className="h-px bg-white/5 my-2"></div>
          
          <Link href="/" className="font-label-caps text-slate-400" onClick={() => setOpen(false)}>MathsBuddy</Link>
          <Link href="https://sanidhy-portfolio.vercel.app/" target="_blank" className="font-label-caps text-slate-400">Portfolio</Link>
          <Link href="https://github.com/SanidhyaGupta-10/" target="_blank" className="font-label-caps text-slate-400 flex items-center gap-2">
            Github <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
