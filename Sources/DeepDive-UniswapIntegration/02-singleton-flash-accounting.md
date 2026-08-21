---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 02
---

# 02 — Singleton PoolManager + Flash Accounting · Ratusan Pool per-Desa

> **TL;DR:** Arsitektur V4 memungkinkan AMPERA punya **satu pool likuiditas per desa/kohor** dengan biaya gas minimal — skalabilitas ke 2.000 desa tanpa ledger membengkak.

## 1. Mekanik (Uniswap v4)
V4 mengganti model "satu contract per pool" menjadi **Singleton PoolManager**; semua pool state ada di satu contract, di-identifikasi via `PoolId = hash(PoolKey)` (T14.6, T15.8). Semua settle menggunakan **flash accounting**: setiap `take`/`settle` harus **net-zero** di akhir `unlockCallback`, kalau tidak seluruh tx revert (T12, `Trending/01`). Ini membuat ratusan pool bisa eksis murah dan aman.

## 2. Adopsi ke AMPERA
Setiap desa/kohor AMPERA = satu pool `$AMP / IDRX` (atau `/USDC`). Artinya:
- Likuiditas & performa **per-desa terisolasi & terukur** — investor bisa pilih desa tertentu.
- Lapisan "impact archipelago" di slide `12-Business-Model` jadi nyata on-chain: tiap pulau = 1 pool.
- Scale ke target 2.000 desa (ramp model `ampera_final.py`) tetap gas-efficient.

## 3. Benefit untuk thesis Jalan 2
- **Transparansi granular:** TVL & yield per-desa bisa dihitung dari event PoolManager (lihat `08-standard-hook-events`).
- **Global:** RWA-LP institusi bisa sediakan likuiditas ke kohor desa spesifik, bukan hanya treasury global.

## 4. Risk & mitigasi
- **Risiko:** TVL naive (balance token) rusak saat rehypothecation/JIT (T14.11). Mitigasi: hitung TVL dari event, bukan balance.
- **Risiko:** terlalu banyak pool = UX berat. Mitigasi: agregasi via router/intent (lihat `11-routing-tao-cow-intent`).

## 5. Sumber
`Module-Guides/02 - Arsitektur Uniswap v4`, `Trending/03 - Standard Hook Events` §1, `Trending/01 - Internal Swap Pool` §2.
