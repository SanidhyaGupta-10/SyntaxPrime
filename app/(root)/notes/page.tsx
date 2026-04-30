"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// Notes Images
import netFrame from "@/app/img/1. DotNETFrameworkGrow.png";
import Algorithms from "@/app/img/AlgorithmsGrow.png";
import Android from "@/app/img/AndroidGrow.png";
import Angular2 from "@/app/img/Angular2Grow.png";
import Angular from "@/app/img/AngularJSGrow.png";
import Bash from "@/app/img/BashGrow.png";
import C from "@/app/img/CGrow.png";
import CPP from "@/app/img/CPlusPlusGrow.png";
import CS from "@/app/img/CSharpGrow.png";
import CSS from "@/app/img/CSSGrow.png";
import EF from "@/app/img/EntityFrameworkGrow.png";
import Excel from "@/app/img/ExcelVBAGrow.png";
import Git from "@/app/img/GitGrow.png";
import Haskell from "@/app/img/HaskellGrow.png";
import Hibernate from "@/app/img/HibernateGrow.png";
import HTML5C from "@/app/img/HTML5CanvasGrow.png";
import HTML from "@/app/img/HTML5Grow.png";
import iOS from "@/app/img/iOSGrow.png";
import Java from "@/app/img/JavaGrow.png";
import JS from "@/app/img/JavaScriptGrow.png";
import JQ from "@/app/img/jQueryGrow.png";
import Kotlin from "@/app/img/KotlinGrow.png";
import Latex from "@/app/img/LaTeXGrow.png";
import Linux from "@/app/img/LinuxGrow.png";
import PHP from "@/app/img/PHPGrow.png";
import Mat from "@/app/img/MATLABGrow.png";
import MSS from "@/app/img/MicrosoftSQLServerGrow.png";
import MongoDB from "@/app/img/MongoDBGrow.png";
import MySQL from "@/app/img/MySQLGrow.png";
import Node from "@/app/img/NodeJSGrow.png";
import OC from "@/app/img/ObjectiveCGrow.png";
import Perl from "@/app/img/PerlGrow.png";
import PostgreSQL from "@/app/img/PostgreSQLGrow.png";
import PowerShell from "@/app/img/PowerShellGrow.png";
import Python from "@/app/img/PythonGrow.png";
import ReactJS from "@/app/img/ReactJSGrow.png";
import ReactNative from "@/app/img/ReactNativeGrow.png";
import R from "@/app/img/RGrow.png";
import Ruby from "@/app/img/RubyGrow.png";
import SQL from "@/app/img/SQLGrow.png";
import Swift from "@/app/img/SwiftGrow.png";
import Typescript from "@/app/img/TypeScriptGrow.png";

