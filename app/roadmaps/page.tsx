"use client";

import React, { useState } from "react";
import Link from "next/link";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAndroid,
  FaApple,
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJs,
  FaDatabase,
  FaLinux,
  FaBrain,
  FaRobot,
  FaCloud,
  FaCube,
  FaUnity,
  FaShieldAlt,
  FaEthereum,
  FaSearch,
  FaCuttlefish,
  FaRust,
  FaPhp,
} from "react-icons/fa";

/* ---------------------------
   SECTION TITLE
--------------------------- */
function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 mt-8 text-slate-100">
      {text}
    </h2>
  );
}

/* ---------------------------
   DIVIDER
--------------------------- */
function Divider() {
  return <hr className="border-slate-700/50 my-8 w-[80%] mx-auto" />;
}

/* ---------------------------
   SKILL CARD
--------------------------- */
function SkillCard({ icon, name, link }: { icon: React.ReactNode; name: string; link: string }) {
  return (
    <Link href={link} className="group">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-indigo-500 hover:bg-slate-700/60 transition-colors">
        <span className="text-2xl text-indigo-400">{icon}</span>
        <p className="text-sm sm:text-base text-slate-200">{name}</p>
      </div>
    </Link>
  );
}

/* ---------------------------
   SEARCH BAR
--------------------------- */
function SearchBar({ query, setQuery }: { query: string; setQuery: (q: string) => void }) {
  return (
    <div className="flex items-center justify-center mt-6 mb-10 px-4">
      <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700 w-full max-w-md">
        <FaSearch className="text-lg text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search roadmaps..."
          className="bg-transparent focus:outline-none w-full text-slate-200 text-sm"
        />
      </div>
    </div>
  );
}

/* ---------------------------
   GRID WRAPPER
--------------------------- */
function SectionGrid({ items }: { items: Array<{ name: string; icon: React.ReactNode; link: string }> }) {
  if (items.length === 0) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 px-4 sm:px-6">
      {items.map((item) => (
        <SkillCard key={item.name} name={item.name} icon={item.icon} link={item.link} />
      ))}
    </div>
  );
}

/* ---------------------------
   PAGE
--------------------------- */
export default function RoadmapsPage() {
  const [query, setQuery] = useState("");

  const filter = (items: Array<{ name: string; icon: React.ReactNode; link: string }>) =>
    items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));

  const categories = [
    {
      title: "Web Development",
      items: [
        { name: "Frontend", icon: <FaReact />, link: "/roadmaps/1frontend" },
        { name: "Backend", icon: <FaNodeJs />, link: "/roadmaps/2backend" },
        { name: "Full-Stack", icon: <FaJs />, link: "/roadmaps/3fullstack" },
        { name: "Databases", icon: <FaDatabase />, link: "/roadmaps/4databases" },
        { name: "PHP", icon: <FaPhp />, link: "/roadmaps/5php" },
        { name: "Rust", icon: <FaRust />, link: "/roadmaps/6rust" },
      ],
    },
    {
      title: "App Development",
      items: [
        { name: "React Native", icon: <FaReact />, link: "/roadmaps/7react-native" },
        { name: "Android", icon: <FaAndroid />, link: "/roadmaps/8android" },
        { name: "iOS", icon: <FaApple />, link: "/roadmaps/9ios" },
        { name: "Flutter", icon: <FaCube />, link: "/roadmaps/10flutter" },
      ],
    },
    {
      title: "AI / ML / Data Science",
      items: [
        { name: "AI", icon: <FaBrain />, link: "/roadmaps/11ai" },
        { name: "Machine Learning", icon: <FaRobot />, link: "/roadmaps/12ml" },
        { name: "Data Science", icon: <FaPython />, link: "/roadmaps/13datascience" },
        { name: "Deep Learning", icon: <FaBrain />, link: "/roadmaps/14dl" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: <FaAws />, link: "/roadmaps/15aws" },
        { name: "Docker", icon: <FaDocker />, link: "/roadmaps/16docker" },
        { name: "Linux", icon: <FaLinux />, link: "/roadmaps/17linux" },
        { name: "CI/CD", icon: <FaGitAlt />, link: "/roadmaps/18cicd" },
      ],
    },
    {
      title: "Cybersecurity",
      items: [
        { name: "Ethical Hacking", icon: <FaShieldAlt />, link: "/roadmaps/19hacking" },
        { name: "Network Security", icon: <FaShieldAlt />, link: "/roadmaps/20network-security" },
        { name: "Bug Bounty", icon: <FaShieldAlt />, link: "/roadmaps/21bug-bounty" },
      ],
    },
    {
      title: "Game Development",
      items: [
        { name: "Unity", icon: <FaUnity />, link: "/roadmaps/22unity" },
        { name: "Unreal Engine", icon: <FaCube />, link: "/roadmaps/23unreal" },
        { name: "Game Programming", icon: <FaJs />, link: "/roadmaps/24game-programming" },
      ],
    },
    {
      title: "Blockchain & Web3",
      items: [
        { name: "Blockchain", icon: <FaEthereum />, link: "/roadmaps/25blockchain" },
        { name: "Smart Contracts", icon: <FaEthereum />, link: "/roadmaps/26solidity" },
        { name: "DApps", icon: <FaCube />, link: "/roadmaps/27dapps" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-900 to-slate-950 text-slate-100 pb-16">
      {/* Header */}
      <div className="pt-30 pb-4 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">
          Developer Roadmaps
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Choose your path and start learning today
        </p>
      </div>

      {/* Search */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Categories */}
      <div className="max-w-5xl mx-auto space-y-8">
        {categories.map((category) => {
          const filtered = filter(category.items);
          if (filtered.length === 0) return null;
          return (
            <section key={category.title}>
              <SectionTitle text={category.title} />
              <SectionGrid items={filtered} />
              <Divider />
            </section>
          );
        })}
      </div>

      {/* No results */}
      {categories.every((c) => filter(c.items).length === 0) && (
        <p className="text-center text-slate-500 mt-8">No roadmaps found</p>
      )}
    </main>
  );
}

