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
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-purple-400">
            Full-Stack Development
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Master both frontend and backend. Build complete applications from database to user interface.
          </p>
        </header>

        {/* Stack Sections */}
        <div className="grid gap-6 mb-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-slate-800/50 rounded-xl p-5 border border-slate-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-purple-300">
                {section.title}
              </h2>
              <p className="text-slate-400 text-sm mb-4">{section.description}</p>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Projects */}
        <section className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Practice Projects</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-slate-900/80 rounded-lg p-4 border border-slate-700"
              >
                <h3 className="font-medium text-slate-200 text-sm mb-1">
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
            className="px-6 py-2.5 text-center rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Back to Home
          </Link>
          <a
            href="#"
            className="px-6 py-2.5 text-center rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-medium transition-colors text-sm"
          >
            Start Learning
          </a>
        </div>
      </div>
    </main>
  );
}
