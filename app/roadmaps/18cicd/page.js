"use client";
import React from "react";
import { GitBranch, Cpu, Server, ShieldCheck, Cloud } from "lucide-react";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gray-800 border border-gray-700 shadow-md flex flex-col items-center gap-4 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300">
      <Icon className="size-12 text-gray-300" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export default function CICDPage() {
  return (
    <div className="min-h-screen w-full bg-black mt-16 text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-gray-700 backdrop-blur-xl bg-gray-900 shadow-[0_0_120px_rgba(200,200,255,0.15)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center justify-center gap-3 text-purple-400">
            <GitBranch className="size-12" /> CI/CD Pipelines
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Learn how to build continuous integration and continuous deployment pipelines, automate workflows, and deploy applications efficiently and reliably.
          </p>
        </div>
      </section>

      {/* CI/CD Topics */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          icon={Cpu}
          title="Version Control"
          text="Understand Git, branching strategies, pull requests, and collaboration workflows."
        />
        <InfoCard
          icon={Server}
          title="Continuous Integration"
          text="Automate builds, run unit tests, and integrate code changes continuously with tools like Jenkins, GitHub Actions, and GitLab CI."
        />
        <InfoCard
          icon={Cloud}
          title="Continuous Deployment"
          text="Automate deployment to staging and production environments using pipelines, Docker, and cloud services."
        />
        <InfoCard
          icon={ShieldCheck}
          title="Testing & Quality"
          text="Incorporate automated testing, code quality checks, linting, and security scans in your pipelines."
        />
        <InfoCard
          icon={GitBranch}
          title="Monitoring & Rollbacks"
          text="Monitor deployments, log failures, and implement rollback strategies for safe production releases."
        />
        <InfoCard
          icon={Cpu}
          title="Advanced CI/CD"
          text="Explore blue/green deployments, canary releases, infrastructure-as-code, and multi-environment pipelines."
        />
      </section>

    </div>
  );
}
