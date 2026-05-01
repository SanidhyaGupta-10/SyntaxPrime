"use client";
import Link from "next/link";
import Image from "next/image";

// Icons
import ReactPNG from "../../../public/React-icon.png";
import Next from "../../../public/next.png";
import VuePNG from "../../../public/vue.png";
import AngularPNG from "../../../public/angular.png";
import GSAPPNG from "../../../public/gsap.png";
import THREEPNG from "../../../public/three.png";
import Tailwind from "../../../public/tailwind.png";
import HTMLPNG from "../../../public/html.png";
import CSSPNG from "../../../public/css.png";
import JSPNG from "../../../public/js.png";
import BootstrapPNG from "../../../public/boot.png";

export default function FrontendPage() {
  const techStack = [
    { name: "React.js", icon: ReactPNG },
    { name: "Next.js", icon: Next },
    { name: "Vue.js", icon: VuePNG },
    { name: "Angular", icon: AngularPNG },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "GSAP", icon: GSAPPNG },
    { name: "Three.js", icon: THREEPNG },
  ];

  const coreLanguages = [
    { name: "HTML", description: "Creates the layout and structure", icon: HTMLPNG },
    { name: "CSS", description: "Colors, fonts, animations, spacing", icon: CSSPNG },
    { name: "JavaScript", description: "Click events, popups, sliders", icon: JSPNG },
  ];

  const learningPath = [
    {
      level: "Step 1: Basics",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      level: "Step 2: CSS Framework",
      items: ["Tailwind CSS", "Bootstrap"],
    },
    {
      level: "Step 3: Animation (Optional)",
      items: ["GSAP", "Three.js"],
    },
    {
      level: "Step 4: JS Framework",
      items: ["React.js", "Angular", "Vue.js", "Next.js"],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-6 flex items-center justify-center gap-4">
            Frontend Development
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-neutral-400 tracking-tight font-medium max-w-3xl mx-auto leading-relaxed">
            Frontend = The part of a website or app that the user sees and interacts with. Master the art of building beautiful user interfaces.
          </p>
        </header>

        {/* Core Languages */}
        <section className="p-10 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-start gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.01] hover:border-white/20 transition-all duration-500 mb-8 w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Core Languages</h2>
          <ul className="space-y-4 w-full">
            {coreLanguages.map((lang) => (
              <li key={lang.name} className="flex items-center gap-4 border border-white/5 p-4 rounded-2xl bg-white/[0.02]">
                <Image src={lang.icon} width={30} height={30} alt={lang.name} />
                <div>
                  <span className="text-white font-medium block">{lang.name}</span>
                  <span className="text-neutral-400 text-sm">{lang.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="p-10 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-start gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.01] hover:border-white/20 transition-all duration-500 mb-8 w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Popular Frameworks</h2>
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
        <section className="mb-10 w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-8 text-center">Recommended Learning Path</h2>
          <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {learningPath.map((stage) => (
              <div
                key={stage.level}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative"
              >
                <h3 className="font-medium text-white mb-4 text-sm">{stage.level}</h3>
                <ol className="space-y-2">
                  {stage.items.map((item, idx) => (
                    <li key={idx} className="text-[17px] text-neutral-400 font-medium tracking-wide leading-relaxed flex items-start gap-2">
                      <span className="text-slate-600 shrink-0">{idx + 1}.</span>
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
