"use client";
import React from "react";
import { Cpu, Terminal, Server, ShieldCheck, Database } from "lucide-react";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gray-800 border  border-gray-700 shadow-md flex flex-col items-center gap-4 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300">
      <Icon className="size-12 text-gray-300" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export default function LinuxPage() {
  return (
    <div className="min-h-screen w-full mt-16 bg-black text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-gray-700 backdrop-blur-xl bg-gray-900  shadow-[0_0_120px_rgba(200,200,255,0.15)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center justify-center gap-3 text-green-400">
            <Terminal className="size-12" /> Linux Hub
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Learn Linux from beginner to advanced: commands, shell scripting, servers, administration, and system security.
          </p>
        </div>
      </section>

      {/* Core Linux Topics */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          icon={Cpu}
          title="Linux Fundamentals"
          text="File system navigation, commands, permissions, processes, and users."
        />
        <InfoCard
          icon={Terminal}
          title="Shell & Scripting"
          text="Bash scripting, automation, cron jobs, variables, loops, and functions."
        />
        <InfoCard
          icon={Server}
          title="Server Management"
          text="Install, configure, and maintain Linux servers for web hosting and services."
        />
        <InfoCard
          icon={ShieldCheck}
          title="Security & Firewall"
          text="User management, sudo policies, firewall configuration, SSH keys, and system hardening."
        />
        <InfoCard
          icon={Database}
          title="Databases on Linux"
          text="Install and manage MySQL, PostgreSQL, MongoDB, and other databases on Linux servers."
        />
        <InfoCard
          icon={Cpu}
          title="Advanced Linux"
          text="Kernel configuration, performance tuning, networking, and container management."
        />
      </section>

    </div>
  );
}