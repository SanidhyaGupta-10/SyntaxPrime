"use client";
import React from "react";
import { Smartphone, Cpu, Database, Code2, Layers, Rocket } from "lucide-react";

// Reusable Card Component
function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-white/10 border border-white/10 shadow-xl
                    flex flex-col items-center gap-4 backdrop-blur-lg
                    hover:scale-[1.04] transition-all duration-300">
      <Icon className="size-12" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-[18px] opacity-70 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function ReactNativePage() {
  return (
    <div className="min-h-screen w-full bg-black mt-16 text-white px-6 py-16 
                    flex flex-col items-center gap-28 overflow-hidden">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-white/10 backdrop-blur-xl 
                        bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center 
                         justify-center gap-3">
            <Smartphone className="size-12" /> React Native Roadmap
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Follow this structured learning path from complete beginner to
            expert-level React Native mobile developer.
          </p>
        </div>
      </section>

      {/* Beginner Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Beginner Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Code2}
            title="JavaScript Basics"
            text="Understand variables, functions, loops, ES6 features, and async patterns. This forms the foundation of React Native."
          />
          <InfoCard
            icon={Smartphone}
            title="Intro to React Native"
            text="Learn components, props, state, styling, Flexbox layout, and using the React Native CLI or Expo."
          />
          <InfoCard
            icon={Layers}
            title="Navigation Basics"
            text="Get comfortable with React Navigation: stack, tab, and drawer navigators."
          />
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Intermediate Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Cpu}
            title="State Management"
            text="Master Context API, Redux Toolkit, Zustand, or Recoil to manage complex app state."
          />
          <InfoCard
            icon={Database}
            title="API Integration & Storage"
            text="Work with REST APIs, Axios, async storage, SQLite, Firebase, or Supabase."
          />
          <InfoCard
            icon={Smartphone}
            title="Forms & Validation"
            text="Use libraries like Formik and Yup for powerful form handling and clean validation."
          />
        </div>
      </section>

      {/* Advanced / Expert Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Advanced / Expert Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <InfoCard
            icon={Rocket}
            title="Native Modules & Performance"
            text="Learn how React Native bridges work, optimize renders, and write custom native code for iOS/Android."
          />
          <InfoCard
            icon={Cpu}
            title="Animations & UX"
            text="Master Reanimated 2, Gesture Handler, Lottie, and build fluid, high-performance UI/UX."
          />
          <InfoCard
            icon={Database}
            title="Production-Level Apps"
            text="Learn OTA updates (Expo/CodePush), CI/CD, app signing, publishing to Google Play & App Store."
          />
        </div>
      </section>

    </div>
  );
}
