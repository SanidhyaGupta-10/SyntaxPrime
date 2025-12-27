"use client";

import React, { Suspense, useRef, useEffect, useImperativeHandle } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Desk } from "../components/Desk";
import gsap from "gsap";


function InteractiveTitle() {
  const titleRef = useRef(null);

  const handleMove = (e) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(titleRef.current, {
      rotationY: x * 0.04,
      rotationX: -y * 0.04,
      scale: 1.06,
      duration: 0.6,
      ease: "power3.out",
      transformPerspective: 1000,
    });
  };

  const handleLeave = () => {
    if (!titleRef.current) return;
    gsap.to(titleRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <h1
      ref={titleRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
        text-5xl md:text-[48px] lg:text-[50px] font-semibold select-none cursor-default
        bg-linear-to-r from-[#00eaff] via-[#004cff] to-[#124dff]
        bg-clip-text text-transparent
        transition-transform will-change-transform
        "
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      &lt;SyntaxPrime/&gt;
    </h1>
  );
}

function InteractiveParagraph() {
  const paraRef = useRef(null);

  const handleMove = (e) => {
    if (!paraRef.current) return;
    const rect = paraRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(paraRef.current, {
      rotationY: x * 0.015,
      rotationX: -y * 0.015,
      scale: 1.01,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!paraRef.current) return;
    gsap.to(paraRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <p
      ref={paraRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="text-gray-200 text-lg leading-relaxed mb-8 max-w-2xl"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      A refined developer environment designed with clarity, precision, and depth.
      SyntaxPrime blends modern UI principles with subtle futuristic tones,
      giving you a workspace that feels powerful and deliberately minimal.
    </p>
  );
}

const MagneticButton = React.forwardRef(function MagneticButton({ href, children, accent = "blue" }, ref) {
  const btnRef = useRef(null);
  useImperativeHandle(ref, () => btnRef.current);

  const handleMove = (e) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnRef.current, {
      x: x * 0.06,
      y: y * 0.06,
      scale: 1.02,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!btnRef.current) return;

    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  // bluish palette only, subtle glassy button
  return (
    <Link
      href={href}
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="
          inline-flex items-center justify-center
          px-6 py-3 rounded-xl
          text-sm font-medium
          text-white/95
          border border-white/10
          backdrop-blur-sm
          bg-gradient-to-br from-[rgba(7,20,48,0.55)] to-[rgba(6,12,30,0.45)]
          hover:bg-[rgba(255,255,255,0.02)]
          transition-all duration-200
          shadow-sm
        "
    >{children}</Link>
  );
});

export default function Page() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // simple entrance animation for hero content
    gsap.fromTo(
      heroRef.current.querySelectorAll(".reveal"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power2.out" }
    );
  }, []);

  return (
    <main className="min-h-screen w-full font-inter text-white antialiased">
      {/* HERO - split layout */}
      <section className="min-h-screen w-full flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: sticky-ish Canvas on large screens, stack above on small screens */}
          <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
            <div className="w-full h-full  rounded-2xl">
              <Canvas camera={{ position: [2, 2, 2], fov: 70 }}>
                <Suspense
                  fallback={
                    <mesh>
                      <boxGeometry args={[1, 1, 1]} />
                      <meshStandardMaterial color="#223" />
                    </mesh>
                  }
                >
                  <Environment preset="studio"/>
                  <OrbitControls enableZoom={false} enablePan={false} />
                  <Desk scale={0.4} position={[0, -0.9, 0]} />
                  <EffectComposer>
                    <Bloom intensity={0.35} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
                  </EffectComposer>
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* Right: glass card */}
          <div
            ref={heroRef}
            className="w-full lg:w-1/2 mt-15 rounded-2xl p-10 relative overflow-hidden border border-white/8 backdrop-blur-xl shadow-[0_10px_40px_gray-300]"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-black"></div>

            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
                        linear-gradient(to bottom, #8080800a 1px, transparent 1px)`,
                backgroundSize: "14px 24px",
              }}
            ></div>

            {/* Radial glow */}
            <div
              className="absolute -left-60 top-[-40%] w-[1000px] h-[1000px] rounded-full"
              style={{
                background: "radial-gradient(circle 300px at 50% 400px, #fbfbfb36, #000)",
              }}
            ></div>

            {/* Content */}
            <div className="reveal relative z-10">
              <InteractiveTitle />
            </div>

            <div className="mt-6 reveal relative z-10">
              <InteractiveParagraph />
            </div>

            <div className="mt-6 flex gap-4 reveal relative z-10">
              <MagneticButton href="/learn">Learn More</MagneticButton>
              <MagneticButton href="/projects">Projects</MagneticButton>
            </div>
          </div>

        </div>
      </section>

      {/* Full-width sections below — scrollable page */}
      <section className="w-full py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-4xl font-semibold mb-4 text-[#cfe8ff]">Features</h2>
            <p className="text-gray-300 max-w-3xl text-[17px]">
              Focused learning paths, curated projects, and reference materials — all
              organized for efficient progress. Clean UI, instant previews, and a calm
              workspace to keep you in flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl border border-white/6   backdrop-blur-md">
              <h3 className="text-[22px] font-semibold mb-2 text-[#e6f5ff]">Structured Paths</h3>
              <p className="text-gray-300 text-[17px]">
                Step-by-step learning paths that remove guesswork and keep momentum.
              </p>
            </article>

            <article className="p-6 rounded-xl border border-white/6 backdrop-blur-md">
              <h3 className="text-[22px] font-semibold mb-2 text-[#e6f5ff]">Real Projects</h3>
              <p className="text-gray-300 text-[17px]">
                Build real-world projects that belong in your portfolio — practical & polished.
              </p>
            </article>

            <article className="p-6 rounded-xl border border-white/6  backdrop-blur-md">
              <h3 className="text-[22px] font-semibold mb-2 text-[#e6f5ff]">Reference & Tools</h3>
              <p className="text-gray-300 text-[16px]">
                Snippets, patterns, and utilities to speed up your development workflow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full py-20 ">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-4xl font-semibold mb-4 text-[#cfe8ff]">Courses</h2>
            <p className="text-gray-300 text-[17px] max-w-3xl">
              Courses designed to take you from baseline to mastery with hands-on
              exercises and feedback-driven milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/6  backdrop-blur-md">
              <h4 className="font-semibold text-[22px] mb-2 text-[#dff3ff]">Frontend Essentials</h4>
              <p className="text-gray-300 text-[17px]">React, Next.js, styling systems and accessibility.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/6  backdrop-blur-md">
              <h4 className="font-semibold text-[22px] mb-2 text-[#dff3ff]">Fullstack Projects</h4>
              <p className="text-gray-300 text-[17px]">From APIs to deployable applications and infra basics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-[#cfe8ff]">Recent Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/6 backdrop-blur-md">
              <h5 className="font-medium text-[22px] text-[#e6f5ff] mb-2">UI Kit</h5>
              <p className="text-gray-300 text-[17px]">Design system and component library used across courses.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/6 backdrop-blur-md">
              <h5 className="font-medium text-[22px] text-[#e6f5ff] mb-2">Starter Templates</h5>
              <p className="text-gray-300 text-[17px]">Opinionated starters for rapid prototyping and production.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/6 backdrop-blur-md">
              <h5 className="font-medium text-[22px] text-[#e6f5ff] mb-2">Tooling</h5>
              <p className="text-gray-300 text-[17px]">CLI tools and generators to make repetitive tasks simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="w-full py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h3 className="text-4xl font-semibold text-[#dff3ff] mb-4">Ready to get started?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-[21px]">
            Join SyntaxPrime for a focused, premium learning experience — no noise, just progress.
          </p>
          <div className="flex justify-center gap-4">
            <MagneticButton href="/terms">Terms</MagneticButton>
            <MagneticButton href="/contact">Contact Us</MagneticButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/6">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[19px] text-gray-400">© {new Date().getFullYear()} SyntaxPrime — All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-[18px] text-gray-400 hover:text-gray-200">Terms</Link>
            <Link href="/privacy" className="text-[18px] text-gray-400 hover:text-gray-200">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
