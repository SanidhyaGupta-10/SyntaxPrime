"use client";

import React from "react";
import Link from "next/link";

const privacySections = [
  {
    title: "1. Information We Collect",
    content: "We may collect personal information such as your name, email address, and usage data when you interact with our platform. This helps us provide better services and improve your experience.",
  },
  {
    title: "2. How We Use Information",
    content: "The information collected is used to enhance the functionality of SyntaxPrime, personalize your experience, send updates or notes, and analyze website traffic. We do not sell your data to third parties.",
  },
  {
    title: "3. Cookies and Tracking",
    content: "SyntaxPrime uses cookies and similar tracking technologies to monitor site activity, improve performance, and remember preferences. You can disable cookies in your browser settings, but some features may not work properly.",
  },
  {
    title: "4. Data Security",
    content: "We implement reasonable technical and organizational measures to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "5. Third-Party Services",
    content: "We may use third-party services to operate our platform, such as analytics or cloud hosting. These services follow strict privacy standards, and we are not responsible for their individual privacy practices.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You can contact us for any privacy-related inquiries.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pb-24 px-6 max-w-4xl mx-auto w-full pt-16">
      {/* Header */}
      <section className="mb-12 pt-12 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight">Privacy Protocol</h1>
        <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto leading-relaxed">
          Detailed overview of our data processing logic and user protection measures.
        </p>
      </section>

      {/* Content */}
      <div className="space-y-8 mb-16">
        {privacySections.map((section, i) => (
          <section key={i} className="glass-panel p-8 rounded-xl border border-white/5 bg-surface/30">
            <h2 className="font-display text-xl text-white mb-4 flex items-center gap-3">
              <span className="text-tertiary text-sm font-mono">SEC_0{i + 1}</span>
              {section.title.split('. ')[1]}
            </h2>
            <p className="text-slate-400 font-inter leading-relaxed text-sm md:text-base">
              {section.content}
            </p>
          </section>
        ))}
      </div>

      {/* Footer Info */}
      <div className="text-center pt-12 border-t border-white/5">
        <p className="text-[10px] font-label-caps text-slate-600 uppercase tracking-widest mb-6">
          &copy; {new Date().getFullYear()} SyntaxPrime Neural Network. All rights reserved.
        </p>
        <Link 
          href="/" 
          className="text-primary font-label-caps text-xs hover:underline tracking-widest"
        >
          RETURN_TO_BASE
        </Link>
      </div>
    </div>
  );
}
