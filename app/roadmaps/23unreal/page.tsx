"use client";

import React from "react";
import { FaDesktop, FaCode, FaGamepad, FaCogs } from "react-icons/fa";

// Reusable Card Component
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-gray-900/70 border hover:border-2 hover:border-purple-800 border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg hover:scale-[1.03] transition-all duration-300">
      <Icon className="text-4xl text-purple-400" />
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function UnrealPage() {
  const cards = [
    {
      icon: FaDesktop,
      title: "Getting Started with Unreal Engine",
      text: "Install Unreal Engine via Epic Games Launcher. Explore the interface, create a new project (2D, 3D, or VR), and learn viewport navigation.",
    },
    {
      icon: FaCode,
      title: "Scripting in Unreal",
      text: "Unreal uses C++ and Blueprints (visual scripting). Learn the basics of C++ classes and Blueprints for creating game logic without coding.",
    },
    {
      icon: FaGamepad,
      title: "Game Mechanics",
      text: "Implement player controls, camera systems, physics, collisions, and interactions using Blueprints or C++ scripts.",
    },
    {
      icon: FaCogs,
      title: "Advanced Unreal Features",
      text: "Learn AI, NavMesh pathfinding, particle systems, materials/shaders, animation blueprints, multiplayer, and optimization techniques.",
    },
    {
      icon: FaDesktop,
      title: "Level Design & World Building",
      text: "Create realistic environments using landscape tools, foliage, lighting, and post-processing effects to make immersive worlds.",
    },
    {
      icon: FaCode,
      title: "Publishing Games",
      text: "Package and export games for PC, consoles, or mobile. Optimize assets and follow platform-specific requirements for performance.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-16 text-purple-400 hover:text-purple-600 ">
          🎮 Unreal Engine Game Development Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn Unreal Engine from beginner to advanced: scripting with C++ and Blueprints, game mechanics, level design, and publishing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
