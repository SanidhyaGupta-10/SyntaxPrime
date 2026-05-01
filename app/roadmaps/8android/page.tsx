"use client";
import React from "react";
import { Smartphone, Cpu, Settings, Database, Code2, Rocket } from "lucide-react";

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
      <Icon className="size-12" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed">{text}</p>
    </div>
  );
}

export default function AndroidPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <Smartphone className="size-12" /> Android Development Roadmap
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            A complete structured learning path to go from beginner to expert in
            native Android development using Kotlin.
          </p>
        </div>
      </section>

      {/* Beginner Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Beginner Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Code2}
            title="Kotlin Basics"
            text="Learn variables, data types, classes, functions, collections, and OOP concepts â€” the foundation of Android."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Smartphone}
            title="Android Studio Setup"
            text="Install Android Studio, configure SDKs, create your first activity, and understand basic project structure."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Settings}
            title="UI Fundamentals"
            text="Work with XML layouts, buttons, text views, images, and master ConstraintLayout."
          />
    </div>
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Intermediate Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Cpu}
            title="Jetpack Components"
            text="Master ViewModel, LiveData/Flow, Navigation Component, WorkManager, and Jetpack libraries to build scalable apps."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Data & APIs"
            text="Learn Retrofit, Room Database, Coroutines, Dependency Injection (Hilt), and app data architecture."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Smartphone}
            title="Modern UI with Compose"
            text="Build beautiful reactive UIs using Jetpack Compose â€” Android's modern declarative UI toolkit."
          />
    </div>
        </div>
      </section>

      {/* Advanced / Expert Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Advanced / Expert Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Rocket}
            title="App Architecture"
            text="Understand MVVM, Clean Architecture, modularization, repositories, and writing scalable production-level code."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Cpu}
            title="Performance & Optimization"
            text="Optimize memory, CPU usage, rendering, and build highly efficient apps using profiling tools."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Publishing & CI/CD"
            text="Learn app signing, Play Store publishing, OTA updates, Firebase tools, automation pipelines, and monitoring."
          />
    </div>
        </div>
      </section>

    </div>
  );
}
