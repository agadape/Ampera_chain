"use client";

import { useEffect, useRef, useState } from "react";
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
  CaretRight,
  CaretLeft,
  ArrowUpRight,
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
    pos: [-110, 8, 15]
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
    pos: [-78, 12, -8]
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
    pos: [-46, 10, 12]
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
    pos: [-14, 14, -10]
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
    pos: [18, 12, 10]
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
    pos: [50, 10, -8]
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
    pos: [82, 12, 12]
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
    pos: [114, 15, -6]
  }
];

export default function ThreePipelineRoadway() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [selectedStation, setSelectedStation] = useState<number>(0);
  const activeStation = STATIONS[selectedStation];

  // Camera Target Ref for smooth animation
  const targetCamPos = useRef(new THREE.Vector3(-110, 26, 60));
  const targetLookAt = useRef(new THREE.Vector3(-110, 8, 15));

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x001329);
    scene.fog = new THREE.FogExp2(0x001329, 0.005);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(-110, 26, 60);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xc6ff33, 1.8);
    dirLight1.position.set(50, 100, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x1e488f, 2.0);
    dirLight2.position.set(-50, -20, -50);
    scene.add(dirLight2);

    // 4. Stylized Winding 3D Road Track (Energy Highway)
    const curvePoints = STATIONS.map(s => new THREE.Vector3(s.pos[0], s.pos[1] - 4, s.pos[2]));
    const roadCurve = new THREE.CatmullRomCurve3(curvePoints);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 128, 3.5, 8, false);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x001f3f,
      roughness: 0.3,
      metalness: 0.8
    });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    scene.add(roadMesh);

    // Glowing Neon Road Rail (Lime Stripe)
    const railGeo = new THREE.TubeGeometry(roadCurve, 128, 0.6, 6, false);
    const railMat = new THREE.MeshBasicMaterial({
      color: 0xc6ff33,
      wireframe: false
    });
    const railMesh = new THREE.Mesh(railGeo, railMat);
    railMesh.position.y += 1.5;
    scene.add(railMesh);

    // 5. Procedural 3D Physical Stations along the Road
    const stationObjects: THREE.Group[] = [];

    STATIONS.forEach((st, idx) => {
      const stationGroup = new THREE.Group();
      stationGroup.position.set(st.pos[0], st.pos[1], st.pos[2]);

      // Base Station Platform Pad
      const padGeo = new THREE.CylinderGeometry(9, 10, 2, 32);
      const padMat = new THREE.MeshStandardMaterial({
        color: idx % 2 === 0 ? 0x00804c : 0x1e488f,
        metalness: 0.6,
        roughness: 0.3
      });
      const padMesh = new THREE.Mesh(padGeo, padMat);
      stationGroup.add(padMesh);

      // Glowing Station Beacon Ring
      const ringGeo = new THREE.TorusGeometry(8.5, 0.4, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 1.2;
      stationGroup.add(ringMesh);

      // Station Pillar / Object representation
      if (st.id === 0) {
        // Station 0: 3D Gate Arch
        const postGeo = new THREE.BoxGeometry(1.5, 8, 1.5);
        const postMat = new THREE.MeshStandardMaterial({ color: 0x74c365 });
        const post1 = new THREE.Mesh(postGeo, postMat);
        post1.position.set(-4, 4, 0);
        const post2 = new THREE.Mesh(postGeo, postMat);
        post2.position.set(4, 4, 0);
        const beamGeo = new THREE.BoxGeometry(10, 1.5, 1.5);
        const beam = new THREE.Mesh(beamGeo, postMat);
        beam.position.set(0, 8, 0);
        stationGroup.add(post1, post2, beam);
      } else if (st.id === 1) {
        // Station 1: 3D Satellite & Laser Scan Cone
        const satGeo = new THREE.BoxGeometry(3, 1.5, 2);
        const satMat = new THREE.MeshStandardMaterial({ color: 0x7d39eb, metalness: 0.8 });
        const sat = new THREE.Mesh(satGeo, satMat);
        sat.position.set(0, 10, 0);
        const coneGeo = new THREE.ConeGeometry(5, 10, 16, 1, true);
        const coneMat = new THREE.MeshBasicMaterial({ color: 0x7d39eb, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.position.set(0, 5, 0);
        stationGroup.add(sat, cone);
      } else if (st.id === 2) {
        // Station 2: 3D Telemetry Mast Pole
        const mastGeo = new THREE.CylinderGeometry(0.5, 0.8, 12, 16);
        const mastMat = new THREE.MeshStandardMaterial({ color: 0x00804c });
        const mast = new THREE.Mesh(mastGeo, mastMat);
        mast.position.y = 6;
        const boxGeo = new THREE.BoxGeometry(2.5, 2, 2);
        const boxMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
        const box = new THREE.Mesh(boxGeo, boxMat);
        box.position.y = 10;
        stationGroup.add(mast, box);
      } else if (st.id === 3) {
        // Station 3: 3D Pelton Turbine & Solar Array
        const hubGeo = new THREE.CylinderGeometry(2, 2, 4, 16);
        const hubMat = new THREE.MeshStandardMaterial({ color: 0x00804c });
        const hub = new THREE.Mesh(hubGeo, hubMat);
        hub.position.y = 4;
        hub.rotation.x = Math.PI / 2;
        stationGroup.add(hub);
      } else if (st.id === 4) {
        // Station 4: 3D Blockchain Crystal Block
        const hexGeo = new THREE.OctahedronGeometry(3.5, 0);
        const hexMat = new THREE.MeshStandardMaterial({ color: 0x7d39eb, metalness: 0.9, roughness: 0.1 });
        const hex = new THREE.Mesh(hexGeo, hexMat);
        hex.position.y = 5;
        stationGroup.add(hex);
      } else if (st.id === 5) {
        // Station 5: 3D Carbon Tree / Tower
        const trunkGeo = new THREE.CylinderGeometry(0.8, 1.2, 8, 8);
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x00804c });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = 4;
        const foliageGeo = new THREE.DodecahedronGeometry(3.5);
        const foliageMat = new THREE.MeshStandardMaterial({ color: 0x74c365 });
        const foliage = new THREE.Mesh(foliageGeo, foliageMat);
        foliage.position.y = 8;
        stationGroup.add(trunk, foliage);
      } else if (st.id === 6) {
        // Station 6: 3D Crowd Vault Pool
        const vaultGeo = new THREE.CylinderGeometry(4, 4, 3, 16);
        const vaultMat = new THREE.MeshStandardMaterial({ color: 0x1e488f, metalness: 0.7 });
        const vault = new THREE.Mesh(vaultGeo, vaultMat);
        vault.position.y = 2.5;
        const coinGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 16);
        const coinMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
        const coin = new THREE.Mesh(coinGeo, coinMat);
        coin.position.set(0, 6, 0);
        coin.rotation.z = Math.PI / 4;
        stationGroup.add(vault, coin);
      } else if (st.id === 7) {
        // Station 7: 3D Illuminated Village Hut & Power Substation
        const hutGeo = new THREE.BoxGeometry(5, 4, 5);
        const hutMat = new THREE.MeshStandardMaterial({ color: 0x001f3f });
        const hut = new THREE.Mesh(hutGeo, hutMat);
        hut.position.y = 3;
        const roofGeo = new THREE.ConeGeometry(4.5, 3, 4);
        const roofMat = new THREE.MeshStandardMaterial({ color: 0x00804c });
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.y = 6.5;
        roof.rotation.y = Math.PI / 4;
        const lampGeo = new THREE.SphereGeometry(1.2, 16, 16);
        const lampMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
        const lamp = new THREE.Mesh(lampGeo, lampMat);
        lamp.position.set(0, 9, 0);
        stationGroup.add(hut, roof, lamp);
      }

      scene.add(stationGroup);
      stationObjects.push(stationGroup);
    });

    // 6. Traveling Energy Capsule along Road
    const capsuleGeo = new THREE.SphereGeometry(1.8, 16, 16);
    const capsuleMat = new THREE.MeshBasicMaterial({ color: 0xc6ff33 });
    const capsuleMesh = new THREE.Mesh(capsuleGeo, capsuleMat);
    scene.add(capsuleMesh);

    // 7. Animation Loop with Smooth Camera Dolly Lerp
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const currentLookAt = new THREE.Vector3(-110, 8, 15);

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Energy Capsule traveling loop along curve
      const t = (elapsed * 0.08) % 1;
      const capPos = roadCurve.getPointAt(t);
      capsuleMesh.position.copy(capPos).add(new THREE.Vector3(0, 2, 0));

      // Rotate Station Objects slightly
      stationObjects.forEach((grp, idx) => {
        grp.rotation.y = elapsed * 0.3 + idx;
      });

      // Smooth Camera & LookAt Interpolation (Lerp)
      camera.position.lerp(targetCamPos.current, 0.05);
      currentLookAt.lerp(targetLookAt.current, 0.05);
      camera.lookAt(currentLookAt);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update target camera position when active station changes
  useEffect(() => {
    const st = STATIONS[selectedStation];
    targetCamPos.current.set(st.pos[0] + 8, st.pos[1] + 16, st.pos[2] + 42);
    targetLookAt.current.set(st.pos[0], st.pos[1] + 4, st.pos[2]);
  }, [selectedStation]);

  const handleNext = () => {
    setSelectedStation((prev) => (prev < STATIONS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSelectedStation((prev) => (prev > 0 ? prev - 1 : STATIONS.length - 1));
  };

  return (
    <div className="w-full space-y-6">
      
      {/* 3D Viewport with Stepper Overlay */}
      <div className="p-2 rounded-[2rem] bg-black/60 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
        
        {/* Top Floating Station Stepper Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-xs font-mono text-white/80 bg-[#001329]/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF33] animate-ping" />
            <span className="font-bold text-white tracking-wider">3D ENERGY PIPELINE HIGHWAY</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#C6FF33] hover:text-[#001F3F] transition-all"
              aria-label="Previous Station"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <span className="text-[11px] font-bold text-[#C6FF33] px-2">
              STASIUN {activeStation.id} / 7
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-[#C6FF33] hover:text-[#001F3F] transition-all"
              aria-label="Next Station"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* 8 Station Quick Switcher Buttons */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 p-3 bg-black/40 border-b border-white/10">
          {STATIONS.map((st) => {
            const isSelected = selectedStation === st.id;
            const IconComp = st.icon;
            return (
              <button
                key={st.id}
                onClick={() => setSelectedStation(st.id)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected 
                    ? "bg-[#C6FF33] text-[#001F3F] border-[#C6FF33] font-bold shadow-lg scale-[1.02]" 
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span>#{st.id}</span>
                  <IconComp size={14} weight="bold" />
                </div>
                <span className="text-[11px] truncate font-display font-bold mt-1">
                  {st.name.split(":")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Three.js 3D Viewport */}
        <div 
          ref={mountRef} 
          className="w-full aspect-[16/8] bg-[#001329] relative overflow-hidden select-none"
        >
          <div className="absolute top-4 left-6 text-[10px] font-mono text-[#C6FF33] bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 pointer-events-none">
            KAMERA GLIDE: {activeStation.codename}
          </div>

          <div className="absolute bottom-4 right-6 text-[10px] font-mono text-white/50 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 pointer-events-none">
            * Klik tombol stasiun untuk meluncurkan kamera 3D ke lokasi stasiun
          </div>
        </div>

        {/* Active Station Detail Glass Card */}
        <div className="p-6 md:p-8 bg-[#001329] border-t border-white/10 text-white space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6FF33] bg-[#C6FF33]/15 px-3 py-1 rounded-full border border-[#C6FF33]/30">
                TAHAP #{activeStation.id} · {activeStation.category.toUpperCase()}
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white mt-2">
                {activeStation.name}
              </h3>
              <div className="text-xs font-mono text-white/60 mt-1">
                Aktor Kunci: <strong className="text-white">{activeStation.actor}</strong>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-right font-mono shrink-0">
              <span className="text-[10px] text-white/50 uppercase block">{activeStation.badgeLabel}</span>
              <span className="text-2xl font-black text-[#C6FF33] mt-0.5 block">{activeStation.badge}</span>
            </div>
          </div>

          <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-3xl">
            {activeStation.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {activeStation.keyPoints.map((point, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/85 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF33] mt-1.5 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
