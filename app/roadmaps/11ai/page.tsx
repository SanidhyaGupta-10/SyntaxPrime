"use client";
import React from "react";
import { BrainCircuit, Lightbulb, Rocket, Workflow } from "lucide-react";

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
      <Icon className="size-12 text-blue-300" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed">{text}</p>
    </div>
  );
}

export default function AIPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <BrainCircuit className="size-12" /> Artificial Intelligence Hub
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            A complete beginner-to-expert learning ecosystem explaining what AI is, how it works, why it matters, and how you can start your journey into building intelligent systems.
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Lightbulb}
          title="What is AI?"
          text="Artificial Intelligence is the science of making machines think, learn, and solve problems like humans. It powers chatbots, automation, robotics, recommendation systems, and much more."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Workflow}
          title="How to Learn AI"
          text="Start with Python, learn data handling, understand ML basics, explore neural networks, and practice using frameworks like TensorFlow or PyTorch. Step-by-step progress builds real expertise."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Rocket}
          title="Why AI?"
          text="AI is the future of automation, intelligent apps, decision-making systems, and advanced computing. Learning it opens doors to innovation, high-impact jobs, and futuristic problem-solving."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={BrainCircuit}
          title="How to Use AI"
          text="Use AI for building automation tools, improving decision systems, powering chatbots, generating predictions, analyzing data, and creating smart real-world applications."
        />
    </div>

        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Lightbulb}
          title="How AI Helps You"
          text="AI saves time, boosts productivity, automates repetitive tasks, enhances accuracy, and helps create smarter solutionsâ€”making your workflow faster, more intelligent, and more efficient."
        />
    </div>
      </section>

    </div>
  );
}
