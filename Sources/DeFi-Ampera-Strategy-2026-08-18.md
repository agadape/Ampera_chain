# Strategi DeFi Ampera — Arah & Keputusan End-to-End (2026-08-18)

> Dokumen pendukung untuk `Pergulatan-Ampera-RWA-2026-08-18.md` dan memory Kilo (arah DeFi 3-fase).
> Status: **arah sudah di-lock** (Fase 1–2 sekarang, Fase 3 ditunda). Belum ada implementasi kode/contract baru di luar desain §9 proposal.

---

## 0. Mengapa DeFi Relevan bagi Ampera (Konteks Strategis)

Dari narasi utama Ampera: kita adalah **infrastruktur investasi energi terbarukan deep-tech yang inklusif + transparan + masif**, lahir di Indonesia, ambisi global.

Titik sakit terbesar di Indonesia: **investor global menghindar karena persepsi "Indonesia tidak transparan"** → modal murah tertahan, diseminasi energi terbarukan melambat. Ampera memecahkan itu dengan RWA on-chain (audit trail publik, regulated AI, compliance hook).

DeFi adalah **lever untuk dua pilar narasi sekaligus**:
- **MASIF** — akses modal lokal (Rp2rb) + global (institusi) tanpa batas geografis.
- **TRANSPAREN** — likuiditas & settlement on-chain = terprogram & bisa diaudit regulator.

Jadi DeFi bukan "crypto spekulatif", melainkan **lapisan likuiditas & settlement global yang terregulasi**.

---

## 1. Resolusi Open Thread

Sebelumnya DeFi adalah *open thread*: "sejauh mana kita masuk DeFi?" (exit-only vs full). Keputusan hari ini:

> **DeFi Ampera = lapisan LIKUIDITAS & SETTLEMENT GLOBAL yang transparan (Fase 1–2 SEKARANG), BUKAN produk spekulatif (Fase 3 DITUNDA).**

Ini konsisten dengan:
- Narasi utama (inklusif + transparan + masif).
- Keputusan hybrid Web2/Web3 (Web3 hanya di layer yang beneran nambah nilai: likuiditas, composability, settlement, audit).

---

## 2. Tiga Fase DeFi Ampera

### Fase 1 — Liquidity & Exit Layer (SEKARANG, sudah di-desain)
- **Apa:** Pool AMM Uniswap v4 sebagai *venue* sekunder `$AMP`. Investor bisa **masuk & keluar kapan saja** (tidak terkunci 1 tahun seperti RWA konvensional — lihat kasus FIDU/ Goldfinch).
- **Mekanik:** `Internal Swap Pool` + `beforeSwapReturnDelta` (AI-inferred pricing, Mode B Fluxa) + `Bid Wall` (single-tick floor pelindung mikro-investor).
- **Nilai:** likuiditas instan = pilar "masif". Juga menjawab isu inklusivitas (exit bebas).
- **Status:** SUDAH ada di proposal §9. Eksekusi, bukan tambahan.

### Fase 2 — Composability & Settlement Global (jangka pendek)
- **Apa:** `$AMP` (ERC-6909) **composable** ke RWA vault institusi (pattern Fluxa) + akses modal global via **Tao/CoW intent** (MEV-protected), settlement **IDRX/USDC**.
- **Nilai:** lever "global masif" — buka keran modal asing tanpa membangun bursa sendiri. Ini yang langsung mematahkan "investor global takut Indo tidak transparan": mereka lihat posisi terverifikasi on-chain.
- **Status:** bagian §9 (routing + settlement). Siap dijalankan setelah Fase 1 live & audited.

### Fase 3 — Yield & Collateral DeFi (MASA DEPAN, DEFER)
- **Apa:** `$AMP`/IDRX dideposit ke protokol lending (Aave-style), stablecoin yield, RWA jadi agunan (collateral).
- **Nilai:** return tertinggi & opsi keuangan terluas bagi investor.
- **Risiko:** tertinggi — batas Bappebti/OJK, smart-contract risk, stigma "crypto" di kompetisi PLN (yang fokus dampak energi/sosial).
- **Keputusan:** **DITUNDA** sampai (a) kejelasan sandbox regulasi, dan (b) Fase 1–2 terbukti aman & berjalan.

---

## 3. Pemetaan ke Uniswap v4 / Fluxa (Technical)

| Komponen (sudah di §9 / DeepDive) | Fase | Fungsi DeFi |
|---|---|---|
| BaseCustomAccountingHook (OZ) | 1 | Primitive wadah bersama + aturan on-chain |
| ERC-6909 LP shares | 1–2 | Kepemilikan fraksional (Wadah Bersama, Rp2rb) |
| Internal Swap Pool | 1 | Capture yield → route ke investor (Mode A = exit) |
| beforeSwapReturnDelta | 1 | AI-inferred pricing `$AMP` (Mode B) |
| Bid Wall | 1 | Floor price mikro-investor |
| Tao / CoW Intent | 2 | Routing MEV-protected, akses institusi global |
| Chronicle + TEE + AVS | 1–2 | Attestasi off-chain → on-chain (jujur) |
| HookSwap / HookFee | 1–2 | Audit trail publik = bukti anti-korupsi |
| Compliance Hook (KYC allowlist) | 1–2 | Gate jurisdiksi / securities law |
| Lending/Collateral (Aave-style) | 3 | **DEFER** — belum diputus |

