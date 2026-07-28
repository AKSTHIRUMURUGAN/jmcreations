"use client";

import { Suspense, lazy, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function Catchy3DLoader() {
  const words = [
    "INITIALIZING 3D AI ASSISTANT...",
    "PREPARING INTERACTIVE 3D SCENE...",
    "CALIBRATING LIGHTING & ENVIRONMENT...",
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
    <div className="w-full h-full min-h-[340px] sm:min-h-[480px] flex items-center justify-center relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-xl z-20">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a853]/15 via-transparent to-[#c8946e]/15 blur-2xl pointer-events-none" />

      <div className="flex flex-col items-center gap-4 relative z-10 p-6 text-center">
        {/* Animated Hex Spinner */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#d4a853]/20 animate-ping" />
          <div className="w-12 h-12 rounded-full border-2 border-t-[#d4a853] border-r-amber-500 border-b-transparent border-l-transparent animate-spin" />
          <span className="w-3 h-3 rounded-full bg-[#d4a853] animate-pulse" />
        </div>

        {/* Catchy Non-Technical Loading Text */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[11px] sm:text-xs font-mono font-extrabold text-[#d4a853] tracking-widest uppercase animate-pulse">
            {words[index]}
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">
            Interactive AI Experience • Powered by JM Creations
          </span>
        </div>

        {/* Glowing Loading Bar */}
        <div className="w-48 sm:w-56 h-1.5 rounded-full bg-white/10 overflow-hidden relative mt-1">
          <div className="w-full h-full bg-gradient-to-r from-[#d4a853] via-amber-400 to-[#d4a853] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isSceneReady, setIsSceneReady] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Show Loader until 3D Scene is completely ready */}
      {!isSceneReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Catchy3DLoader />
        </div>
      )}

      {/* Spline Canvas with smooth fade-in */}
      <Suspense fallback={<Catchy3DLoader />}>
        <div
          className={`w-full h-full transition-opacity duration-700 ${
            isSceneReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <Spline
            scene={scene}
            onLoad={() => {
              setIsSceneReady(true);
            }}
            className={className}
          />
        </div>
      </Suspense>
    </div>
  );
}
