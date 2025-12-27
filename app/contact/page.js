"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// 3D Animated Sphere
function WireSphere() {
  const sphereRef = useRef();

  useEffect(() => {
    gsap.to(sphereRef.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshBasicMaterial wireframe opacity={0.4} transparent color={"#00aaff"} />
    </mesh>
  );
}

// Floating Particles
function Particles() {
  const count = 150;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 6;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} />
    </points>
  );
}

export default function ContactPage() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const containerRef = useRef(null);

  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle Form Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);

    // Show success popup
    if (data.message.includes("success")) {
      setTimeout(() => openPopup(), 300);
      setForm({ name: "", email: "", message: "" });
    }
  };

  // Popup Open Animation
  const openPopup = () => {
    gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
    gsap.fromTo(
      popupRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
  };

  // Popup Close Animation
  const closePopup = () => {
    gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.3 });
    gsap.to(popupRef.current, { opacity: 0, scale: 0.8, duration: 0.3 });
  };

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      delay: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
          backgroundSize: "14px 24px",
        }}
      ></div>

      {/* Radial Glow */}
      <div
        className="absolute left-[-10%] top-[-10%] w-[1000px] h-[1000px] rounded-full"
        style={{
          background:
            "radial-gradient(circle 400px at 50% 300px, #ffffff12, #000)",
        }}
      ></div>

      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <WireSphere />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Contact Content */}
      <div ref={containerRef} className="relative z-10 max-w-3xl mx-auto mt-28 px-6">
        <h1 ref={titleRef} className="text-4xl font-semibold mb-3 tracking-wide">
          Contact <span className="text-blue-400">SyntaxPrime</span>
        </h1>

        <p className="text-gray-300 max-w-xl mb-10 text-[18px] leading-relaxed">
          We'd love to hear from you. Whether you have a question, project idea,
          or want to collaborate, feel free to reach out using the form below.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 mb-20 bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-[0_0_30px_#00000060]"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 mt-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/40"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* SUCCESS POPUP OVERLAY */}
      <div
        ref={overlayRef}
        onClick={closePopup}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none z-50"
      >
        {/* POPUP CARD */}
        <div
          ref={popupRef}
          className="bg-white/10 border border-white/20 shadow-xl backdrop-blur-xl rounded-2xl p-8 text-center max-w-sm mx-auto"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Message Sent!
          </h2>
          <p className="text-gray-200 mb-6">
            Thank you for contacting SyntaxPrime.  
            We will get back to you shortly.
          </p>

          <button
            onClick={closePopup}
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow hover:shadow-blue-500/40 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
