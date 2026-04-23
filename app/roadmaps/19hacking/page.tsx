"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  SiLinux,
  SiWireshark,
  SiPython,
} from "react-icons/si";
import {
  FaNetworkWired,
  FaUserSecret,
  FaBug,
  FaShieldAlt,
  FaSkull,
} from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

// Roadmap sections
const sections = [
  {
    title: "🔰 Introduction to Ethical Hacking",
    icon: <FaUserSecret className="text-3xl text-green-400" />,
    items: [
      "What is Ethical Hacking?",
      "Legal & ethical boundaries",
      "Bug bounty vs Pen-testing vs Red Teaming",
      "Hacking phases: Recon → Exploit → Post‑Exploitation",
    ],
  },
  {
    title: "🌐 Networking & Security Basics",
    icon: <FaNetworkWired className="text-3xl text-green-400" />,
    items: [
      "TCP/IP, Ports, Protocols",
      "DNS, DHCP, NAT",
      "Firewalls, IDS/IPS",
      "VPN, Proxies, SSL/TLS",
    ],
  },
  {
    title: "🐧 Linux for Hackers",
    icon: <SiLinux className="text-3xl text-green-400" />,
    items: [
      "Linux commands & permissions",
      "Processes, services, file control",
      "Bash scripting",
      "Kali Linux essentials",
    ],
  },
  {
    title: "🐍 Scripting & Programming",
    icon: <SiPython className="text-3xl text-green-400" />,
    items: [
      "Python for automation",
      "JavaScript for web exploits",
      "Bash scripting",
      "PowerShell exploitation",
    ],
  },
  {
    title: "🕵 OSINT (Open Source Intelligence)",
    icon: <TbWorldSearch className="text-3xl text-green-400" />,
    items: [
      "Google Dorking",
      "Shodan, Censys",
      "Metadata extraction",
      "Social engineering basics",
    ],
  },
  {
    title: "💀 Essential Hacking Tools",
    icon: <FaSkull className="text-3xl text-green-400" />,
    items: [
      "Nmap – Scanning",
      "Wireshark – Packet analysis",
      "Burp Suite – Web testing",
      "Metasploit – Exploitation",
    ],
  },
  {
    title: "🕸 Web Application Hacking",
    icon: <FaBug className="text-3xl text-green-400" />,
    items: [
      "OWASP Top 10",
      "SQL Injection",
      "XSS, CSRF, SSRF",
      "Broken Authentication",
    ],
  },
  {
    title: "🛡 System & Network Exploitation",
    icon: <FaShieldAlt className="text-3xl text-green-400" />,
    items: [
      "Privilege Escalation",
      "Password Cracking",
      "Wi-Fi Attacks",
      "Active Directory basics",
    ],
  },
  {
    title: "📦 Forensics & Incident Response",
    icon: <SiWireshark className="text-3xl text-green-400" />,
    items: [
      "Memory forensics",
      "Log analysis",
      "Network investigation",
      "Malware basics",
    ],
  },
];

export default function HackingPage() {
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);

  // GSAP Animations + ScrollTrigger
  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Matrix rain canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = "16px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen  text-green-400 px-6 md:px-16 pt-28 overflow-x-hidden">
      {/* MATRIX CANVAS */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-14 drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">
        Ethical Hacking Roadmap
      </h1>

      {/* CARDS */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10 pb-16">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-black/70 border border-green-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(0,255,0,0.15)]
                       hover:shadow-[0_0_40px_rgba(0,255,0,0.4)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">{section.icon}<h2 className="text-xl font-semibold">{section.title}</h2></div>
            <ul className="space-y-2 text-green-300">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm opacity-90">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-green-600 mt-16 mb-10 text-xs">
        ⚠ Strictly for ethical & educational purposes.
      </p>
    </div>
  );
}
