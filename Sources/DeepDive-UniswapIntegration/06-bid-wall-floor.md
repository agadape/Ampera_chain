---
tags: [ampera, uniswap-v4, adoption, deep-dive, jalan-2]
adopsi: 06
---

# 06 — Bid Wall (Single-Tick Liquidity Floor) · Lindungi Mikro-Investor

> **TL;DR:** Pola dari Flaunch (T25.14: "90% of all fees go to bid wall"). AMPERA pasang likuiditas single-tick di bawah harga `$AMP` → **floor price + cegah death spiral**. Jawaban langsung ke "crypto bikin orang bangkrut".

## 1. Mekanik (Uniswap v4)
Bid wall = likuiditas padat di satu tick terbawah (single-tick) di bawah harga token. Fee internal (lihat `03-internal-swap-pool`) sebagian besar disalurkan ke sini untuk **menyerap jualan & jaga floor**. Mencegah spiral harga turun saat panic-sell (T25 The Story of Flaunch).

## 2. Adopsi ke AMPERA
- Sebagian yield desa otomatis disalurkan ke bid wall `$AMP`.
- Mikro-investor (batas OJK ECF Rp10jt) dapat **pelindung harga bawaan** — turun hanya sampai floor, bukan nol.
- Saat desa default (Mode C), posisi diselesaikan lewat sealed-bid auction, bukan di-dump ke pasar bebas.

## 3. Benefit untuk thesis Jalan 2
- **Investor protection:** ini argumen konkret bahwa AMPERA bukan "judi crypto" — ada engineering pelindung nilai.
- **Trust global:** investor asing lihat mekanisme penahan rugi, bukan hanya janji.
- **Transparansi:** posisi bid wall terlihat di chain.

## 4. Risk & mitigasi
- **Risiko:** floor bisa tetap tembus kalau yield desa benar-benar nol (default nyata). Mitigasi: Mode C auction + karbon buffer.
- **Risiko:** biaya sewa likuiditas floor. Mitigasi: proporsi fee disetel via dynamic fee.

## 5. Sumber
`Trending/01 - Internal Swap Pool` §4 (Tom: bid wall), `Incubator-Maps/T25 - The Story of Flaunch`, `MainProject/08 - PRD.md` §5 (Mode C).
