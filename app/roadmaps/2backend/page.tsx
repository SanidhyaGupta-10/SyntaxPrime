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
    <main className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            Backend Development
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Master server-side development. Build APIs, manage databases, handle authentication, and deploy scalable applications.
          </p>
        </header>

        {/* Core Responsibilities */}
        <section className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Core Responsibilities</h2>
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
        <section className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Popular Technologies</h2>
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
        <section className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Learning Path</h2>
          <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {learningPath.map((stage) => (
              <div
                key={stage.level}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
              >
                <h3 className="font-medium text-white mb-4 mb-3 text-sm">{stage.level}</h3>
                <ol className="space-y-2">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed">
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

