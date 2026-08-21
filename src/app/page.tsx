"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Leaf, 
  Lightning, 
  HardDrives, 
  SolarPanel, 
  Drop, 
  TreeEvergreen, 
  CheckCircle, 
  CaretRight, 
  GraduationCap,
  Sparkle,
  ShieldCheck,
  GlobeHemisphereEast,
  Cpu,
  Handshake,
  Coins,
  TrendUp
} from "@phosphor-icons/react";

import ThreeNusantaraGlobe from "@/components/ThreeNusantaraGlobe";
import ThreeTurbineViewer from "@/components/ThreeTurbineViewer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  
  // Interactive Simulator State
  const [villageCount, setVillageCount] = useState<number>(12);
  const [activeTab, setActiveTab] = useState<"hydro" | "solar" | "biomass">("hydro");

  // Math variables
  const apyRate = 24.8;
  const dieselSavingsPerVillagePerYear = 35_000_000;
  const totalInvestment = villageCount * 142_000_000;
  const totalDieselSavings = villageCount * dieselSavingsPerVillagePerYear;
  const totalCo2Avoided = (villageCount * 3.59).toFixed(1);
  const estimatedAnnualDividend = (totalInvestment * (apyRate / 100));

  const energyProfiles = {
    hydro: {
      name: "Piko-Hidro Microgrid",
      idealRegion: "Papua Pegunungan & Maluku",
      capexPerKw: "Rp 2,5 - 5 Juta/kW",
      capacityFactor: "85% (24/7 Base Load)",
      apy: "23.0%",
      carbonAvoided: "3.59 tCO₂e / kW / thn",
      desc: "Memanfaatkan gravitasi dan aliran sungai pegunungan 3T untuk membangkitkan daya kontinu tanpa baterai kimia mahal."
    },
    solar: {
      name: "Solar PV + BESS Microgrid",
      idealRegion: "Nusa Tenggara Timur & Pesisir",
      capexPerKw: "Rp 14 - 18 Juta/kW",
      capacityFactor: "22% (Siang + Storage)",
      apy: "24.8%",
      carbonAvoided: "1.08 tCO₂e / kW / thn",
      desc: "Fotovoltaik terdistribusi di atap komunal dengan edge telemetry untuk menangkap radiasi tinggi Indonesia timur."
    },
    biomass: {
      name: "Biomassa Gasifikasi",
      idealRegion: "Sumatra & Kalimantan Perkebunan",
      capexPerKw: "Rp 9 - 14 Juta/kW",
      capacityFactor: "70% (On-Demand Dispatch)",
      apy: "23.8%",
      carbonAvoided: "2.59 tCO₂e / kW / thn",
      desc: "Mengubah limbah cangkang sawit dan biomassa kayu lokal menjadi gas sintetis bersih pengganti solar genset."
    }
  };

  return (
    <main className="min-h-[100dvh] flex flex-col bg-paper text-black overflow-x-hidden selection:bg-lime selection:text-midnight">
      
      {/* FLOATING GLASS PILL NAVBAR */}
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="pointer-events-auto bg-midnight/85 backdrop-blur-xl border border-white/15 px-5 py-3 rounded-full shadow-[0_8px_32px_rgba(0,31,63,0.3)] flex items-center justify-between gap-4 md:gap-8 max-w-5xl w-full">
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lime shadow-[0_0_14px_rgba(198,255,51,0.9)] animate-pulse" />
            <span className="font-display font-extrabold text-white text-xl tracking-tight">ampera</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-semibold uppercase tracking-wider text-lime bg-lime/10 px-2.5 py-0.5 rounded-full border border-lime/20">
              PLN ICE 2026
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-white/70">
            <a href="#globe-3d" className="hover:text-lime transition-colors">Globe 3D</a>
            <a href="#hardware-3d" className="hover:text-lime transition-colors">Turbin 3D</a>
            <a href="#pilar" className="hover:text-lime transition-colors">Tiga Pilar</a>
            <a href="#simulator" className="hover:text-lime transition-colors">Simulasi ROI</a>
            <a href="#team" className="hover:text-lime transition-colors">Tim</a>
          </nav>

          <a 
            href="#simulator"
            className="group relative inline-flex items-center gap-2 bg-lime text-midnight text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-full hover:bg-white transition-all shadow-[0_2px_12px_rgba(198,255,51,0.3)]"
          >
            <span>Simulasi</span>
            <div className="w-5 h-5 rounded-full bg-midnight/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight size={12} weight="bold" />
            </div>
          </a>
        </header>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full bg-midnight min-h-[100dvh] flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div style={{ y: heroY }} className="w-full h-full scale-105">
            <Image 
              src="/hero_village.jpg" 
              alt="Indonesian 3T Village Aerial" 
              fill
              className="object-cover opacity-25 mix-blend-luminosity"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-green/20 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-6xl w-full mx-auto relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 text-white/90 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-lime shadow-[0_0_8px_#C6FF33] animate-ping" />
            <span>10.068 Titik Desa 3T · RWA Crowd-Equity Platform</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-white tracking-tighter leading-[1.04] max-w-5xl mb-8">
            Jembatan Modal & Energi Bersih untuk Nusantara.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/75 font-normal leading-relaxed max-w-2xl mb-12">
            Mendanai mikrogrid EBT terdesentralisasi bersama PLN melalui tokenisasi RWA patuh regulasi OJK, menghapus rugi operasional diesel 3T.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#globe-3d"
              className="group p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer"
            >
              <div className="bg-lime text-midnight px-7 py-3.5 rounded-full flex items-center gap-4 font-bold text-sm uppercase tracking-wider group-hover:bg-white transition-colors">
                <span>Eksplorasi 3D Globe Nusantara</span>
                <div className="w-7 h-7 rounded-full bg-midnight/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={16} weight="bold" />
                </div>
              </div>
            </a>

            <a 
              href="#simulator"
              className="px-6 py-3.5 text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors flex items-center gap-2"
            >
              Hitung Simulasi ROI <CaretRight size={16} />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-mono">
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-lime" /> OJK POJK 17/2025 (ECF Pool)</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-lime" /> POJK 27/2024 (RWA Token)</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-lime" /> Metodologi Karbon AMS-I.L</span>
          </div>

        </div>
      </section>

      {/* BIG TELEMETRY STATS */}
      <section className="bg-white py-20 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-1">[ GAP NASIONAL ]</span>
              <span className="font-body font-extrabold tabular-nums text-4xl md:text-5xl text-brand-green tracking-tight">10.068</span>
              <span className="text-xs text-black/70 mt-1 font-medium">Desa 3T Menanti Listrik</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-1">[ DEFISIT CAPEX ]</span>
              <span className="font-body font-extrabold tabular-nums text-4xl md:text-5xl text-nuit tracking-tight">Rp 50,01T</span>
              <span className="text-xs text-black/70 mt-1 font-medium">Total Kebutuhan Investasi</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-1">[ YIELD ARUS KAS ]</span>
              <span className="font-body font-extrabold tabular-nums text-4xl md:text-5xl text-midnight tracking-tight">24,8%</span>
              <span className="text-xs text-black/70 mt-1 font-medium">Proyeksi Rata-Rata APY</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-1">[ INKLUSI FINANSIAL ]</span>
              <span className="font-body font-extrabold tabular-nums text-4xl md:text-5xl text-violet tracking-tight">Rp 2.000</span>
              <span className="text-xs text-black/70 mt-1 font-medium">Tiket Masuk Mikro-Investor</span>
            </div>

          </div>
        </div>
      </section>

      {/* THREE.JS 3D NUSANTARA GLOBE */}
      <section id="globe-3d" className="py-28 bg-midnight relative overflow-hidden border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
              Three.js 3D WebGL Engine · Sentinel-2 Orbit
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight mt-4">
              Peta 3D Sebaran Energi 3T Nusantara.
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-3 leading-relaxed">
              Model bola bumi 3D interaktif yang dipetakan dengan orbit satelit Sentinel-2 (786 km). Putar globe dengan mouse dan klik pilar cahaya simpul desa 3T untuk membaca telemetri real-time.
            </p>
          </div>

          <ThreeNusantaraGlobe />

        </div>
      </section>

      {/* THREE.JS 3D HARDWARE TURBINE EXPLORER */}
      <section id="hardware-3d" className="py-28 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
              Three.js 3D CAD Hardware Explorer
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-midnight tracking-tight mt-3">
              Eksplorasi Perangkat Piko-Hidro 5.0 kW
            </h2>
            <p className="text-black/60 text-sm mt-2">
              Visualisasi 3D runner turbin Pelton dengan 12 mangkok sendok penangkap energi air. Putar model dalam 360° dan uji perubahan debit aliran (L/s).
            </p>
          </div>

          <ThreeTurbineViewer />

        </div>
      </section>

      {/* GAPLESS BENTO GRID — Three Pillars of Ampera */}
      <section id="pilar" className="py-28 bg-paper border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
              Closed-Loop Ecosystem
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-midnight tracking-tight mt-4">
              Satu Jembatan, Tiga Pilar Solusi.
            </h2>
            <p className="text-black/60 text-base mt-3">
              Kombinasi multi-energi agnostik, integrasi offtake PLN, dan lapisan likuiditas on-chain teregulasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-dense">
            
            {/* Pilar 1: Ampera Flex */}
            <div className="md:col-span-8 p-2 rounded-[2rem] bg-black/5 border border-black/10">
              <div className="relative h-full min-h-[420px] rounded-[calc(2rem-0.5rem)] bg-midnight overflow-hidden p-8 md:p-12 flex flex-col justify-end text-white shadow-xl">
                <Image 
                  src="/flex_solar.jpg" 
                  alt="Ampera Flex Solar and Microgrid" 
                  fill 
                  className="object-cover opacity-45 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime text-midnight text-xs font-mono font-bold uppercase mb-4">
                    <Leaf size={14} weight="bold" /> Pilar 01 · Multi-Energy
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">
                    Ampera Flex: Energi Agnostik 24/7
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                    AI Tetrix menganalisis topografi dan radiasi secara dinamis untuk memilih pembangkit paling optimal: Piko-Hidro (23.0% APY), Surya (24.8% APY), atau Biomassa (23.8% APY).
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 2: Ampera x PLN */}
            <div className="md:col-span-4 p-2 rounded-[2rem] bg-black/5 border border-black/10">
              <div className="h-full min-h-[240px] rounded-[calc(2rem-0.5rem)] bg-nuit p-8 flex flex-col justify-between text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-full bg-white/10 text-lime">
                    <Lightning size={24} weight="fill" />
                  </div>
                  <span className="text-xs font-mono text-white/60">Pilar 02</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Ampera × PLN</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    PLN sebagai off-taker dan pengelola grid. Mengeliminasi kerugian subsidi diesel hingga Rp 135.000/rumah tangga/bulan.
                  </p>
                </div>
              </div>
            </div>

            {/* Pilar 3: Earth & DeFi */}
            <div className="md:col-span-12 p-2 rounded-[2rem] bg-black/5 border border-black/10">
              <div className="rounded-[calc(2rem-0.5rem)] bg-white p-8 md:p-10 border border-black/5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-mono font-bold uppercase mb-3">
                    <HardDrives size={14} weight="bold" /> Pilar 03 · Tokenisasi & Karbon
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-midnight tracking-tight mb-2">
                    Ampera Earth & DeFi Uniswap v4
                  </h3>
                  <p className="text-black/70 text-sm md:text-base leading-relaxed">
                    Setiap kilowatt-hour di-attestasi on-chain menjadi token aset riil ($AMP). Dilengkapi mekanisme <i>Bid Wall</i> pelindung harga lantai bagi mikro-investor dan akuntansi kredit karbon AMS-I.L terhubung ke IDXCarbon.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="p-4 rounded-xl bg-paper border border-black/5 text-center min-w-[140px]">
                    <div className="text-xs font-mono text-black/50">PROTEKSI</div>
                    <div className="text-lg font-bold text-midnight font-display mt-1">Bid Wall Hook</div>
                  </div>
                  <div className="p-4 rounded-xl bg-paper border border-black/5 text-center min-w-[140px]">
                    <div className="text-xs font-mono text-black/50">STANDAR</div>
                    <div className="text-lg font-bold text-brand-green font-display mt-1">ERC-6909</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE CALCULATOR (Simulasi Imbal Hasil) */}
      <section id="simulator" className="py-28 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
                Unit Economics Engine
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-midnight tracking-tight leading-[1.1]">
                Simulasi Dampak & Imbal Hasil Desa
              </h2>
              <p className="text-black/70 text-sm md:text-base leading-relaxed">
                Geser jumlah desa 3T untuk melihat kalkulasi real-time dividen mikro-investor, penghematan beban subsidi diesel PLN, dan kredit karbon yang tercipta.
              </p>

              <div className="p-6 rounded-2xl bg-paper border border-black/10 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-midnight">Skala Elektrifikasi:</span>
                  <span className="text-2xl font-black text-brand-green font-mono">{villageCount} Desa</span>
                </div>
                
                <input 
                  type="range" 
                  min={1} 
                  max={100} 
                  value={villageCount}
                  onChange={(e) => setVillageCount(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                />

                <div className="flex justify-between text-[11px] font-mono text-black/50">
                  <span>1 Desa (Pilot Rp 50Jt)</span>
                  <span>50 Desa</span>
                  <span>100 Desa Scale</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-2 rounded-[2.5rem] bg-black/5 border border-black/10">
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-midnight p-8 md:p-12 text-white shadow-2xl">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  
                  <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-lime">[ ARUS KAS DIVIDEN ]</span>
                    <div className="text-3xl md:text-4xl font-black font-mono text-white mt-2">
                      Rp {(estimatedAnnualDividend / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} Juta
                    </div>
                    <p className="text-xs text-white/60 mt-2">Dividen tahunan rata-rata (APY 24,8%) bagi subscriber.</p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-spring">[ HEMAT OPERASIONAL PLN ]</span>
                    <div className="text-3xl md:text-4xl font-black font-mono text-lime mt-2">
                      Rp {(totalDieselSavings / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta
                    </div>
                    <p className="text-xs text-white/60 mt-2">Subsidi diesel PLTD per tahun yang dihemat PLN.</p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">[ CAPEX TOTAL ]</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      Rp {(totalInvestment / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta
                    </div>
                    <p className="text-[11px] text-white/50 mt-1">Crowd-equity tanpa CapEx negara.</p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">[ MITIGASI EMISI ]</span>
                    <div className="text-2xl font-bold font-mono text-mantis mt-1">
                      {totalCo2Avoided} tCO₂e / thn
                    </div>
                    <p className="text-[11px] text-white/50 mt-1">Sertifikasi IDXCarbon AMS-I.L.</p>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TEAM & GOVERNANCE — Slide 17 "The People Behind the Bridge" */}
      <section id="team" className="py-28 bg-paper border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
              Tim & Tata Kelola Berlapis
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-midnight tracking-tight mt-4">
              Bukan Satu Nama. Banyak Disiplin, Satu Jembatan.
            </h2>
            <p className="text-black/70 text-base mt-3">
              Ampera dibangun oleh tim lintas disiplin strategis, teknologi AI, pemasaran dampak sosial, dan keuangan terstruktur.
            </p>
          </div>

          {/* Team Stage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Hans Gunawan */}
            <div className="p-2 rounded-[2rem] bg-white border border-black/10 shadow-md flex flex-col justify-between">
              <div className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-midnight text-lime mx-auto flex items-center justify-center font-display font-extrabold text-2xl border-2 border-lime shadow-lg mb-4">
                  HG
                </div>
                <h3 className="font-display font-bold text-xl text-midnight">Hans Gunawan</h3>
                <div className="text-xs font-mono text-brand-green font-bold uppercase mt-1">CEO & Co-Founder</div>
                <div className="text-[11px] text-black/60 mt-3 leading-relaxed">
                  Kepemimpinan strategi, kemitraan institusi PLN & ESDM, perancangan ekosistem multi-energi.
                </div>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-black/5 text-[10px] font-mono text-black/60 text-center">
                Strategy & Partnerships Lead
              </div>
            </div>

            {/* Natalie Netania Sulistio */}
            <div className="p-2 rounded-[2rem] bg-white border border-black/10 shadow-md flex flex-col justify-between">
              <div className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-nuit text-white mx-auto flex items-center justify-center font-display font-extrabold text-2xl border-2 border-white/40 shadow-lg mb-4">
                  NS
                </div>
                <h3 className="font-display font-bold text-xl text-midnight">Natalie Netania S.</h3>
                <div className="text-xs font-mono text-nuit font-bold uppercase mt-1">CMO & Co-Founder</div>
                <div className="text-[11px] text-black/60 mt-3 leading-relaxed">
                  Pemasaran produk, ekspansi komunitas lokal desa 3T, dan kampanye dampak lingkungan berkelanjutan.
                </div>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-black/5 text-[10px] font-mono text-black/60 text-center">
                Brand & Village Community Lead
              </div>
            </div>

            {/* Dave Aryanda Agape */}
            <div className="p-2 rounded-[2rem] bg-white border border-black/10 shadow-md flex flex-col justify-between">
              <div className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-midnight text-lime mx-auto flex items-center justify-center font-display font-extrabold text-2xl border-2 border-lime shadow-lg mb-4">
                  DA
                </div>
                <h3 className="font-display font-bold text-xl text-midnight">Dave Aryanda Agape</h3>
                <div className="text-xs font-mono text-violet font-bold uppercase mt-1">CTO & Co-Founder</div>
                <div className="text-[11px] text-black/60 mt-3 leading-relaxed">
                  Arsitektur AI Tetrix (Sentinel-2 & YOLOv8), telemetry edge node ESP32, dan smart contract RWA.
                </div>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-black/5 text-[10px] font-mono text-black/60 text-center">
                AI & Systems Architecture Lead
              </div>
            </div>

            {/* Dex Bennet */}
            <div className="p-2 rounded-[2rem] bg-white border border-black/10 shadow-md flex flex-col justify-between">
              <div className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-midnight text-white mx-auto flex items-center justify-center font-display font-extrabold text-2xl border-2 border-white/40 shadow-lg mb-4">
                  DB
                </div>
                <h3 className="font-display font-bold text-xl text-midnight">Dex Bennet</h3>
                <div className="text-xs font-mono text-midnight font-bold uppercase mt-1">CFO & Co-Founder</div>
                <div className="text-[11px] text-black/60 mt-3 leading-relaxed">
                  Kepatuhan regulasi OJK (POJK 17/2025 ECF & POJK 27/2024), struktur keuangan RWA, dan audit arus kas.
                </div>
              </div>
              <div className="p-3 bg-paper rounded-xl border border-black/5 text-[10px] font-mono text-black/60 text-center">
                Finance & OJK Compliance Lead
              </div>
            </div>

          </div>

          {/* Governance Layer Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-black/70">
            <div className="flex items-center gap-3">
              <GraduationCap size={24} className="text-brand-green shrink-0" />
              <span><strong>Tata Kelola Berlapis:</strong> Didampingi Penasihat Akademik untuk validasi metodologi karbon AMS-I.L & audit kelayakan EBT.</span>
            </div>
            <div className="text-nuit font-bold shrink-0">
              [ 5 Rubrik Kriteria PLN Terpenuhi ]
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CTA & THE ASK */}
      <footer className="bg-midnight text-white py-24 border-b-8 border-brand-green">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          
          <div className="w-4 h-4 rounded-full bg-lime shadow-[0_0_18px_rgba(198,255,51,0.9)] mb-6 animate-pulse" />
          
          <span className="text-xs font-mono uppercase tracking-widest text-lime mb-2">PLN ICE 2026 Innovation Acceleration</span>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter max-w-3xl mb-6">
            Mari Menyalakan Terang untuk Nusantara.
          </h2>
          
          <p className="text-white/75 text-base max-w-2xl mb-10 leading-relaxed">
            Ampera siap menguji pilot 1 desa Piko-Hidro (Q1 2027) melalui pendanaan akselerasi Rp 50 Juta PLN ICE 2026 dan kemitraan off-taker bersama PT PLN (Persero).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="mailto:contact@ampera.energy"
              className="group p-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer"
            >
              <div className="bg-lime text-midnight px-8 py-4 rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-wider group-hover:bg-white transition-colors">
                <span>Hubungi Tim Ampera</span>
                <div className="w-6 h-6 rounded-full bg-midnight/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={14} weight="bold" />
                </div>
              </div>
            </a>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 font-mono gap-4">
            <div>&copy; 2026 AMPERA — PLN Innovation & Clean Energy (ICE) Hackathon.</div>
            <div className="text-lime">Subtema #5: Sustainability & Green Innovation</div>
          </div>

        </div>
      </footer>

    </main>
  );
}
