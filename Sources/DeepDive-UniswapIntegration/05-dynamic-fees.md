---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 05
---

# 05 — Dynamic Fees · Risk-Tier per Desa

> **TL;DR:** Fee pool otomatis naik/turun by volatilitas & risk-tier desa — melindungi LP/investor, mendanai operasional secara terukur.

## 1. Mekanik (Uniswap v4)
V4 mendukung **dynamic fee** (hook override fee pasca-swap) + pola Nezlobin/Aegis: `fee = base + volatilityFactor + gasAdjustment` (`Module-Guides/04`, `MainProject/08 - PRD.md` §5 Mode A). Bisa dikombinasi dengan `beforeSwapReturnDelta` (T12, `Trending/01`).

## 2. Adopsi ke AMPERA
- Desa 3T (baru, volatility tinggi) → fee lebih tinggi untuk kompensasi risiko LP.
- Desa mapan (ramp lanjut, yield stabil) → fee turun → investor dapat net return lebih besar.
- Fee dinamis juga jadi **sumber platform fee AMPERA** (slide `12`: "% per transaksi $AMP") — capital-light, terukur.

## 3. Benefit untuk thesis Jalan 2
- **Efisiensi flow:** harga likuiditas disesuaikan secara algoritmik, bukan manual.
- **Transparansi:** besaran fee per desa terlihat di `HookFee`.
- **Global:** LP institusi bisa harga risiko per kohor dengan jelas.

## 4. Risk & mitigasi
- **Risiko:** fee volatile bingungkan investor ritel. Mitigasi: tampilkan "all-in cost" di UI/router.
- **Risiko:** oracle volatility butuh feed. Mitigasi: Chronicle + agent inference.

## 5. Sumber
`Module-Guides/04 - Dynamic Fees`, `Trending/01 - Internal Swap Pool` §1, `MainProject/08 - PRD.md` §5, `Visualize/ppt/EachSlide/12-Business-Model.md`.
