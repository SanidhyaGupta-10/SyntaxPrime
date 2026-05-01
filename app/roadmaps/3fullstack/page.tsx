"use client";
import Link from "next/link";

export default function FullStackPage() {
  const sections = [
    {
      title: "Frontend",
      description: "React, Next.js, Tailwind CSS, and modern UI frameworks",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Backend",
      description: "APIs, databases, authentication, and server-side logic",
      skills: ["Node.js", "PostgreSQL", "GraphQL", "Redis"],
    },
    {
      title: "DevOps",
      description: "Deployment, CI/CD, containers, and cloud infrastructure",
      skills: ["Docker", "Kubernetes", "AWS / GCP", "GitHub Actions"],
    },
  ];

  const projects = [
    { name: "Real-time Chat", stack: "WebSockets + React + Node + Redis" },
    { name: "E-commerce API", stack: "GraphQL + PostgreSQL + Stripe" },
    { name: "Task Manager", stack: "Next.js + Prisma + Tailwind" },
  ];

  return (
    <main className="min-h-screen pb-24 pt-24 max-w-7xl mx-auto w-full text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-3 text-white mb-4">
            Full-Stack Development
          </h1>
          <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Master both frontend and backend. Build complete applications from database to user interface.
          </p>
        </header>

        {/* Stack Sections */}
        <div className="grid gap-6 mb-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300"
            >
              <h2 className="font-display text-2xl tracking-tight mb-2 text-primary">
                {section.title}
              </h2>
              <p className="text-slate-400 text-sm mb-4">{section.description}</p>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 glass-panel rounded-full text-xs font-mono text-primary/80 border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Projects */}
        <section className="glass-panel p-6 rounded-2xl border border-white/5 bg-surface/30 group hover:border-primary/50 transition-all duration-300 mb-10">
          <h2 className="font-display text-2xl tracking-tight mb-4 text-primary">Practice Projects</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="glass-panel p-5 rounded-xl border border-white/5 bg-surface/40"
              >
                <h3 className="font-medium text-white text-sm mb-1">
                  {project.name}
                </h3>
                <p className="text-slate-500 text-xs">{project.stack}</p>
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
