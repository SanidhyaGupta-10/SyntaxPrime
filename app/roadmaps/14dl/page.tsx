"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaPython, FaChartBar, FaBrain } from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

export default function DataSciencePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">Data Science Roadmap</h1>
        <p className="300 text-lg max-w-2xl mx-auto">
          A highly advanced, industry-ready roadmap that blends programming, analytics, ML engineering,
          and real-world data workflows.
        </p>
      </motion.div>

      {/* SECTION 1 — CORE FOUNDATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-700"
      >
        <h2 className="text-3xl font-semibold mb-6">1. Core Foundations</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="flex gap-4 items-start">
            <FaPython className="text-4xl text-yellow-300" />
            <div>
              <h3 className="text-[22px] font-bold">Python Essentials</h3>
              <p className="text-[18px] text-gray-300">Syntax, OOP, virtual environments, modules, performance basics.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaDatabase className="text-4xl text-blue-400" />
            <div>
              <h3 className="text-[22px] font-bold">SQL Mastery</h3>
              <p className="text-[18px] text-gray-300">Advanced joins, CTEs, indexing, query optimization.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 2 — ANALYTICS/LIBRARIES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-700"
      >
        <h2 className="text-3xl font-semibold mb-6">2. Data Analytics Stack</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="flex gap-4 items-start">
            <SiNumpy className="text-4xl" />
            <div>
              <h3 className="text-[22px] font-bold">NumPy</h3>
              <p className="text-[18px] text-gray-300">Linear algebra, vectorization, broadcasting, performance.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <SiPandas className="text-4xl" />
            <div>
              <h3 className="text-[22px] font-bold">Pandas</h3>
              <p className="text-[18px] text-gray-300">ETL, grouping, merging, optimization, time-series.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaChartBar className="text-4xl" />
            <div>
              <h3 className="text-[22px] font-bold">Visualization</h3>
              <p className="text-[18px] text-gray-300">Matplotlib, Plotly, Seaborn, dashboards basics.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3 — MACHINE LEARNING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-700"
      >
        <h2 className="text-3xl font-semibold mb-6">3. Machine Learning & Deep Learning</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="flex gap-4 items-start">
            <SiScikitlearn className="text-4xl" />
            <div>
              <h3 className="text-[22px] font-bold">Scikit-Learn</h3>
              <p className="text-[18px] text-gray-300">Training pipelines, CV, metrics, feature engineering.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <SiTensorflow className="text-4xl text-orange-300" />
            <div>
              <h3 className="text-[22px] font-bold">TensorFlow</h3>
              <p className="text-[18px] text-gray-300">Neural networks, CNN, RNN, deployment, TPU basics.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <SiPytorch className="text-4xl text-red-400" />
            <div>
              <h3 className="text-[22px] font-bold">PyTorch</h3>
              <p className="text-[18px] text-gray-300">Gradients, custom models, training loops, transformers.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4 — DATABASES & BIG DATA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-10 rounded-2xl shadow-lg border border-zinc-700 mb-20"
      >
        <h2 className="text-3xl font-semibold mb-6">4. Databases & Big Data</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="flex gap-4 items-start">
            <SiMysql className="text-4xl text-blue-300" />
            <div>
              <h3 className="text-[22px] font-bold">MySQL / PostgreSQL</h3>
              <p className="text-[18px] text-gray-300">Relational data modeling, indexing, analytical queries.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <SiMongodb className="text-4xl text-green-400" />
            <div>
              <h3 className="text-[22px] font-bold">MongoDB</h3>
              <p className="text-[18px] text-gray-300">NoSQL, document design, aggregations, performance tuning.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaBrain className="text-4xl text-primary" />
            <div>
              <h3 className="text-[22px] font-bold">Big Data Concepts</h3>
              <p className="text-[18px] text-gray-300">Hadoop basics, Spark, distributed processing, cloud workflows.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}