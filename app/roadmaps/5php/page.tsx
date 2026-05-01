"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileCode2, Globe, Server, Cpu } from "lucide-react";

export default function PHPPage() {
  const cards = [
    {
      title: "Why PHP?",
      icon: <Globe className="size-12" />,
      text: "PHP powers over 75% of the web, including major CMS platforms like WordPress, Drupal, and Magento.",
    },
    {
      title: "Server-Side Scripting",
      icon: <Server className="size-12" />,
      text: "PHP handles backend logic, routing, authentication, and dynamic content generation for web applications.",
    },
    {
      title: "Fast Development",
      icon: <FileCode2 className="size-12" />,
      text: "Simple syntax and huge ecosystem allow rapid development of full-stack web apps.",
    },
    {
      title: "CMS & Framework Ecosystem",
      icon: <Cpu className="size-12" />,
      text: "Laravel, Symfony, and CodeIgniter make PHP powerful, modern, and extremely productive.",
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
            <Globe className="size-10 sm:size-12" /> PHP Hub
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            A classic backend language used for powering scalable, dynamic, and secure web applications worldwide.
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
          {cards.map((card, index) => (
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