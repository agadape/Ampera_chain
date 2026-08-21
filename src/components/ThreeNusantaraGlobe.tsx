"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { 
  Broadcast, 
  Crosshair, 
  Drop, 
  SolarPanel, 
  TreeEvergreen, 
  Lightning,
  ShieldCheck,
  ArrowsClockwise
} from "@phosphor-icons/react";

interface VillagePin {
  id: string;
  name: string;
  region: string;
  coords: string;
  lat: number;
  lon: number;
  type: "hydro" | "solar" | "biomass";
  capacity: string;
  households: number;
  apy: string;
  dieselSaved: string;
  carbonAvoided: string;
  status: string;
}

const VILLAGE_PINS: VillagePin[] = [
  {
    id: "pin-yahukimo",
    name: "Desa Kurima (Yahukimo)",
    region: "Papua Pegunungan",
    coords: "04°12'S 138°56'E",
    lat: -4.2,
    lon: 138.9,
    type: "hydro",
    capacity: "7.5 kW Piko-Hidro",
    households: 65,
    apy: "23.4%",
    dieselSaved: "Rp 68 Juta/thn",
    carbonAvoided: "26.9 tCO₂e/thn",
    status: "PILOT CANDIDATE (PLN ICE Rp 50Jt)"
  },
  {
    id: "pin-sumba",
    name: "Desa Wairasa",
    region: "Sumba Tengah, NTT",
    coords: "09°38'S 119°35'E",
    lat: -9.6,
    lon: 119.6,
    type: "solar",
    capacity: "20.0 kW Solar + BESS",
    households: 140,
    apy: "24.8%",
    dieselSaved: "Rp 148 Juta/thn",
    carbonAvoided: "21.6 tCO₂e/thn",
    status: "RWA TOKENIZED ($AMP-02)"
  },
  {
    id: "pin-mentawai",
    name: "Desa Madobag",
    region: "Kep. Mentawai, Sumatra",
    coords: "01°28'S 99°05'E",
    lat: -1.5,
    lon: 99.1,
    type: "biomass",
    capacity: "12.0 kW Biomassa",
    households: 115,
    apy: "23.9%",
    dieselSaved: "Rp 94 Juta/thn",
    carbonAvoided: "31.0 tCO₂e/thn",
    status: "COMMUNITY MoU SIGNED"
  },
  {
    id: "pin-morotai",
    name: "Desa Pilowo",
    region: "Pulau Morotai, Maluku Utara",
    coords: "02°03'N 128°18'E",
    lat: 2.0,
    lon: 128.3,
    type: "hydro",
    capacity: "5.5 kW Piko-Hidro",
    households: 50,
    apy: "22.9%",
    dieselSaved: "Rp 46 Juta/thn",
    carbonAvoided: "19.7 tCO₂e/thn",
    status: "FEASIBILITY PASSED"
  },
  {
    id: "pin-mahakam",
    name: "Desa Tiong Ohang",
    region: "Mahakam Ulu, Kalimantan Timur",
    coords: "00°45'N 114°12'E",
    lat: 0.7,
    lon: 114.2,
    type: "hydro",
    capacity: "10.0 kW Run-of-River",
    households: 95,
    apy: "23.8%",
    dieselSaved: "Rp 86 Juta/thn",
    carbonAvoided: "35.9 tCO₂e/thn",
    status: "RWA VAULT READY"
  },
  {
    id: "pin-toraja",
    name: "Desa Ranteballa",
    region: "Latimojong, Sulawesi Selatan",
    coords: "03°22'S 120°08'E",
    lat: -3.4,
    lon: 120.1,
    type: "hydro",
    capacity: "6.5 kW Piko-Hidro",
    households: 60,
    apy: "23.0%",
    dieselSaved: "Rp 54 Juta/thn",
    carbonAvoided: "23.3 tCO₂e/thn",
    status: "PLN LISDES SYNCED"
  }
];

