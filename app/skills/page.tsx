"use client"
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaAws,
  FaSearch,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const Icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaLaptopCode,
  FaMobileAlt,
  FaAws,
  FaRobot,
  FaCloud,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
};

// -----------------------------
// Section Component
// -----------------------------
function SkillSection({ title, skills, icon }: { title: string; skills: Array<{ name: string; icon?: string }>; icon: React.ReactNode }) {
  return (
    <section className="my-8 px-4 py-6 bg-slate-800/50 rounded-xl border border-slate-700">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-3 text-slate-100">
        {icon && <span className="text-indigo-400">{icon}</span>} {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const IconComponent = skill.icon ? Icons[skill.icon] : null;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-lg border border-slate-700"
            >
              {IconComponent && <IconComponent size={18} className="text-slate-400" />}
              <span className="text-sm text-slate-300">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// -----------------------------
// Main Page
// -----------------------------
export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      title: "Web Development",
      icon: "FaLaptopCode",
      skills: [
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss3" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "React", icon: "SiReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
      ],
    },
    {
      title: "App Development",
      icon: "FaMobileAlt",
      skills: [
        { name: "Flutter", icon: "SiFlutter" },
        { name: "React Native", icon: "SiReact" },
        { name: "Swift", icon: "SiSwift" },
        { name: "Kotlin", icon: "SiKotlin" },
      ],
    },
    {
      title: "AI & ML",
      icon: "FaRobot",
      skills: [
        { name: "Python", icon: "SiPython" },
        { name: "TensorFlow", icon: "SiTensorflow" },
        { name: "PyTorch", icon: "SiPytorch" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "FaCloud",
      skills: [
        { name: "AWS", icon: "FaAws" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Kubernetes", icon: "SiKubernetes" },
      ],
    },
  ];

  const filteredSections = sections.filter((sec) =>
    sec.skills.some((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-900 to-slate-950 text-slate-100 px-4 pt-24 pb-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl mt-5 sm:text-3xl font-bold mb-2 text-indigo-400">
          In-Demand Skills
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Explore popular skills in Web, App Development, AI/ML, and Cloud
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 w-full max-w-md">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none w-full text-slate-200 text-sm"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto">
        {filteredSections.map((sec) => (
          <SkillSection
            key={sec.title}
            title={sec.title}
            skills={sec.skills}
            icon={sec.icon ? React.createElement(Icons[sec.icon]) : null}
          />
        ))}
        {filteredSections.length === 0 && (
          <p className="text-center text-slate-500 mt-8">No skills found</p>
        )}
      </div>
    </main>
  );
}