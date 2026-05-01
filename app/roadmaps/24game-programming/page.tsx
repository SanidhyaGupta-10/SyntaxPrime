"use client";

import React from "react";
import { FaGamepad, FaCode, FaDesktop, FaCogs, FaRocket } from "react-icons/fa";

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

// Reusable InfoCard
function InfoCard(props: InfoCardProps) {
  const Icon = props.icon;
  const { title, text } = props;
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
      <Icon className="text-4xl text-indigo-400" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
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
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
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
      <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {roadmap.map((card, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            <InfoCard
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
