"use client";

import Link from "next/link";

export default function Page() {
  const features = [
    {
      title: "Structured Paths",
      desc: "Step-by-step learning paths that remove guesswork and keep momentum.",
    },
    {
      title: "Real Projects",
      desc: "Build real-world projects that belong in your portfolio.",
    },
    {
      title: "Reference & Tools",
      desc: "Snippets, patterns, and utilities to speed up your workflow.",
    },
  ];

  const courses = [
    { title: "Frontend Essentials", desc: "React, Next.js, styling systems and accessibility." },
    { title: "Fullstack Projects", desc: "From APIs to deployable applications and infra basics." },
  ];

  const projects = [
    { title: "UI Kit", desc: "Design system and component library used across courses." },
    { title: "Starter Templates", desc: "Opinionated starters for rapid prototyping." },
    { title: "Tooling", desc: "CLI tools and generators to make repetitive tasks simple." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-indigo-400">
            &lt;SyntaxPrime/&gt;
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
            A refined developer environment designed with clarity, precision, and depth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/roadmaps"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-medium transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/notes"
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Notes
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-slate-200">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((f) => (
              <article key={f.title} className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                <h3 className="text-lg font-semibold mb-2 text-indigo-300">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-slate-200">Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((c) => (
              <div key={c.title} className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold mb-2 text-indigo-300">{c.title}</h4>
                <p className="text-slate-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-slate-200">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                <h5 className="text-lg font-medium mb-2 text-indigo-300">{p.title}</h5>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-4">Ready to get started?</h3>
          <p className="text-slate-400 mb-6">
            Join SyntaxPrime for a focused, premium learning experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/terms"
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} SyntaxPrime — All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-300">Terms</Link>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
