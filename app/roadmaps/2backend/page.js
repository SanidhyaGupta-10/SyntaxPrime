"use client";
import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

/*
  Backend page — server room vibe
  - r3f Canvas with rows of "server racks"
  - volumetric fog + spot lights
  - tiny glowing LED panels on racks
  - floating particles (dust / ambient)
  - GSAP animations for headings and sections
*/

/* -------------------------
   3D components
   -------------------------*/

// single rack (a column with multiple server units)
function Rack({ x = 0, z = 0, height = 6, index = 0 }) {
  const ref = useRef();
  const ledRefs = useRef([]);
  useFrame((state) => {
    // subtle floating / breathing
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin((index + 1) * 0.1 + t * 0.08) * 0.03;
    ref.current.position.y = Math.sin((index + 1) * 0.25 + t * 0.2) * 0.02;
    // led flicker
    ledRefs.current.forEach((l, i) => {
      if (!l) return;
      l.material.emissiveIntensity = 0.6 + Math.sin(t * 8 + i * 0.5 + index) * 0.25;
    });
  });

  // build a stack of server units
  const units = [];
  for (let i = 0; i < Math.floor(height); i++) {
    units.push(i);
  }

  return (
    <group ref={ref} position={[x, 0, z]}>
      {units.map((u, i) => (
        <group key={i} position={[0, i * -0.9, 0]}>
          {/* chassis */}
          <mesh>
            <boxGeometry args={[1.2, 0.6, 0.9]} />
            <meshStandardMaterial color={"#0b0c10"} metalness={0.6} roughness={0.45} />
          </mesh>

          {/* front panel - dark with small LED rectangles */}
          <group position={[0, 0, 0.46]}>
            <mesh position={[-0.28, 0, 0]}>
              <boxGeometry args={[0.5, 0.22, 0.02]} />
              <meshStandardMaterial color={"#081021"} />
            </mesh>
            <mesh position={[0.28, 0, 0]}>
              <boxGeometry args={[0.6, 0.22, 0.02]} />
              <meshStandardMaterial color={"#081021"} />
            </mesh>

            {/* LED row */}
            <group position={[-0.45, -0.02, 0.03]}>
              {Array.from({ length: 6 }).map((_, j) => (
                <mesh
                  key={j}
                  ref={(el) => (ledRefs.current[i * 6 + j] = el)}
                  position={[j * 0.15, 0, 0.02]}
                >
                  <boxGeometry args={[0.08, 0.04, 0.01]} />
                  <meshStandardMaterial emissive={"#00ffea"} color={"#00121a"} />
                </mesh>
              ))}
            </group>
          </group>

          {/* small vent lines */}
          <group rotation={[0, 0, 0]} position={[0, 0.12, 0.46]}>
            {Array.from({ length: 8 }).map((_, k) => (
              <mesh key={k} position={[-0.5 + k * 0.13, 0, 0]}>
                <boxGeometry args={[0.12, 0.02, 0.005]} />
                <meshStandardMaterial color={"#0a0f14"} />
              </mesh>
            ))}
          </group>
        </group>
      ))}
    </group>
  );
}

// ambient floating dust / particles
function Dust({ count = 250 }) {
  const ref = useRef();
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  });

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008 * state.clock.getElapsedTime();
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation={true} color={"#e6f9ff"} transparent opacity={0.12} />
    </points>
  );
}

// subtle floor plane reflection
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.8, 0]}>
      <planeGeometry args={[80, 40]} />
      <meshStandardMaterial color={"#05060a"} roughness={0.8} metalness={0.2} />
    </mesh>
  );
}

/* -------------------------
   Page component (UI + Canvas)
   -------------------------*/
