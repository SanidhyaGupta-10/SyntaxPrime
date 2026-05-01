"use client";

import React from "react";
import { FaGlobe, FaCode, FaCogs, FaWallet, FaMobileAlt, FaRocket } from "react-icons/fa";

interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

// Reusable InfoCard
function InfoCard(props: InfoCardProps) {
  const Icon = props.icon;
  const { title, text } = props;
  return (
    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 shadow-2xl flex flex-col items-center gap-4 backdrop-blur-2xl hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 transition-all duration-500 text-center w-[90%] sm:w-[400px] z-10 relative">
      <Icon className="text-4xl text-blue-400" />
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function DAppsPage() {
  const roadmap = [
    {
      icon: FaGlobe,
      title: "1️⃣ Web Development Basics",
      text: "Before building DApps, master Frontend (HTML, CSS, JS, React/Next.js) and Backend (Node.js) to build user interfaces and traditional APIs.",
    },
    {
      icon: FaCode,
      title: "2️⃣ Smart Contract Development",
      text: "Learn to write, test, and deploy Smart Contracts using Solidity, Rust, or Vyper. Use frameworks like Hardhat, Foundry, or Truffle.",
    },
    {
      icon: FaCogs,
      title: "3️⃣ Web3.js & Ethers.js",
      text: "Connect your frontend to the blockchain. Learn how to interact with smart contracts using libraries like Ethers.js, Web3.js, or Viem.",
    },
    {
      icon: FaWallet,
      title: "4️⃣ Wallet Integration",
      text: "Integrate crypto wallets like MetaMask, WalletConnect, or Coinbase Wallet into your app to authenticate users and sign transactions.",
    },
    {
      icon: FaGlobe,
      title: "5️⃣ Decentralized Storage",
      text: "Store off-chain data securely using decentralized storage solutions like IPFS, Arweave, or Filecoin instead of centralized databases.",
    },
    {
      icon: FaMobileAlt,
      title: "6️⃣ DApp Architecture",
      text: "Understand the architecture of decentralized apps, reading data via RPC nodes (Infura, Alchemy), and managing state in the frontend.",
    },
    {
      icon: FaCogs,
      title: "7️⃣ Indexing & Oracles",
      text: "Learn to use The Graph for indexing and querying blockchain data efficiently. Use Chainlink to access off-chain data and real-world events.",
    },
    {
      icon: FaRocket,
      title: "8️⃣ Deployment & Security",
      text: "Audit your smart contracts, use testnets (Sepolia, Goerli), deploy securely, and host your frontend on decentralized networks or Vercel.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
          🌐 DApps Development Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn how to build Decentralized Applications (DApps) by connecting frontend interfaces with blockchain networks and smart contracts.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {roadmap.map((card, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            <InfoCard
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
