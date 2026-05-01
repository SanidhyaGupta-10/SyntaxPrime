"use client";

import React, { useRef } from "react";

import {
  FaMicrosoft,
  FaWindows,
  FaLinux,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiKalilinux,
  SiWireshark,
} from "react-icons/si";

const skills = [
  {
    title: "Azure Cloud Security",
    icon: <FaMicrosoft className="text-4xl text-blue-400" />,
    description:
      "Learn identity protection, Azure firewalls, network security groups, encryption, and cloud defenses.",
  },
  {
    title: "Networking Foundations",
    icon: <FaNetworkWired className="text-4xl text-green-400" />,
    description:
      "Understand routing, switching, subnets, DNS, TCP/IP, NAT, VLANs, and securing network infrastructure.",
  },
  {
    title: "Windows Security",
    icon: <FaWindows className="text-4xl text-blue-300" />,
    description:
      "Master Active Directory, Group Policies, Defender ATP, Kerberos, authentication, and hardening techniques.",
  },
  {
    title: "Linux Security",
    icon: <FaLinux className="text-4xl text-yellow-300" />,
    description:
      "Learn privilege hardening, firewalls, permissions, SSH security, intrusion detection, and system logs.",
  },
  {
    title: "Kali Linux",
    icon: <SiKalilinux className="text-4xl text-red-400" />,
    description:
      "Use tools like Metasploit, Hydra, Nmap, BurpSuite, Hashcat for ethical hacking and vulnerability analysis.",
  },
  {
    title: "Wireshark & Traffic Analysis",
    icon: <SiWireshark className="text-4xl text-primary" />,
    description:
      "Capture, inspect, and analyze packets to detect attacks, anomalies, and compromised systems.",
  },
];

const Page = () => {
  const cardsRef = useRef([]);

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24 sm:py-32 flex flex-col items-center gap-20 overflow-hidden relative">

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 pt-10 text-[#EDEDED]">
        🔐 Network Security Roadmap
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg mb-16">
        A structured path to becoming a Network Security Engineer — covering networking,
        cloud, OS security, analysis, monitoring & real-world tools.
      </p>

      {/* Cards */}
      <div className="flex flex-col items-center gap-10 relative w-full max-w-3xl mx-auto before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {skills.map((item, index) => (
          <div
            key={index}
            className="bg-[#111114] border border-gray-800 shadow-lg shadow-gray-900/40 p-6 
                       rounded-2xl hover:scale-[1.03] transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>

            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {item.title}
            </h2>

            <p className="mt-3 text-gray-400 text-sm text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
