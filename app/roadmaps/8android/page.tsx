"use client";
import React from "react";
import { Smartphone, Cpu, Settings, Database, Code2, Rocket } from "lucide-react";

// Reusable Card Component
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-white/10 border border-white/10 shadow-xl
                    flex flex-col items-center gap-4 backdrop-blur-lg
                    hover:scale-[1.04] transition-all duration-300">
      <Icon className="size-12" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm opacity-70 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function AndroidPage() {
  return (
    <div className="min-h-screen w-full bg-black mt-16 text-white px-6 py-16
                    flex flex-col items-center gap-28 overflow-hidden">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-white/10 backdrop-blur-xl
                        bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center
                         justify-center gap-3">
            <Smartphone className="size-12" /> Android Development Roadmap
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            A complete structured learning path to go from beginner to expert in
            native Android development using Kotlin.
          </p>
        </div>
      </section>

      {/* Beginner Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Beginner Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Code2}
            title="Kotlin Basics"
            text="Learn variables, data types, classes, functions, collections, and OOP concepts — the foundation of Android."
          />
          <InfoCard
            icon={Smartphone}
            title="Android Studio Setup"
            text="Install Android Studio, configure SDKs, create your first activity, and understand basic project structure."
          />
          <InfoCard
            icon={Settings}
            title="UI Fundamentals"
            text="Work with XML layouts, buttons, text views, images, and master ConstraintLayout."
          />
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Intermediate Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Cpu}
            title="Jetpack Components"
            text="Master ViewModel, LiveData/Flow, Navigation Component, WorkManager, and Jetpack libraries to build scalable apps."
          />
          <InfoCard
            icon={Database}
            title="Data & APIs"
            text="Learn Retrofit, Room Database, Coroutines, Dependency Injection (Hilt), and app data architecture."
          />
          <InfoCard
            icon={Smartphone}
            title="Modern UI with Compose"
            text="Build beautiful reactive UIs using Jetpack Compose — Android's modern declarative UI toolkit."
          />
        </div>
      </section>

      {/* Advanced / Expert Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center opacity-90">Advanced / Expert Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Rocket}
            title="App Architecture"
            text="Understand MVVM, Clean Architecture, modularization, repositories, and writing scalable production-level code."
          />
          <InfoCard
            icon={Cpu}
            title="Performance & Optimization"
            text="Optimize memory, CPU usage, rendering, and build highly efficient apps using profiling tools."
          />
          <InfoCard
            icon={Database}
            title="Publishing & CI/CD"
            text="Learn app signing, Play Store publishing, OTA updates, Firebase tools, automation pipelines, and monitoring."
          />
        </div>
      </section>

    </div>
  );
}