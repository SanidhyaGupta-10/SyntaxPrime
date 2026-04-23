"use client";

import React, { useEffect, useRef } from "react";
import { FaEthereum, FaCode, FaDatabase, FaLock, FaRocket } from "react-icons/fa";

// Card Component
function RoadmapCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-2xl hover:border-2 hover:border-purple-400 p-6 flex flex-col items-center gap-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Icon className="text-4xl text-purple-400" />
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function DAppsPage() {
  const canvasRef = useRef(null);

  const roadmap = [
    {
      icon: FaEthereum,
      title: "1️⃣ Blockchain Basics",
      text: "Understand blockchain, Ethereum, transactions, wallets, nodes, and decentralized principles.",
    },
    {
      icon: FaCode,
      title: "2️⃣ Solidity & Smart Contracts",
      text: "Learn Solidity, contract structure, functions, storage, events, modifiers, and deployment basics.",
    },
    {
      icon: FaDatabase,
      title: "3️⃣ State & Storage Management",
      text: "Understand how to store data efficiently, mappings, structs, arrays, and gas optimization.",
    },
    {
      icon: FaLock,
      title: "4️⃣ Security & Testing",
      text: "Learn about vulnerabilities, audits, testing frameworks (Hardhat, Truffle, Remix), and best practices.",
    },
    {
      icon: FaRocket,
      title: "5️⃣ Frontend Integration",
      text: "Connect smart contracts to a front-end using Web3.js, Ethers.js, and frameworks like React or Next.js.",
    },
    {
      icon: FaEthereum,
      title: "6️⃣ Deployment & Networks",
      text: "Deploy to Ethereum mainnet, testnets (Ropsten, Goerli), and learn about Layer2 solutions.",
    },
    {
      icon: FaCode,
      title: "7️⃣ Advanced DApps",
      text: "Build NFT platforms, DeFi protocols, DAOs, and learn about cross-chain interactions.",
    },
    {
      icon: FaRocket,
      title: "8️⃣ Continuous Learning",
      text: "Stay updated with Ethereum upgrades, EVM improvements, Solidity updates, and DeFi trends.",
    },
  ];

  // Animated Blockchain Node Background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const nodes = [];
    const nodeCount = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(128, 0, 128, ${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        ctx.fillStyle = "rgba(128, 0, 128, 0.7)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 w-full h-full"
      ></canvas>

      {/* Header */}
      <div className="text-center mb-16 relative z-10 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400 hover:text-purple-600 transition-all">
          🏗️ DApps Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          Step by step path to build full-fledged decentralized applications on Ethereum blockchain.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 max-w-6xl mx-auto">
        {roadmap.map((card, index) => (
          <RoadmapCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
