"use client";

import React from "react";
import { GoldenOrb } from "./GoldenOrb";
import { FloatingParticles } from "./FloatingParticles";

export const SectionBackground: React.FC = () => {
 return (
 <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
 <GoldenOrb />
 <FloatingParticles />
 </div>
 );
};
