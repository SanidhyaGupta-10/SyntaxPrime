"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Html,
  Stars,
  ContactShadows,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   Helper: Heavy particle field (GPU-friendly)
   ============================================================ */
function HeavyParticles({ count = 1200, speed = 0.2 }) {
  const ref = useRef();
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 40;
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      sizes[i] = 1 + Math.random() * 3;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0006 * state.clock.getElapsedTime() * speed;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points.positions}
          count={points.positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={points.sizes}
          count={points.sizes.length}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} sizeAttenuation />
    </points>
  );
}

/* ============================================================
   Server Rack component — clickable, emits neon strips
   ============================================================ */
function Rack({ position = [0, 0, 0], onClick, idx = 0 }) {
  const ref = useRef();
  useFrame((s, dt) => {
    if (ref.current) ref.current.rotation.y = 0.02 * Math.sin(s.clock.elapsedTime * 0.6 + idx);
  });

  return (
    <group position={position} onClick={() => onClick && onClick(idx)}>
      <mesh ref={ref}>
        <boxGeometry args={[1.2, 2.8, 1.2]} />
        <meshStandardMaterial color="#0b0f14" roughness={0.2} metalness={0.6} />
      </mesh>

      {/* neon strips */}
      <mesh position={[0, 1.1, 0.66]}>
        <boxGeometry args={[0.9, 0.06, 0.02]} />
        <meshStandardMaterial emissive="#00f0ff" emissiveIntensity={4} transparent opacity={0.95} />
      </mesh>
      <mesh position={[0, 0.3, 0.66]}>
        <boxGeometry args={[0.9, 0.06, 0.02]} />
        <meshStandardMaterial emissive="#00f0ff" emissiveIntensity={3} transparent opacity={0.9} />
      </mesh>

      {/* small LEDs */}
      <group position={[0.45, 0.9, 0.6]}>
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[0, -i * 0.22, 0]}>
            <boxGeometry args={[0.07, 0.12, 0.02]} />
            <meshStandardMaterial emissive="#00ffd1" emissiveIntensity={2} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ============================================================
   Hologram Info panel (Html overlay inside 3D)
   ============================================================ */
function HoloPanel({ text, position = [0, 1.8, 0] }) {
  return (
    <Float speed={1.2} floatIntensity={1} rotationIntensity={0.6}>
      <Html position={position} center className="pointer-events-none">
        <div style={{
          minWidth: 260,
          padding: "12px 16px",
          borderRadius: 12,
          border: "1px solid rgba(0,240,255,0.24)",
          background: "linear-gradient(180deg, rgba(0,10,20,0.6), rgba(0,0,0,0.35))",
          boxShadow: "0 8px 40px rgba(0,240,255,0.06)",
          color: "#8ff6ff",
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center",
          textShadow: "0 0 8px rgba(0,240,255,0.08)"
        }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>System Panel</div>
          <div style={{ fontSize: 14, lineHeight: 1.3 }}>{text}</div>
        </div>
      </Html>
    </Float>
  );
}

/* ============================================================
   CameraRig: animate camera via gsap when the active section changes
   ============================================================ */
function CameraRig({ activeIndex }) {
  const { camera } = useThree();
  useEffect(() => {
    // camera positions for 5 sections (x,y,z,lookAt)
    const presets = [
      { pos: [0, 1.6, 8], look: [0, 0, 0] },      // overview
      { pos: [-5, 1.4, 6], look: [-2, 0.5, 0] },  // frontend
      { pos: [0, 1.4, 5], look: [0, 0.4, 0] },    // backend
      { pos: [5, 1.4, 6], look: [2, 0.5, 0] },    // devops
      { pos: [0, 4.5, 10], look: [0, 0, 0] },     // projects / top-down
    ];

    const p = presets[Math.min(activeIndex, presets.length - 1)];
    if (!p) return;
    gsap.killTweensOf(camera.position);
    gsap.to(camera.position, {
      x: p.pos[0],
      y: p.pos[1],
      z: p.pos[2],
      duration: 1.2,
      ease: "power3.out",
      onUpdate: () => camera.lookAt(...p.look),
    });
  }, [activeIndex, camera]);

  return null;
}

/* ============================================================
   Full scene containing heavy r3f content
   ============================================================ */
function FullScene({ activeIndex, onRackClick }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[0, 6, 6]} color="#00f0ff" intensity={1.2} />

      <Stars radius={80} depth={40} count={6000} factor={6} fade speed={0.2} />
      <HeavyParticles count={1800} speed={0.6} />

      {/* Neon floor */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#001018" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Neon grid overlay */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.98, 0]}>
        <planeGeometry args={[160, 160, 160, 160]} />
        <meshBasicMaterial wireframe color="#00aaff" transparent opacity={0.06} />
      </mesh>

      {/* Hologram ring center */}
      <Float rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[0, 0.2, 0]}>
          <torusGeometry args={[2.6, 0.05, 24, 160]} />
          <meshStandardMaterial emissive="#00f6ff" emissiveIntensity={6} transparent opacity={0.6} />
        </mesh>
      </Float>

      {/* Many racks across X axis */}
      <group position={[0, -1.2, 0]}>
        <Rack idx={0} position={[-6, 0, -1]} onClick={() => onRackClick(0)} />
        <Rack idx={1} position={[-3, 0, 0]} onClick={() => onRackClick(1)} />
        <Rack idx={2} position={[0, 0, 0]} onClick={() => onRackClick(2)} />
        <Rack idx={3} position={[3, 0, 0]} onClick={() => onRackClick(3)} />
        <Rack idx={4} position={[6, 0, -1]} onClick={() => onRackClick(4)} />
      </group>

      {/* Floating info panel above center rack */}
      <HoloPanel text="Click any rack to reveal its stack" position={[0, 1.9, 0]} />

      <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={12} blur={3} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.1} />
    </>
  );
}

