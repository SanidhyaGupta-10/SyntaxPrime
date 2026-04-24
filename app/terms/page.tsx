"use client";
import Link from "next/link";

export default function TermsPage() {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      desc: "By using SyntaxPrime, you agree to these terms. Please read them carefully before using our services.",
    },
    {
      title: "2. Use of Services",
      desc: "You must follow our acceptable use policies. Do not misuse our services or interfere with other users.",
    },
    {
      title: "3. Privacy",
      desc: "We respect your data. Read our Privacy Policy to understand how we collect and use your information.",
    },
    {
      title: "4. Termination",
      desc: "We may suspend accounts that violate the rules. You may terminate your account at any time.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-400">
            SyntaxPrime
          </h1>
          <p className="text-slate-400 text-lg">Terms of Service</p>
        </div>

        {/* Intro */}
        <p className="text-slate-400 text-center mb-8 max-w-xl mx-auto">
          Welcome to SyntaxPrime. These terms govern your use of our services.
        </p>

        {/* Terms Sections */}
        <div className="space-y-4 mb-10">
          {terms.map((term, i) => (
            <section
              key={i}
              className="bg-slate-800/50 p-5 rounded-xl border border-slate-700"
            >
              <h2 className="text-lg font-semibold text-slate-200 mb-2">
                {term.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {term.desc}
              </p>
            </section>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 text-center rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-center rounded-lg bg-blue-500 hover:bg-blue-400 text-slate-950 font-medium transition-colors text-sm"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
