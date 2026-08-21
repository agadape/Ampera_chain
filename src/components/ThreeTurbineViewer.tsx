"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { 
  Drop, 
  Lightning, 
  SlidersHorizontal, 
  ArrowsClockwise,
  Eye,
  Cube
} from "@phosphor-icons/react";

export default function ThreeTurbineViewer() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [waterFlow, setWaterFlow] = useState<number>(12); // L/s

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 20, 65);
    camera.lookAt(0, 0, 0);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Turbine Master Assembly Group
    const turbineAssembly = new THREE.Group();
    scene.add(turbineAssembly);

    // Runner Hub (Central Cylinder)
    const hubGeo = new THREE.CylinderGeometry(5, 5, 4, 32);
    const hubMat = new THREE.MeshStandardMaterial({
      color: 0x00804c,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: wireframe
    });
    const hubMesh = new THREE.Mesh(hubGeo, hubMat);
    hubMesh.rotation.x = Math.PI / 2;
    turbineAssembly.add(hubMesh);

    // 12 Pelton Turbine Spoon Cups
    const cupCount = 12;
    const runnerGroup = new THREE.Group();
    turbineAssembly.add(runnerGroup);

    for (let i = 0; i < cupCount; i++) {
      const angle = (i / cupCount) * Math.PI * 2;
      const cupGeo = new THREE.SphereGeometry(2.2, 16, 16, 0, Math.PI);
      const cupMat = new THREE.MeshStandardMaterial({
        color: 0xc6ff33,
        metalness: 0.6,
        roughness: 0.3,
        wireframe: wireframe
      });
      const cupMesh = new THREE.Mesh(cupGeo, cupMat);

      cupMesh.position.x = Math.cos(angle) * 11;
      cupMesh.position.y = Math.sin(angle) * 11;
      cupMesh.rotation.z = angle + Math.PI / 2;
      runnerGroup.add(cupMesh);
    }

    // Outer Generator Shell Stator
    const statorGeo = new THREE.TorusGeometry(15, 0.8, 16, 64);
    const statorMat = new THREE.MeshStandardMaterial({
      color: 0x1e488f,
      metalness: 0.7,
      roughness: 0.4,
      wireframe: wireframe
    });
    const statorMesh = new THREE.Mesh(statorGeo, statorMat);
    turbineAssembly.add(statorMesh);

    // Penstock Nozzle (Water Jet Injector)
    const nozzleGeo = new THREE.CylinderGeometry(1.5, 3, 10, 16);
    const nozzleMat = new THREE.MeshStandardMaterial({
      color: 0x7d39eb,
      metalness: 0.5,
      roughness: 0.5,
      wireframe: wireframe
    });
    const nozzleMesh = new THREE.Mesh(nozzleGeo, nozzleMat);
    nozzleMesh.position.set(-16, -11, 0);
    nozzleMesh.rotation.z = -Math.PI / 4;
    turbineAssembly.add(nozzleMesh);

    // Water Spray Particle Stream
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = -12 + (Math.random() - 0.5) * 4;
      particlePositions[i + 1] = -8 + (Math.random() - 0.5) * 4;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc6ff33,
      size: 1.2,
      transparent: true,
      opacity: 0.8
    });
    const particleStream = new THREE.Points(particleGeo, particleMat);
    turbineAssembly.add(particleStream);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc6ff33, 2);
    dirLight1.position.set(20, 40, 30);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x1e488f, 1.5);
    dirLight2.position.set(-30, -20, -20);
    scene.add(dirLight2);

    // Mouse Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        turbineAssembly.rotation.y += deltaX * 0.008;
        turbineAssembly.rotation.x += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      // Rotation speed linked to water flow (L/s)
      const rpmSpeed = (waterFlow / 12) * 0.05;
      runnerGroup.rotation.z += rpmSpeed;

      // Animate water particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += (waterFlow / 12) * 0.6;
        positions[i + 1] += (waterFlow / 12) * 0.4;
        if (positions[i] > 2) {
          positions[i] = -12;
          positions[i + 1] = -8;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [wireframe, waterFlow]);

  return (
    <div className="w-full p-2 rounded-[2.5rem] bg-black/60 border border-white/15 backdrop-blur-2xl shadow-2xl">
      <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#001329] p-6 md:p-8 text-white space-y-6">
        
        {/* Header HUD */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
          <div>
            <span className="text-[10px] font-mono text-lime uppercase tracking-widest bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
              THREE.JS 3D HARDWARE EXPLORER
            </span>
            <h3 className="font-display font-black text-2xl text-white mt-1.5">
              Turbin Pelton Piko-Hidro 5.0 kW
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWireframe(!wireframe)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                wireframe ? "bg-lime text-midnight" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Cube size={16} />
              {wireframe ? "MODE: WIREFRAME" : "MODE: SOLID CAD"}
            </button>
          </div>
        </div>

        {/* 3D Viewport */}
        <div 
          ref={mountRef} 
          className="w-full aspect-[16/8] bg-[#000d1a] rounded-2xl border border-white/10 relative overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
        >
          <div className="absolute top-3 left-4 text-[10px] font-mono text-lime bg-black/60 px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
            RPM AKTIF: {Math.round((waterFlow / 12) * 1480)} RPM
          </div>

          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-white/50 bg-black/60 px-2.5 py-1 rounded-md border border-white/10 pointer-events-none">
            * Drag untuk memutar 360° · Geser slider debit air di bawah
          </div>
        </div>

        {/* Dynamic Water Jet Flow Control Slider */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center">
            <span className="text-white/70">SIMULASI DEBIT ALIRAN AIR (L/s):</span>
            <strong className="text-lime text-sm">{waterFlow} L/s (Output: {((waterFlow / 12) * 5.0).toFixed(1)} kW)</strong>
          </div>

          <input 
            type="range"
            min={4}
            max={24}
            step={1}
            value={waterFlow}
            onChange={(e) => setWaterFlow(Number(e.target.value))}
            className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-lime"
          />

          <div className="flex justify-between text-[10px] text-white/40">
            <span>4 L/s (Debit Minimum)</span>
            <span>12 L/s (Kondisi Nominal 5 kW)</span>
            <span>24 L/s (Debit Puncak)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
