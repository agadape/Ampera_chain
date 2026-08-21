"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Sparkle, 
  Leaf, 
  Lightning, 
  HardDrives, 
  ShieldCheck, 
  CaretRight, 
  Cube, 
  GlobeHemisphereEast,
  Coins,
  Drop,
  TreeEvergreen,
  Users,
  CheckCircle,
  GraduationCap
} from "@phosphor-icons/react";

import ThreeNusantaraGlobe from "@/components/ThreeNusantaraGlobe";
import ThreePipelineRoadway from "@/components/ThreePipelineRoadway";

export default function Home() {
  const [villageCount, setVillageCount] = useState<number>(12);

  // Financial Math
  const apyRate = 24.8;
  const dieselSavingsPerVillagePerYear = 35_000_000;
  const totalInvestment = villageCount * 142_000_000;
  const totalDieselSavings = villageCount * dieselSavingsPerVillagePerYear;
  const totalCo2Avoided = (villageCount * 3.59).toFixed(1);
  const estimatedAnnualDividend = (totalInvestment * (apyRate / 100));

  return (
    <div className="rivr relative min-h-svh bg-[#F4F2EC] text-[#001F3F] antialiased selection:bg-[#C6FF33] selection:text-[#001F3F]">
      
      {/* 1. HERO SECTION (RIVR FRAMED HERO WITH VIDEO LOOP & GLOSSY GLASS) */}
      <section id="home" data-slot="hero" className="flex min-h-dvh w-full items-stretch justify-center p-3 md:p-5">
        <div className="group relative flex min-h-[640px] w-full max-w-[1536px] flex-col items-center justify-between overflow-hidden rounded-[1.5rem] bg-[#001F3F] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,31,63,0.35)]">
          
          {/* Background 15-Second Drone Video Loop with Glossy Filter */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video 
              src="/Landing_page_hero.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 h-full w-full object-cover scale-105 brightness-95 contrast-105"
            />
            {/* Cinematic Glossy Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/60 via-[#001F3F]/20 to-[#001F3F]/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#001F3F/65_100%)]" />
            <div className="absolute inset-0 backdrop-blur-[0.5px]" />
          </div>

          {/* Top Navigation Bar with Glossy Frosted Glass */}
          <nav data-slot="rivr-nav" className="relative z-20 flex w-full items-center justify-between gap-4 px-6 py-6 md:px-10">
            
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 text-white" aria-label="Ampera home">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image src="/logo.png" alt="Ampera Logo" fill className="object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]" />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">ampera</span>
              <span className="hidden sm:inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-[#C6FF33] bg-[#001F3F]/70 backdrop-blur-xl px-3 py-1 rounded-full border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                PLN ICE 2026
              </span>
            </a>

            {/* Nav Menu */}
            <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] lg:flex">
              <li><a href="#globe" className="transition-colors hover:text-[#C6FF33]">Globe 3D</a></li>
              <li><a href="#alur-kerja" className="transition-colors hover:text-[#C6FF33]">Jalan 3D</a></li>
              <li><a href="#pilar" className="transition-colors hover:text-[#C6FF33]">Tiga Pilar</a></li>
              <li><a href="#simulator" className="transition-colors hover:text-[#C6FF33]">Simulasi APY</a></li>
              <li><a href="#tim" className="transition-colors hover:text-[#C6FF33]">Tim</a></li>
            </ul>

            {/* CTA Button */}
            <a 
              href="#simulator" 
              className="group inline-flex items-center gap-2.5 rounded-full py-1.5 pe-1.5 ps-5 text-xs font-bold uppercase tracking-wider transition-all bg-[#C6FF33] text-[#001F3F] hover:bg-white shadow-[0_4px_24px_rgba(198,255,51,0.5)] ring-1 ring-[#C6FF33]/40"
            >
              <span>Uji ROI Desa</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-[#001F3F]/15 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </a>
          </nav>

          {/* Centered Hero Content with Glossy Badges */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center max-w-4xl">
            
            {/* Floating Glass Pill Badge with Glossy Rim */}
            <div data-slot="hero-badge" className="mx-auto mb-6 flex w-fit items-center gap-2.5 rounded-full border border-white/30 bg-[#001F3F]/50 px-5 py-2 backdrop-blur-2xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.37)] ring-1 ring-white/20">
              <Sparkle size={16} className="text-[#C6FF33] animate-pulse" weight="fill" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider drop-shadow-sm">
                10.068 Titik Desa 3T · RWA Crowd-Equity Platform
              </span>
            </div>

            {/* Giant Display Title */}
            <h1 data-slot="hero-title" className="font-display mb-6 text-4xl font-black leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-[76px] tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.85)]">
              Jembatan Modal & Energi Bersih untuk Nusantara.
            </h1>

            {/* Body */}
            <p className="max-w-2xl text-base leading-relaxed text-white/95 font-medium sm:text-lg mb-8 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              Mendanai mikrogrid EBT terdesentralisasi bersama PLN melalui tokenisasi RWA patuh regulasi OJK, menghapus rugi operasional diesel 3T.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#globe" 
                className="group inline-flex items-center gap-3 rounded-full bg-[#C6FF33] text-[#001F3F] px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_4px_24px_rgba(198,255,51,0.5)] ring-1 ring-[#C6FF33]/50"
              >
                <span>Buka 3D Nusantara Globe</span>
                <div className="w-6 h-6 rounded-full bg-[#001F3F]/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={14} weight="bold" />
                </div>
              </a>

              <a 
                href="#alur-kerja" 
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xl hover:bg-white/20 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-1 ring-white/15"
              >
                <span>Jelajahi Alur 3D</span>
              </a>
            </div>

          </div>

          {/* Bottom Floating Card: Left (Glossy Hero Stat Pill) */}
          <div data-slot="hero-stat" className="relative z-10 w-full px-6 pb-6 md:px-10 md:pb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            
            <div className="flex w-fit min-w-[200px] flex-col gap-2 rounded-[1.5rem] border border-white/30 bg-[#001F3F]/50 p-5 backdrop-blur-2xl text-white shadow-[0_8px_32px_rgba(0,0,0,0.37)] ring-1 ring-white/20">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black tracking-tight text-[#C6FF33] drop-shadow-md">10.068</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80">Desa 3T Menanti Terang</span>
              </div>
              <a 
                href="#simulator" 
                className="flex w-fit items-center gap-2 self-start rounded-full bg-white text-[#001F3F] py-1.5 pe-4 ps-1.5 text-xs font-bold tracking-wide transition-all hover:bg-[#C6FF33] shadow-md"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-[#001F3F]/10">
                  <ArrowUpRight size={12} weight="bold" />
                </span>
                <span>Hitung Dampak</span>
              </a>
            </div>

            {/* Bottom-Right Inverted Corner Notch Card (Rivr Signature Motif) */}
            <div data-slot="hero-docs" className="relative flex items-center gap-4 rounded-ss-[2rem] bg-[#F4F2EC] p-4 ps-8 pt-5 md:rounded-ss-[3rem] md:p-6 md:ps-12 md:pt-7 text-[#001F3F] shadow-lg">
              
              {/* Inverted Top Corner SVG */}
              <div className="pointer-events-none absolute -top-[2rem] end-0 size-[2rem] text-[#F4F2EC] md:-top-[3rem] md:size-[3rem]">
                <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="currentColor" />
                </svg>
              </div>

              {/* Inverted Left Corner SVG */}
              <div className="pointer-events-none absolute bottom-0 -start-[2rem] size-[2rem] text-[#F4F2EC] md:-start-[3rem] md:size-[3rem]">
                <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="currentColor" />
                </svg>
              </div>

              <div className="flex size-12 items-center justify-center rounded-full border border-black/10 bg-black/5 text-[#00804C] shrink-0 shadow-inner">
                <ShieldCheck size={24} weight="duotone" />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold text-[#001F3F] leading-tight">Dokumentasi Pitch</span>
                <span className="text-xs font-mono font-bold text-black/60">PLN ICE 2026 Innovation</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. METRICS SECTION (RIVR BORDER-SEPARATED 4-COLUMN RAIL) */}
      <section data-slot="metrics" className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
        <div className="rounded-[1.5rem] border border-black/[0.08] bg-white p-8 md:rounded-[3rem] md:p-14 shadow-sm">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            
            <div className="flex flex-col gap-2 p-4 md:p-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">[ GAP NASIONAL ]</span>
              <dt className="font-display text-4xl font-extrabold tracking-tight text-[#00804C] tabular-nums md:text-5xl">
                10.068
              </dt>
              <dd className="text-xs font-mono text-black/60">Desa 3T Menanti Listrik</dd>
            </div>

            <div className="flex flex-col gap-2 p-4 md:p-6 border-s border-black/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">[ DEFISIT CAPEX ]</span>
              <dt className="font-display text-4xl font-extrabold tracking-tight text-[#1E488F] tabular-nums md:text-5xl">
                Rp 50,01T
              </dt>
              <dd className="text-xs font-mono text-black/60">Total Kebutuhan Investasi</dd>
            </div>

            <div className="flex flex-col gap-2 p-4 md:p-6 border-t border-black/10 md:border-s md:border-t-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">[ YIELD ARUS KAS ]</span>
              <dt className="font-display text-4xl font-extrabold tracking-tight text-[#001F3F] tabular-nums md:text-5xl">
                24,8%
              </dt>
              <dd className="text-xs font-mono text-black/60">Proyeksi Rata-Rata APY</dd>
            </div>

            <div className="flex flex-col gap-2 p-4 md:p-6 border-s border-t border-black/10 md:border-t-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">[ INKLUSI MIKRO ]</span>
              <dt className="font-display text-4xl font-extrabold tracking-tight text-[#7D39EB] tabular-nums md:text-5xl">
                Rp 2.000
              </dt>
              <dd className="text-xs font-mono text-black/60">Tiket Masuk Mikro-Investor</dd>
            </div>

          </dl>
        </div>
      </section>

      {/* 3. THREE.JS 3D NUSANTARA GLOBE SECTION */}
      <section id="globe" className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
        <div className="rounded-[1.5rem] bg-[#001F3F] p-6 md:rounded-[3rem] md:p-12 text-white shadow-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#C6FF33] bg-[#C6FF33]/15 px-3 py-1 rounded-full border border-[#C6FF33]/30">
                Three.js 3D WebGL Engine
              </span>
              <h2 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl mt-4">
                Pemetaan Potensi Nusantara
              </h2>
            </div>

            <div className="text-xs font-mono text-white/60">
              * Putar bola 3D dengan kursor & klik simpul desa untuk audit real-time
            </div>
          </div>

          <ThreeNusantaraGlobe />

        </div>
      </section>

      {/* 4. THREE.JS 3D PIPELINE HIGHWAY ROADWAY (SCROLLYTELLING) */}
      <section id="alur-kerja" className="w-full bg-[#001329] relative z-10">
        <ThreePipelineRoadway />
      </section>
      {/* 5. ASYMMETRIC BENTO GRID (RIVR FEATURE SUITE) */}
      <section id="pilar" data-slot="features" className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#00804C] bg-[#00804C]/10 px-3 py-1 rounded-full border border-[#00804C]/20">
              Closed-Loop Ecosystem
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-[#001F3F] sm:text-5xl md:text-6xl mt-4">
              Satu Jembatan, Tiga Pilar Solusi.
            </h2>
          </div>

          <a 
            href="#simulator" 
            className="group inline-flex items-center gap-2.5 rounded-full py-2 pe-2 ps-6 text-xs font-bold uppercase tracking-wider transition-all border border-black/10 bg-white text-[#001F3F] shadow-sm hover:bg-[#001F3F] hover:text-white shrink-0"
          >
            <span>Hitung Simulasi APY</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-black/5 group-hover:bg-white/20">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </a>
        </div>

        {/* Asymmetric Bento Grid (Rivr 3x2 Layout) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          
          {/* Card 1: Tall Left Card (Spans 2 Rows) */}
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-black/[0.08] p-8 md:rounded-[2.5rem] flex min-h-[28rem] flex-col justify-between md:row-span-2 md:p-10 shadow-sm transition-all hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image src="/pilar_ampera_flex.jpg" alt="Ampera Flex" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/10" />
            </div>
            
            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md text-[#00804C] shadow-sm">
              <Leaf size={28} weight="duotone" />
            </span>
            <div className="relative z-10 mt-32">
              <span className="text-[10px] font-mono text-[#00804C] uppercase tracking-widest font-bold block mb-1">
                PILAR 01 · AMPERA FLEX
              </span>
              <h3 className="font-display text-2xl font-bold leading-snug text-[#001F3F] md:text-3xl">
                Energi Bersih Agnostik 24/7
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#001F3F]/80 font-medium">
                Piko-hidro aliran sungai (23.0% APY), Surya PV + BESS (24.8% APY), dan Biomassa gasifikasi sawit (23.8% APY) dipilih secara otomatis oleh AI Tetrix sesuai kondisi geografis desa.
              </p>
            </div>
          </div>

          {/* Card 2: Wide Top Right Card (Spans 2 Columns) */}
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-black/[0.08] p-8 md:rounded-[2.5rem] flex min-h-[16rem] flex-col justify-between md:col-span-2 md:p-10 shadow-sm transition-all hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image src="/pilar_integrasi.jpg" alt="Integrasi PLN" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
            </div>

            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md text-[#1E488F] shadow-sm">
              <Lightning size={28} weight="fill" />
            </span>
            <div className="relative z-10 mt-12 max-w-lg">
              <span className="text-[10px] font-mono text-[#1E488F] uppercase tracking-widest font-bold block mb-1">
                PILAR 02 · INTEGRASI PLN
              </span>
              <h3 className="font-display text-xl font-bold text-[#001F3F] md:text-2xl">
                Off-Taker Terintegrasi & Penghemat Subsidi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#001F3F]/80 font-medium">
                PLN bertindak sebagai pembeli tenaga listrik andal dan pengelola jaringan. Mengeliminasi kerugian subsidi diesel PLTD hingga Rp 135.000 per rumah tangga setiap bulan.
              </p>
            </div>
          </div>

          {/* Card 3: Bottom Middle Card */}
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-white border border-black/[0.08] p-8 md:rounded-[2.5rem] flex min-h-[16rem] flex-col justify-between shadow-sm transition-all hover:shadow-xl">
            <div className="absolute inset-0 z-0">
              <Image src="/pilar_tokenisasi.jpg" alt="Tokenisasi RWA" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/20" />
            </div>

            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-md text-[#7D39EB] shadow-sm">
              <HardDrives size={28} weight="duotone" />
            </span>
            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[#7D39EB] uppercase tracking-widest font-bold block mb-1">
                PILAR 03 · RWA & DEFI
              </span>
              <h3 className="font-display text-xl font-bold text-[#001F3F]">Tokenisasi ERC-6909</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#001F3F]/80 font-medium">
                Setiap 1 $AMP merepresentasikan hak bagi hasil 1 kWh riil dengan proteksi likuiditas <i>Bid Wall Hook</i>.
              </p>
            </div>
          </div>

          {/* Card 4: Bottom Right Action Card */}
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-[#001F3F] p-8 md:rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-center text-white shadow-xl hover:bg-[#001429] transition-colors">
            <span className="flex size-16 items-center justify-center rounded-full bg-[#C6FF33] text-[#001F3F] transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <ArrowUpRight size={28} weight="bold" />
            </span>
            <div className="relative z-10">
              <h3 className="font-display text-xl font-bold text-white">Sertifikasi IDXCarbon</h3>
              <p className="mt-1 text-xs font-mono text-white/70">Metodologi UNFCCC AMS-I.L terdaftar.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE ROI CALCULATOR SECTION */}
      <section id="simulator" className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
        <div className="rounded-[1.5rem] bg-white border border-black/[0.08] p-8 md:rounded-[3rem] md:p-14 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Controller */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#00804C] bg-[#00804C]/10 px-3 py-1 rounded-full border border-[#00804C]/20">
                Unit Economics Simulator
              </span>
              <h2 className="font-display text-4xl font-black text-[#001F3F] sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
                Simulasi Imbal Hasil & Dampak Desa
              </h2>
              <p className="text-black/60 text-sm md:text-base leading-relaxed">
                Uji skala elektrifikasi untuk memproyeksikan arus kas dividen investor dan beban subsidi APBN yang dihematkan ke PLN.
              </p>

              <div className="p-6 rounded-2xl bg-[#F4F2EC] border border-black/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-[#001F3F]">Skala Elektrifikasi:</span>
                  <span className="text-2xl font-black text-[#00804C] font-mono">{villageCount} Desa</span>
                </div>
                
                <input 
                  type="range" 
                  min={1} 
                  max={100} 
                  value={villageCount}
                  onChange={(e) => setVillageCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#00804C]"
                />

                <div className="flex justify-between text-[11px] font-mono text-black/50">
                  <span>1 Desa (Pilot Rp 50Jt)</span>
                  <span>50 Desa</span>
                  <span>100 Desa Scale</span>
                </div>
              </div>
            </div>

            {/* Right Display Board */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[2rem] bg-[#001F3F] text-white shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6FF33]">[ ARUS KAS DIVIDEN ]</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-white mt-2">
                    Rp {(estimatedAnnualDividend / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} Juta
                  </div>
                  <p className="text-xs text-white/60 mt-2">Dividen tahunan rata-rata (APY 24,8%) bagi subscriber.</p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#74C365]">[ HEMAT DIESEL PLN ]</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-[#C6FF33] mt-2">
                    Rp {(totalDieselSavings / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta
                  </div>
                  <p className="text-xs text-white/60 mt-2">Beban biaya PLTD per tahun yang dihemat PLN.</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">[ TOTAL CAPEX ]</span>
                  <div className="text-2xl font-bold font-mono text-white mt-1">
                    Rp {(totalInvestment / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta
                  </div>
                  <p className="text-[11px] text-white/50 mt-1">Crowd-equity mandiri tanpa APBN.</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">[ EMISI DIHINDARI ]</span>
                  <div className="text-2xl font-bold font-mono text-[#74C365] mt-1">
                    {totalCo2Avoided} tCO₂e / thn
                  </div>
                  <p className="text-[11px] text-white/50 mt-1">Standar UNFCCC AMS-I.L.</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. TEAM SECTION */}
      <section id="tim" className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
        <div className="rounded-[1.5rem] bg-white border border-black/[0.08] p-8 md:rounded-[3rem] md:p-14 shadow-sm space-y-10">
          
          <div className="max-w-2xl">
            <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#00804C] bg-[#00804C]/10 px-3 py-1 rounded-full border border-[#00804C]/20">
              Tim & Tata Kelola
            </span>
            <h2 className="font-display text-4xl font-black tracking-tight text-[#001F3F] sm:text-5xl md:text-6xl mt-4">
              Bukan Satu Nama. Banyak Disiplin.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Hans */}
            <div className="p-6 rounded-[2rem] bg-[#F4F2EC] border border-black/5 text-center flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#001F3F] text-[#C6FF33] mx-auto flex items-center justify-center font-display font-extrabold text-xl mb-3 shadow-md">
                  HG
                </div>
                <h3 className="font-display font-bold text-lg text-[#001F3F]">Hans Gunawan</h3>
                <div className="text-[11px] font-mono text-[#00804C] font-bold uppercase">CEO & Co-Founder</div>
              </div>
              <span className="text-[10px] font-mono text-black/50">Strategy & Partnerships</span>
            </div>

            {/* Natalie */}
            <div className="p-6 rounded-[2rem] bg-[#F4F2EC] border border-black/5 text-center flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#1E488F] text-white mx-auto flex items-center justify-center font-display font-extrabold text-xl mb-3 shadow-md">
                  NS
                </div>
                <h3 className="font-display font-bold text-lg text-[#001F3F]">Natalie Netania S.</h3>
                <div className="text-[11px] font-mono text-[#1E488F] font-bold uppercase">CMO & Co-Founder</div>
              </div>
              <span className="text-[10px] font-mono text-black/50">Brand & Village Community</span>
            </div>

            {/* Dave */}
            <div className="p-6 rounded-[2rem] bg-[#F4F2EC] border border-black/5 text-center flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#001F3F] text-[#C6FF33] mx-auto flex items-center justify-center font-display font-extrabold text-xl mb-3 shadow-md">
                  DA
                </div>
                <h3 className="font-display font-bold text-lg text-[#001F3F]">Dave Aryanda Agape</h3>
                <div className="text-[11px] font-mono text-[#7D39EB] font-bold uppercase">CTO & Co-Founder</div>
              </div>
              <span className="text-[10px] font-mono text-black/50">AI & Smart Contracts</span>
            </div>

            {/* Dex */}
            <div className="p-6 rounded-[2rem] bg-[#F4F2EC] border border-black/5 text-center flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#001F3F] text-white mx-auto flex items-center justify-center font-display font-extrabold text-xl mb-3 shadow-md">
                  DB
                </div>
                <h3 className="font-display font-bold text-lg text-[#001F3F]">Dex Bennet</h3>
                <div className="text-[11px] font-mono text-[#001F3F] font-bold uppercase">CFO & Co-Founder</div>
              </div>
              <span className="text-[10px] font-mono text-black/50">Finance & OJK Compliance</span>
            </div>

          </div>

        </div>
      </section>

      {/* 8. RIVR FRAMED BOTTOM CTA SECTION */}
      <section data-slot="cta" className="flex w-full items-center justify-center p-3 md:p-5">
        <div className="relative flex min-h-[560px] w-full max-w-[1536px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#001F3F] p-8 md:min-h-[640px] md:rounded-[3rem] shadow-2xl">
          
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/hero_village.jpg" 
              alt="Desa 3T" 
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-[#001F3F]/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,31,63,0.4)_0%,rgba(0,31,63,0)_100%)]" />
          </div>

          <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 text-center text-white">
            
            <div className="w-4 h-4 rounded-full bg-[#C6FF33] shadow-[0_0_16px_#C6FF33] animate-pulse" />

            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF33]">
              PLN Innovation & Clean Energy (ICE) 2026
            </span>

            <h2 className="font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl tracking-tight drop-shadow-lg">
              Mari Menyalakan Terang untuk Nusantara.
            </h2>

            <p className="text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
              Ampera siap menguji pilot 1 desa Piko-Hidro (Q1 2027) melalui pendanaan akselerasi Rp 50 Juta PLN ICE 2026 dan kemitraan off-taker bersama PT PLN (Persero).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a 
                href="mailto:contact@ampera.energy" 
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#C6FF33] py-2 pe-2 ps-6 text-xs font-bold uppercase tracking-wider text-[#001F3F] transition-all hover:bg-white shadow-[0_4px_24px_rgba(198,255,51,0.4)]"
              >
                <span>Hubungi Tim Ampera</span>
                <span className="flex size-7 items-center justify-center rounded-full bg-[#001F3F]/15 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </a>

              <a 
                href="#globe" 
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Kembali ke Atas
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 9. CLEAN RIVR FOOTER */}
      <footer data-slot="footer" className="border-t border-black/10 bg-[#F4F2EC] text-[#001F3F]">
        <div className="mx-auto w-full max-w-[1536px] px-6 py-16 md:px-10 md:py-20">
          
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            
            <div className="max-w-xs">
              <a href="#home" className="flex items-center gap-3 text-[#001F3F]" aria-label="Ampera home">
                <div className="relative w-8 h-8 md:w-10 md:h-10">
                  <Image src="/logo.png" alt="Ampera Logo" fill className="object-contain" />
                </div>
                <span className="font-display text-2xl font-black tracking-tight">ampera</span>
              </a>
              <p className="mt-4 text-xs font-mono text-black/60 leading-relaxed">
                Platform crowd-equity & tokenisasi aset dunia nyata (RWA) untuk elektrifikasi 10.068 desa 3T Indonesia.
              </p>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16 text-xs font-mono">
              <div>
                <h3 className="font-bold text-[#001F3F] uppercase tracking-wider mb-4">Solusi</h3>
                <ul className="flex flex-col gap-2.5 text-black/60">
                  <li><a href="#globe" className="hover:text-[#001F3F]">Globe 3D</a></li>
                  <li><a href="#alur-kerja" className="hover:text-[#001F3F]">Jalan 3D</a></li>
                  <li><a href="#pilar" className="hover:text-[#001F3F]">Ampera Flex</a></li>
                  <li><a href="#simulator" className="hover:text-[#001F3F]">Simulasi ROI</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#001F3F] uppercase tracking-wider mb-4">Regulasi</h3>
                <ul className="flex flex-col gap-2.5 text-black/60">
                  <li><span>POJK 17/2025 ECF</span></li>
                  <li><span>POJK 27/2024 RWA</span></li>
                  <li><span>UNFCCC AMS-I.L</span></li>
                  <li><span>IDXCarbon BEI</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#001F3F] uppercase tracking-wider mb-4">Kompetisi</h3>
                <ul className="flex flex-col gap-2.5 text-black/60">
                  <li><span>PLN ICE 2026</span></li>
                  <li><span>Subtema #5 Green</span></li>
                  <li><span>Pilot Q1 2027</span></li>
                  <li><span>1 Desa Terbukti</span></li>
                </ul>
              </div>
            </nav>

          </div>

          <div className="mt-12 border-t border-black/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-black/50 gap-4">
            <div>&copy; 2026 AMPERA — PLN Innovation & Clean Energy (ICE).</div>
            <div className="text-[#00804C] font-bold">Jembatan Energi untuk Nusantara.</div>
          </div>

        </div>
      </footer>

    </div>
  );
}
