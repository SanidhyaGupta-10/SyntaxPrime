"use client";

import React from "react";
import Link from "next/link";

const terms = [
  {
    title: "1. Acceptance of Terms",
    desc: "By using SyntaxPrime, you agree to these terms. Please read them carefully before using our services.",
  },
  {
    title: "2. Use of Services",
    desc: "You must follow our acceptable use policies. Do not misuse our services or interfere with other users.",
  },
  {
    title: "3. Privacy",
    desc: "We respect your data. Read our Privacy Policy to understand how we collect and use your information.",
  },
  {
    title: "4. Termination",
    desc: "We may suspend accounts that violate the rules. You may terminate your account at any time.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pb-24 px-6 max-w-4xl mx-auto w-full pt-16">
      {/* Header */}
      <section className="mb-12 pt-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto leading-relaxed">
          The legal framework governing your interaction with the SyntaxPrime developer ecosystem.
        </p>
      </section>

      {/* Content */}
      <div className="space-y-6 mb-16">
        {terms.map((term, i) => (
          <section key={i} className="glass-panel p-8 rounded-xl border border-white/5 bg-surface/30">
            <h2 className="font-display text-xl text-white mb-4 flex items-center gap-3">
              <span className="text-primary text-sm font-mono">{i + 1}.0</span>
              {term.title.split('. ')[1]}
            </h2>
            <p className="text-slate-400 font-inter leading-relaxed">
              {term.desc}
            </p>
          </section>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-white/5">
        <Link 
          href="/" 
          className="w-full sm:w-auto px-8 py-3 glass-panel text-white font-label-caps rounded-lg hover:bg-white/10 transition-all text-sm text-center"
        >
          Back to Terminal
        </Link>
        <Link 
          href="/contact" 
          className="w-full sm:w-auto px-8 py-3 bg-primary text-on-primary font-label-caps rounded-lg hover:brightness-110 transition-all text-sm text-center"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
