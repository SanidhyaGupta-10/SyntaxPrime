"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Server } from "lucide-react";

export default function DatabaseCenter() {
  const heroRef = useRef(null);

  const cards = [
    {
      title: "Core Engines",
      icon: <Cpu className="size-12" />,
      text: "Explore how internal compute engines work behind distributed data pipelines and high-performance systems.",
    },
    {
      title: "Storage Systems",
      icon: <Server className="size-12" />,
      text: "Learn structured, semi-structured, unstructured, and distributed storage used in cloud-scale environments.",
    },
    {
      title: "Query Engines",
      icon: <Database className="size-12" />,
      text: "Understand SQL optimizers, execution plans, compilation, and scalable query processing.",
    },
  ];

  return (
    <div className="min-h-screen mt-16 w-full bg-black text-white px-6 py-16 flex flex-col gap-24 items-center overflow-hidden">

      {/* Hero */}
      <section className="w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold flex justify-center items-center gap-2">
            <Database className="size-10 sm:size-12" /> Database Hub
          </h1>
          <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            Your interactive space to explore database technologies, storage engines, and distributed computing.
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
