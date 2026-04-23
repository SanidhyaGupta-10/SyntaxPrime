"use client";

import React from "react";
import { FaCoins, FaNetworkWired, FaLock, FaDatabase, FaCogs, FaRocket } from "react-icons/fa";

// Reusable Card Component
function RoadmapCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Icon className="text-4xl text-indigo-400" />
      <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center text-[18px] leading-relaxed">{text}</p>
    </div>
  );
}

export default function BlockchainPage() {
  const roadmap = [
    {
      icon: FaCoins,
      title: "1️⃣ Blockchain Basics",
      text: "Understand what blockchain is, how it works, decentralization, consensus mechanisms, and its real-world applications.",
    },
    {
      icon: FaNetworkWired,
      title: "2️⃣ Cryptography Fundamentals",
      text: "Learn hashing, digital signatures, public/private keys, encryption, and cryptographic algorithms used in blockchain.",
    },
    {
      icon: FaLock,
      title: "3️⃣ Ethereum & Smart Contracts",
      text: "Understand Ethereum, Solidity, smart contract structure, deployment, testing, and interacting with DApps.",
    },
    {
      icon: FaDatabase,
      title: "4️⃣ Blockchain Development Tools",
      text: "Familiarize with tools like Truffle, Hardhat, Remix, Ganache, MetaMask, and blockchain testnets for development.",
    },
    {
      icon: FaCogs,
      title: "5️⃣ Advanced Concepts",
      text: "Explore Layer 2 solutions, cross-chain communication, consensus algorithms (PoW, PoS), and token standards (ERC20, ERC721).",
    },
    {
      icon: FaRocket,
      title: "6️⃣ DApp & DeFi Development",
      text: "Build decentralized applications, wallets, exchanges, NFT platforms, and explore decentralized finance ecosystems.",
    },
    {
      icon: FaNetworkWired,
      title: "7️⃣ Security & Auditing",
      text: "Learn about blockchain vulnerabilities, smart contract exploits, auditing tools, and best security practices for DApps.",
    },
    {
      icon: FaCoins,
      title: "8️⃣ Continuous Learning",
      text: "Stay updated with blockchain innovations: Web3, DAOs, layer2 scaling, interoperability, and the future of decentralized technology.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-400">
          🔗 Blockchain Roadmap
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn blockchain from scratch — covering basics, smart contracts, DApps, DeFi, security, and advanced concepts.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
