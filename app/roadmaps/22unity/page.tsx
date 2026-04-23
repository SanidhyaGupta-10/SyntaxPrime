"use client";

import React from "react";
import { FaDesktop, FaCode, FaGamepad, FaPuzzlePiece } from "react-icons/fa";

// Reusable Card Component
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 flex flex-col hover:border-2 hover:border-cyan-700 items-center gap-4 shadow-lg hover:scale-[1.03] transition-all duration-300">
      <Icon className="text-4xl text-cyan-400" />
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function UnityPage() {
  const cards = [
    {
      icon: FaDesktop,
      title: "Getting Started with Unity",
      text: "Install Unity Hub and Unity Editor, create your first 2D or 3D project, and explore the interface and basic scenes.",
    },
    {
      icon: FaCode,
      title: "Programming in Unity",
      text: "Unity primarily uses C# for scripting. Learn C# basics: variables, loops, functions, classes, and Unity-specific APIs.",
    },
    {
      icon: FaGamepad,
      title: "Building Game Mechanics",
      text: "Create player movement, interactions, physics, and UI elements. Understand scenes, prefabs, components, and events.",
    },
    {
      icon: FaPuzzlePiece,
      title: "Advanced Unity Concepts",
      text: "Work with AI, pathfinding, animations, particle systems, shaders, multiplayer networking, and optimization techniques.",
    },
    {
      icon: FaDesktop,
      title: "Publishing Your Game",
      text: "Learn how to build and export games for PC, mobile, and consoles. Understand platform-specific requirements and performance tweaks.",
    },
    {
      icon: FaCode,
      title: "Learning Resources",
      text: "Use official Unity Learn, tutorials, YouTube channels, and online courses to gradually go from beginner to advanced Unity developer.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6  py-16">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">
          🎮 Unity Game Development Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn how to create games in Unity, from beginner concepts to advanced
          techniques, including scripting, game mechanics, and publishing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
