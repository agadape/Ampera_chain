---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 09
---

# 09 — ERC-6909 Hook-Owned LP Shares · Kepemilikan Fraksional `$AMP`

> **TL;DR:** LP shares AMPERA = token standar ERC-6909 yang di-mint hook — kepemilikan fraksional investor native on-chain, composable, audit-friendly.

## 1. Mekanik (Uniswap v4)
V4 menghandle liquidity positions sebagai **ERC-6909 multi-token** (hook-owned), bukan NFT per-position seperti V3 (`Module-Guides/05`, `MainProject/08 - PRD.md` §3.1). Hook yang mengelola mint/burn shares → fully composable (bisa di-listing, di-collateral, di-transfer).

## 2. Adopsi ke AMPERA
- Investor mikro beli `$AMP` → dapat **ERC-6909 share** proportional ke kWh riil (konsisten slide `07`: "1 $AMP ↔ proporsi kWh riil").
- Share bisa di-pegkan ke Rupiah/IDRX desimal (batas OJK ECF Rp10jt / AKD Rp100jt) → terjangkau & terukur.
- Kepemilikan terverifikasi on-chain = **equity wrapper OJK yang auditable**, bukan "crypto spekulatif".

## 3. Benefit untuk thesis Jalan 2
- **Transparansi:** siapa pegang berapa kWh = publik.
- **Efisiensi:** share composable → bisa jadi collateral produk keuangan lanjutan.
- **Global:** standar token → wallet/institusi mana pun bisa terima.

## 4. Risk & mitigasi
- **Risiko:** desain share vs regulasi ECF/AKD. Mitigasi: patuh batas denominasi + sandbox OJK.
- **Risiko:** fragmentasi terlalu kecil. Mitigasi: agregasi per kohor.

## 5. Sumber
`Module-Guides/05 - Liquidity Operators`, `MainProject/08 - PRD.md` §3.1, §3.2, `Visualize/ppt/EachSlide/07-How-It-Works.md` (Stage 4 Attest).
