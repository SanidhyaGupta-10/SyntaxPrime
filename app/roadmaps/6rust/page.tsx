"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, ShieldCheck, FileCode2 } from "lucide-react";

export default function RustPage() {
  const rustCards = [
    {
      title: "Why Rust?",
      icon: <Rocket className="size-12" />,
      text: "Rust provides memory-safety, fearlessly safe concurrency, and performance comparable to C/C++.",
    },
    {
      title: "Memory Safety",
      icon: <ShieldCheck className="size-12" />,
      text: "Rust eliminates data races and segmentation faults through the ownership & borrowing system.",
    },
    {
      title: "Zero-Cost Abstractions",
      icon: <Cpu className="size-12" />,
      text: "High-level code compiles into extremely efficient machine instructions without runtime overhead.",
    },
    {
      title: "Web & System Development",
      icon: <FileCode2 className="size-12" />,
      text: "Build backends (Axum, Rocket), systems, compilers, embedded apps, high-speed tooling, and WASM apps.",
    },
  ];

  return (
    <div className="min-h-screen mt-15 w-full bg-black text-white px-6 py-16 flex flex-col gap-24 items-center">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold flex justify-center items-center gap-2">
            <Rocket className="size-10 sm:size-12" /> Rust Hub
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            A fast, memory-safe, high-performance language built for systems, backend APIs, and next-generation applications.
          </p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="w-full max-w-6xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {rustCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -6 }}
              className="p-6 sm:p-8 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col items-center gap-4"
            >
              {card.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-center">{card.title}</h3>
              <p className="text-sm opacity-70 text-center leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
