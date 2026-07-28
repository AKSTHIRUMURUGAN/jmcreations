"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full min-h-[350px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="w-8 h-8 rounded-full border-2 border-[#d4a853] border-t-transparent animate-spin" />
            <span className="text-xs font-mono text-zinc-400">Loading Interactive 3D Robot Scene...</span>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