> Fluxa (referensi `AtriumAcademy-Uniswap/MainProject`) sudah implementasi Mode A (exit), B (AI pricing), C (sealed-bid liquidation). Ampera adopt Mode A+B sebagai Fase 1; Mode C relevan untuk distress (default desa) — bisa masuk Fase 1–2 sebagai risk control.

---

## 4. Positioning & Regulasi

**Framing untuk PLN ICE (kompetisi energi, bukan crypto):**
- Sebut: *"akses modal global yang transparan & terprogram"*.
- **HINDARI:** yield-farming, speculative, "crypto". DeFi = *on-chain liquidity terregulasi*.
- Di pitch: Fase 1–2 = materi; Fase 3 cukup jadi *roadmap*, bukan deliverable.

**Posisi regulasi (sudah di §9):**
- Token di DEX = ranah **Bappebti** (aset kripto), melengkapi — bukan mengganti — jalur **OJK ECF/AKD**.
- Compliance hook (KYC allowlist) + sandbox OJK menjaga batas hukum.
- Setiap perluasan Fase 3 wajib lewat sandbox dulu.

**Risk control:**
- Kontrak audit (Foundry fuzz, Slither, Hookscan per spec Fluxa).
- Rollout bertahap: Fase 1 → 2 → 3 (bukan sekaligus).
- Compliance hook selalu ON di `beforeAddLiquidity`/`beforeSwap`.

---

## 5. Hubungan dengan Keputusan Lain

- **Inklusivitas Rp2rb** (pooling Uniswap v4) = pilar INKLUSIF; DeFi Fase 1 memberi pilar MASIF + exit.
- **Hybrid Web2/Web3:** core (micro-invest, yield distribution, dashboard, KYC) di Web2; DeFi = bagian layer Web3 yang beneran nambah nilai (liquidity/composability/settlement/audit). Blockchain jamin *ledger*, bukan kebenaran kWh — input divalidasi edge/IoT (Stage 2/4) + Chronicle/TEE.
- **Tema lomba:** DeFi memperkuat #5 (Sustainability & Green Innovation) + #2 (AI untuk Sistem Energi) karena ia adalah implementasi "akselerasi diseminasi EB secara masif & transparan".

---

## 6. Implikasi ke Dokumen

- **Proposal §9** — sudahan ada fondasi (Internal Swap Pool, routing, compliance). Bisa ditambah 1 paragraf "DeFi Roadmap" (Fase 1–2 now, Fase 3 defer) agar vision terlihat tapi aman.
- **Slide 07** — Fund stage sudah sebut Uniswap v4 + Wadah Bersama + Rp2rb (done).
- **Slide 12 (Business Model)** — bisa tambah strip "Likuiditas global on-chain (DeFi, Fase 1–2)".
- **Slide 10 (Ampera Earth)** — angle "memecahkan ketakutan investor global via transparansi on-chain".

---

## 7. Next Steps / Open Items

- [ ] (Opsional) Tambah paragraf "DeFi Roadmap" ke proposal §9.
- [ ] (Opsional) Strip DeFi singkat di Slide 12.
- [ ] Validasi batas Bappebti/OJK untuk Fase 2 (routing global) sebelum go-live.
- [ ] Audit kontrak (Fase 1) sebelum mainnet/Base testnet.
- [ ] Putuskan apakah Mode C (liquidation) Fluxa masuk Fase 1–2 sebagai risk control.
- [ ] Fase 3 tetap **DEFER** sampai sandbox regulasi jelas.

---

## 8. Files Reference
- `proposal-ampera-final-Future.html` §9 (Uniswap v4 + inklusivitas + nuansa transparansi).
- `Results/DeepDive-UniswapIntegration/` (12 file teknis adopsi Fluxa → Ampera).
- `Results/Pergulatan-Ampera-RWA-2026-08-18.md` (perjalanan keputusan).
- `AtriumAcademy-Uniswap/MainProject/09 - Project Description (Atrium).md` (Fluxa = rujukan DeFi RWA).
- `AtriumAcademy-Uniswap/Trending-Boosted-Innovation-Uniswap/10 - Project Spec - Autonomous RWA Vault Hook.md` (Mode A/B/C).
- `Visualize/ppt/EachSlide/07-How-It-Works.md` (Fund stage: Wadah Bersama + Uniswap v4 + Rp2rb).
- `Visualize/ppt/EachSlide/20-Closing-Cover.md` (QR placeholders proposal & laporan keuangan).
