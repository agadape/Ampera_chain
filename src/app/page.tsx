"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Leaf, Lightning, HardDrives, ChartLineUp, ShieldCheck, SolarPanel, Waves, Tree } from "@phosphor-icons/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  // Interactive Calculator State
  const [villageCount, setVillageCount] = useState<number>(10);
  const apyRate = 24.8;
  const dieselSavingsPerVillagePerYear = 35_000_000; // Rp 35jt
  const co2AvoidedPerVillageTon = 3.59; // ton CO2e per year

  const totalInvestment = villageCount * 142_000_000; // Rp 142jt per village microgrid
  const totalDieselSavings = villageCount * dieselSavingsPerVillagePerYear;
  const totalCo2Avoided = (villageCount * co2AvoidedPerVillageTon).toFixed(1);
  const estimatedAnnualDividend = (totalInvestment * (apyRate / 100));

  return (
    <main className="min-h-[100dvh] flex flex-col bg-paper">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-50 w-full bg-midnight/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-lime shadow-[0_0_18px_rgba(198,255,51,0.9)] animate-pulse" />
            <span className="font-display font-black text-white text-2xl tracking-tight">ampera</span>
            <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-widest text-lime/90 bg-lime/10 px-2.5 py-1 rounded border border-lime/20 ml-2">
              PLN ICE 2026
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#pilar" className="hover:text-lime transition-colors">Tiga Pilar</a>
            <a href="#kalkulator" className="hover:text-lime transition-colors">Kalkulator ROI</a>
            <a href="#ai-tetrix" className="hover:text-lime transition-colors">AI Tetrix</a>
            <a href="#pln" className="hover:text-lime transition-colors">Kemitraan PLN</a>
          </nav>

          <a 
            href="#kalkulator"
            className="bg-lime text-midnight text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-none hover:bg-white transition-colors"
          >
            Simulasi Investasi
          </a>
        </div>
      </header>

      {/* HERO SECTION - Asymmetric Split */}
      <section className="relative w-full bg-midnight overflow-hidden min-h-[90dvh] flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y }} className="w-full h-full">
            <Image 
              src="/hero_village.jpg" 
              alt="Indonesian remote village at golden hour"
              fill
              className="object-cover opacity-35 mix-blend-luminosity"
              priority
            />
          </motion.div>
          {/* Duotone Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full py-16">
          
          {/* Left Text Rail (6/12) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-lime" />
              10.068 Titik Blankspot 3T Terpetakan
            </div>
            
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.02] text-white">
              Jembatan Energi untuk Nusantara.
            </h1>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-[50ch]">
              Platform crowd-equity & tokenisasi RWA yang mendanai elektrifikasi desa 3T bersama PLN. Memindahkan beban CapEx tanpa spekulasi, dengan imbal hasil riil berbasis energi bersih.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a 
                href="#kalkulator"
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.96 }}
                className="bg-lime text-midnight font-bold text-sm uppercase tracking-widest px-8 py-4 flex items-center gap-3 hover:bg-white transition-colors cursor-pointer"
              >
                Mulai Simulasi <ArrowRight weight="bold" />
              </motion.a>

              <div className="text-xs text-white/60 font-mono flex items-center gap-2 pl-2">
                <ShieldCheck size={20} className="text-lime" />
                POJK 17/2025 & POJK 27/2024 Compliant
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* BIG STATS SECTION */}
      <section className="bg-white py-20 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col border-l-2 border-brand-green pl-6">
              <span className="font-body font-extrabold tabular-nums text-5xl md:text-6xl text-brand-green tracking-tighter">10.068</span>
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 mt-2">Desa Menunggu Listrik</span>
            </div>
            <div className="flex flex-col border-l-2 border-nuit pl-6">
              <span className="font-body font-extrabold tabular-nums text-5xl md:text-6xl text-nuit tracking-tighter">Rp 50T</span>
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 mt-2">Gap Investasi Nasional</span>
            </div>
            <div className="flex flex-col border-l-2 border-midnight pl-6">
              <span className="font-body font-extrabold tabular-nums text-5xl md:text-6xl text-midnight tracking-tighter">24.8%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 mt-2">Proyeksi APY Rata-Rata</span>
            </div>
            <div className="flex flex-col border-l-2 border-violet pl-6">
              <span className="font-body font-extrabold tabular-nums text-5xl md:text-6xl text-violet tracking-tighter">Rp 2.000</span>
              <span className="text-xs font-bold uppercase tracking-wider text-black/60 mt-2">Tiket Masuk Mikro-Investor</span>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC BENTO GRID - One Bridge, Three Pillars */}
      <section id="pilar" className="py-24 bg-paper">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Arsitektur Ekosistem</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-midnight tracking-tight mt-2">
              Satu Jembatan, Tiga Pilar Solusi.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[380px]">
            {/* Pilar 1: Ampera Flex (Span 8) - Visual heavy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative overflow-hidden group bg-midnight"
            >
              <Image 
                src="/flex_solar.jpg" 
                alt="Solar panels at rice paddy" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-lime text-midnight rounded">
                    <Leaf size={24} weight="bold" />
                  </div>
                  <span className="text-lime text-xs font-mono uppercase tracking-widest">Pilar 01 · Multi-Energy</span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Ampera Flex</h3>
                <p className="text-white/80 max-w-[50ch] text-sm md:text-base leading-relaxed">
                  Infrastruktur energi agnostik berbasis AI (Piko-Hidro 23.0% APY, Surya 24.8% APY, Biomassa 23.8% APY) yang disesuaikan secara presisi dengan kondisi geografis desa. Listrik 24/7 tanpa diesel.
                </p>
              </div>
            </motion.div>

            {/* Stacked Pillars (Span 4) */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
              {/* Pilar 2: PLN */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-nuit p-8 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <Lightning size={28} weight="fill" className="text-lime" />
                  <span className="text-white/60 text-xs font-mono">Pilar 02</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Ampera × PLN</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    PLN sebagai off-taker utama. Memangkas subsidi rugi diesel hingga Rp 135.000/rumah tangga/bulan tanpa membebani CapEx PLN.
                  </p>
                </div>
              </motion.div>

              {/* Pilar 3: DeFi & Earth */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-black/10 p-8 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <HardDrives size={28} weight="fill" className="text-violet" />
                  <span className="text-black/40 text-xs font-mono">Pilar 03</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-midnight mb-2">Ampera Earth & DeFi</h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Tokenisasi aset riil ($AMP) via Uniswap v4 Hook, perlindungan Bid Wall, dan sertifikasi kredit karbon otomatis (AMS-I.L).
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR SECTION */}
      <section id="kalkulator" className="py-24 bg-white border-y border-black/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Simulasi Dampak & ROI</span>
              <h2 className="font-display font-bold text-4xl text-midnight tracking-tight">
                Hitung Manfaat untuk Desa & Investor.
              </h2>
              <p className="text-black/70 leading-relaxed">
                Gunakan simulator unit-economics ini untuk melihat proyeksi imbal hasil dividen energi, penghematan subsidi diesel PLN, dan mitigasi emisi karbon.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-midnight">Jumlah Desa 3T Didanai:</span>
                  <span className="text-2xl font-bold text-brand-green font-mono">{villageCount} Desa</span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={100} 
                  value={villageCount}
                  onChange={(e) => setVillageCount(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 accent-brand-green cursor-pointer"
                />
                <div className="flex justify-between text-xs text-black/40 font-mono">
                  <span>1 Desa (Pilot Rp 50Jt)</span>
                  <span>50 Desa</span>
                  <span>100 Desa Scale</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-midnight text-white p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-6">
                  <span className="text-xs uppercase tracking-widest text-lime font-mono">Proyeksi Dividen Tahunan</span>
                  <div className="text-3xl md:text-4xl font-extrabold font-mono mt-2 text-white">
                    Rp {(estimatedAnnualDividend / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} Juta
                  </div>
                  <p className="text-xs text-white/60 mt-2">Berdasarkan rata-rata APY {apyRate}% dari arus kas PAYG & bagi hasil.</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-spring font-mono">Hemat Subsidi Diesel PLN</span>
                  <div className="text-3xl md:text-4xl font-extrabold font-mono mt-2 text-lime">
                    Rp {(totalDieselSavings / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta/thn
                  </div>
                  <p className="text-xs text-white/60 mt-2">Beban operasional diesel PLN yang langsung dieliminasi.</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs uppercase tracking-widest text-white/60 font-mono">Total CapEx Microgrid</span>
                  <div className="text-2xl font-bold font-mono mt-1 text-white">
                    Rp {(totalInvestment / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 0 })} Juta
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs uppercase tracking-widest text-white/60 font-mono">Emisi CO₂ Terhindar</span>
                  <div className="text-2xl font-bold font-mono mt-1 text-mantis">
                    {totalCo2Avoided} tCO₂e / tahun
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECH / AI SECTION - Visual Heavy */}
      <section id="ai-tetrix" className="py-24 bg-midnight relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image 
            src="/pln_grid.jpg" 
            alt="AI Energy Grid" 
            fill 
            className="object-cover opacity-45 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex items-center h-full">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-violet font-mono">Autonomous Energy Intelligence</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mt-2 mb-6">
              AI Tetrix: Dari Orbit ke Node Edge.
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
              Mengevaluasi kelayakan ekonomi dan potensi energi 10.068 desa dari satelit (Sentinel-2 & NASA POWER) hingga ke ground truth telemetry (Raspberry Pi & ESP32). Biaya survei lapangan ditekan hingga mendekati nol.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5">
                <div className="text-lime font-mono font-bold text-3xl mb-1">93.6%</div>
                <div className="text-white/60 text-xs">mAP50 Deteksi Atap & Topografi YOLOv8</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5">
                <div className="text-violet font-mono font-bold text-3xl mb-1">24/7</div>
                <div className="text-white/60 text-xs">Edge Metering & On-Chain Attestation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer id="pln" className="bg-white py-24 border-b-8 border-brand-green">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-4 h-4 rounded-full bg-lime shadow-[0_0_16px_rgba(198,255,51,0.8)] mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-midnight mb-6 max-w-2xl">
            Mari Bersama Menyalakan Terang untuk Nusantara.
          </h2>
          <p className="text-black/60 max-w-xl mb-8">
            Ampera siap diuji dalam program akselerasi PLN ICE 2026 melalui pilot 1 desa Piko-Hidro di Q1 2027.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a 
              href="mailto:contact@ampera.energy"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              className="bg-midnight text-white font-semibold text-sm uppercase tracking-widest px-10 py-5 flex items-center gap-3 hover:bg-black transition-colors"
            >
              Hubungi Tim Ampera <ArrowRight weight="bold" />
            </motion.a>
          </div>
          
          <div className="mt-20 pt-8 border-t border-black/10 w-full flex flex-col md:flex-row justify-between items-center text-xs text-black/50 font-mono">
            <span>&copy; 2026 AMPERA — PLN Innovation & Clean Energy (ICE) Hackathon.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="text-brand-green font-bold">Subtema #5: Sustainability & Green Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
