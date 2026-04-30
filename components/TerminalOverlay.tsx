"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "name" | "destination";

export default function TerminalOverlay({ isOpen, onClose }: TerminalOverlayProps) {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initialize terminal
  useEffect(() => {
    if (isOpen) {
      setHistory([
        "SyntaxPrime OS v2.4.0",
        "Initializing boot sequence...",
        "Establishing secure connection... OK",
        "",
        "Authentication required.",
        "Please identify yourself.",
      ]);
      setStep("name");
      setName("");
      setInput("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, input]);

  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const currentInput = input.trim();
      setInput("");

      setHistory((prev) => [...prev, `> ${currentInput}`]);

      if (step === "name") {
        setName(currentInput);
        setStep("destination");
        setHistory((prev) => [
          ...prev,
          "",
          `Access granted. Welcome to the system, ${currentInput}.`,
          "Available directories:",
          "  - notes",
          "  - roadmaps",
          "  - skills",
          "",
          "Navigate where?",
        ]);
      } else if (step === "destination") {
        const dest = currentInput.toLowerCase();
        if (["notes", "roadmaps", "skills"].includes(dest)) {
          setHistory((prev) => [
            ...prev,
            `Executing routing protocol...`,
            `Redirecting to /${dest} ...`,
          ]);
          setTimeout(() => {
            router.push(`/${dest}`);
            onClose();
          }, 1000);
        } else if (dest === "exit" || dest === "quit" || dest === "clear") {
             if (dest === "clear") {
                 setHistory(["SyntaxPrime OS v2.4.0", "Navigate where?"]);
             } else {
                 onClose();
             }
        } else {
          setHistory((prev) => [
            ...prev,
            `Error: Directory '${dest}' not found.`,
            "Available directories: notes, roadmaps, skills",
          ]);
        }
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-3xl h-[60vh] max-h-[600px] bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(14,165,233,0.15)] rounded-xl flex flex-col overflow-hidden font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#111]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error/80"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
            <div className="w-3 h-3 rounded-full bg-primary/80"></div>
            <span className="ml-4 text-xs text-slate-500 font-mono tracking-widest">GUEST@SYNTAX_PRIME:~</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-6 text-primary flex flex-col gap-1 custom-scrollbar">
          {history.map((line, i) => (
            <div 
              key={i} 
              className={`${line.startsWith(">") ? "text-white" : "text-slate-400"} min-h-[20px] whitespace-pre-wrap`}
            >
              {line}
            </div>
          ))}
          
          <div className="flex items-center mt-2">
            <span className="text-secondary mr-2 font-bold">
              {step === "name" ? "user@identify:~$" : `${name.toLowerCase()}@system:~$`}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-primary"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