/* ============================================================
   Main page component: 5 scrollable sections with GSAP ScrollTrigger
   ============================================================ */
export default function FullStackPage() {
  const containerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelText, setPanelText] = useState("Click a rack to inspect its services");

  useEffect(() => {
    // Create full-screen panels equal to sections
    const sections = gsap.utils.toArray(".fs-section");
    // set up ScrollTrigger for each section to update activeIndex
    sections.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    // simple entrance animations for each section content
    gsap.from(".panel-card", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".panels",
        start: "top 80%",
      },
    });

    // cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // on rack click -> update panel text and animate small bounce
  const handleRackClick = (idx) => {
    const texts = [
      "Overview Rack — Holographic telemetry & UI nodes",
      "Frontend Rack — React, Next.js, Tailwind, GSAP",
      "Core Rack — API gateway, GraphQL, Node, Edge functions",
      "DevOps Rack — Docker, Kubernetes, CI/CD & Cloud",
      "Data Rack — Databases, caches, search, analytics",
    ];
    setPanelText(texts[idx] || "Rack clicked");
    // micro animation: pulse the html panel (use DOM)
    const panel = document.querySelector(".top-info");
    if (panel) {
      gsap.fromTo(
        panel,
        { scale: 0.98, boxShadow: "0 0 0 rgba(0,0,0,0)" },
        { scale: 1, boxShadow: "0 8px 40px rgba(0,240,255,0.08)", duration: 0.45, ease: "elastic.out(1,0.6)" }
      );
    }
  };

  return (
    <main ref={containerRef} className="w-full min-h-screen relative text-white overflow-x-hidden">
      {/* R3F Canvas as heavy background (fixed) */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 1.6, 8], fov: 50 }}>
          <CameraRig activeIndex={activeIndex} />
          <FullScene activeIndex={activeIndex} onRackClick={handleRackClick} />
        </Canvas>
      </div>

      {/* Top-left floating info */}
      <div className="top-info fixed top-30 left-6 z-20 backdrop-blur-sm bg-black/40 p-4 rounded-xl border border-cyan-400/20 max-w-[420px]">
        <h1 className="text-2xl font-bold text-cyan-200">Full-Stack — Holographic Lab</h1>
        <p className="text-sm text-gray-200 mt-2">{panelText}</p>
        <div className="mt-3 flex gap-2">
          <Link href="/roadmaps" className="px-3 py-1 rounded-md bg-cyan-600/20 border border-cyan-300/10 text-sm">Roadmaps</Link>
          <a className="px-3 py-1 rounded-md bg-transparent border border-white/8 text-sm">Docs</a>
        </div>
      </div>

      {/* Page sections (stacked vertically) */}
      <div className="panels">
        {/* Section 0 — Overview */}
        <section className="fs-section min-h-screen mt-22 flex items-center justify-center">
          <div className="panel-card max-w-4xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">
            <h2 className="text-4xl font-semibold text-cyan-200">Overview</h2>
            <p className="mt-4 text-gray-200 max-w-2xl">
              This interactive server-room shows how frontend, backend, DevOps and data connect in modern full-stack apps.
              Scroll to move the camera and reveal each area. Click a rack to inspect its stack.
            </p>
          </div>
        </section>

        {/* Section 1 — Frontend */}
        <section className="fs-section min-h-screen flex items-center justify-center">
          <div className="panel-card max-w-4xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">
            <h2 className="text-4xl font-semibold text-cyan-200">Frontend</h2>
            <p className="mt-4 text-gray-200">
              Focus on user experience: React/Next, Tailwind, performance, animations via GSAP and immersive 3D micro-interactions using Three.js.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Core</h3>
                <ul className="mt-2 text-gray-300">
                  <li>HTML/CSS</li>
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                </ul>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Styling</h3>
                <ul className="mt-2 text-gray-300">
                  <li>Tailwind / CSS-in-JS</li>
                  <li>Design systems</li>
                </ul>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">UX & Animations</h3>
                <ul className="mt-2 text-gray-300">
                  <li>GSAP</li>
                  <li>Three.js / r3f interactions</li>
                  <li>Performance & accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Backend */}
        <section className="fs-section min-h-screen flex items-center justify-center">
          <div className="panel-card max-w-4xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">
            <h2 className="text-4xl font-semibold text-cyan-200">Backend</h2>
            <p className="mt-4 text-gray-200">
              Build resilient APIs, business logic, authentication, and databases. Edge functions and serverless patterns are common in modern stacks.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Languages</h3>
                <p className="text-gray-300">Node.js, Go, Python</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Databases</h3>
                <p className="text-gray-300">Postgres, MongoDB, Redis</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">APIs</h3>
                <p className="text-gray-300">REST / GraphQL / gRPC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — DevOps */}
        <section className="fs-section min-h-screen flex items-center justify-center">
          <div className="panel-card max-w-4xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">
            <h2 className="text-4xl font-semibold text-cyan-200">DevOps & Cloud</h2>
            <p className="mt-4 text-gray-200">CI/CD, containerization, orchestration and monitoring keep systems healthy at scale.</p>
            <div className="mt-6 flex gap-4">
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Containerization</h3>
                <p className="text-gray-300">Docker, OCI</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Orchestration</h3>
                <p className="text-gray-300">Kubernetes, Nomad</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h3 className="font-medium">Cloud</h3>
                <p className="text-gray-300">AWS / GCP / Azure / Edge</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Projects / Playground */}
        <section className="fs-section min-h-screen flex items-center justify-center">
          <div className="panel-card max-w-4xl p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">
            <h2 className="text-4xl font-semibold text-cyan-200">Playground & Projects</h2>
            <p className="mt-4 text-gray-200">
              Ship small projects that combine frontend, backend and infra. Practice deploying, monitoring, and iterating.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a className="block p-4 rounded-lg bg-[#021018]/60 border border-cyan-400/10 hover:scale-[1.02] transition-transform">
                <strong>Real-time Chat App</strong>
                <p className="text-gray-300 mt-2">WebSockets + React + Node + Redis</p>
              </a>
              <a className="block p-4 rounded-lg bg-[#021018]/60 border border-cyan-400/10 hover:scale-[1.02] transition-transform">
                <strong>eCommerce Microservice</strong>
                <p className="text-gray-300 mt-2">API gateway + payments + analytics</p>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* bottom small hint */}
      <div className="fixed bottom-6 right-6 text-sm text-gray-300/70">Scroll to explore • Click racks</div>
    </main>
  );
}
