"use client";

import { motion } from "framer-motion";
import { FaBug, FaSearch, FaShieldAlt, FaTools } from "react-icons/fa";
import { SiBurpsuite, SiHackaday } from "react-icons/si";

export default function BugBountyPage() {
  const cards = [
    {
      title: "Bug Bounty Basics",
      icon: <FaBug className="text-red-500 text-5xl" />,
      description:
        "Understand what bug bounty is, how platforms work, and how security researchers find vulnerabilities ethically.",
    },
    {
      title: "Bug Hunting Tools",
      icon: <FaTools className="text-yellow-500 text-5xl" />,
      description:
        "Learn the essential tools of ethical hacking: Burp Suite, browsers, proxies, scanners, and recon frameworks.",
    },
    {
      title: "Smart Recon Techniques",
      icon: <FaSearch className="text-green-500 text-5xl" />,
      description:
        "Master subdomain discovery, directory brute forcing, endpoint mapping, and fingerprinting technologies.",
    },
    {
      title: "Manual Vulnerability Testing",
      icon: <SiBurpsuite className="text-orange-500 text-5xl" />,
      description:
        "Identify XSS, SQL Injection, SSRF, RCE, IDOR, CSRF, and logic flaws using Burp Suite and manual techniques.",
    },
    {
      title: "Write Proper Reports",
      icon: <FaShieldAlt className="text-blue-500 text-5xl" />,
      description:
        "Learn how to write clear, reproducible vulnerability reports that get accepted and paid faster.",
    },
    {
      title: "Bug Bounty Mindset",
      icon: <SiHackaday className="text-purple-500 text-5xl" />,
      description:
        "Develop the creative hacker's mindset needed to find bugs that scanners and other hunters miss.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-10">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-6 pt-18 text-green-400"
      >
        Bug Bounty Roadmap
      </motion.h1>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-900 p-6 rounded-xl shadow-lg border border-neutral-700 hover:shadow-green-500/20 hover:border-green-400 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-center mb-3">
              {card.title}
            </h2>
            <p className="text-neutral-300 text-sm text-center">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
