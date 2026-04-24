import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LenisProvider } from "./providers";

export const metadata = {
  title: "Syntax Prime | Professional Programming Notes & Roadmaps",
  description: "Deep-dive technical notes, professional roadmaps, and high-impact skills for developers. The prime source for mastering engineering from the ground up.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          position: "relative",
        }}
      >
        <LenisProvider>
          <div className="min-h-full w-full bg-[#0A0A0F] relative overflow-hidden">

            {/* Background Layers */}
            <div className="absolute inset-0 bg-black"></div>

            {/* Grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
              linear-gradient(to bottom, #8080800a 1px, transparent 1px)`,
                backgroundSize: "14px 24px",
              }}
            ></div>

            {/* Radial glow */}
            <div
              className="absolute left-0 top-[-10%] w-[1000px] h-[1000px] rounded-full"
              style={{
                background: "radial-gradient(circle 400px at 50% 300px, #fbfbfb36, #000)",
              }}
            ></div>

            {/* Page content */}
            <Navbar />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}

