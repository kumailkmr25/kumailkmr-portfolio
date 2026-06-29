"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, PerformanceMonitor } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import { RobotModel } from "./RobotModel";
import { RobotFallback } from "./RobotFallback";

export default function RobotScene() {
  const [dpr, setDpr] = useState(1.5);
  const [isMobile, setIsMobile] = useState(false);
  const [modelExists, setModelExists] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Check if model exists to prevent Next.js dev overlay crash on 404
    fetch("/models/ai_robot.glb", { method: "HEAD" })
      .then(res => setModelExists(res.ok))
      .catch(() => setModelExists(false));
      
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] relative" ref={containerRef}>
      <ErrorBoundary fallback={<RobotFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={dpr}
          gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
          shadows={!isMobile}
          className="absolute inset-0 z-10"
        >
          {/* Performance Monitor adjusts pixel ratio based on device capability */}
          <PerformanceMonitor 
            onDecline={() => setDpr(1)} 
            onIncline={() => setDpr(2)} 
          />
          
          <Suspense fallback={null}>
            {/* Cinematic Lighting Setup */}
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={2} 
              castShadow={!isMobile}
              shadow-bias={-0.0001}
            />
            {/* Rim light (AI Blue Glow) */}
            <pointLight position={[-5, 5, -5]} intensity={3} color="#10b981" />
            <pointLight position={[0, -2, 2]} intensity={1} color="#34d399" />
            
            {/* Environment for Premium Reflections */}
            <Environment preset="city" />

            {/* The Robot Model - only mount if it exists to avoid 404 suspense errors */}
            {modelExists === true && <RobotModel isMobile={isMobile} />}

            {/* Premium Ground Shadow */}
            {!isMobile && (
              <ContactShadows 
                position={[0, -2, 0]} 
                opacity={0.4} 
                scale={10} 
                blur={2} 
                far={4} 
              />
            )}
          </Suspense>
        </Canvas>
      </ErrorBoundary>

      {/* Fallback overlay specifically for when suspense is loading or model is missing */}
      {modelExists !== true && (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <RobotFallback />
        </div>
      )}
    </div>
  );
}
