---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 04
---

# 04 — `beforeSwapReturnDelta` (Custom Curve) · AI-Inferred Pricing `$AMP` (Mode B)

> **TL;DR:** Primitive paling powerful & berisiko V4. Karena AMPERA **tidak punya oracle on-chain** untuk yield desa, hook kembalikan **custom curve** dari harga AI-inferred — ini Mode B Fluxa.

## 1. Mekanik (Uniswap v4)
`beforeSwapReturnDelta: true` mengizinkan hook mengembalikan delta custom ke PoolManager, meng-override logika harga swap (`Module-Guides/06`). Membuka: pricing custom, async settlement, netting (CoW). **Berisiko tinggi** — Cantina sebut sebagai "danger zone V4" (T21). Fluxa justify flag ini ONLY untuk Mode B (PRD §4.3).

## 2. Adopsi ke AMPERA
Harga `$AMP` tidak ditentukan AMM murni, tapi **di-derive dari yield off-chain** (produksi kWh riil, koleksi PAYG, harga karbon IDXCarbon) via **AI agent (ERC-7857) di TEE**, diverifikasi Chronicle (`verifyAttestation`). Hook `beforeSwap` kembalikan curve adil → investor exit di harga wajar, bukan diskon 26% ala FIDU.

Ini menjawab langsung: AMPERA punya **harga yang fair & transparan tanpa menunggu oracle yang tak ada**.

## 3. Benefit untuk thesis Jalan 2
- **Regulated AI:** agent yang menghitung harga = ter-identitas (ERC-7857) + bereputasi (ERC-8004), bukan kotak hitam.
- **Transparansi:** curve + attestasi Chronicle bisa diaudit publik.
- **Efisiensi:** harga discovered instantly, tanpa queue 1 tahun.

## 4. Risk & mitigasi
- **Risiko:** delta tidak sum-zero = rug/revert. Mitigasi: fuzz delta-zero (≥10000 runs), invariant test.
- **Risiko:** harga AI bias/manipulatif. Mitigasi: TEE + Chronicle attestation + reputation gate.
- **Risiko:** flag ini attack surface. Mitigasi: justify di README, security skill #11.

## 5. Sumber
`Module-Guides/06 - Return Delta & Hooks`, `MainProject/08 - PRD.md` §4.3, §5 (Mode B), `Trending/08 - Autonomous Liquidity Agents` §C.
