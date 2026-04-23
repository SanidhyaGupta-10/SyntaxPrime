"use client";

import React from "react";
import { FaGamepad, FaCode, FaDesktop, FaCogs, FaRocket } from "react-icons/fa";

// Reusable InfoCard
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg hover:scale-[1.03] transition-all duration-300">
      <Icon className="text-4xl text-indigo-400" />
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function GameProgrammingPage() {
  const roadmap = [
    {
      icon: FaCode,
      title: "1️⃣ Basics of Programming",
      text: "Learn programming fundamentals: variables, loops, conditions, functions. Languages like Python, C++, or C# are commonly used in games.",
    },
    {
      icon: FaGamepad,
      title: "2️⃣ Game Engines",
      text: "Familiarize with engines like Unity (C#) or Unreal (C++/Blueprints). Learn engine interface, asset import, scene setup, and prefab usage.",
    },
    {
      icon: FaDesktop,
      title: "3️⃣ 2D & 3D Game Development",
      text: "Start with 2D games: sprites, animations, collisions. Move to 3D: models, physics, lighting, camera control, and player mechanics.",
    },
    {
      icon: FaCogs,
      title: "4️⃣ Scripting & Game Logic",
      text: "Write scripts for player input, AI behavior, inventory systems, scoring, and game state management. Use C#, C++, or Blueprints depending on engine.",
    },
    {
      icon: FaRocket,
      title: "5️⃣ Advanced Game Mechanics",
      text: "Implement AI, pathfinding, networking/multiplayer, particle effects, shaders, and optimization techniques for smooth gameplay.",
    },
    {
      icon: FaDesktop,
      title: "6️⃣ Level Design & Assets",
      text: "Learn to design levels, use terrain tools, place objects, lighting, sound, UI/UX, and implement animation controllers for characters.",
    },
    {
      icon: FaCogs,
      title: "7️⃣ Publishing & Monetization",
      text: "Package games for PC, console, or mobile. Optimize assets, integrate analytics, ads, or in-app purchases, and follow platform guidelines.",
    },
    {
      icon: FaGamepad,
      title: "8️⃣ Continuous Learning",
      text: "Stay updated with game development trends, new engines, VR/AR, graphics programming, and indie game publishing techniques.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-400">
          🎮 Game Programming Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From beginner to expert: learn programming, game engines, scripting, AI, level design, and publishing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {roadmap.map((card, index) => (
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
