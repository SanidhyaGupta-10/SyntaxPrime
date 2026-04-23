"use client";
import React from "react";
import { BrainCircuit, Lightbulb, Rocket, Workflow } from "lucide-react";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10 shadow-xl flex flex-col items-center gap-4 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300">
      <Icon className="size-12 text-blue-300" />
      <h3 className="text-xl font-semibold text-blue-200">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function AIPage() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br mt-16 from-black via-[#050014] to-[#0a001f] text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_120px_gray(50%)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center justify-center gap-3 text-blue-300">
            <BrainCircuit className="size-12" /> Artificial Intelligence Hub
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            A complete beginner-to-expert learning ecosystem explaining what AI is, how it works, why it matters, and how you can start your journey into building intelligent systems.
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          icon={Lightbulb}
          title="What is AI?"
          text="Artificial Intelligence is the science of making machines think, learn, and solve problems like humans. It powers chatbots, automation, robotics, recommendation systems, and much more."
        />

        <InfoCard
          icon={Workflow}
          title="How to Learn AI"
          text="Start with Python, learn data handling, understand ML basics, explore neural networks, and practice using frameworks like TensorFlow or PyTorch. Step-by-step progress builds real expertise."
        />

        <InfoCard
          icon={Rocket}
          title="Why AI?"
          text="AI is the future of automation, intelligent apps, decision-making systems, and advanced computing. Learning it opens doors to innovation, high-impact jobs, and futuristic problem-solving."
        />

        <InfoCard
          icon={BrainCircuit}
          title="How to Use AI"
          text="Use AI for building automation tools, improving decision systems, powering chatbots, generating predictions, analyzing data, and creating smart real-world applications."
        />

        <InfoCard
          icon={Lightbulb}
          title="How AI Helps You"
          text="AI saves time, boosts productivity, automates repetitive tasks, enhances accuracy, and helps create smarter solutions—making your workflow faster, more intelligent, and more efficient."
        />
      </section>

    </div>
  );
}