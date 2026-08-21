---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 01
---

# 01 — Hook `BaseCustomAccountingHook` (OpenZeppelin) · Primitive Penegak Aturan

> **TL;DR:** Fondasi Jalan 2. AMPERA tidak "pakai Uniswap sebagai backend", tapi membangun hook V4 yang **meng-enforce semua aturan di level protokol**. Hook = produk; AI agent = aktor.

## 1. Mekanik (Uniswap v4)
`BaseCustomAccountingHook` adalah base hook dari OpenZeppelin yang mengizinkan **hook-owned liquidity + custom accounting** (T07 Building Uniswap v4 Hooks with OZ). Ini standar "extend, don't fork" (Boost #7, `Trending/07 - Extend-Don't-Fork`) — kita override fungsi spesifik, tidak rebuild dari nol. Keuntungan audit: base OZ sudah diaudit; rebuild = ~$100k re-audit + bug risk (precedents Chimera).

Hook hanya bisa jalan kalau `validateHookPermissions` di constructor lolos (flag 14-bit di-encode ke alamat via HookMiner). Semua callback me-warisi `onlyPoolManager` → tidak ada entitas selain PoolManager yang bisa gerakkan dana.

## 2. Adopsi ke AMPERA
AMPERA deploy hook `$AMP`-native di Base (atau UniChain). Hook ini yang memegang:
- Registri instrumen RWA per-desa (token `$AMP`, risk-tier, oracle, maturity).
- State machine siklus hidup pool (Normal → Distress → Resolution).
- Gate siapa yang boleh LP / swap / auction.

Ini menjawab langsung narasi "diatur code": **aturan AMPERA tertanam di smart contract, bukan di janji manusia**.

## 3. Benefit untuk thesis Jalan 2
- **Transparansi:** logika bisnis AMPERA terbaca publik di chain.
- **Regulated AI:** agent hanya boleh beroperasi lewat gate hook (reputasi ≥ threshold).
- **Global:** protokol bersifat permissionless untuk LP global, tapi bisa di-gate per jurisdiksi (lihat `10-compliance-allowlist-hook`).

## 4. Risk & mitigasi
- **Risiko:** salah encoding flag → hook gagal deploy. Mitigasi: `validateHookPermissions` + HookMiner.
- **Risiko:** upgradeability. MVP = immutable; kalau butuh upgrade, pakai proxy aman (Clearswap fail karena no-op + late submit).

## 5. Sumber
`Module-Guides/07 - Periphery`, `Trending/07 - Extend-Don't-Fork`, `MainProject/08 - PRD.md` §4.3, §10.1.
