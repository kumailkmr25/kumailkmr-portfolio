"use client";

import React from "react";
import { GoldenOrb } from "./GoldenOrb";
import { AnimatedGrid } from "./AnimatedGrid";
import { FloatingGlassCards } from "./FloatingGlassCards";
import { FloatingParticles } from "./FloatingParticles";
import { BackgroundIcons } from "./BackgroundIcons";
import { CursorGlow } from "./CursorGlow";

interface Premium3DBackgroundProps {
 showCards?: boolean;
 showIcons?: boolean;
 showGrid?: boolean;
}

export const Premium3DBackground: React.FC<Premium3DBackgroundProps> = ({
 showCards = true,
 showIcons = true,
 showGrid = true,
}) => {
 return (
 <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
 <GoldenOrb />
 {showGrid && <AnimatedGrid />}
 {showIcons && <BackgroundIcons />}
 {showCards && <FloatingGlassCards />}
 <FloatingParticles />
 <CursorGlow />
 
 {/* Vignette Overlay */}
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
 </div>
 );
};
