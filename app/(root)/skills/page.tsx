"use client";

import React, { useState } from "react";
import Link from "next/link";

const skillSections = [
  {
    id: "web",
    title: "Web Development",
    icon: "web",
    color: "primary",
    desc: "Build scalable, high-performance web applications using modern architectures and front-end frameworks.",
    skills: [
      { name: "HTML", icon: "html", iconColor: "text-orange-400" },
      { name: "CSS", icon: "css", iconColor: "text-blue-400" },
      { name: "JavaScript", icon: "javascript", iconColor: "text-yellow-400" },
      { name: "React", icon: "deployed_code", iconColor: "text-sky-400", fill: true },
      { name: "Next.js", icon: "stat_0", iconColor: "text-white" },
    ],
    colSpan: "lg:col-span-8",
  },
  {
    id: "ai",
    title: "AI & ML",
    icon: "psychology",
    color: "tertiary",
    desc: "Master the mathematical foundations and frameworks powering the intelligence revolution.",
    skills: [
      { name: "Python", icon: "terminal", iconColor: "text-blue-300" },
      { name: "TensorFlow", icon: "memory", iconColor: "text-orange-500" },
      { name: "PyTorch", icon: "local_fire_department", iconColor: "text-red-400" },
    ],
    colSpan: "lg:col-span-6",
  },
  {
    id: "app",
    title: "App Development",
    icon: "devices",
    color: "secondary",
    desc: "Design and deploy native-grade experiences for mobile platforms and cross-device environments.",
    skills: [
      { name: "Flutter", icon: "bolt", iconColor: "text-sky-300" },
      { name: "React Native", icon: "tablet_android", iconColor: "text-indigo-400" },
      { name: "Swift", icon: "code_blocks", iconColor: "text-orange-600" },
      { name: "Kotlin", icon: "pentagon", iconColor: "text-purple-400" },
    ],
    colSpan: "lg:col-span-6",
  },
];

const trendingStats = [
  { name: "Next.js", change: "+24%", progress: 85, color: "secondary" },
  { name: "Flutter", change: "+18%", progress: 72, color: "primary" },
  { name: "PyTorch", change: "+31%", progress: 92, color: "tertiary" },
];

export default function SkillsPage() {
  const [search, setSearch] = useState("");

  const filteredSections = skillSections.map(section => ({
    ...section,
    skills: section.skills.filter(skill => 
      skill.name.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.skills.length > 0);

  return (
    <div className="min-h-screen pb-24 px-6 max-w-7xl mx-auto w-full pt-16">
      {/* Hero Section */}
      <section className="mb-12 pt-12">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-4 tracking-tight">Most Popular Skills</h1>
        <p className="text-slate-400 font-inter text-lg max-w-2xl leading-relaxed">
          Accelerate your career by mastering the industry's most sought-after technical capabilities, curated for high-performance engineering.
        </p>
      </section>

      {/* Search Section */}
      <div className="mb-12 flex justify-end">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
          <input 
            className="bg-surface/50 border border-white/5 rounded-full py-3 pl-12 pr-6 text-sm w-full text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-all font-mono" 
            placeholder="Search skills ecosystem..." 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sections Mapping */}
        {filteredSections.map((section, idx) => (
          <section 
            key={section.id} 
            className={`${section.colSpan} glass-panel p-8 rounded-xl relative overflow-hidden group hover:border-${section.color}/30 transition-all duration-500 bg-surface/30`}
          >
            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity`}>
              <span className={`material-symbols-outlined text-[120px] text-${section.color}`}>{section.icon}</span>
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-${section.color}/10 p-2 rounded-lg border border-${section.color}/20`}>
                  <span className={`material-symbols-outlined text-${section.color}`}>{section.icon}</span>
                </div>
                <h2 className="font-display text-2xl text-white">{section.title}</h2>
              </div>
              
              <p className="text-slate-400 mb-8 max-w-lg font-inter">{section.desc}</p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                {section.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="group/pill flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-default"
                  >
                    <span 
                      className={`material-symbols-outlined ${skill.iconColor}`}
                      style={skill.fill ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                      {skill.icon}
                    </span>
                    <span className="font-label-caps uppercase tracking-wider text-[11px]">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Trending Stats Sidebar */}
        {(!search || filteredSections.length > 0) && (
          <aside className="lg:col-span-4 glass-panel p-8 rounded-xl flex flex-col justify-between border-primary/20 bg-surface/30">
            <div>
              <h3 className="font-display text-2xl text-primary mb-4 tracking-tight">Trending Now</h3>
              <p className="text-slate-500 text-sm mb-8 font-inter leading-relaxed">Real-time demand metrics across the SyntaxPrime ecosystem.</p>
            </div>
            
            <div className="space-y-6">
              {trendingStats.map((stat) => (
                <div key={stat.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-label-caps text-slate-400 tracking-widest">{stat.name}</span>
                    <span className="text-emerald-400 text-[10px] font-mono">{stat.change}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${stat.color} transition-all duration-1000 shadow-[0_0_8px_var(--color-${stat.color})]`} 
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <Link href="/roadmaps" className="text-[10px] font-label-caps text-primary flex items-center gap-2 hover:gap-3 transition-all group tracking-widest">
                EXPLORE_METRICS 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
            </div>
          </aside>
        )}
      </div>

      {/* Recommendation Banner */}
      <div className="mt-12 glass-panel p-8 rounded-2xl border-dashed border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 bg-surface/20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center gap-6 text-center md:text-left relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-tertiary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-[#050505] text-3xl font-bold">route</span>
          </div>
          <div>
            <h4 className="font-display text-2xl text-white mb-1">Personalized Learning Path</h4>
            <p className="text-slate-400 font-inter">Based on your profile, we recommend the <span className="text-primary font-medium underline underline-offset-4 decoration-primary/30">Full-Stack AI Architect</span> roadmap.</p>
          </div>
        </div>
        <Link 
          href="/roadmaps" 
          className="relative z-10 px-8 py-4 bg-primary text-on-primary font-label-caps rounded-xl hover:shadow-[0_0_30px_rgba(137,206,255,0.4)] transition-all active:scale-95 whitespace-nowrap tracking-wider text-xs"
        >
          VIEW_ROADMAP
        </Link>
      </div>
    </div>
  );
}