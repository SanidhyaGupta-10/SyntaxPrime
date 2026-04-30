"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

const roadmapCategories = [
  {
    title: "Web Development",
    icon: "web",
    items: [
      { name: "Frontend", icon: "terminal", link: "/roadmaps/1frontend" },
      { name: "Backend", icon: "dns", link: "/roadmaps/2backend" },
      { name: "Full-Stack", icon: "layers", link: "/roadmaps/3fullstack" },
      { name: "Databases", icon: "database", link: "/roadmaps/4databases" },
      { name: "PHP", icon: "code", link: "/roadmaps/5php" },
      { name: "Rust", icon: "construction", link: "/roadmaps/6rust" },
    ],
  },
  {
    title: "App Development",
    icon: "devices",
    items: [
      { name: "React Native", icon: "phone_iphone", link: "/roadmaps/7react-native" },
      { name: "Android", icon: "android", link: "/roadmaps/8android" },
      { name: "iOS", icon: "apple", link: "/roadmaps/9ios" },
      { name: "Flutter", icon: "bolt", link: "/roadmaps/10flutter" },
    ],
  },
  {
    title: "AI / ML / Data Science",
    icon: "psychology",
    items: [
      { name: "AI", icon: "smart_toy", link: "/roadmaps/11ai" },
      { name: "Machine Learning", icon: "neurology", link: "/roadmaps/12ml" },
      { name: "Data Science", icon: "monitoring", link: "/roadmaps/13datascience" },
      { name: "Deep Learning", icon: "model_training", link: "/roadmaps/14dl" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    items: [
      { name: "AWS", icon: "cloud_done", link: "/roadmaps/15aws" },
      { name: "Docker", icon: "container", link: "/roadmaps/16docker" },
      { name: "Linux", icon: "terminal", link: "/roadmaps/17linux" },
      { name: "CI/CD", icon: "sync", link: "/roadmaps/18cicd" },
    ],
  },
  {
    title: "Cybersecurity",
    icon: "shield",
    items: [
      { name: "Ethical Hacking", icon: "lock_open", link: "/roadmaps/19hacking" },
      { name: "Network Security", icon: "router", link: "/roadmaps/20network-security" },
      { name: "Bug Bounty", icon: "bug_report", link: "/roadmaps/21bug-bounty" },
    ],
  },
  {
    title: "Game Development",
    icon: "sports_esports",
    items: [
      { name: "Unity", icon: "videogame_asset", link: "/roadmaps/22unity" },
      { name: "Unreal Engine", icon: "view_in_ar", link: "/roadmaps/23unreal" },
      { name: "Game Programming", icon: "code_blocks", link: "/roadmaps/24game-programming" },
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: "currency_bitcoin",
    items: [
      { name: "Blockchain", icon: "account_balance_wallet", link: "/roadmaps/25blockchain" },
      { name: "Smart Contracts", icon: "description", link: "/roadmaps/26solidity" },
      { name: "DApps", icon: "widgets", link: "/roadmaps/27dapps" },
    ],
  },
];

export default function RoadmapsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return roadmapCategories.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(category => category.items.length > 0);
  }, [search]);

  return (
    <div className="min-h-screen pb-24 px-6 max-w-7xl mx-auto w-full pt-16">
      {/* Header */}
      <section className="mb-12 pt-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-4 tracking-tight">Developer Roadmaps</h1>
        <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
          Navigate your engineering journey with precision. Meticulously curated tracks designed for architectural mastery and industry readiness.
        </p>
      </section>

      {/* Search Bar */}
      <div className="mb-16 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input 
            className="bg-surface/50 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-sm w-full text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-all font-mono" 
            placeholder="Search learning tracks (e.g. 'Frontend', 'AI')..." 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <section key={category.title} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-8 border-l-2 border-primary pl-4">
                <span className="material-symbols-outlined text-primary">{category.icon}</span>
                <h2 className="font-display text-2xl text-white tracking-tight">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.link}
                    className="group glass-panel p-5 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 bg-surface/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-label-caps group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="text-[10px] text-slate-500 font-mono">TRACK_ID: {item.name.toUpperCase().replace(/\s+/g, '_')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="py-24 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-700 mb-4">route</span>
            <h3 className="text-xl text-white font-display mb-2">No roadmaps found</h3>
            <p className="text-slate-500">We couldn't find any learning tracks matching your query.</p>
          </div>
        )}
      </div>

      {/* Footer Info Banner */}
      <div className="mt-24 glass-panel p-8 rounded-2xl border border-white/5 bg-primary/5 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="font-display text-2xl text-white mb-2">Contribute to the Index</h4>
            <p className="text-slate-400 font-inter max-w-xl">
              Help us expand the engineering knowledge base. Suggest a new roadmap or refine existing ones via our open repository.
            </p>
          </div>
          <a 
            href="https://github.com/SanidhyaGupta-10/SyntaxPrime" 
            target="_blank"
            className="px-8 py-3 glass-panel text-white font-label-caps rounded-lg hover:bg-white/10 transition-all active:scale-95 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            PR Repository
          </a>
        </div>
      </div>
    </div>
  );
}
