"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Graticule, Line } from "react-simple-maps";
import { Lightning, WifiHigh } from "@phosphor-icons/react";

// TopoJSON File from public folder
const geoUrl = "/indonesia.json";

// Hub Coordinates (Jakarta)
const HUB_COORDINATES: [number, number] = [106.82, -6.17];

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
    <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[2.5/1] max-w-5xl mx-auto flex items-center justify-center py-6">
      <ComposableMap 
        projection="geoMercator" 
        projectionConfig={{
          scale: 1200,
          center: [118, -2]
        }}
        width={1000}
        height={450}
        style={{ width: "100%", height: "100%" }}
      >
        <Graticule stroke="#ffffff" strokeOpacity={0.03} />
        
        {/* SHADOW / FAKE 3D DEPTH LAYER */}
        <Geographies geography={geoUrl} transform="translate(0, 8)">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={`shadow-${geo.rsmKey}`} 
                geography={geo}
                fill="#000913" 
                stroke="none"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* MAIN FOREGROUND LAYER */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo}
                fill="rgba(255, 255, 255, 0.05)" 
                stroke="#C6FF33"
                strokeWidth={0.5}
                strokeOpacity={0.4}
                style={{
                  default: { outline: "none", transition: "all 0.3s ease" },
                  hover: { fill: "rgba(198, 255, 51, 0.15)", strokeOpacity: 1, outline: "none", transform: "translateY(-2px)" },
                  pressed: { fill: "#C6FF33", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Network Lines */}
        {MAP_LOCATIONS.map((loc) => (
          <Line
            key={`line-${loc.id}`}
            from={HUB_COORDINATES}
            to={loc.coordinates as [number, number]}
            stroke="#C6FF33"
            strokeWidth={1}
            strokeOpacity={0.3}
            strokeLinecap="round"
            style={{
              strokeDasharray: "4 4",
            }}
          />
        ))}

        {/* Hub Marker (Jakarta) */}
        <Marker coordinates={HUB_COORDINATES}>
          <g>
            <circle r={10} fill="#ffffff" opacity="0.2">
              <animate attributeName="r" from="5" to="25" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r={4} fill="#ffffff" />
          </g>
          <text 
            textAnchor="middle" 
            y={-10} 
            style={{ fill: "#ffffff", fontSize: "10px", fontWeight: "bold", opacity: 0.8 }}
          >
            HUB
          </text>
        </Marker>

        {/* Interactive Node Markers */}
        {MAP_LOCATIONS.map((loc) => (
          <Marker 
            key={loc.id} 
            coordinates={loc.coordinates as [number, number]}
            onMouseEnter={() => setHovered(loc.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <g className="cursor-pointer">
              {/* Smooth Pulse */}
              <circle r={6} fill="#C6FF33">
                <animate attributeName="r" from="6" to="20" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle r={5} fill="#00804C" stroke="#C6FF33" strokeWidth={1.5} />
              <circle r={1.5} fill="#ffffff" />
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

      {/* Floating Legend / Stats Panel */}
      <div className="absolute bottom-0 left-4 md:bottom-8 md:left-8 flex flex-col gap-3 pointer-events-none z-20">
        
        {/* Network Status */}
        <div className="bg-[#001329]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex items-start gap-4">
          <div className="mt-1 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#C6FF33]/20 flex items-center justify-center text-[#C6FF33]">
              <WifiHigh size={18} weight="bold" />
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">
              Live Network
            </div>
            <div className="text-lg md:text-xl font-black text-white leading-none mb-1">
              7 Node Aktif
            </div>
            <div className="text-[10px] md:text-xs text-[#C6FF33] font-mono">
              ● Tersinkronisasi dengan HUB
            </div>
          </div>
        </div>

        {/* Aggregated Power */}
        <div className="bg-[#001329]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex items-start gap-4">
          <div className="mt-1 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Lightning size={18} weight="fill" />
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">
              Kapasitas Terkelola
            </div>
            <div className="text-lg md:text-xl font-black text-white leading-none mb-1">
              575 kW
            </div>
            <div className="text-[10px] md:text-xs text-white/60 font-mono">
              Energi Bersih Terdistribusi
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
