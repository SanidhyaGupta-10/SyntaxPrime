"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import gsap from "gsap";

// 3D Animated Sphere
function WireSphere() {
  const sphereRef = useRef<Mesh>(null);

  useEffect(() => {
    if (sphereRef.current) {
      gsap.to(sphereRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial wireframe opacity={0.15} transparent color={"#89ceff"} />
    </mesh>
  );
}

// Floating Particles
function Particles() {
  const count = 200;
  const positions = Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 8);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array(positions), 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.01} color="#89ceff" transparent opacity={0.4} />
    </points>
  );
}

export default function ContactPage() {
  const containerRef = useRef(null);
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message);

      if (data.message.toLowerCase().includes("success")) {
        openPopup();
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("CONNECTION_ERROR");
    }
  };

  const openPopup = () => {
    gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
    gsap.fromTo(
      popupRef.current,
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power4.out" }
    );
  };

  const closePopup = () => {
    gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.3 });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-16">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <WireSphere />
          <Particles />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content Container */}
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info */}
        <section className="animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-label-caps tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
            NETWORK_NODE: ESTABLISHED
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-6 tracking-tight leading-tight">
            Connect with the <span className="text-primary">Syntax</span> Mesh
          </h1>
          <p className="text-slate-400 font-inter text-lg mb-10 leading-relaxed max-w-md">
            Whether you're seeking architectural consultation, reporting a logic error, or initiating a collaboration, our channels are open.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl glass-panel border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500 tracking-wider">DIRECT_COMM</p>
                <p className="text-white font-mono">hello@syntaxprime.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl glass-panel border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-primary">terminal</span>
              </div>
              <div>
                <p className="text-xs font-label-caps text-slate-500 tracking-wider">SOURCE_CONTROL</p>
                <p className="text-white font-mono">github.com/sanidhyagupta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Form */}
        <section className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10 rounded-2xl border-white/10 bg-surface/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-mono text-slate-700 tracking-tighter">SECURE_CHANNEL_v4.0</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-label-caps text-slate-500 tracking-widest block px-1">IDENTITY</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Subject Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-primary/50 transition-all font-inter"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-label-caps text-slate-500 tracking-widest block px-1">ENDPOINT</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="valid@email.address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-primary/50 transition-all font-inter"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-label-caps text-slate-500 tracking-widest block px-1">PAYLOAD</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Transmit your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white placeholder-slate-600 outline-none focus:border-primary/50 transition-all font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "TRANSMITTING..."}
                className="w-full py-4 rounded-xl bg-primary text-on-primary font-label-caps text-xs tracking-widest hover:shadow-[0_0_25px_rgba(137,206,255,0.4)] transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 mt-4"
              >
                {status || "INITIATE_TRANSMISSION"}
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Success Popup */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center opacity-0 pointer-events-none z-50 transition-opacity duration-300"
      >
        <div
          ref={popupRef}
          className="glass-panel p-10 rounded-2xl border border-white/10 bg-surface/60 max-w-sm w-full mx-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-emerald-500 text-3xl">check_circle</span>
          </div>
          <h2 className="font-display text-2xl text-white mb-2">Transmission Success</h2>
          <p className="text-slate-400 font-inter mb-8">
            Your payload has been successfully integrated into our queue. We will establish contact shortly.
          </p>
          <button
            onClick={closePopup}
            className="w-full py-3 glass-panel text-white font-label-caps text-[10px] tracking-widest rounded-lg hover:bg-white/5 transition-all"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
