"use client";

import React from "react";
import { FaDesktop, FaCode, FaGamepad, FaPuzzlePiece } from "react-icons/fa";

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
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          🎮 Unity Game Development Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn how to create games in Unity, from beginner concepts to advanced
          techniques, including scripting, game mechanics, and publishing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {cards.map((card, index) => (
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