// Helper: Convert Lat/Lon to 3D Sphere Vector3
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function ThreeNusantaraGlobe() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [selectedPin, setSelectedPin] = useState<VillagePin>(VILLAGE_PINS[0]);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 260);

    // 2. WebGL Renderer with High DPI support
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Globe Group (Holds Globe, Arcs, Atmosphere & Pins)
    const globeGroup = new THREE.Group();
    // Default rotation focused on Indonesia (approx Lon 118°E, Lat -2°S)
    globeGroup.rotation.y = -Math.PI * 0.65;
    globeGroup.rotation.x = 0.15;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 85;

    // 4. Base Globe Sphere (Midnight Dark Core)
    const globeGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x001329,
      emissive: 0x000d1a,
      specular: 0x1e488f,
      shininess: 25,
      transparent: true,
      opacity: 0.95
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // 5. Wireframe Atmospheric Grid
    const wireframeGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 0.5, 36, 18);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x1e488f,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // 6. Glowing Outer Atmosphere Shader Shell
    const atmoGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 8, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.776, 1.0, 0.2, 1.0) * intensity * 0.45;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    scene.add(atmoMesh);

    // 7. Interactive 3T Village Pin Markers & Light Beacons
    const pinMeshes: { mesh: THREE.Mesh; pin: VillagePin; beacon: THREE.Mesh }[] = [];

    VILLAGE_PINS.forEach((pin) => {
      const pos = latLonToVector3(pin.lat, pin.lon, GLOBE_RADIUS);

      // Pin Head (Glowing Sphere)
      const pinColor = pin.type === "hydro" ? 0x00804c : pin.type === "solar" ? 0xc6ff33 : 0x1e488f;
      const pinGeo = new THREE.SphereGeometry(2.4, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: pinColor });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      globeGroup.add(pinMesh);

      // Vertical Light Beacon Pillar (Cylinder radiating from surface)
      const beaconHeight = 16;
      const beaconGeo = new THREE.CylinderGeometry(0.3, 1.2, beaconHeight, 8);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xc6ff33,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });
      const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);

      // Position & orient beacon normal to sphere surface
      const normal = pos.clone().normalize();
      beaconMesh.position.copy(pos.clone().add(normal.clone().multiplyScalar(beaconHeight / 2)));
      beaconMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      globeGroup.add(beaconMesh);

      pinMeshes.push({ mesh: pinMesh, pin, beacon: beaconMesh });
    });

    // 8. Interconnecting Arc Lines between nodes (Great Circle Curves)
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i < pinMeshes.length - 1; i++) {
      const p1 = pinMeshes[i].mesh.position;
      const p2 = pinMeshes[i + 1].mesh.position;
      const mid = p1.clone().lerp(p2, 0.5).normalize().multiplyScalar(GLOBE_RADIUS + 12);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));
      const curveMat = new THREE.LineBasicMaterial({
        color: 0xc6ff33,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arcLine);
    }

    // 9. Orbiting Sentinel-2 Satellite Ring
    const orbitRingGeo = new THREE.RingGeometry(GLOBE_RADIUS + 22, GLOBE_RADIUS + 22.8, 64);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0x7d39eb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const orbitRingMesh = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRingMesh.rotation.x = Math.PI * 0.4;
    scene.add(orbitRingMesh);

    // Satellite Mesh
    const satGeo = new THREE.BoxGeometry(3, 1.5, 2);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
    const satMesh = new THREE.Mesh(satGeo, satMat);
    scene.add(satMesh);

    // 10. Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc6ff33, 1.2);
    dirLight1.position.set(150, 100, 150);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x1e488f, 1.5);
    dirLight2.position.set(-150, -50, -100);
    scene.add(dirLight2);

    // 11. Mouse Drag & Raycasting Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pinMeshes.map(p => p.mesh));

      if (intersects.length > 0) {
        const hit = pinMeshes.find(p => p.mesh === intersects[0].object);
        if (hit) {
          setSelectedPin(hit.pin);
        }
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("click", onClick);

    // 12. Animation Loop (60 FPS)
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { rootMargin: "200px" });
    observer.observe(container);

    const animateLoop = () => {
      animationFrameId = requestAnimationFrame(animateLoop);
      if (!isVisible) return; // Pause GPU processing

      const elapsed = clock.getElapsedTime();

      // Idle Auto-Rotation
      if (isAutoRotate && !isDragging) {
        globeGroup.rotation.y += 0.0018;
      }

      // Orbit Satellite
      const satRadius = GLOBE_RADIUS + 22.4;
      satMesh.position.x = Math.cos(elapsed * 0.8) * satRadius;
      satMesh.position.z = Math.sin(elapsed * 0.8) * satRadius * Math.cos(Math.PI * 0.4);
      satMesh.position.y = Math.sin(elapsed * 0.8) * satRadius * Math.sin(Math.PI * 0.4);
      satMesh.rotation.y = elapsed;

      // Pulse Beacons
      pinMeshes.forEach((item, idx) => {
        const scale = 1 + Math.sin(elapsed * 4 + idx) * 0.25;
        item.beacon.scale.set(scale, 1, scale);
      });

      renderer.render(scene, camera);
    };

    animateLoop();

    // 13. Clean up
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("click", onClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isAutoRotate]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Three.js 3D Viewport (Col 8) */}
        <div className="lg:col-span-8 p-2 rounded-[2.5rem] bg-black/60 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 text-xs font-mono text-white/70">
            <div className="flex items-center gap-2">
              <Broadcast size={16} className="text-lime animate-pulse" />
              <span className="text-white font-bold tracking-wider">THREE.JS 3D NUSANTARA GLOBE</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 transition-all ${
                  isAutoRotate ? "bg-lime text-midnight" : "bg-white/10 text-white"
                }`}
              >
                <ArrowsClockwise size={12} className={isAutoRotate ? "animate-spin" : ""} />
                {isAutoRotate ? "ROTASI: ON" : "ROTASI: PAUSE"}
              </button>
            </div>
          </div>

          {/* Three.js Canvas Container */}
          <div 
            ref={mountRef} 
            className="w-full aspect-[16/10] bg-[#000d1a] cursor-grab active:cursor-grabbing relative overflow-hidden flex items-center justify-center select-none"
          >
            {/* Overlay Instructions */}
            <div className="absolute bottom-4 left-6 text-[11px] font-mono text-white/50 bg-black/60 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-white/10 pointer-events-none">
              * Putar bola 3D dengan mouse · Klik titik cahaya untuk membaca audit desa
            </div>

            <div className="absolute top-4 right-6 text-[10px] font-mono text-lime bg-lime/10 px-3 py-1 rounded-lg border border-lime/20 pointer-events-none">
              ORBIT: SENTINEL-2 (786 km)
            </div>
          </div>

        </div>

        {/* Tactical Telemetry HUD Card (Col 4) */}
        <div className="lg:col-span-4 p-2 rounded-[2.5rem] bg-black/60 border border-white/15 backdrop-blur-2xl shadow-2xl">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-[#001329] p-6 md:p-8 text-white space-y-6">
            
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-lime bg-lime/10 px-2 py-0.5 rounded border border-lime/20">
                  [ {selectedPin.status} ]
                </span>
                <h3 className="font-display font-black text-2xl text-white mt-2 leading-tight">{selectedPin.name}</h3>
                <div className="text-xs text-white/60 font-mono mt-1">{selectedPin.region} · {selectedPin.coords}</div>
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-lime flex items-center justify-center border border-white/15 shrink-0 shadow-lg">
                {selectedPin.type === "hydro" && <Drop size={26} weight="duotone" />}
                {selectedPin.type === "solar" && <SolarPanel size={26} weight="duotone" />}
                {selectedPin.type === "biomass" && <TreeEvergreen size={26} weight="duotone" />}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 uppercase block">KAPASITAS EBT</span>
                <span className="text-sm font-bold text-lime mt-1 block">{selectedPin.capacity}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 uppercase block">TARGET KK</span>
                <span className="text-sm font-bold text-white mt-1 block">{selectedPin.households} Rumah</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 uppercase block">PROYEKSI APY</span>
                <span className="text-sm font-bold text-brand-green mt-1 block">{selectedPin.apy}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-white/50 uppercase block">STATUS AUDIT</span>
                <span className="text-xs font-bold text-mantis mt-1 block">Tervalidasi</span>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/60">Hemat Diesel PLN:</span>
                <span className="font-bold text-lime">{selectedPin.dieselSaved}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-white/60">Kredit Karbon (AMS-I.L):</span>
                <span className="font-bold text-mantis">{selectedPin.carbonAvoided}</span>
              </div>
            </div>

            {/* Quick Switcher Buttons for All 6 Pins */}
            <div className="pt-3 border-t border-white/10">
              <span className="text-[10px] font-mono text-white/40 uppercase block mb-2">PILIH TITIK SIMPUL 3T:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {VILLAGE_PINS.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    className={`px-2 py-1 rounded text-[10px] font-mono truncate transition-all ${
                      selectedPin.id === pin.id 
                        ? "bg-lime text-midnight font-bold" 
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {pin.name.split(" ")[1] || pin.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
