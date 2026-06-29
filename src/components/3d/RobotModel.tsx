"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";

interface RobotModelProps {
  url?: string;
  isMobile?: boolean;
}

export function RobotModel({ url = "/models/ai_robot.glb", isMobile = false }: RobotModelProps) {
  // Try to load the GLTF, it will suspend and fall back to ErrorBoundary if it fails.
  // We use clone so we don't mutate the cached geometry if reused.
  const { scene } = useGLTF(url);
  const group = useRef<THREE.Group>(null);
  
  // Material overrides for a premium "glass + metallic" look
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // If the model is a bit rough, we apply some nice standard material enhancements
          child.castShadow = !isMobile;
          child.receiveShadow = !isMobile;
          
          if (child.material) {
            // Slight adjustments to make it look premium
            const mat = child.material as THREE.MeshStandardMaterial;
            mat.roughness = 0.2;
            mat.metalness = 0.8;
            mat.envMapIntensity = 1.5;
            mat.needsUpdate = true;
          }
        }
      });
    }
  }, [scene, isMobile]);

  // Parallax + Breathing Animation
  useFrame((state, delta) => {
    if (!group.current) return;

    // 1. Idle Breathing (subtle vertical scale/position bounce)
    const t = state.clock.getElapsedTime();
    const breathOffset = Math.sin(t * 1.5) * 0.05;
    
    // 2. Mouse Parallax (Look at cursor slightly)
    if (!isMobile) {
      const targetX = (state.pointer.x * Math.PI) / 6; // max rotation
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      // Smoothly interpolate current rotation to target
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetX, 4, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -targetY, 4, delta);
    } else {
      // Gentle automatic rotation for mobile
      group.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
    
    // Apply breathing to torso/group
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, breathOffset, 2, delta);
  });

  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.2} 
      floatIntensity={0.5} 
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={group} dispose={null}>
        <primitive object={scene} scale={1.2} position={[0, -1.5, 0]} />
      </group>
    </Float>
  );
}
