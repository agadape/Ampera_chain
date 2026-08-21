"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { 
  Handshake, 
  Broadcast, 
  Cpu, 
  Leaf, 
  HardDrives, 
  ShieldCheck, 
  Users, 
  LightbulbFilament,
  Sparkle
} from "@phosphor-icons/react";

interface StationData {
  id: number;
  name: string;
  codename: string;
  category: "physical" | "digital" | "value";
  actor: string;
  badge: string;
  badgeLabel: string;
  desc: string;
  keyPoints: string[];
  icon: any;
  pos: [number, number, number];
}

const STATIONS: StationData[] = [
  {
    id: 0,
    name: "Gerbang Masuk Agen Desa",
    codename: "STATION 00 // VILLAGE GATE & MOU",
    category: "physical",
    actor: "Calon Agen Desa & BUMDes",
    badge: "100% Legal",
    badgeLabel: "Surat Perjanjian",
    desc: "Warga desa mengajukan proposal lahan & menandatangani perjanjian hak pakai. Rumah warga menjadi agen AMPERA dan mendapatkan subsidi listrik gratis tiap bulan.",
    keyPoints: [
      "Agen: Subsidi listrik bulanan penuh",
      "Tetangga: Menghubungkan PAYG murah tanpa perantara",
      "Regulasi: Surat perjanjian hak pakai BUMDes aman"
    ],
    icon: Handshake,
    pos: [-140, 8, 15]
  },
  {
    id: 1,
    name: "Detect: Orbit AI Scanner",
    codename: "STATION 01 // SENTINEL-2 ORBIT AI",
    category: "physical",
    actor: "Sentinel-2 & NASA POWER",
    badge: "F1 93.6%",
    badgeLabel: "Akurasi Deteksi",
    desc: "Satelit Sentinel-2 memindai 10.068 titik blankspot desa 3T di seluruh kepulauan Indonesia setiap 5 hari sekali untuk memetakan potensi surya & aliran air.",
    keyPoints: [
      "Resolusi spektral 10 meter (B2-B12)",
      "Pemetaan elevasi terrain (DEM) & debit sungai",
      "Katalog 10.068 kandidat mikrogrid siap bangun"
    ],
    icon: Broadcast,
    pos: [-100, 12, -8]
  },
  {
    id: 2,
    name: "Validate: Ground Edge Node",
    codename: "STATION 02 // IOT TELEMETRY NODE",
    category: "physical",
    actor: "Edge Node: ESP32 + Sensor",
    badge: "100 Hz",
    badgeLabel: "Sampling Lapangan",
    desc: "Node sensor ESP32 berbiaya rendah (Rp 1.5 Jt) dipasang di sungai/atap desa untuk memvalidasi ground truth debit air riil dan radiasi matahari sebelum konstruksi.",
    keyPoints: [
      "Biaya telemetri murah: Rp 1,5 Juta / titik",
      "Akurasi aliran 99.4% tahan cuaca ekstrem",
      "Konektivitas LoRa Sub-GHz transmisi 15 km"
    ],
    icon: Cpu,
    pos: [-60, 10, 15]
  },
  {
    id: 3,
    name: "Generate: 3 Cabang EBT",
    codename: "STATION 03 // MULTI-EBT GENERATOR",
    category: "physical",
    actor: "Piko-Hidro / Surya / Biomassa",
    badge: "24/7 Base",
    badgeLabel: "Piko-Hidro Hero",
    desc: "Pembangkit beroperasi sesuai keunggulan alamiah desa: Piko-Hidro 24/7 (23.0% APY), Surya PV + BESS (24.8% APY), atau Biomassa gasifikasi sawit (23.8% APY).",
    keyPoints: [
      "Piko-Hidro (Hero): 85% capacity factor 24 jam",
      "Surya PV + BESS: Rp 14-18 Jt/kW, 128 kWh/bln",
      "Biomassa: 261,7 Juta ton limbah sawit termanfaatkan"
    ],
    icon: Leaf,
    pos: [-20, 14, -12]
  },
  {
    id: 4,
    name: "Attest: Tokenisasi $AMP RWA",
    codename: "STATION 04 // ON-CHAIN ATTESTATION",
    category: "digital",
    actor: "Smart Contract ERC-6909",
    badge: "1 $AMP",
    badgeLabel: "1 kWh Riil",
    desc: "Setiap kWh terverifikasi di-attestasi on-chain menjadi $AMP. $AMP adalah HAK ATAS ENERGI & BAGI HASIL (bukan aset fisik dan bukan listrik mentah).",
    keyPoints: [
      "✗ BUKAN aset fisik (tak memiliki panel mentah)",
      "✗ BUKAN listrik spekulatif (dikonsumsi langsung)",
      "✓ HAK BAGI HASIL proporsional atas dividen kWh riil"
    ],
    icon: HardDrives,
    pos: [20, 12, 12]
  },
  {
    id: 5,
    name: "Account: Kredit Karbon IDX",
    codename: "STATION 05 // CARBON CERTIFICATION",
    category: "digital",
    actor: "UNFCCC AMS-I.L & IDXCarbon",
    badge: "80%",
    badgeLabel: "Share ke Investor",
    desc: "Emisi jelaga PLTD diesel yang dihindarkan dihitung otomatis sesuai metodologi AMS-I.L dan dicatat untuk monetisasi kredit karbon di BEI IDXCarbon.",
    keyPoints: [
      "Mitigasi 3.59 tCO₂e per kW kapasitas tiap tahun",
      "80% hasil penjualan karbon dibagikan ke investor",
      "Sertifikasi otomatis terintegrasi API bursa"
    ],
    icon: ShieldCheck,
    pos: [60, 10, -10]
  },
  {
    id: 6,
    name: "Fund: Wadah Bersama OJK",
    codename: "STATION 06 // DUAL-TIER CROWDFUND",
    category: "value",
    actor: "Mikro Rp 2rb & Institusi",
    badge: "Rp 2.000",
    badgeLabel: "Tiket Masuk Mikro",
    desc: "Dua lapis pendanaan: Warga mikro mulai Rp 2.000 via Wadah Bersama (1 subscriber OJK resmi tanpa biaya transaksi) dan investor institusi via likuiditas Uniswap v4.",
    keyPoints: [
      "Tier A Mikro: Mulai Rp 2.000 (Wadah Bersama OJK)",
      "Tier B Institusi: Likuiditas instan Uniswap v4",
      "Nilai wajar dihitung agen AI, zero token spekulasi"
    ],
    icon: Users,
    pos: [100, 12, 15]
  },
  {
    id: 7,
    name: "Electrify: Colokan & Dividen",
    codename: "STATION 07 // GRID & CASHFLOW PAYOFF",
    category: "value",
    actor: "Rumah 3T & Offtaker PLN",
    badge: "24.8%",
    badgeLabel: "Rata-Rata APY",
    desc: "Kilowatt listrik menyala di rumah-rumah 3T dan tersambung ke jaringan PLN. Investor menerima 4 aliran bagi hasil kas bulanan berkelanjutan.",
    keyPoints: [
      "1. Pendapatan PAYG desa (70% share)",
      "2. Efisiensi beban diesel PLN (35% share)",
      "3. Penjualan kredit karbon IDXCarbon (80% share)",
      "4. Insentif ESG & Green Certificate"
    ],
    icon: LightbulbFilament,
    pos: [140, 15, -6]
  }
];

