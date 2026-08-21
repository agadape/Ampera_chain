---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2, infra-pendukung]
adopsi: 12
---

# 12 — Infra Pendukung · Chronicle Oracle + TEE + EigenLayer AVS

> **TL;DR:** Tiga infrastruktur yang membuat klaim "100% transparan & AI teregulasi" jadi **jujur**, bukan overclaim. Tanpa ini, Mode B (harga AI) & reputasi agent = kotak hitam. Ini penjaga kredibilitas thesis Jalan 2.

## 1. Mekanik
### A. Chronicle Oracle (Scribe)
Oracle RWA untuk **yield / default / maturity signal + attestation harga** (`MainProject/08 - PRD.md` §3.1, §6.3). Bukan sekadar feed harga, tapi **attestation layer**: `verifyAttestation(proof) → (bool, price)`. Founders-perk partner Uniswap.

### B. TEE (Trusted Execution Environment)
AI inference off-chain (price discovery RWA illiquid) jalan di TEE; strategi & memory privat (ERC-7857). Yang dikirim ke chain = **commitment hash + attestation**, bukan model mentah. MVP = mock signature; production = zkML.

### C. EigenLayer AVS
Validation registry: **re-execute keputusan agent**, stake-secured (`MainProject/08 - PRD.md` §6.3). Agent yg salah → slashing. MVP = stub.

## 2. Adopsi ke AMPERA
- **Chronicle:** produksi kWh riil, koleksi PAYG, harga karbon IDXCarbon per desa → **di-attest ke chain**. Inilah jembatan off-chain→on-chain yang membuat `08-standard-hook-events` dan `04-return-delta-ai-pricing` bisa dipercaya.
- **TEE:** finance agent (`07`) hitung harga `$AMP` di TEE → attestasi Chronicle → hook `beforeSwapReturnDelta` pakai curve adil. Investor tahu harga bukan asal.
- **EigenLayer AVS:** validasi keputusan agent (rebalance/price) → agent nakal ke-slash reputasi (ERC-8004).

## 3. Benefit untuk thesis Jalan 2
- **Transparansi jujur:** on-chain transparan, TAPI realitas off-chain (kWh) tetap butuh trust → Chronicle+TEE tutup celah itu. Klaim "anti-korupsi" jadi terbukti, bukan retorika.
- **Regulated AI:** TEE + AVS = agent diawasi secara kriptografis, bukan cuma janji.
- **Global:** auditor/institusi percaya karena ada attestation independen.

## 4. Risk & mitigasi
- **Risiko (paling kritis):** "transparansi on-chain ≠ transparansi off-chain". kWh dari edge device tetap butuh kepercayaan ke hardware. Mitigasi: Chronicle + TEE attestation + AI Trinity (satelit/vision/edge) sebagai triangulasi.
- **Risiko:** Chronicle belum punya feed RWA spesifik. Mitigasi: mock oracle + pola attestation; Chronicle sebagai attestation layer.
- **Risiko:** TEE inference infra berat. Mitigasi: MVP mock; jelaskan path zkML di README.
- **Risiko:** EigenLayer AVS belum matang. Mitigasi: stub MVP.

## 5. Hubungan ke adopsi lain
- `04-return-delta-ai-pricing` → butuh TEE+Chronicle agar curve adil.
- `07-autonomous-agent-stack` → butuh AVS+ECR-8004 agar reputasi bermakna.
- `08-standard-hook-events` → butuh Chronicle sebagai sumber data yang di-attest.

## 6. Sumber
`MainProject/08 - PRD.md` §3.1, §5 (Mode B), §6.3 · `MainProject/03 - Tech Stack` · `Visualize/ppt/EachSlide/08-AI-Tetrix.md` (triangulasi off-chain).
