"use client";

import { Suspense, lazy, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function Catchy3DLoader() {
  const words = [
    "INITIALIZING 3D AI ROBOT CORE...",
    "CALIBRATING NEURAL MESH & LIGHTING...",
    "SYNCHRONIZING REALTIME 60FPS SHADERS...",
    "READY TO INTERACT",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[380px] flex items-center justify-center relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-xl">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a853]/10 via-transparent to-[#c8946e]/10 blur-2xl pointer-events-none" />

      <div className="flex flex-col items-center gap-4 relative z-10 p-6 text-center">
        {/* Animated Cybernetic Hex Spinner */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#d4a853]/20 animate-ping" />
          <div className="w-12 h-12 rounded-full border-2 border-t-[#d4a853] border-r-amber-500 border-b-transparent border-l-transparent animate-spin" />
          <span className="w-3 h-3 rounded-full bg-[#d4a853] animate-pulse" />
        </div>

        {/* Catchy Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-mono font-extrabold text-[#d4a853] tracking-widest uppercase animate-pulse">
            {words[index]}
          </span>
          <span className="text-[10px] text-zinc-500 font-mono">
            Interactive Spline WebGL Engine • Powered by JM AI
          </span>
        </div>

        {/* Loading Progress Line */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden relative mt-1">
          <div className="w-full h-full bg-gradient-to-r from-[#d4a853] via-amber-400 to-[#d4a853] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<Catchy3DLoader />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
