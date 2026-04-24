"use client";

import { motion } from "framer-motion";
import {
  SiSwift,
  SiApple,
  SiXcode,
  SiFirebase,
  SiRealm,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

export default function IOSPage() {
  return (
    <div className="min-h-screen w-full mt-16 flex flex-col items-center justify-center bg-black text-white px-6 py-16">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        iOS Development Roadmap
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-300 max-w-2xl text-center mb-12"
      >
        Everything you need to master iOS development — learn Swift, UI
        frameworks, backend integration, tools, and deployment.
      </motion.p>

      {/* Sections Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <SiSwift className="text-orange-400 text-3xl" /> Languages
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><SiSwift /> Swift</li>
            <li className="flex items-center gap-2"><SiApple /> Objective-C (optional)</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <FaTools className="text-green-400 text-3xl" /> Tools
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><SiXcode /> Xcode</li>
            <li className="flex items-center gap-2"><SiApple /> iOS Simulator</li>
            <li className="flex items-center gap-2"><SiApple /> TestFlight</li>
          </ul>
        </motion.div>

        {/* UI Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <SiApple className="text-blue-400 text-3xl" /> UI Frameworks
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><SiApple /> SwiftUI</li>
            <li className="flex items-center gap-2"><SiApple /> UIKit</li>
            <li className="flex items-center gap-2"><SiApple /> Storyboards (optional)</li>
          </ul>
        </motion.div>

        {/* Databases */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <SiRealm className="text-purple-400 text-3xl" /> Databases
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><SiRealm /> Realm</li>
            <li className="flex items-center gap-2"><SiFirebase /> Firebase</li>
            <li className="flex items-center gap-2"><SiApple /> Core Data</li>
          </ul>
        </motion.div>

        {/* Backend Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <SiApple className="text-teal-400 text-3xl" /> Backend Integration
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>REST APIs</li>
            <li>GraphQL</li>
            <li>Firebase</li>
          </ul>
        </motion.div>

        {/* Deployment */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
            <SiApple className="text-red-400 text-3xl" /> Deployment
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>TestFlight</li>
            <li>App Store Publishing</li>
            <li>App Signing & Certificates</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
