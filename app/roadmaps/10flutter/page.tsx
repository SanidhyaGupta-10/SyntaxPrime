"use client";
import React from "react";
import { Smartphone, Code2, Layers } from "lucide-react";

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
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
    >
      <Icon className="size-12" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed">{text}</p>
    </div>
  );
}

export default function FlutterPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div
          className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center"
        >
          <h1
            className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4"
          >
            <Smartphone className="size-12" /> Flutter Hub
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Flutter is Googleâ€™s UI toolkit that lets you create beautiful, fast,
            and natively compiled applications for **mobile, web, desktop, and embedded devices** â€”
            all from a single Dart codebase.
          </p>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Layers}
          title="Single Codebase"
          text="Write once and deploy on Android, iOS, Web, Windows, Linux, macOS, and even embedded systems â€” all using Dart."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Code2}
          title="Beautiful UI"
          text="Flutter provides customizable widgets, animations, and Material/Cupertino components that give apps a polished native feel."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Smartphone}
          title="High Performance"
          text="Flutter apps compile to ARM machine code and use the Skia rendering engine, delivering consistent 120 FPS smoothness."
        />
    </div>

      </section>

    </div>
  );
}