export default function ThreePipelineRoadway() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    const scrollEl = scrollContainerRef.current;
    if (!container || !scrollEl) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF4F2EC);
    scene.fog = new THREE.FogExp2(0xF4F2EC, 0.005);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting (Daylight aesthetic to match F4F2EC background)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(50, 100, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc6ff33, 1.0);
    dirLight2.position.set(-50, -20, -50);
    scene.add(dirLight2);

    // 3. 3D Splines (Road, Camera Path, LookAt Path)
    const roadPoints = STATIONS.map(s => new THREE.Vector3(s.pos[0], s.pos[1] - 4, s.pos[2]));
    const roadCurve = new THREE.CatmullRomCurve3(roadPoints);
    
    // Offset camera slightly to the right (Z) and up (Y) for cinematic angle
    const camPoints = STATIONS.map(s => new THREE.Vector3(s.pos[0] + 8, s.pos[1] + 14, s.pos[2] + 45));
    const camCurve = new THREE.CatmullRomCurve3(camPoints);

    // Look directly at the stations
    const lookAtPoints = STATIONS.map(s => new THREE.Vector3(s.pos[0], s.pos[1] + 4, s.pos[2]));
    const lookAtCurve = new THREE.CatmullRomCurve3(lookAtPoints);

    // 4. Build Road Mesh
    const roadGeo = new THREE.TubeGeometry(roadCurve, 256, 3.5, 8, false);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1
    });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    scene.add(roadMesh);

    // Glowing Neon Rails (PLN Green for high contrast on light bg)
    const railGeo = new THREE.TubeGeometry(roadCurve, 256, 0.6, 6, false);
    const railMat = new THREE.MeshBasicMaterial({ color: 0x00804c });
    const railMesh = new THREE.Mesh(railGeo, railMat);
    railMesh.position.y += 1.5;
    scene.add(railMesh);

    // 5. Procedural Stations & Environment
    const stationObjects: THREE.Group[] = [];
    const environmentGroup = new THREE.Group();

    // Helper: Create a low-poly tree
    const createTree = (x: number, z: number, scale: number) => {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.6, 2, 8),
        new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 })
      );
      trunk.position.y = 1;
      const leaves = new THREE.Mesh(
        new THREE.ConeGeometry(2, 4, 8),
        new THREE.MeshStandardMaterial({ color: 0x00804c, roughness: 0.8 })
      );
      leaves.position.y = 3;
      tree.add(trunk, leaves);
      tree.position.set(x, 0, z);
      tree.scale.set(scale, scale, scale);
      return tree;
    };

    // Sprinkle random trees along the road
    for (let i = 0; i < 60; i++) {
      const t = i / 60;
      const pos = roadCurve.getPointAt(t);
      const sideOffset = (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 20);
      environmentGroup.add(createTree(pos.x + sideOffset, pos.y - 4, pos.z + (Math.random() - 0.5) * 10));
    }
    scene.add(environmentGroup);

    STATIONS.forEach((st, idx) => {
      const stationGroup = new THREE.Group();
      stationGroup.position.set(st.pos[0], st.pos[1], st.pos[2]);

      // Base Pad
      const padGeo = new THREE.CylinderGeometry(10, 11, 1.5, 32);
      const padMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.8
      });
      const padMesh = new THREE.Mesh(padGeo, padMat);
      stationGroup.add(padMesh);

      // Glowing Ring
      const ringGeo = new THREE.TorusGeometry(9, 0.3, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: idx % 2 === 0 ? 0x00804c : 0x1e488f });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 0.8;
      stationGroup.add(ringMesh);

      // Enhanced Station Props
      if (st.id === 0) {
        // Gateway / Arch
        const mat = new THREE.MeshStandardMaterial({ color: 0x1e488f, metalness: 0.5 });
        const post = new THREE.CylinderGeometry(1, 1, 12, 16);
        const p1 = new THREE.Mesh(post, mat); p1.position.set(-5, 6, 0);
        const p2 = new THREE.Mesh(post, mat); p2.position.set(5, 6, 0);
        const beam = new THREE.Mesh(new THREE.BoxGeometry(14, 2, 2), mat); beam.position.set(0, 12, 0);
        const core = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), new THREE.MeshBasicMaterial({color: 0xc6ff33}));
        core.position.set(0, 12, 0);
        stationGroup.add(p1, p2, beam, core);
      } else if (st.id === 1) {
        // Satellite
        const dish = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.4), new THREE.MeshStandardMaterial({color: 0xdddddd, side: THREE.DoubleSide}));
        dish.position.y = 8; dish.rotation.x = -Math.PI / 4;
        const base = new THREE.Mesh(new THREE.CylinderGeometry(1, 2, 6), new THREE.MeshStandardMaterial({color: 0x888888}));
        base.position.y = 3;
        stationGroup.add(dish, base);
      } else if (st.id === 2) {
        // AI Server Rack
        const rackGeo = new THREE.BoxGeometry(4, 10, 4);
        const rackMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
        const rack = new THREE.Mesh(rackGeo, rackMat);
        rack.position.y = 5;
        const lights = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.5, 4.2), new THREE.MeshBasicMaterial({color: 0xc6ff33}));
        lights.position.y = 7;
        stationGroup.add(rack, lights);
      } else if (st.id === 3) {
        // Smart Grid Tower
        const towerMat = new THREE.MeshStandardMaterial({ color: 0x777777, wireframe: true });
        const tower = new THREE.Mesh(new THREE.CylinderGeometry(1, 4, 14, 4), towerMat);
        tower.position.y = 7;
        stationGroup.add(tower);
      } else if (st.id === 4) {
        // Crypto Token Crystal
        const hex = new THREE.Mesh(new THREE.OctahedronGeometry(3.5, 0), new THREE.MeshStandardMaterial({ color: 0x7d39eb, metalness: 0.9, roughness: 0.1 }));
        hex.position.y = 7;
        const glow = new THREE.Mesh(new THREE.OctahedronGeometry(4, 0), new THREE.MeshBasicMaterial({ color: 0x7d39eb, wireframe: true, transparent: true, opacity: 0.3 }));
        glow.position.y = 7;
        stationGroup.add(hex, glow);
      } else if (st.id === 5) {
        // Eco Dex Platform
        const plat = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 1, 32), new THREE.MeshStandardMaterial({color: 0x1e488f}));
        plat.position.y = 1;
        const coin = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.5, 32), new THREE.MeshBasicMaterial({color: 0xc6ff33}));
        coin.position.y = 4; coin.rotation.x = Math.PI / 2;
        stationGroup.add(plat, coin);
      } else if (st.id === 6) {
        // Vault
        const vault = new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6), new THREE.MeshStandardMaterial({color: 0x555555, metalness: 0.8}));
        vault.position.y = 3;
        const door = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.5, 32), new THREE.MeshStandardMaterial({color: 0xdddddd}));
        door.position.set(0, 3, 3); door.rotation.x = Math.PI / 2;
        stationGroup.add(vault, door);
      } else if (st.id === 7) {
        // Village House
        const hut = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 6), new THREE.MeshStandardMaterial({ color: 0xdddddd }));
        hut.position.y = 2;
        const roof = new THREE.Mesh(new THREE.ConeGeometry(5.5, 4, 4), new THREE.MeshStandardMaterial({ color: 0x001f3f }));
        roof.position.y = 6; roof.rotation.y = Math.PI / 4;
        const solar = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 4), new THREE.MeshStandardMaterial({ color: 0x1e488f }));
        solar.position.set(0, 6.2, 1.5); solar.rotation.x = -Math.PI / 6;
        stationGroup.add(hut, roof, solar);
      }

      scene.add(stationGroup);
      stationObjects.push(stationGroup);
    });

    // 6. Traveling Energy Capsule (Driven by scroll)
    const capsuleGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const capsuleMat = new THREE.MeshBasicMaterial({ color: 0x00804c });
    const capsuleMesh = new THREE.Mesh(capsuleGeo, capsuleMat);
    scene.add(capsuleMesh);

    // 6.5 Atmospheric Particles (Darker blue for light theme)
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 400;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 300;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1e488f,
      size: 0.8,
      transparent: true,
      opacity: 0.3
    });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // Initial positioning
    camera.position.copy(camCurve.getPointAt(0));
    const currentLookAt = lookAtCurve.getPointAt(0);
    camera.lookAt(currentLookAt);

    // 7. Animation Loop (Scrollytelling Interpolation)
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Optimize: Intersection Observer to pause rendering when out of viewport
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { rootMargin: "200px" });
    if (scrollEl) observer.observe(scrollEl);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return; // Pause GPU processing

      const elapsed = clock.getElapsedTime();

      // Calculate scroll progress (0 to 1) based on the 800vh container
      const rect = scrollEl.getBoundingClientRect();
      const scrollMax = rect.height - window.innerHeight;
      let progress = 0;
      if (scrollMax > 0) {
        progress = -rect.top / scrollMax;
        progress = Math.max(0, Math.min(1, progress));
      }

      // Move camera and lookAt smoothly along the splines based on scroll progress
      const targetCamPos = camCurve.getPointAt(progress);
      const targetLookPos = lookAtCurve.getPointAt(progress);

      // Lerp for buttery smoothness
      camera.position.lerp(targetCamPos, 0.05);
      currentLookAt.lerp(targetLookPos, 0.05);
      camera.lookAt(currentLookAt);

      // Energy Capsule leads the way exactly at scroll progress
      const capPos = roadCurve.getPointAt(progress);
      capsuleMesh.position.copy(capPos).add(new THREE.Vector3(0, 3, 0));
      
      // Pulse capsule slightly
      const pulse = 1 + Math.sin(elapsed * 5) * 0.1;
      capsuleMesh.scale.set(pulse, pulse, pulse);

      // Rotate Station Objects slightly, pop up the active one
      stationObjects.forEach((grp, idx) => {
        grp.rotation.y = elapsed * 0.3 + idx;
        
        // Highlight logic based on proximity
        const expectedProgress = idx / (STATIONS.length - 1);
        const dist = Math.abs(progress - expectedProgress);
        // Pop scale when close to the station
        const targetScale = dist < 0.1 ? 1.2 : 1.0;
        grp.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });

      // Slowly rotate atmosphere
      particlesMesh.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    // Scrollytelling Container (800vh to give 100vh per station scroll space)
    <div ref={scrollContainerRef} className="relative w-full bg-[#F4F2EC]" style={{ height: "800vh" }}>
      
      {/* Sticky 3D Background */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0 border-y border-black/5">
        <div ref={mountRef} className="absolute inset-0" />
        {/* Soft Vignette Gradient to blend with page smoothly */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#F4F2EC_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F2EC] via-[#F4F2EC]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F2EC] via-[#F4F2EC]/20 to-transparent pointer-events-none" />
      </div>

      {/* 8 Scrollable Overlays (One for each station) */}
      <div className="relative z-10 w-full -mt-[100vh]">
        {STATIONS.map((st, i) => {
          const IconComp = st.icon;
          return (
            <div key={st.id} className="h-screen w-full flex items-center justify-start px-6 md:px-20 max-w-[1536px] mx-auto pointer-events-none">
              
              {/* Glass Card Overlay */}
              <div className="pointer-events-auto w-full max-w-md md:max-w-lg p-6 md:p-10 rounded-[2.5rem] bg-[#001329]/95 border border-white/20 backdrop-blur-3xl shadow-[0_32px_80px_rgba(0,19,41,0.15)] transition-all hover:scale-[1.02] hover:border-white/40">
                
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
                  <div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#C6FF33] bg-[#C6FF33]/15 px-3 py-1.5 rounded-full border border-[#C6FF33]/30">
                      <IconComp size={14} weight="bold" />
                      TAHAP #{st.id} · {st.category}
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white mt-3 leading-tight">
                      {st.name}
                    </h3>
                  </div>

                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 text-right font-mono shrink-0">
                    <span className="text-[9px] md:text-[10px] text-white/50 uppercase block">{st.badgeLabel}</span>
                    <span className="text-xl md:text-2xl font-black text-[#C6FF33] mt-0.5 block">{st.badge}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-white/60 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
                  Aktor Kunci: <strong className="text-white">{st.actor}</strong>
                </div>

                <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium mb-6">
                  {st.desc}
                </p>

                <div className="space-y-3">
                  {st.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] md:text-xs font-mono text-white flex items-start gap-3">
                      <Sparkle size={14} className="text-[#C6FF33] mt-0.5 shrink-0" weight="fill" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
