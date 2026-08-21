---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 07
---

# 07 — Autonomous Agent Stack · "Regulated Autonomous Asset Manager"

> **TL;DR:** ERC-7857 (agent = NFT, FINAL) + ERC-8004 (reputasi) + ERC-8183 (hire agent). Inilah "AI yang mengelola AMPERA" — ter-identitas, bereputasi, di-govern code. Bukan halusinasi.

## 1. Mekanik (Uniswap v4 / ERC)
`Trending/08 - Hookathon Strategy - Autonomous Liquidity Agents` (Boost #8) menyatukan 3 ERC:
- **ERC-7857** (AI Agents NFT, **FINAL Jan 2025**): agent = aset milik; strategi privat via TEE/ZKP.
- **ERC-8004** (Trustless Agents, draft): discover + percayai agent; registri Reputation (feedback signal).
- **ERC-8183** (Agentic Commerce, draft): hire agent untuk job; escrow + evaluator attest.

Hook gate: **hanya agent ERC-8004 dengan reputation ≥ threshold yang boleh LP/rebalance** (`beforeAddLiquidity`). `afterSwap` → `giveFeedback` ke ERC-8004 → reputasi update on-chain. Foundation devs (Matt Luu T22.8, Sneh T23.7) sebut "AI × V4" = visi masa depan.

## 2. Adopsi ke AMPERA
AI Trinity (satelit/vision/edge) tetap untuk **deteksi lokasi**. Agent ke-4 = **finance agent** yang:
- Monitor produksi kWh/PAYG/karbon per desa → infer harga `$AMP` (Mode B, `04`).
- Rebalance likuiditas antar kohor → efisiensi flow.
- Reputasinya **skor publik** → investor global pilih agent terbaik (pasar manajer aset on-chain).

## 3. Benefit untuk thesis Jalan 2
- **Regulated AI:** agent bukan manusia yang bisa disuap; di-govern code + reputation. "Manager yang tak bisa korupsi."
- **Transparansi:** performa tiap agent bisa diaudit siapa pun.
- **Global:** reputasi portabel lintas pool → Agent AMPERA bisa kelola RWA lain.

## 4. Risk & mitigasi
- **Risiko:** ERC-8004/8183 masih draft. Mitigasi: ERC-7857 FINAL = sandar; implement interface minimal + klarifikasi README.
- **Risiko:** "regulated" ≠ OJK. Mitigasi: sebut "sandbox OJK / zkML+TEE validation", bukan sekadar standard.

## 5. Sumber
`Trending/08 - Hookathon Strategy - Autonomous Liquidity Agents`, `MainProject/08 - PRD.md` §6, `Visualize/ppt/EachSlide/08-AI-Tetrix.md`.
