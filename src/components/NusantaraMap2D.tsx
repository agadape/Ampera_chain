"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Lightning } from "@phosphor-icons/react";

// TopoJSON File from public folder
const geoUrl = "/indonesia.json";

// Marker Coordinates [Longitude, Latitude]
const MAP_LOCATIONS = [
  { id: 1, name: "Desa Suka Maju, Sumatera", coordinates: [102, -0.5], power: "50 kW", type: "Piko-Hidro" },
  { id: 2, name: "Desa Pelita, Kalimantan", coordinates: [114, 1], power: "120 kW", type: "Biomassa" },
  { id: 3, name: "Desa Harapan, Sulawesi", coordinates: [121, -2], power: "75 kW", type: "Surya PV" },
  { id: 4, name: "Desa Terang, Maluku", coordinates: [129, -3], power: "30 kW", type: "Surya PV" },
  { id: 5, name: "Desa Timur, Papua", coordinates: [138, -4.5], power: "200 kW", type: "Piko-Hidro" },
  { id: 6, name: "Desa Rinjani, NTB", coordinates: [117.5, -8.5], power: "40 kW", type: "Biomassa" },
  { id: 7, name: "Desa Pesisir, NTT", coordinates: [122, -8.6], power: "60 kW", type: "Surya PV" },
];

export default function NusantaraMap2D() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] max-w-5xl mx-auto flex items-center justify-center py-6">
      <ComposableMap 
        projection="geoMercator" 
        projectionConfig={{
          scale: 1200,
          center: [118, -2]
        }}
        width={1000}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                fill="#2E3C4D" 
                stroke="#1A2433"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none", transition: "all 0.2s" },
                  hover: { fill: "#3B4E63", outline: "none", opacity: 0.9 },
                  pressed: { fill: "#C6FF33", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Interactive Markers */}
        {MAP_LOCATIONS.map((loc) => (
          <Marker 
            key={loc.id} 
            coordinates={loc.coordinates as [number, number]}
            onMouseEnter={() => setHovered(loc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <g className="cursor-pointer">
              {/* Outer Glow / Ping */}
              <circle r={14} fill="#C6FF33" opacity="0.3" className="animate-ping" style={{ transformOrigin: "center" }} />
              <circle r={6} fill="#00804C" stroke="#C6FF33" strokeWidth={2} />
              <circle r={2} fill="#ffffff" />
            </g>

            {/* Hover Tooltip via foreignObject */}
            {hovered === loc.id && (
              <foreignObject x="-100" y="-130" width="200" height="120" className="pointer-events-none overflow-visible">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#001329]/95 backdrop-blur-md border border-white/10 shadow-2xl"
                >
                  <div className="text-[9px] font-mono text-[#C6FF33] uppercase tracking-widest mb-1.5">
                    Target Audit
                  </div>
                  <div className="text-xs font-bold text-white leading-tight mb-2 text-center">
                    {loc.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/90 font-mono bg-white/5 px-2 py-1 rounded border border-white/5">
                    <Lightning size={14} className="text-[#C6FF33]" weight="fill" />
                    <span>{loc.power} • {loc.type}</span>
                  </div>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-[#001329]/95" />
                </motion.div>
              </foreignObject>
            )}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
