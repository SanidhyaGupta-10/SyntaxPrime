"use client";
import React from "react";
import { Smartphone, Code2, Layers } from "lucide-react";

// Reusable Card Component
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div
      className="
      p-8 rounded-2xl bg-[#101828] border border-white/10 shadow-xl 
      flex flex-col items-center gap-4 backdrop-blur-lg 
      hover:scale-[1.04] transition-all duration-300"
    >
      <Icon className="size-12" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-[18px] opacity-70 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function FlutterPage() {
  return (
    <div className="min-h-screen w-full bg-black mt-16 text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div
          className="
          w-full rounded-2xl p-10 border border-white/10 
          backdrop-blur-xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)]
          "
        >
          <h1
            className="
            text-5xl font-semibold tracking-tight 
            flex items-center justify-center gap-3"
          >
            <Smartphone className="size-12" /> Flutter Hub
          </h1>

          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Flutter is Google’s UI toolkit that lets you create beautiful, fast,
            and natively compiled applications for **mobile, web, desktop, and embedded devices** —
            all from a single Dart codebase.
          </p>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <InfoCard
          icon={Layers}
          title="Single Codebase"
          text="Write once and deploy on Android, iOS, Web, Windows, Linux, macOS, and even embedded systems — all using Dart."
        />

        <InfoCard
          icon={Code2}
          title="Beautiful UI"
          text="Flutter provides customizable widgets, animations, and Material/Cupertino components that give apps a polished native feel."
        />

        <InfoCard
          icon={Smartphone}
          title="High Performance"
          text="Flutter apps compile to ARM machine code and use the Skia rendering engine, delivering consistent 120 FPS smoothness."
        />

      </section>

    </div>
  );
}
