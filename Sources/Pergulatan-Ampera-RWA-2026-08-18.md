# Pergulatan Ampera — Inklusivitas Investor Mikro & On-Chain RWA (2026-08-18)

> Catatan perjalanan diskusi hari ini: dari masalah "minimum ECF Rp10jt tidak inklusif" → solusi pooling → integrasi Uniswap v4 → turun ke Rp5rb/Rp2rb → mapping tema PLN ICE → manfaat RWA on-chain → audit jujur Web2 vs Web3 → *open thread* koneksi ke DeFi.
> Status: **belum ada file slide/proposal yang diedit** dari rangkaian ini. Semua masih tahap jabaran & keputusan arah.

---

## 0. Konteks Awal (sebelum chat Rp10jt)
- Slide 04 (Target Customer) sudah selesai diedit: tambah pill **B2B/B2G/B2C**, perbaiki angka ke `10.068`, hapus timeline redundan.
- Isu `mAP50 83,6% vs 93,6%` sudah diverifikasi: **tidak ada 83,6% di manapun**, deck konsisten di 93,6%.
- Fokus deck sudah miring ke **fintech / crowd-equity + tokenisasi RWA `$AMP`**.

---

## 1. Masalah: "Rp10jt itu bukan investor mikro!"
**Chat user (paling awal hari ini):**
> "Lha kalau minimum aja masih di 10jt ya gajadi inklusif buat investor mikro dong?! Masa org yg gajinya menengah dan menengah ke bawah aja rata" 4,5 – 5 jt per bulan disuruh invest 10jt??!! Solve ini, tapi jgn edit apapun dulu, jabarkan ke saya"

**Analisis akar masalah:**
- Angka `Rp10jt/investor` di Slide 07 Stage 6 sebenarnya adalah **ambang sisi penerbit ECF (POJK 17/2025)** = satu *subscriber* ECF wajib minimal segitu.
- Itu **bukan batas per-orang**. Selama jual ECF langsung ke per-orang, mikro otomatis tertutup.
- Slide 07 juga punya klaim menyesatkan: *"dipecah sampai setara Rupiah/IDRX"* — teknisnya tidak benar untuk ECF langsung.

**Kesimpulan saat itu:** narasi "investor mikro" jadi kontradiktif & tidak jujur.

---

## 2. Solusi Dasar: Wadah Bersama (Pooling)
**Konsep:** bukan investor mikro yang langsung beli ECF, tapi banyak orang mikro menyetor ke **satu wadah kolektif**, lalu wadah itulah yang jadi *satu subscriber* ECF/ AKD (≥Rp10jt). Imbal hasil dibagi proporsional.

| Opsi | Tiket | Cocok untuk |
|---|---|---|
| Wadah bersama (pooling) | Rp100rb–Rp500rb | Massa mikro gaji 4,5–5jt |
| AKD langsung ticket kecil | Rp100rb–Rp1jt | Yang mau mandiri |
| Verifikasi angka POJK | – | Pastikan batas per-ticket vs aggregate |

**Model usulan (waktu itu):**
- Tier 1 — Mikro: setor Rp100rb/bulan via wadah.
- Tier 2 — Retail: langsung ECF ≥Rp10jt.
- Keduanya ekspos ke desa yang sama, bagi hasil sama per-kWh.

---

## 3. Integrasi Uniswap v4 (Referensi Proposal §9 + Fluxa)
**Chat user:**
> "Pakai pooling tapi bebas mau berapapun agar makin banyak org yg terlibat. Kan pakai inovasi uniswap v4 itu bisa kan? Kita udh jabarin kemarin, coba cek proposal kita lalu untuk detail uniswap v4 ada disini `AtriumAcademy-Uniswap` dan `MainProject`."

**Yang saya cek:**
- **Proposal `proposal-ampera-final-Future.html` §9** — sudah punya fondasi: `Uniswap v4 Hook`, `BaseCustomAccountingHook` (OZ), `ERC-6909` (fraksional), `Internal Swap Pool`, `beforeSwapReturnDelta` (AI pricing), `Bid Wall`, `Compliance Hook`, `Dynamic Fee`, `Tao/CoW`, `Chronicle+TEE+AVS`, `ERC-7857/8004/8183`.
- **`AtriumAcademy-Uniswap/MainProject` (Fluxa)** — hook v4 nyata: `BaseCustomAccountingHook` mengelola *managed liquidity* via **ERC-6909 LP shares** ("LP deposit USDC → terima ERC-6909 LP shares, hook-owned liquidity"). 3 mode pricing: A (internal pool = venue exit), B (AI-inferred), C (sealed-bid auction).
- **Compliance notes (Discord D01):** ILAL (`ronny_hz727`) = KYC/eligibility on-chain tanpa publikasi identitas; Cronstream = off-chain keeper batching yield push.

