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
    <div className="min-h-screen mt-16 w-full bg-black text-white px-6 py-16 flex flex-col gap-24 items-center">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold flex justify-center items-center gap-2">
            <Globe className="size-10 sm:size-12" /> PHP Hub
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            A classic backend language used for powering scalable, dynamic, and secure web applications worldwide.
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
          {cards.map((card, index) => (
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