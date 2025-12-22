"use client";
import React from "react";
import { Container, Cpu, Server, Layers, ShieldCheck } from "lucide-react";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl shadow-[0_0_120px_rgba(255,255,255,0)] bg-linear-to-br   from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-white/10 flex flex-col items-center gap-4 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300">
      <Icon className="size-12 text-cyan-300" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm opacity-80 text-center leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export default function DockerPage() {
  return (
    <div className="min-h-screen mt-16 w-full bg-black text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_120px_rgba(200,200,255,0.15)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center justify-center gap-3 text-cyan-300">
            <Container className="size-12" /> Docker Hub
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Learn Docker from beginner to advanced, including containers, images, networking, volumes, orchestration, and production deployment strategies.
          </p>
        </div>
      </section>

      {/* Core Docker Topics */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          icon={Cpu}
          title="Containers & Images"
          text="Understand containerization, building images, Dockerfile syntax, and layering strategies."
        />
        <InfoCard
          icon={Server}
          title="Docker Compose"
          text="Orchestrate multi-container applications, networking between services, and configuration best practices."
        />
        <InfoCard
          icon={Layers}
          title="Networking & Volumes"
          text="Manage container networks, ports, volumes, and persistent storage for reliable applications."
        />
        <InfoCard
          icon={ShieldCheck}
          title="Security & Best Practices"
          text="Apply container security, least-privilege policies, secrets management, and secure image usage."
        />
        <InfoCard
          icon={Container}
          title="Docker Swarm & Orchestration"
          text="Deploy scalable containerized applications, load balancing, and cluster management."
        />
        <InfoCard
          icon={Cpu}
          title="CI/CD & Production"
          text="Integrate Docker with pipelines, automated builds, cloud deployment, and monitoring."
        />
      </section>

    </div>
  );
}