**Temuan kunci:** Uniswap v4 `BaseCustomAccountingHook` + ERC-6909 = **satu kontrak bisa terima deposit dari ribuan orang dengan nominal berapapun**, lalu catat kepemilikan fraksional masing-masing. Itu persis "Wadah Bersama" — cuma kini primitives on-chain nyata, bukan cuma konsep hukum.

**Mekanisme (final):**
```
Investor mikro (Rp50rb, Rp100rb, dst)
  → KYC gate (compliance hook, allowlist per jurisdiksi)
  → [Hook "Wadah Bersama Ampera" — 1 kontrak Uniswap v4]
  → deposit IDRX → mint ERC-6909 share fraksional (pro-rata, tanpa floor)
  → Hook = 1 subscriber ECF/AKD terkualifikasi (aggregate ≥Rp10jt) ← OJK puas
  → Yield (PAYG+diesel+karbon+ESG) ditangkap hook → route ke IDRX → distribusi proporsional
```

**Mapping komponen §9 → pooling "bebas berapapun":**
| Komponen §9 | Fungsi pooling |
|---|---|
| BaseCustomAccountingHook (OZ) | Primitive wadah bersama + aturan on-chain |
| ERC-6909 | Kepemilikan fraksional — ini yg bikin "berapapun" mungkin |
| Internal Swap Pool | Capture yield → route ke investor (proporsional) |
| Compliance Hook | KYC/allowlist per jurisdiksi → gate mikro |
| Dynamic Fee | Risk-tier per desa |
| Bid Wall | Floor price pelindung mikro |
| beforeSwapReturnDelta | AI-inferred harga $AMP (Mode B) |
| Tao/CoW | Routing MEV-protected, akses global |

---

## 4. Turun ke Rp5rb
**Chat user:** "Harus lebih rendah, 5rb pun bisa gitu"

**Solusi agar Rp5rb feasible:** protokol (ERC-6909) technically tidak ada floor — hambatannya cuma **gas**. Maka pakai:
1. **ERC-6909 managed liquidity** — share fraksional bebas denominasi.
2. **Off-chain ledger + batch mint** — granularitas di bawah chain, on-chain cuma di-batch periodik (mirip Cronstream keeper).
3. **Gasless (paymaster / ERC-4337)** — user bayar Rp0 gas, hanya pokok yg jadi principal.

**Batas jujur:** tetap wajib **KYC one-time** (AML). "Bebas berapapun" = bebas nominal, bukan tanpa identitas.

---

## 5. Turun ke Rp2rb
**Chat user:** "Kalau gitu kita bikin maksimal yakni mulai dari 2rb bisa juga?"

**Jawaban:** di model batching + gasless, **Rp2rb tidak beda technically dengan Rp5rb**. Floor murni jadi **pilihan produk/kebijakan**, bukan keterbatasan protokol.

**Batas baru (ekonomi, bukan teknis):**
- **CAC/KYC per user** bisa > Rp2rb → secara unit ekonomi nggak nutup kecuali rata-rata setoran naik.
- AML: nominal sekecil itu tetap wajib KYC.
- Ledger precision: aman.

**Keputusan:** pasang **minimum pemasaran = Rp2rb** (protocol mendukung), tapi operasional dorong rata-rata setoran Rp50rb–100rb supaya CAC nutup. Di slide: *"Mulai Rp2rb · gasless · KYC"*.

---

## 6. Mapping Tema PLN ICE 2026
**Chat user:** minta cek guidebook — kita masuk tema yang mana?

**9 Subtema PLN ICE 2026 RESMI (dari guidebook docx/pdf):**
1. Inovasi Penggunaan Energi Listrik / Elektrifikasi
2. **Artificial Intelligence (AI) untuk Sistem Energi** ← co-primary (kuat)
3. Energi Terbarukan
4. Smart Energy Management
5. **Sustainability & Green Innovation** ← primary
6. EV Ecosystem
7. Circular Economy
8. Produk Penunjang CSR PLN
9. Penunjang Bisnis PLN

> Tidak ada tema fintech/pendanaan. RWA/crowd-equity = model bisnis, bukan tema.

**Keputusan FINAL (2026-08-18):** daftar di **Tema 5 — Sustainability & Green Innovation** sebagai **PRIMARY**, dengan **Tema 2 — AI untuk Sistem Energi** sebagai **CO-PRIMARY yang kuat**. Cross-align sekunder ke **Tema 3 (Energi Terbarukan)**, **8 (CSR PLN)**, **1 (Elektrifikasi)**.

