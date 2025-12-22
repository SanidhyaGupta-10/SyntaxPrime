"use client";

import React, { useEffect, useMemo, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, Text, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAndroid,
  FaApple,
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJs,
  FaDatabase,
  FaLinux,
  FaBrain,
  FaRobot,
  FaCloud,
  FaCube,
  FaUnity,
  FaShieldAlt,
  FaEthereum,
  FaSearch,
  FaCuttlefish,
  FaRust,
  FaPhp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------
   FLOATING PARTICLES
--------------------------- */
function FloatingParticles() {
  const count = 2000;

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push((Math.random() - 0.5) * 40);
      arr.push((Math.random() - 0.5) * 40);
      arr.push((Math.random() - 0.5) * 40);
    }
    return new Float32Array(arr);
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        color="#7f5cff"
      />
    </Points>
  );
}

/* ---------------------------
   SECTION TITLE
--------------------------- */
function SectionTitle({ text }) {
  return (
    <h2 className="text-center text-4xl font-bold mb-8 mt-20 tracking-wide">
      {text}
    </h2>
  );
}

/* ---------------------------
   DIVIDER
--------------------------- */
function Divider() {
  return <hr className="border-white/10 my-12 w-[80%] mx-auto" />;
}

/* ---------------------------
   BUTTON CARD
--------------------------- */
function SkillCard({ icon, name, link }) {
  return (
    <Link href={link} className="group">
      <div
        className="
        flex items-center gap-3 p-5 rounded-2xl bg-[#0b0b13]
        border border-white/10
        hover:border-[#7f5cff]
        hover:shadow-[0_0_18px_#7f5cff]
        hover:scale-[1.05] transition duration-300"
      >
        <span className="text-3xl group-hover:rotate-6 transition">
          {icon}
        </span>
        <p className="text-lg">{name}</p>
      </div>
    </Link>
  );
}

/* ---------------------------
   SEARCH BAR
--------------------------- */
function SearchBar({ query, setQuery }) {
  return (
    <div className="flex items-center justify-center mt-10 mb-16">
      <div
        className="
        flex items-center gap-4 bg-[#0b0b13] px-6 py-3 rounded-2xl
        border border-white/10 w-[80%] md:w-[40%]
        shadow-[0_0_15px_rgba(127,92,255,0.5)]
      "
      >
        <FaSearch className="text-xl text-gray-300" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for skills..."
          className="bg-transparent focus:outline-none w-full text-white text-lg"
        />
      </div>
    </div>
  );
}

/* ---------------------------
   GRID WRAPPER
--------------------------- */
function SectionGrid({ items, innerRef }) {
  return (
    <div
      ref={innerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 transition"
    >
      {items.map((i) => (
        <SkillCard key={i.name} name={i.name} icon={i.icon} link={i.link} />
      ))}
    </div>
  );
}

/* ---------------------------
   PAGE
--------------------------- */
export default function RoadmapsPage() {
  const sectionsRef = useRef([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const filter = (items) =>
    items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen w-full  text-white pb-20 relative overflow-hidden">

      {/* Floating Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <Suspense fallback={null}>
            <FloatingParticles />
          </Suspense>
        </Canvas>
      </div>

      {/* 3D PAGE TITLE */}
      <div className="w-full h-[200px] mt-10">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={1} />

          <Text fontSize={1.5} color="white">
            DEVELOPER ROADMAPS
          </Text>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* SEARCH BAR */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* -----------------------
          WEB DEVELOPMENT
      -------------------------- */}
      <SectionTitle text="Web Development" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[0] = el)}
        items={filter([
          { name: "Frontend", icon: <FaReact />, link: "/roadmaps/1frontend" },
          { name: "Backend", icon: <FaNodeJs />, link: "/roadmaps/2backend" },
          { name: "Full-Stack", icon: <FaJs />, link: "/roadmaps/3fullstack" },
          { name: "Databases", icon: <FaDatabase />, link: "/roadmaps/4databases" },
          { name: "PHP", icon: <FaPhp />, link: "/roadmaps/5php" },
          { name: "Rust", icon: <FaRust />, link: "/roadmaps/6rust" },
        ])}
      />

      <Divider />

      {/* -----------------------
          APP DEVELOPMENT
      -------------------------- */}
      <SectionTitle text="App Development" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[1] = el)}
        items={filter([
          { name: "React Native", icon: <FaReact />, link: "/roadmaps/7react-native" },
          { name: "Android Development", icon: <FaAndroid />, link: "/roadmaps/8android" },
          { name: "iOS Development", icon: <FaApple />, link: "/roadmaps/9ios" },
          { name: "Flutter", icon: <FaCube />, link: "/roadmaps/10flutter" },
        ])}
      />

      <Divider />

      {/* -----------------------
          AI / ML / DS
      -------------------------- */}
      <SectionTitle text="AI / ML / Data Science" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[2] = el)}
        items={filter([
          { name: "Artificial Intelligence", icon: <FaBrain />, link: "/roadmaps/11ai" },
          { name: "Machine Learning", icon: <FaRobot />, link: "/roadmaps/12ml" },
          { name: "Data Science", icon: <FaPython />, link: "/roadmaps/13datascience" },
          { name: "Deep Learning", icon: <FaBrain />, link: "/roadmaps/14dl" },
        ])}
      />

      <Divider />

      {/* -----------------------
          CLOUD & DEVOPS
      -------------------------- */}
      <SectionTitle text="Cloud & DevOps" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[3] = el)}
        items={filter([
          { name: "AWS", icon: <FaAws />, link: "/roadmaps/15aws" },
          { name: "Docker", icon: <FaDocker />, link: "/roadmaps/16docker" },
          { name: "Linux", icon: <FaLinux />, link: "/roadmaps/17linux" },
          { name: "CI/CD Pipelines", icon: <FaGitAlt />, link: "/roadmaps/18cicd" },
        ])}
      />

      <Divider />

      {/* -----------------------
          CYBERSECURITY
      -------------------------- */}
      <SectionTitle text="Cybersecurity" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[4] = el)}
        items={filter([
          { name: "Ethical Hacking", icon: <FaShieldAlt />, link: "/roadmaps/19hacking" },
          { name: "Network Security", link: "/roadmaps/20network-security", icon: <FaShieldAlt /> },
          { name: "Bug Bounty", link: "/roadmaps/21bug-bounty", icon: <FaShieldAlt /> },
        ])}
      />

      <Divider />

      {/* -----------------------
          GAME DEVELOPMENT
      -------------------------- */}
      <SectionTitle text="Game Development" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[5] = el)}
        items={filter([
          { name: "Unity", icon: <FaUnity />, link: "/roadmaps/22unity" },
          { name: "Unreal Engine", icon: <FaCube />, link: "/roadmaps/23unreal" },
          { name: "Game Programming", icon: <FaJs />, link: "/roadmaps/24game-programming" },
        ])}
      />

      <Divider />

      {/* -----------------------
          BLOCKCHAIN
      -------------------------- */}
      <SectionTitle text="Blockchain & Web3" />
      <SectionGrid
        innerRef={(el) => (sectionsRef.current[6] = el)}
        items={filter([
          { name: "Blockchain Basics", icon: <FaEthereum />, link: "/roadmaps/25blockchain" },
          { name: "Smart Contracts", icon: <FaEthereum />, link: "/roadmaps/26solidity" },
          { name: "Decentralized Apps", icon: <FaCube />, link: "/roadmaps/27dapps" },
        ])}
      />

      <Divider />
    </div>
  );
}
