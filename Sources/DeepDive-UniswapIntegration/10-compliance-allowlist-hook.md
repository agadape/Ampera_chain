---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 10
---

# 10 — Compliance / Allowlist Hook · Gating Jurisdiksi & KYC

> **TL;DR:** Hook di `beforeAddLiquidity` / `beforeSwap` yang **mem-filter investor per jurisdiksi** — solusi teknis untuk risiko securities law global. Uniswap justru jadi alat kepatuhan, bukan pelanggaran.

## 1. Mekanik (Uniswap v4)
Hook bisa menjalankan logika arbitrer di `beforeAddLiquidity` & `beforeSwap` (gate). Pola ini dipakai Fluxa untuk reputation gate (`MainProject/08 - PRD.md` §4.3, §6.2). Kita extend gate menjadi **allowlist** berbasis identitas terverifikasi.

## 2. Adopsi ke AMPERA
- Investor Indonesia → lewat jalur OJK ECF/AKD (batas Rp10jt/100jt), KYC lokal.
- Investor global → lewat jalur AKD terbuka / akreditasi, gated per yurisdiksi (US/EU securities law).
- Agent hanya boleh operate kalau reputation ≥ threshold (gabung `07-autonomous-agent-stack`).

Ini menjawab risiko #4 dari keputusan Jalan 2: **jual ke retail global picu securities law** → di-solve di level hook, bukan dijanjikan manual.

## 3. Benefit untuk thesis Jalan 2
- **Regulated:** kepatuhan tertanam di code, auditabel regulator.
- **Global:** pasar terbuka selebar mungkin dalam batas hukum tiap negara.
- **Transparansi:** daftar investor ter-whitelist terlihat (tanpa bocorkan identitas privat via IMessageSender).

## 4. Risk & mitigasi
- **Risiko:** allowlist sentralisasi = kontra-narasi "decentralisasi". Mitigasi: gunakan identity terverifikasi (zk-proof) tanpa custodian pegang dana.
- **Risiko:** jurisdiksi berubah. Mitigasi: gate bisa di-update via governance terbatas.

## 5. Sumber
`MainProject/08 - PRD.md` §4.3 (gate), §6.2 (agent lifecycle), `Visualize/ppt/EachSlide/07-How-It-Works.md` (Stage 0 Agen Masuk gate), `Trending/08` §C.
