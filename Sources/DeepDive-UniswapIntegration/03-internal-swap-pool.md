---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 03
---

# 03 — Internal Swap Pool · Capture Yield & Route ke Investor (Mode A)

> **TL;DR:** Pola hook paling di-boost Uniswap (Boost #1, flagship Flaunch ~$85M vol). AMPERA tangkap yield `$AMP` di dalam flow, route otomatis ke IDRX/USDC investor — tanpa creator dump.

## 1. Mekanik (Uniswap v4)
Hook menangkap fee swap **secara internal** di flow PoolManager, lalu menukar ke token likuid sebelum distribusi ke LP (`Trending/01`). Pola: pool di-init dengan **fee pool = 0**, lalu seluruh "fee" di-handle lewat `beforeSwapReturnDelta` + `afterSwap` → hook punya kontrol penuh atas aliran token. Distribusi bisa ke ERC-721/ERC-6909 LP position (fully composable). Flaunch pakai 2 hook (Fair Launch + Internal Swap Pool).

## 2. Adopsi ke AMPERA
Mode A Fluxa = persis ini. Untuk AMPERA:
- Setiap kWh terproduksi → `$AMP` mint → yield (PAYG desa + bagian diesel PLN + karbon + ESG) **ditangkap hook lalu route ke IDRX/USDC investor**.
- Investor dapat 4 bagi hasil secara otomatis, on-chain, tanpa AMPERA pegang dana (capital-light, konsisten slide `12`).
- Tidak ada "chicken-egg dump" karena fee tidak dibagikan dalam token creator.

## 3. Benefit untuk thesis Jalan 2
- **Efisiensi flow:** modal investor mikro berputar otomatis, bukan nyangkut (slide `12`: "Modal berputar, bukan kepemilikan aset").
- **Transparansi:** setiap rupiah yield terlihat di event `HookFee`.
- **Global:** yield bisa dibayarkan dalam stablecoin (IDRX/USDC) → investor asing terhindar dari FX/volatilitas `$AMP`.

## 4. Risk & mitigasi
- **Risiko:** delta accounting broken kalau lupa fee=0 + override flag. Mitigasi: audit per-hook (Cantina/Cyfrin).
- **Risiko:** flash accounting revert kalau lupa settle. Mitigasi: `v4-security-foundations` pipeline.

## 5. Sumber
`Trending/01 - Internal Swap Pool & Return-Delta Hooks`, `MainProject/08 - PRD.md` §3.1, §5 (Mode A), `Visualize/ppt/EachSlide/12-Business-Model.md`.