const notesData = [
  { id: 1, title: ".NET Framework", image: netFrame, pdf: "DotNetFramework.pdf", category: "Backend", tag: "Enterprise", color: "primary" },
  { id: 2, title: "Algorithms", image: Algorithms, pdf: "Algorithms.pdf", category: "Tools", tag: "Core", color: "tertiary" },
  { id: 3, title: "Android", image: Android, pdf: "Android.pdf", category: "Mobile", tag: "Mobile", color: "secondary" },
  { id: 4, title: "Angular 2+", image: Angular2, pdf: "Angular2.pdf", category: "Frontend", tag: "Enterprise", color: "error" },
  { id: 5, title: "AngularJS", image: Angular, pdf: "AngularJS.pdf", category: "Frontend", tag: "Legacy", color: "error" },
  { id: 6, title: "Bash", image: Bash, pdf: "Bash.pdf", category: "Languages", tag: "Systems", color: "tertiary" },
  { id: 7, title: "C", image: C, pdf: "C.pdf", category: "Languages", tag: "Low Level", color: "primary" },
  { id: 8, title: "C++", image: CPP, pdf: "CPlusPlus.pdf", category: "Languages", tag: "Performance", color: "primary" },
  { id: 9, title: "C#", image: CS, pdf: "CSharp.pdf", category: "Languages", tag: "Backend", color: "primary" },
  { id: 10, title: "CSS", image: CSS, pdf: "CSS.pdf", category: "Frontend", tag: "Design", color: "secondary" },
  { id: 11, title: "Entity Framework", image: EF, pdf: "EntityFramework.pdf", category: "Backend", tag: "ORM", color: "primary" },
  { id: 12, title: "Excel VBA", image: Excel, pdf: "ExcelVBA.pdf", category: "Tools", tag: "Office", color: "secondary" },
  { id: 13, title: "Git", image: Git, pdf: "Git.pdf", category: "Tools", tag: "VCS", color: "error" },
  { id: 14, title: "Haskell", image: Haskell, pdf: "Haskell.pdf", category: "Languages", tag: "Functional", color: "tertiary" },
  { id: 15, title: "Hibernate", image: Hibernate, pdf: "Hibernate.pdf", category: "Backend", tag: "Java ORM", color: "tertiary" },
  { id: 16, title: "HTML5 Canvas", image: HTML5C, pdf: "HTML5Canvas.pdf", category: "Frontend", tag: "Graphics", color: "error" },
  { id: 17, title: "HTML5", image: HTML, pdf: "HTML5.pdf", category: "Frontend", tag: "Structure", color: "error" },
  { id: 18, title: "iOS", image: iOS, pdf: "iOS.pdf", category: "Mobile", tag: "Apple", color: "primary" },
  { id: 19, title: "Java", image: Java, pdf: "Java.pdf", category: "Languages", tag: "Enterprise", color: "error" },
  { id: 20, title: "JavaScript", image: JS, pdf: "JavaScript.pdf", category: "Languages", tag: "Web", color: "secondary" },
  { id: 21, title: "jQuery", image: JQ, pdf: "jQuery.pdf", category: "Frontend", tag: "Library", color: "primary" },
  { id: 22, title: "Kotlin", image: Kotlin, pdf: "Kotlin.pdf", category: "Languages", tag: "Modern", color: "tertiary" },
  { id: 23, title: "LaTeX", image: Latex, pdf: "LaTeX.pdf", category: "Tools", tag: "Academic", color: "tertiary" },
  { id: 24, title: "Linux", image: Linux, pdf: "Linux.pdf", category: "Tools", tag: "OS", color: "tertiary" },
  { id: 25, title: "MATLAB", image: Mat, pdf: "MATLAB.pdf", category: "Languages", tag: "Scientific", color: "primary" },
  { id: 26, title: "MS SQL Server", image: MSS, pdf: "MicrosoftSQLServer.pdf", category: "Databases", tag: "Enterprise", color: "primary" },
  { id: 27, title: "MongoDB", image: MongoDB, pdf: "MongoDB.pdf", category: "Databases", tag: "NoSQL", color: "secondary" },
  { id: 28, title: "MySQL", image: MySQL, pdf: "MySQL.pdf", category: "Databases", tag: "Relational", color: "primary" },
  { id: 29, title: "Node.js", image: Node, pdf: "NodeJS.pdf", category: "Backend", tag: "Runtime", color: "secondary" },
  { id: 30, title: "Objective C", image: OC, pdf: "ObjectiveC.pdf", category: "Languages", tag: "Legacy iOS", color: "tertiary" },
  { id: 31, title: "PHP", image: PHP, pdf: "PHP.pdf", category: "Languages", tag: "Server", color: "tertiary" },
  { id: 32, title: "Perl", image: Perl, pdf: "Perl.pdf", category: "Languages", tag: "Legacy", color: "primary" },
  { id: 33, title: "PostgreSQL", image: PostgreSQL, pdf: "PostgreSQL.pdf", category: "Databases", tag: "Advanced", color: "primary" },
  { id: 34, title: "PowerShell", image: PowerShell, pdf: "PowerShell.pdf", category: "Languages", tag: "Automation", color: "primary" },
  { id: 35, title: "Python", image: Python, pdf: "Python.pdf", category: "Languages", tag: "General", color: "primary" },
  { id: 36, title: "ReactJS", image: ReactJS, pdf: "ReactJS.pdf", category: "Frontend", tag: "Modern UI", color: "primary" },
  { id: 37, title: "React Native", image: ReactNative, pdf: "ReactNative.pdf", category: "Mobile", tag: "Cross-Platform", color: "primary" },
  { id: 38, title: "R", image: R, pdf: "R.pdf", category: "Languages", tag: "Statistics", color: "primary" },
  { id: 39, title: "Ruby", image: Ruby, pdf: "Ruby.pdf", category: "Languages", tag: "Scripting", color: "error" },
  { id: 40, title: "SQL", image: SQL, pdf: "SQL.pdf", category: "Databases", tag: "Query", color: "error" },
  { id: 41, title: "Swift", image: Swift, pdf: "Swift.pdf", category: "Languages", tag: "Apple", color: "error" },
  { id: 42, title: "TypeScript", image: Typescript, pdf: "TypeScript.pdf", category: "Languages", tag: "Typed", color: "primary" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Mobile", "Tools"];

export default function NotesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || note.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen pb-24 px-6 max-w-7xl mx-auto w-full pt-16">
      {/* Hero Section */}
      <section className="mb-16 pt-12">
        <h1 className="font-display text-5xl md:text-6xl text-white mb-4 tracking-tight">Engineering Notes</h1>
        <p className="text-slate-400 font-inter text-lg max-w-2xl leading-relaxed">
          High-fidelity, architectural summaries of core engineering frameworks and languages. Designed for rapid cognitive retrieval and performance-grade implementation.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <div className="mb-12 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-grow flex items-center gap-4 bg-surface/50 backdrop-blur-md px-5 py-4 border border-white/5 rounded-xl w-full">
          <span className="material-symbols-outlined text-slate-500">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-white placeholder-slate-600 font-mono text-sm" 
            placeholder="Search documentation library..." 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-label-caps text-xs transition-all border ${
                activeCategory === cat 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white/5 border-white/5 text-slate-500 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="glass-panel glow-hover rounded-xl overflow-hidden flex flex-col group transition-all duration-300">
              <div className="relative h-44 overflow-hidden">
                <Image 
                  src={note.image} 
                  alt={note.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`bg-${note.color}/20 text-${note.color} text-[10px] font-label-caps px-2 py-1 rounded border border-${note.color}/30 uppercase tracking-widest`}>
                    {note.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-white">{note.title}</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-2">
                  Comprehensive notes and technical guides for mastering {note.title} from basic to advanced concepts.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-mono text-primary uppercase">PDF Format</span>
                  <a 
                    href={`/pdfs/${note.pdf}`} 
                    download={note.pdf}
                    className="bg-primary text-on-primary font-label-caps text-[10px] px-4 py-2 rounded-lg flex items-center gap-2 active:scale-95 transition-transform hover:brightness-110"
                  >
                    <span className="material-symbols-outlined text-xs">download</span>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <span className="material-symbols-outlined text-6xl text-slate-700 mb-4">search_off</span>
          <h3 className="text-xl text-white font-display mb-2">No results found</h3>
          <p className="text-slate-500">We couldn't find any notes matching your query.</p>
          <button 
            onClick={() => {setSearch(""); setActiveCategory("All");}}
            className="mt-6 text-primary font-label-caps hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* System Stats Section */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 glass-panel p-6 rounded-xl border border-white/5 bg-surface/30">
          <h4 className="font-label-caps text-slate-500 text-[10px] mb-4 uppercase tracking-widest">Library Integrity</h4>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-secondary w-[98%] shadow-[0_0_10px_#4edea3]"></div>
          </div>
          <div className="flex justify-between font-mono text-[10px]">
            <span className="text-secondary">98% Optimized</span>
            <span className="text-slate-500">Ready for I/O</span>
          </div>
        </div>
        
        <div className="lg:col-span-3 glass-panel p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 bg-surface/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <div>
              <p className="text-white font-display text-lg">Knowledge Sync</p>
              <p className="text-slate-500 text-sm">Last update: 2 hours ago. 42 modules available.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-800"></div>
              ))}
            </div>
            <p className="text-[10px] font-label-caps text-slate-500 uppercase">Synchronized across 15k instances</p>
          </div>
        </div>
      </div>
    </div>
  );
}
