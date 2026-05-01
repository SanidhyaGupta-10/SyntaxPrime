"use client";
import React from "react";
import { Smartphone, Cpu, Database, Code2, Layers, Rocket } from "lucide-react";

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

// Reusable Card Component
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

export default function ReactNativePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header Section */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <Smartphone className="size-12" /> React Native Roadmap
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Follow this structured learning path from complete beginner to
            expert-level React Native mobile developer.
          </p>
        </div>
      </section>

      {/* Beginner Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Beginner Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Code2}
            title="JavaScript Basics"
            text="Understand variables, functions, loops, ES6 features, and async patterns. This forms the foundation of React Native."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Smartphone}
            title="Intro to React Native"
            text="Learn components, props, state, styling, Flexbox layout, and using the React Native CLI or Expo."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Layers}
            title="Navigation Basics"
            text="Get comfortable with React Navigation: stack, tab, and drawer navigators."
          />
    </div>
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Intermediate Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Cpu}
            title="State Management"
            text="Master Context API, Redux Toolkit, Zustand, or Recoil to manage complex app state."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="API Integration & Storage"
            text="Work with REST APIs, Axios, async storage, SQLite, Firebase, or Supabase."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Smartphone}
            title="Forms & Validation"
            text="Use libraries like Formik and Yup for powerful form handling and clean validation."
          />
    </div>
        </div>
      </section>

      {/* Advanced / Expert Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center opacity-90">Advanced / Expert Level</h2>
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Rocket}
            title="Native Modules & Performance"
            text="Learn how React Native bridges work, optimize renders, and write custom native code for iOS/Android."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Cpu}
            title="Animations & UX"
            text="Master Reanimated 2, Gesture Handler, Lottie, and build fluid, high-performance UI/UX."
          />
    </div>
          <div className="relative z-10 flex flex-col items-center">
      <InfoCard
            icon={Database}
            title="Production-Level Apps"
            text="Learn OTA updates (Expo/CodePush), CI/CD, app signing, publishing to Google Play & App Store."
          />
    </div>
        </div>
      </section>

    </div>
  );
}

