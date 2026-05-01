"use client";
import Image from "next/image";
import Link from "next/link";

export default function BackendPage() {
  const techStack = [
    { name: "Node.js", icon: "/node.png" },
    { name: "Express.js", icon: "/express.png" },
    { name: "PostgreSQL", icon: "/postgres.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "Docker", icon: "/docker.png" },
  ];

  const learningPath = [
    {
      level: "Beginner",
      items: ["JavaScript basics", "Node.js fundamentals", "HTTP & REST concepts"],
    },
    {
      level: "Intermediate",
      items: ["Express / Fastify", "Databases (SQL & NoSQL)", "Authentication (JWT, OAuth)"],
    },
    {
      level: "Advanced",
      items: ["Microservices & message queues", "Scaling, caching & CDNs", "CI/CD, monitoring & security"],
    },
  ];

  return (
    <main className="min-h-screen pb-24 pt-24 max-w-7xl mx-auto w-full text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-3 text-white mb-4">
            Backend Development
          </h1>
          <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Master server-side development. Build APIs, manage databases, handle authentication, and deploy scalable applications.
          </p>
        </header>

        {/* Core Responsibilities */}
        <section className="mb-8 glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300">
          <h2 className="font-display text-2xl tracking-tight mb-4 text-primary">Core Responsibilities</h2>
          <ul className="space-y-2 text-slate-200 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-white mb-4 mt-1">•</span>
              <span>Server-side logic & API architecture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mb-4 mt-1">•</span>
              <span>Database design, queries & optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mb-4 mt-1">•</span>
              <span>Authentication, authorization & security</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white mb-4 mt-1">•</span>
              <span>Testing, monitoring & observability</span>
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-8 glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300">
          <h2 className="font-display text-2xl tracking-tight mb-4 text-primary">Popular Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-lg border border-slate-700"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-sm text-slate-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-10 glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300">
          <h2 className="font-display text-2xl tracking-tight mb-4 text-primary">Learning Path</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {learningPath.map((stage) => (
              <div
                key={stage.level}
                className="glass-panel p-5 rounded-xl border border-white/5 bg-surface/40"
              >
                <h3 className="font-medium text-white mb-4 mb-3 text-sm">{stage.level}</h3>
                <ol className="space-y-2">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-slate-600">{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 text-center rounded-lg border border-white/10 text-white hover:bg-white/5 glass-panel transition-colors text-sm font-medium"
          >
            Back to Home
          </Link>
          <a
            href="#"
            className="px-6 py-2.5 text-center rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-medium transition-colors text-sm"
          >
            Start Learning
          </a>
        </div>
      </div>
    </main>
  );
}

