"use client";
import React from "react";
import { Cloud, Server, Database, Cpu, ShieldCheck } from "lucide-react";

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10 shadow-xl flex flex-col items-center gap-4 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300">
      <Icon className="size-12 text-blue-300" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-[18px] opacity-80 text-center leading-relaxed text-white/80">{text}</p>
    </div>
  );
}

export default function AWSPage() {
  return (
    <div className="min-h-screen w-full mt-16 bg-black text-white px-6 py-16 flex flex-col items-center gap-20 overflow-hidden">

      {/* Header */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center">
        <div className="w-full rounded-2xl p-10 border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_120px_rgba(200,200,255,0.15)]">
          <h1 className="text-5xl font-semibold tracking-tight flex items-center justify-center gap-3 text-blue-300">
            <Cloud className="size-12" /> AWS Cloud Hub
          </h1>
          <p className="mt-4 text-lg opacity-80 leading-relaxed max-w-2xl mx-auto">
            Learn Amazon Web Services from beginner to advanced, covering infrastructure, deployment, security, and real-world cloud solutions.
          </p>
        </div>
      </section>

      {/* Core AWS Services */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <InfoCard
          icon={Server}
          title="Compute"
          text="Learn EC2, Lambda, and container services for scalable compute in the cloud."
        />
        <InfoCard
          icon={Database}
          title="Storage & Databases"
          text="Explore S3, RDS, DynamoDB, and data management best practices."
        />
        <InfoCard
          icon={Cpu}
          title="Networking & Content Delivery"
          text="Understand VPC, Route53, CloudFront, and secure global networking setups."
        />
        <InfoCard
          icon={ShieldCheck}
          title="Security & IAM"
          text="Manage users, roles, policies, and protect your cloud infrastructure."
        />
        <InfoCard
          icon={Cloud}
          title="DevOps & Monitoring"
          text="Learn CloudFormation, CDK, CI/CD pipelines, CloudWatch, and monitoring practices."
        />
        <InfoCard
          icon={Cpu}
          title="Advanced Topics"
          text="Dive into serverless architectures, auto-scaling, high availability, and cost optimization strategies."
        />
      </section>

    </div>
  );
}
