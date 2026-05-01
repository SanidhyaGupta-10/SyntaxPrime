"use client";

import React from "react";
import { FaDesktop, FaCode, FaGamepad, FaCogs } from "react-icons/fa";

// Reusable Card Component
interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

function InfoCard(props: InfoCardProps) {
  const Icon = props.icon;
  const { title, text } = props;
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
      <Icon className="text-4xl text-white mb-4" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
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
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-16 text-white hover:text-purple-600 ">
          🎮 Unreal Engine Game Development Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn Unreal Engine from beginner to advanced: scripting with C++ and Blueprints, game mechanics, level design, and publishing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {cards.map((card) => (
          <div key={card.title} className="relative z-10 flex flex-col items-center">
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