> Catatan koreksi: di sesi awal sempat saya rekomendasikan Tema 3 sebagai primary, lalu setelah cek ulang guidebook ditemukan Tema 5 bernama persis "Sustainability & Green Innovation" (resmi ada). Keputusan final user: **#5 primary + #2 co-primary**.

**Alasan #5 primary:** deskripsi #5 = dekarbonisasi / jejak karbon / net-zero / dampak terukur — persis bullseye dg Stage 5 auto-karbon Ampera + audit on-chain. Hindari saingan langsung dgn startup panel surya murni di #3.

**Alasan #2 co-primary:** Ampera berat di AI (AI Tetrix slide 08, AI-inferred pricing `$AMP` via `beforeSwapReturnDelta`/Mode B Fluxa, edge validation Raspberry Pi/ESP32). #2 judge-friendly & jadi pembeda. Reframe: *"AI untuk elektrifikasi last-mile PLN"* (deteksi desa + validasi yield + optimasi mikro-grid + pricing).

**Penting:** **tidak ada tema fintech/pendanaan.** Jadi RWA/crowd-equity = *model bisnis*, bukan tema. Pitch anchor ke keberlanjutan + AI, fintech = enabler.

**Implikasi deck:** Slide 01/02 sebut eksplisit *"Subtema: Sustainability & Green Innovation (co-primary: AI untuk Sistem Energi; didukung Energi Terbarukan, CSR PLN, Elektrifikasi)"*. Slide 12 (BM) tunjukkan RWA/pooling tapi framing *"model pendanaan untuk tema keberlanjutan + AI"*.

---

## 7. Kegunaan & Manfaat RWA On-Chain di Ampera

**A. Kegunaan (fungsi teknis):**
1. Tokenisasi kWh → `$AMP` (ERC-6909), hak atas energi fraksional.
2. Wadah Bersama (BaseCustomAccountingHook) kelola likuiditas kolektif ribuan investor.
3. Capture & route yield (Internal Swap Pool) → IDRX/USDC proporsional.
4. AI-inferred pricing (`beforeSwapReturnDelta`) via TEE+Chronicle.
5. Bid Wall (floor price mikro-investor).
6. Audit trail publik (`HookSwap`/`HookFee`) = anti-korupsi.
7. Compliance Hook (KYC allowlist) patuh securities law.
8. Dynamic Fee (risk-tier per desa).
9. Exit instan (likuiditas terbuka).
10. Routing global (Tao/CoW) akses institusi MEV-protected.

**B. Manfaat:**
- **Desa/Agen:** listrik murah PAYG + subsidi bulanan; lahan jadi aset tanpa modal.
- **Investor mikro:** inklusif Rp2rb, gasless, bagi hasil 4 sumber proporsional, exit likuid + floor terlindungi.
- **PLN:** off-taker tanpa CAPEX, hemat BPP/diesel, data EBT terverifikasi, dukung RUPTL & dekarbonisasi.
- **Ampera:** transparansi 100% (trust/anti-korupsi), biaya akuisisi turun (batching), differentiator vs RWA konvensional.
- **Regulator/Juri:** posisi ganda patuh (Bappebti + OJK), dampak sosial & dekarbonisasi terukur on-chain.

---

## 8. Audit Jujur: Web2 vs Web3
**Chat user:** "Tapi sebenarnya itu bisa ga sih di-solve dengan web2 saja? Apakah implementasi web3 rwa onchain ini benar" solving masalahnya?"

**Fakta jujur:**
- **Web2 sudah cukup untuk CORE:** micro-invest Rp2rb, distribusi yield, dashboard transparan, KYC — semua beres di Web2 (escrow, koperasi, reksadana, ECF portal OJK). Lebih murah & simpel.
- **Web3 baru bener-benar nambah nilai di irisan sempit:**
  1. **Exit likuid** (paling kuat) — AMM pool (Mode A Fluxa) = venue exit instan vs RWA Web2 yang mandek 1 tahun (kasus FIDU).
  2. **Composability / akses modal global** — `$AMP` nyolok ke DeFi, RWA vault institusi, settlement IDRX/USDC.
  3. **Shared ledger lintas pihak** (PLN–desa–investor–regulator) tamper-evident.
  4. **Programmable compliance** di code.
- **Web3 TIDAK bantu / nambah risiko:** oracle/attestasi input tetap sama (chain cuma jaga ledger, bukan kebenaran kWh — untungnya Ampera punya edge/IoT attestation di Stage 2/4); risiko regulasi & stigma "crypto spekulatif" bisa merugikan pitch PLN/TJSL; UX/gas/security.