export default function BackendPage() {
  const titleRef = React.useRef();
  const introRef = React.useRef();
  const sectionRefs = React.useRef([]);

  // GSAP entrance
  useEffect(() => {
    sectionRefs.current = [];
    const tl = gsap.timeline();
    tl.from(titleRef.current, { opacity: 0, y: -30, duration: 0.9, ease: "power3.out" })
      .from(introRef.current, { opacity: 0, y: -12, duration: 0.8, ease: "power3.out" }, "-=0.4");

    // stagger sections
    gsap.utils.toArray(".backend-section").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        delay: 0.4 + i * 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    });
  }, []);

  // attach refs helper
  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <main className="min-h-screen w-full relative text-[#E5E7EB] p-6 overflow-hidden">
      {/* 3D background canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0.8, 18], fov: 45 }}>
          {/* fog */}
          <fog attach="fog" args={["#000007", 6, 28]} />
          <ambientLight intensity={0.35} />
          {/* volumetric-ish spotlights */}
          <spotLight position={[6, 8, 10]} angle={0.4} intensity={1.6} penumbra={0.7} />
          <spotLight position={[-8, 6, 8]} angle={0.5} intensity={1.2} penumbra={0.6} />
          <directionalLight position={[0, 10, -10]} intensity={0.4} />

          {/* racks arranged in rows for server room */}
          <group position={[0, 0, 0]}>
            {/* left row */}
            <Rack x={-4.8} z={-2} height={6} index={0} />
            <Rack x={-4.8} z={3} height={6} index={1} />
            {/* center row */}
            <Rack x={0} z={-1.6} height={7} index={2} />
            <Rack x={0} z={3.6} height={7} index={3} />
            {/* right row */}
            <Rack x={4.8} z={-2} height={6} index={4} />
            <Rack x={4.8} z={3} height={6} index={5} />
          </group>

          <Floor />
          <Dust count={350} />
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* page content */}
      <div className="max-w-6xl mx-auto relative z-10 py-12 mt-16">
        <header className="text-center">
          <h1 ref={titleRef} className="text-5xl font-semibold mb-4">
            🖥️ Backend — Server Room Essentials
          </h1>
          <p ref={introRef} className="text-gray-300 max-w-3xl mx-auto text-[18px]">
            Backends power applications — from servers and databases to auth, APIs and deployment. The visual below gives you the server room vibe while the roadmap guides you through the learning path.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section
            className="backend-section bg-white/4 p-6 rounded-2xl border border-white/10 shadow-lg"
            ref={addSectionRef}
          >
            <h2 className="text-2xl font-semibold mb-2">Core Responsibilities</h2>
            <ul className="text-gray-200 list-disc pl-6 space-y-2">
              <li>Server-side logic & architecture (APIs, routing)</li>
              <li>Databases (design, queries, optimization)</li>
              <li>Authentication, authorization, and security</li>
              <li>Testing, monitoring, and observability</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link href="/" className="inline-block px-4 py-2 rounded-md border border-white/10 btn-ghost">
                Back to Home
              </Link>
              <a
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-sky-400 to-cyan-400 text-black font-medium"
                href="#"
              >
                Learn More
              </a>
            </div>
          </section>

          <section
            className="backend-section bg-white/4 p-6 rounded-2xl border border-white/10 shadow-lg"
            ref={addSectionRef}
          >
            <h2 className="text-2xl font-semibold mb-2">Popular Technologies</h2>
            <div className="flex flex-col gap-3 text-gray-200">
              <div className="flex items-center gap-3">
                <Image src="/node.png" alt="Node" width={28} height={28} />
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/express.png" alt="Express" width={28} height={28} />
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/postgres.png" alt="Postgres" width={28} height={28} />
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/mongodb.png" alt="MongoDB" width={28} height={28} />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/docker.png" alt="Docker" width={28} height={28} />
                <span>Docker & Containers</span>
              </div>
            </div>
          </section>

          {/* full-width section below rows */}
          <div className="lg:col-span-2">
            <section
              className="backend-section bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
              ref={addSectionRef}
            >
              <h2 className="text-2xl font-semibold mb-4">Recommended Backend Learning Path</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#07080b] rounded-lg border border-white/8">
                  <h3 className="font-medium mb-2">Beginner</h3>
                  <ol className="list-decimal pl-5 text-gray-200 space-y-2">
                    <li>JavaScript basics</li>
                    <li>Node.js fundamentals</li>
                    <li>HTTP & REST concepts</li>
                  </ol>
                </div>

                <div className="p-4 bg-[#07080b] rounded-lg border border-white/8">
                  <h3 className="font-medium mb-2">Intermediate</h3>
                  <ol className="list-decimal pl-5 text-gray-200 space-y-2">
                    <li>Express / Fastify</li>
                    <li>Databases (SQL & NoSQL)</li>
                    <li>Authentication (JWT, OAuth)</li>
                  </ol>
                </div>

                <div className="p-4 bg-[#07080b] rounded-lg border border-white/8">
                  <h3 className="font-medium mb-2">Advanced</h3>
                  <ol className="list-decimal pl-5 text-gray-200 space-y-2">
                    <li>Microservices & message queues</li>
                    <li>Scaling, caching & CDNs</li>
                    <li>CI/CD, monitoring & security</li>
                  </ol>
                </div>
              </div>

              <p className="mt-4 text-gray-300">
                Pro tip: build small projects and deploy them — the server-room skills really come alive when you ship.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
