import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 mt-auto">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-white font-display">&lt;SyntaxPrime/&gt;</span>
          <p className="text-slate-500 font-space text-sm">© {new Date().getFullYear()} SyntaxPrime. Engineered for performance.</p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8">
          <a 
            href="https://github.com/SanidhyaGupta-10/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-primary transition-colors font-space text-sm flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">terminal</span>
            Contribute on GitHub
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4edea3]"></span>
          <span className="text-slate-500 font-space text-sm uppercase tracking-widest text-[10px]">All Systems Operational</span>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