**Rekomendasi (hybrid):**
- **Front-end & UX = Web2:** app, KYC, fiat ramp (IDRX), micro-invest via agregasi off-chain. User nggak ngerasa crypto.
- **Back-end strategis = Web3:** `$AMP` mewakili aggregate wadah, liquidity/exit pool, settlement cross-border, audit trail lintas pihak.
- **Framing pitch jujur:** *"Web3 bukan untuk pamer, tapi untuk likuiditas investor & akses modal global yang Web2 tidak efisien kasih."*

---

## 9. OPEN THREAD: Koneksi ke DeFi (masih bingung)
**Chat user (terakhir):** "Iya emg mau nya begitu, tapi kayaknya menarik itu kalau disambungin defi juga tapi aku masih bingung"

**Mengapa DeFi menarik (dan sebenarnya sudah partial di desain):**
- **Fluxa (referensi kita) adalah DeFi RWA hook** — Mode A (internal pool = exit/liquidity), Mode B (AI pricing), Mode C (liquidation). Jadi "exit likuid via AMM" = DeFi murni.
- Peluang DeFi yang relevan buat Ampera:
  1. **Liquidity/exit layer** — AMM pool sebagai venue jual-beli `$AMP` instan (sudah di §9).
  2. **Yield strategies** — `$AMP`/IDRX di-deposit ke RWA vault (lending, stablecoin yield) sebagai opsi tambah return bagi investor.
  3. **RWA as collateral** — posisi desa bisa jadi agunan di protokol DeFi (future optionality).
  4. **Composability** — terhubung ke DeFi institusi (Tao/CoW routing) tanpa bangun bursa sendiri.

**Yang masih BINGUNG / harus dijawab (open questions):**
- Sejauh mana masuk DeFi? **Hanya exit/liquidity layer** (aman & jelas) vs **full DeFi integration** (yield farming, collateral) yang tambah risiko regulasi & kompleksitas.
- Apakah DeFi malah *mengaburkan* narasi kompetisi PLN (yang fokus dampak energi sosial)? Risiko "over-crypto" di pitch TJSL.
- Batas Bappebti vs OJK di aktivitas DeFi — perlu klarifikasi hukum.
- Bagaimana jelaskan ke juri awam bahwa DeFi = alat likuiditas, bukan spekulasi?

**Posisi saat ini:** arah sudah hybrid (Web2 UX + Web3 settlement/liquidity). DeFi = evolusi natural dari layer likuiditas itu, tapi **belum di-scope**. Perlu sesi fokus terpisah untuk putuskan batas DeFi.

---

## 10. Kesimpulan & Next Steps
**Sudah diputuskan (arah, belum diedit):**
- Pooling + Uniswap v4 (ERC-6909) = solusi inklusivitas, minimum pemasaran **Rp2rb**, gasless, KYC one-time.
- Tema lomba = **#5 Sustainability & Green Innovation (PRIMARY) + #2 AI untuk Sistem Energi (co-primary kuat)**; cross-align #3 Energi Terbarukan + #8 CSR PLN + #1 Elektrifikasi. Fintech/RWA = model bisnis bukan tema.
- Posisi teknologi = **hybrid Web2-Web3**, Web3 di layer likuiditas/settlement/audit.

**Belum dilakukan:**
- [ ] Edit Slide 07 (Stage 6: `ECF Rp10jt` → `Mulai Rp2rb · Wadah Bersama Uniswap v4 + ERC-6909, gasless, KYC`).
- [ ] Edit Slide 12/13 (strip "Two access tiers").
- [ ] Edit Slide 01/02 (state subtema PLN ICE).
- [ ] Paragraf "Posisi Teknologi / Web2 vs Web3" di proposal §9.
- [ ] **Sesi fokus DeFi**: tentukan batas integrasi (exit-only vs full).

**File terkait:**
- `Visualize/ppt/EachSlide/07-How-It-Works.md` (Stage 6 perlu diubah)
- `proposal-ampera-final-Future.html` §9 (fondasi Uniswap v4 sudah ada)
- `AtriumAcademy-Uniswap/MainProject/09 - Project Description (Atrium).md` (Fluxa = referensi DeFi RWA)
- `AtriumAcademy-Uniswap/Trending-Boosted-Innovation-Uniswap/10 - Project Spec - Autonomous RWA Vault Hook.md`
- `Guidebook Startup Competition 2026-baru.docx` / `.pdf` (9 subtema)
