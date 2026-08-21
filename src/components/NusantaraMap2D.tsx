"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lightning } from "@phosphor-icons/react";
import { useState } from "react";

// Coordinates (x, y) are roughly mapped as percentages (0-100) 
// based on a standard wide Indonesia map aspect ratio.
// These might need slight tweaking depending on the exact bounds of the uploaded image.
const MAP_LOCATIONS = [
  { id: 1, name: "Desa Suka Maju, Sumatera", x: 22, y: 45, power: "50 kW", type: "Piko-Hidro" },
  { id: 2, name: "Desa Pelita, Kalimantan", x: 42, y: 38, power: "120 kW", type: "Biomassa" },
  { id: 3, name: "Desa Harapan, Sulawesi", x: 60, y: 45, power: "75 kW", type: "Surya PV" },
  { id: 4, name: "Desa Terang, Maluku", x: 78, y: 50, power: "30 kW", type: "Surya PV" },
  { id: 5, name: "Desa Timur, Papua", x: 92, y: 60, power: "200 kW", type: "Piko-Hidro" },
  { id: 6, name: "Desa Rinjani, NTB", x: 50, y: 73, power: "40 kW", type: "Biomassa" },
  { id: 7, name: "Desa Pesisir, NTT", x: 58, y: 76, power: "60 kW", type: "Surya PV" },
];

export default function NusantaraMap2D() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] max-w-5xl mx-auto flex items-center justify-center py-10">
      
      {/* Base Map Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/peta-indonesia.png" 
          alt="Peta Indonesia Detail" 
          fill 
          className="object-contain opacity-70"
          priority
        />
      </div>

      {/* Interactive Markers */}
      {MAP_LOCATIONS.map((loc) => (
        <div 
          key={loc.id} 
          className="absolute z-10"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          onMouseEnter={() => setHovered(loc.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            
            {/* Ping effect */}
            <div className="absolute inset-0 bg-[#C6FF33] rounded-full animate-ping opacity-50 scale-150" />
            
            {/* Core Dot */}
            <div className="relative w-4 h-4 md:w-5 md:h-5 bg-[#00804C] border-[2.5px] border-[#C6FF33] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(198,255,51,0.6)] transition-transform group-hover:scale-125">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>

            {/* Hover Tooltip */}
            {hovered === loc.id && (
              <motion.div 
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 rounded-2xl bg-[#001329]/95 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-none z-50"
              >
                <div className="text-[10px] font-mono text-[#C6FF33] uppercase tracking-widest mb-1.5">
                  Target Audit
                </div>
                <div className="text-sm font-bold text-white leading-tight mb-3">
                  {loc.name}
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90 font-mono bg-white/5 p-2 rounded-lg border border-white/5">
                  <Lightning size={16} className="text-[#C6FF33]" weight="fill" />
                  <span>{loc.power} • {loc.type}</span>
                </div>
                
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-[#001329]/95" />
              </motion.div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
