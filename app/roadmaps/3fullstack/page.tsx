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
    <main className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            Full-Stack Development
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Master both frontend and backend. Build complete applications from database to user interface.
          </p>
        </header>

        {/* Stack Sections */}
        <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {sections.map((section) => (
            <section
              key={section.title}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>
              <p className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed">{section.description}</p>
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
        <section className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Practice Projects</h2>
          <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
              >
                <h3 className="font-medium text-white text-sm mb-1">
                  {project.name}
                </h3>
                <p className="text-[15px] text-neutral-500 font-medium tracking-wide">{project.stack}</p>
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
