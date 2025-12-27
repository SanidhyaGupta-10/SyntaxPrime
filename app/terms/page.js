"use client";
import React, { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------
   Wireframe Sphere
------------------------------------------------------------- */
function WireframeSphere({ color = "#00aaff" }) {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial
        color={color}
        wireframe={true}
        transparent={true}
        opacity={0.25}
      />
    </mesh>
  );
}

/* -------------------------------------------------------------
   Particle Field
------------------------------------------------------------- */
function Particles() {
  const pointsRef = useRef();
  const count = 600;

  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0004 * state.clock.getElapsedTime();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation />
    </points>
  );
}

/* -------------------------------------------------------------
   Camera GSAP Rig
------------------------------------------------------------- */
function CameraRig({ animateTo }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useEffect(() => {
    camera.position.set(0, 0, 6);
  }, [camera]);

  useEffect(() => {
    if (!animateTo) return;

    gsap.to(camera.position, {
      x: animateTo.x,
      y: animateTo.y,
      z: animateTo.z,
      duration: 1.2,
      ease: "power3.out",
      onUpdate: () => camera.lookAt(target),
    });
  }, [animateTo, camera, target]);

  return null;
}

/* -------------------------------------------------------------
   MAIN PAGE
------------------------------------------------------------- */
export default function TermsPage() {
  const [animateTo, setAnimateTo] = useState(null);

  /* Smooth camera scroll animation */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const z = 6 - Math.min(4, y / 400);

      setAnimateTo({
        x: Math.sin(y / 600) * 0.4,
        y: -y / 1200,
        z,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* GSAP UI Animations */
  useEffect(() => {
    // Canvas entrance
    gsap.from(".canvas-wrap", {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".canvas-glow", {
      opacity: 0,
      duration: 1.8,
    });

    gsap.from(".canvas-grid", {
      opacity: 0,
      y: -30,
      duration: 1.3,
      ease: "power3.out",
      delay: 0.2,
    });

    // Title text
    gsap.from(".terms-title", {
      opacity: 0,
      y: 40,
      duration: 1,
    });

    // Intro paragraph
    gsap.from(".intro-text", {
      opacity: 0,
      y: 20,
      delay: 0.3,
      duration: 1,
    });

    // Each section animates on scroll
    gsap.utils.toArray(".terms-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });

    // Buttons hover animation
    document.querySelectorAll(".btn-animate").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.07, duration: 0.2 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
      });
    });
  }, []);

  /* -------------------------------------------------------------
     JSX UI Layout
  ------------------------------------------------------------- */
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ------------------ LEFT: 3D Scene ------------------ */}
        <div className="canvas-wrap relative w-full h-[620px]  mt-16 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={0.7} position={[5, 5, 5]} />

            <CameraRig animateTo={animateTo} />

            <group>
              <WireframeSphere />
              <Particles />
            </group>

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>

          {/* Glow layer */}
          <div className="canvas-glow absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Grid overlay */}
          <div
            className="canvas-grid absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                `linear-gradient(to right, rgba(79,79,79,0.15) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(128,128,128,0.05) 1px, transparent 1px)`,
              backgroundSize: "14px 24px",
              mixBlendMode: "overlay",
            }}
          />
        </div>

        {/* ------------------ RIGHT: Terms Text ------------------ */}
        <div className="relative z-10  pt-16">
          <h1 className="terms-title text-4xl font-semibold text-center">
            <span className="bg-linear-to-r from-[#00eaff] via-[#004cff] to-[#124dff] bg-clip-text text-transparent">
              SyntaxPrime
            </span>
            <br />— Terms of Service
          </h1>

          <p className="intro-text mt-4 text-gray-300 text-[18px]">
            Welcome to SyntaxPrime. These terms govern your use of our services.
          </p>

          <div className="mt-8 space-y-8">
            {[
              {
                title: "1. Acceptance of Terms",
                desc: "By using SyntaxPrime, you agree to these terms.",
              },
              {
                title: "2. Use of Services",
                desc: "You must follow our acceptable use policies.",
              },
              {
                title: "3. Privacy",
                desc: "We respect your data. Read our Privacy Policy.",
              },
              {
                title: "4. Termination",
                desc: "We may suspend accounts that violate the rules.",
              },
            ].map((sec, i) => (
              <section
                key={i}
                className="terms-section bg-white/5 p-6 rounded-xl border border-white/10"
              >
                <h2 className="text-[22px] font-medium">{sec.title}</h2>
                <p className="mt-2 text-gray-300 text-[18px]">{sec.desc}</p>
              </section>
            ))}

            <div className="mt-6 flex gap-4">
              <Link href="/" className="btn-animate px-5 py-2 rounded-md border border-white/20 hover:bg-white/10">
                Back to Home
              </Link>
              <Link href="/contact" className="btn-animate px-5 py-2 rounded-md bg-blue-400 text-black font-medium">
                Contact Support
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
