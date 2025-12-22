"use client"
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaAws,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const Icons = {
  FaLaptopCode,
  FaMobileAlt,
  FaAws,
  FaRobot,
  FaCloud,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
};

// -----------------------------
// Floating Wire Sphere
// -----------------------------
function WireSphere() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial wireframe color="#00aaff" opacity={0.2} transparent />
    </mesh>
  );
}

// -----------------------------
// Floating Particles
// -----------------------------
function Particles({ count = 300 }) {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005 * state.clock.getElapsedTime();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} sizeAttenuation />
    </points>
  );
}

// -----------------------------
// Section Component
// -----------------------------
function SkillSection({ title, skills, icon }) {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="my-16 px-4 py-8 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-3">
        {icon && <span className="text-blue-400">{icon}</span>} {title}
      </h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill) => {
          const IconComponent = skill.icon ? Icons[skill.icon] : null;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-[#0d0d14] px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-500 transition-all"
            >
              {IconComponent && <IconComponent size={24} color="white" />}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// -----------------------------
// Search Bar Component
// -----------------------------
function SearchBar({ searchTerm, setSearchTerm }) {
  const inputRef = useRef();

  useEffect(() => {
    gsap.from(inputRef.current, { opacity: 0, y: -20, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <div className="flex justify-center my-8">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[60%] p-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

// -----------------------------
// Main Page
// -----------------------------
export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      title: "Web Development",
      icon: "FaLaptopCode",
      skills: [
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss3" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "React", icon: "SiReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
      ],
    },
    {
      title: "App Development",
      icon: "FaMobileAlt",
      skills: [
        { name: "Flutter", icon: "SiFlutter" },
        { name: "React Native", icon: "SiReact" },
        { name: "Swift", icon: "SiSwift" },
        { name: "Kotlin", icon: "SiKotlin" },
      ],
    },
    {
      title: "AI & ML",
      icon: "FaRobot",
      skills: [
        { name: "Python", icon: "SiPython" },
        { name: "TensorFlow", icon: "SiTensorflow" },
        { name: "PyTorch", icon: "SiPytorch" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "FaCloud",
      skills: [
        { name: "AWS", icon: "FaAws" },
        { name: "Docker", icon: "SiDocker" },
        { name: "Kubernetes", icon: "SiKubernetes" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <WireSphere />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Heading */}
      <div className="text-center pt-28 px-4">
        <h1 className="text-5xl font-bold mb-4">Most Popular & Demanding Skills</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-2xl">
          Explore the most in-demand professional skills in Web, App Development, AI/ML, Cloud & DevOps, and more.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4">
        {sections
          .filter((sec) => sec.skills.some((skill) => skill.name.toLowerCase().includes(searchTerm.toLowerCase())))
          .map((sec, idx) => (
            <div key={sec.title}>
              <SkillSection
                {...sec}
                icon={sec.icon ? React.createElement(Icons[sec.icon]) : null}
              />
              {idx < sections.length - 1 && <hr className="border-white/20 my-10" />}
            </div>
          ))}
      </div>
    </div>
  );
}