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
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center"
        >
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <Rocket className="size-10 sm:size-12" /> Rust Hub
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            A fast, memory-safe, high-performance language built for systems, backend APIs, and next-generation applications.
          </p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="w-full max-w-6xl">
        <motion.div
          className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {rustCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -6 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
            >
              {card.icon}
              <h3 className="text-2xl font-semibold tracking-tight text-white">{card.title}</h3>
              <p className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
