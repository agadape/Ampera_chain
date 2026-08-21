---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 11
---

# 11 — Routing Tao / CoW Intent · Eksekusi MEV-Protected & Akses Global

> **TL;DR:** Investor global masuk ke pool AMPERA lewat **intent** (Tao/CoW), bukan swap mentah — eksekusi terbaik, terlindung MEV, dan muncul di router/solver. Ini "orderflow" yang buka pasar internasional.

## 1. Mekanik (Uniswap v4 / orderflow)
`Trending/02 - Orderflow & Router Adoption` + `Trending/08` §C: hook self-integrasi via **Tao** (quote function deterministik Solidity-equivalent; Tao baca via substreams). CoW (Coincidence of Wants, `Module-Guides/06`) = pertukaran P2P tanpa pool, netting. Intent = user nyatakan "mau beli $AMP dengan IDRX", solver yang eksekusi paling murah.

## 2. Adopsi ke AMPERA
- Investor asing (Ondo/Securitize/Maple-style RWA-LP) kirim **intent** → solver route ke pool `$AMP` terbaik → eksekusi MEV-protected.
- Hook emit `HookSwap` → Tao indexer konsumsi → quote real-time di router (black hole #2 terisi).
- Investor desa bisa beli/exit `$AMP` dari UI mobile tanpa tahu seluk-beluk DEX.

## 3. Benefit untuk thesis Jalan 2
- **Global:** akses investor institusi tanpa friction wallet/DEX.
- **Efisiensi flow:** netting CoW + routing terbaik = slippage minimal.
- **Trust:** eksekusi terlindung sandwich-MEV (tidak bikin investor rugi diam-diam).

## 4. Risk & mitigasi
- **Risiko:** Tao butuh Rust/substreams. Mitigasi: quote function Solidity-equivalent deterministik (T08, `MainProject/08` §16).
- **Risiko:** solver terpusat. Mitigasi: multi-solver + fallback ke swap langsung.

## 5. Sumber
`Trending/02 - Orderflow & Router Adoption`, `Trending/08 - Autonomous Liquidity Agents` §C.3, `Module-Guides/06 - Return Delta` (CoW), `MainProject/08 - PRD.md` §10.3 (partner Tao).
