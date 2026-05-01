"use client";
import React from "react";
import { Cpu, Terminal, Server, ShieldCheck, Database } from "lucide-react";

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
      <Icon className="size-12 text-gray-300" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export default function LinuxPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-[40px] p-12 sm:p-16 border border-white/10 backdrop-blur-3xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            <Terminal className="size-12" /> Linux Hub
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Learn Linux from beginner to advanced: commands, shell scripting, servers, administration, and system security.
          </p>
        </div>
      </section>

      {/* Core Linux Topics */}
      <section className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Cpu}
          title="Linux Fundamentals"
          text="File system navigation, commands, permissions, processes, and users."
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Terminal}
          title="Shell & Scripting"
          text="Bash scripting, automation, cron jobs, variables, loops, and functions."
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Server}
          title="Server Management"
          text="Install, configure, and maintain Linux servers for web hosting and services."
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={ShieldCheck}
          title="Security & Firewall"
          text="User management, sudo policies, firewall configuration, SSH keys, and system hardening."
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Database}
          title="Databases on Linux"
          text="Install and manage MySQL, PostgreSQL, MongoDB, and other databases on Linux servers."
        />
    </div>
        <div className="relative z-10 flex flex-col items-center">
      <InfoCard
          icon={Cpu}
          title="Advanced Linux"
          text="Kernel configuration, performance tuning, networking, and container management."
        />
    </div>
      </section>

    </div>
  );
}
