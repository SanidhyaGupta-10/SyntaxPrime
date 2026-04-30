"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden hero-mesh">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8 animate-pulse">
            <span className="material-symbols-outlined text-sm mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-label-caps uppercase">Now v2.4 Stable Release</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6 tracking-tighter text-glow">
            &lt;SyntaxPrime/&gt;
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-inter">
            A refined developer environment designed with clarity, precision, and depth. Orchestrate your learning journey with architectural rigor and cognitive flow.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/roadmaps" 
              className="bg-primary px-8 py-4 text-on-primary font-label-caps flex items-center gap-2 rounded-lg hover:shadow-[0_0_30px_rgba(137,206,255,0.4)] transition-all active:scale-95"
            >
              Learn More
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link 
              href="/notes" 
              className="glass-panel px-8 py-4 text-white font-label-caps rounded-lg hover:bg-white/10 transition-all active:scale-95"
            >
              Notes
            </Link>
          </div>
        </div>

        {/* Floating Code Editor Image */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto px-4">
          <div className="glass-panel rounded-xl p-4 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-error/40"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/40"></div>
              <div className="ml-4 text-xs font-mono text-slate-500">syntax_prime --env production</div>
            </div>
            <div className="relative aspect-video w-full">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDJB0uj91W-4D0G_hYPfciOskhjJKJ0ECI9k5XWd-A5DKxSQRYzPr1bzEFB9C-pLd9f3qMCCgn5CFdyWSvW02Q3z1Es7NUAfAbjpk6ZjZb518qgY6uuHDFkOgeJ0eJla0RfNa__Y0W0uMyxHWGSSuZv0FSEJkHNrJrbXgQ6rqIkjMWCz6rfhanPaNHNibpVdjuuvXJ4eyKw_TGdKl5fkjRcK7KlKtEBRGARaxjaaagmxvi2Wv8KDbPFjlJgfnkc0Y0IQTpu861p8" 
                alt="Syntax highlighting in a modern code editor"
                fill
                className="object-cover rounded-lg border border-white/5 opacity-90"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cluster */}
      <section className="py-20 border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "map", label: "Explore Roadmaps", href: "/roadmaps" },
              { icon: "description", label: "Download Notes", href: "/notes" },
              { icon: "trending_up", label: "Most Popular Skills", href: "/skills" },
              { icon: "calculate", label: "MathsBuddy", href: "https://maths-buddy.vercel.app/" },
              { icon: "work", label: "Portfolio", href: "https://sanidhy-portfolio.vercel.app/" },
              { icon: "code", label: "Github", href: "https://github.com/SanidhyaGupta-10/" },
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group glass-panel p-6 rounded-xl hover:border-primary transition-all duration-300"
              >
                <span className="material-symbols-outlined text-primary mb-3 block">{item.icon}</span>
                <span className="text-white font-label-caps group-hover:text-primary transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl text-white mb-4">Engineered for Mastery</h2>
          <p className="text-slate-500 text-lg">Precision-crafted features for the next generation of software engineers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Structured Paths */}
          <div className="md:col-span-8 group relative glass-panel rounded-xl overflow-hidden p-8 flex flex-col justify-between hover:border-primary transition-all duration-500 min-h-[400px]">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-primary">route</span>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-primary">account_tree</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Structured Paths</h3>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Navigate through meticulously curated learning tracks that eliminate the noise and focus on high-impact technical skills. From kernel architecture to cloud-native systems.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <Link href="/roadmaps" className="text-primary font-label-caps flex items-center gap-2 hover:gap-3 transition-all">
                View Curriculums <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Real Projects */}
          <div className="md:col-span-4 group glass-panel rounded-xl overflow-hidden p-8 flex flex-col hover:border-secondary transition-all duration-500">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary">rocket_launch</span>
            </div>
            <h3 className="font-display text-2xl text-white mb-4">Real Projects</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Build production-grade applications that solve actual problems. Translate theory into tangible, high-performance codebases.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex -space-x-3 mb-4">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNHv1YUfY5FHIoL1OWlMGD9mBV3vc6Hd3Ue-1UlpuKMtkeiMfAcm_A9R_OtcQJCX-tY4vUFdyRQsGp8fUI2KHhoVjtiMOzKFQIf7dyuUsrjZy1VFQvGsThC8SplpxtEvMiac4XoVWRcSMVFG-8_oB3eGhaKykk2CpXVK3TlCyu44Y1u1OzitifirYx_DILCQB9uU54LD4bCsT0Ziu9yVCkGhD2G7bjUmzf0FE_g3M2yox_Q71gsyaJHR5oWjdb-EFrz-1Fnc0apw",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBy47hpr68pL6AoxRN2tGNtsvGtB_XCMPx1sUSV-JYEkYJ_wTxIqLwhgCqQWuwhNO71bUAK1Y5gHxqglfGXUqpuctcNb5YZM_do3fnYQlmiv0HO3OEHrHXpmwWeveenK1DxvFkyawZqW72JnvJ23oHtw23Y227PThVkBzDP4tng1frkawEukrb0ymBss_8kXHdQNA1xWIvaTVvsl4m2gtHcXSe1HWMJuoDvbpPNwtmtHwnKsrr11LPiwLFhpdJlCB5iZSIi5FdGnE"
                ].map((src, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-[#050505]">
                    <Image src={src} alt="Developer Avatar" fill className="rounded-full object-cover" unoptimized />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-secondary flex items-center justify-center text-[10px] font-bold text-on-secondary relative z-10">+42</div>
              </div>
              <span className="text-[10px] text-slate-500 font-label-caps">Collaborating on 'NeuraCore-X'</span>
            </div>
          </div>

          {/* Reference & Tools */}
          <div className="md:col-span-12 group glass-panel rounded-xl p-8 flex flex-col md:flex-row items-center gap-10 hover:border-tertiary transition-all duration-500">
            <div className="flex-1">
              <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary">inventory_2</span>
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Reference & Tools</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Access a vast library of technical cheatsheets, architectural patterns, and performance optimization guides. Your high-speed lookup engine for complex engineering concepts.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-black/40 border border-white/5 rounded-lg p-4 font-mono text-sm text-tertiary">
                <div className="text-slate-600 mb-2">// CLI Utility</div>
                syntax-prime --fetch api-patterns
              </div>
              <div className="bg-black/40 border border-white/5 rounded-lg p-4 font-mono text-sm text-primary">
                <div className="text-slate-600 mb-2">// Docs</div>
                ls documentation/roadmaps/
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass-panel rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 tracking-tighter">Ready to optimize your workflow?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="w-full md:w-auto bg-primary-container text-on-primary-container px-10 py-4 font-label-caps rounded-lg hover:brightness-110 shadow-lg active:scale-95 transition-all">
              Initialize Environment
            </button>
            <p className="text-slate-500 font-inter">Join 15k+ developers today.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
