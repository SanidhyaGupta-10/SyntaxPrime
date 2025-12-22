"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Image from "next/image";

// ICON IMAGES
import Frontend from "../../../public/frontend.png";
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

// 3D SHAPE
function FloatingShape() {
  return (
    <Float speed={2.2} rotationIntensity={1.6} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.35, 80, 16]} />
        <meshStandardMaterial color="#4b9fff" metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Page() {
  const sectionsRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      if (sec) {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      {/* 3D BACKGROUND CORNER */}
      <div className="fixed right-10 top-20 w-[350px] h-[350px] pointer-events-none opacity-40">
        <Canvas camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <FloatingShape />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
        </Canvas>
      </div>

      <main className="min-h-[100vh] mt-16 w-full relative text-[#E5E7EB] p-6">
        <div className="h-full w-[80vw] mx-auto relative">

          {/* ---------- SECTION 1 ---------- */}
          <div
            className="section mb-20"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <div className="heading flex items-center justify-center flex-col mb-10">
              <h1 className="mt-16 flex items-center text-5xl font-bold">
                🎨 What is Frontend?
              </h1>
              <p className="text-center text-[24px] w-[800px] mt-5 opacity-90">
                Frontend = The part of a website or app that the user sees and interacts with.
              </p>
            </div>
            <div className="h-px w-[100vw] -ml-36 bg-white mb-10"></div>
          </div>

          {/* ---------- SECTION 2 ---------- */}
          <div
            className="section flex gap-12 mb-20"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <Image
              src={Frontend}
              width={450}
              alt="Top Frontend Skills"
              className="rounded-xl"
            />

            <div>
              <h1 className="text-3xl mb-4">🛠 Languages Used in Frontend</h1>

              <h2 className="text-xl py-1">1. HTML — Structure</h2>
              <p className="px-2 text-[18px]">Creates the layout and structure</p>

              <h2 className="text-xl py-1 mt-2">2. CSS — Design</h2>
              <p className="px-2 text-[18px]">Colors, fonts, animations, spacing</p>

              <h2 className="text-xl py-1 mt-2">3. JavaScript — Logic</h2>
              <p className="px-2 text-[18px]">Click events, popups, sliders</p>
            </div>
          </div>

          {/* ---------- SECTION 3 ---------- */}
          <div
            className="section mb-20"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h1 className="text-4xl mb-3">⚡ Popular Frontend Frameworks</h1>

            <div className="ml-12 flex flex-col gap-4 text-[22px]">
              <Skill name="React.js" icon={ReactPNG} />
              <Skill name="Next.js" icon={Next} />
              <Skill name="Vue.js" icon={VuePNG} />
              <Skill name="Angular" icon={AngularPNG} />
              <Skill name="Tailwind CSS" icon={Tailwind} />
              <Skill name="GSAP (Animations)" icon={GSAPPNG} />
              <Skill name="Three.js (3D)" icon={THREEPNG} />
            </div>
          </div>

          {/* ---------- SECTION 4 ---------- */}
          <div
            className="section mb-10"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h1 className="text-4xl mb-5 ml-5">📘 Recommended Learning Path</h1>

            <div className="flex flex-col gap-10 items-center">

              {/* STEP 1 */}
              <StepCard
                title="Start with Basics:"
                items={[
                  { name: "HTML", icon: HTMLPNG },
                  { name: "CSS", icon: CSSPNG },
                  { name: "JavaScript", icon: JSPNG },
                ]}
              />

              <Arrow />

              {/* STEP 2 */}
              <StepCard
                title="Pick a CSS Framework:"
                items={[
                  { name: "Tailwind CSS", icon: Tailwind },
                  { name: "Bootstrap", icon: BootstrapPNG },
                ]}
              />

              <Arrow />

              {/* STEP 3 */}
              <StepCard
                title="Optional: Animation Libraries"
                items={[
                  { name: "GSAP", icon: GSAPPNG },
                  { name: "Three.js", icon: THREEPNG },
                ]}
              />

              <Arrow />

              {/* STEP 4 */}
              <StepCard
                title="Pick a JavaScript Framework:"
                items={[
                  { name: "React.js (Best Start)", icon: ReactPNG },
                  { name: "Angular", icon: AngularPNG },
                  { name: "Vue.js", icon: VuePNG },
                  { name: "Next.js", icon: Next },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Skill({ name, icon }) {
  return (
    <h3 className="flex gap-3 items-center">
      {name}
      <Image src={icon} width={30} height={30} alt={name} />
    </h3>
  );
}

function StepCard({ title, items }) {
  return (
    <div className="flex flex-col gap-4 bg-[#0A0D14] px-6 py-4 rounded-xl shadow-lg">
      <h2 className="text-2xl">{title}</h2>
      {items.map((i) => (
        <h3 key={i.name} className="text-[22px] flex gap-3 items-center">
          {i.name}
          <Image src={i.icon} width={30} height={30} alt={i.name} />
        </h3>
      ))}
    </div>
  );
}

function Arrow() {
  return <i className="ri-arrow-down-line text-3xl mt-2"></i>;
}
