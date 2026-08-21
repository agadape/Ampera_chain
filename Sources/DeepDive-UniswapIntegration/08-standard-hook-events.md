---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 08
---

# 08 — Standard Hook Events (`HookSwap` / `HookFee`) · Audit Trail Publik

> **TL;DR:** Inisiatif resmi Uniswap Foundation (Boost #3). 1 baris `emitSwapUpdate` = bukti literal klaim "100% transparan, anti-korupsi". Ini senjata utama thesis global AMPERA.

## 1. Mekanik (Uniswap v4)
Jackie (Head of Data Science, Foundation) proposed set event untuk hook developer emit (`Trending/03`, T14.12): `HookSwap` (poolKey, sender resolved, amount, fee) + `HookFee` (feeAmount, direction, recipient). Library Atrium `emitSwapUpdate` = **1 baris, gas insanely low** (T15.12), template destined for OpenZeppelin. Indexer (subgraph per-chain, v4.xyz, MV4) konsumsi → dashboard live.

Penting: di hook, `msg.sender` = PoolManager, bukan user → pakai **`IMessageSender` standard** (router resolve end-user via trusted-senders), jangan `tx.origin` (break di EIP-7702).

## 2. Adopsi ke AMPERA
Setiap aliran: kWh → mint `$AMP` → yield → bagi hasil → karbon = **event publik immutable**. AMPERA bangun **dashboard publik real-time per-desa** (bisa di atas v4.xyz/MV4) yang menunjukkan:
- Berapa kWh desa X hari ini.
- Berapa rupiah ke investor Y.
- Berapa karbon tersertifikasi.

Investor asing **lihat sendiri**, bukan percaya slide. Inilah yang bikin "tidak mungkin korup" jadi *terbukti*.

## 3. Benefit untuk thesis Jalan 2
- **Transparansi radikal:** jawaban langsung ke ketakutan investor asing akan korupsi Indo.
- **Global:** data standar → bisa dikonsumsi analis/institusi manapun.
- **Trust:** hook yang tidak emit = invisible; AMPERA emit = visible & boosted.

## 4. Risk & mitigasi
- **Risiko:** TVL naive rusak saat rehypothecation. Mitigasi: hitung dari event PoolManager + hook.
- **Risiko:** `tx.origin` untuk user. Mitigasi: `IMessageSender`.

## 5. Sumber
`Trending/03 - Standard Hook Events & Indexing`, `MainProject/08 - PRD.md` §7, `Visualize/ppt/EachSlide/07-How-It-Works.md`.
