# Slide 07 — How It Works · Dari Langit ke Colokan, Desa jadi Agen

> Archetype D — End-to-end flow with village-agent loop + energy branch (70%). Lead: blue. Light slide.

---

## Purpose
Show the full value chain as one continuous pipeline — from satellite signal in the sky to a glowing bulb in a village home — AND make the **community + capital loop** explicit: a villager's land becomes an AMPERA agent device, neighbors plug in and pay cheap PAYG, every kWh is tokenized as `$AMP`, and any investor (fractionally, in Rupiah) earns from it. Demystify the platform end-to-end, including the multi-energy core, the agent agreement gate, the carbon trail, and what `$AMP` actually represents — in a single read.

## Headline (H2)
### Dari langit ke colokan — desa jadi agen, kWh jadi `$AMP`.

## Eyebrow
`SOLUSI · ALUR KERJA`

## Body copy (text 30%, ≤40 words)
> Tujuh tahap, satu alur. Agen ajukan proposal + ttd perjanjian. Device di lahannya hasilkan kWh — tetangga nyambung PAYG murah. kWh ditokenisasi `$AMP` (hak atas energi, bukan aset fisik). Investor siapapun mulai Rp2rb (Wadah Bersama, tanpa biaya transaksi) beli pecahan $AMP, dapat 4 bagi hasil.

## Data to visualize (the 7-stage pipeline + Generate branch + village-agent loop + $AMP + 4 returns)
| # | Stage | Actor | Output |
|---|---|---|---|
| 0 | **Agen Masuk** (gate) | Calon agen desa | proposal + surat perjanjian → regulasi aman |
| 1 | **Detect** | Sentinel-2 + NASA POWER | kandidat lokasi (F1 87–93%) |
| 2 | **Validate** | Edge: Raspberry Pi + ESP32 | data lapangan, yield real |
| 3 | **Generate** (branch) | ☀️ Solar **/ 💧 Piko-hidro / 🌿 Biomassa** | kWh terproduksi (per desa) |
| 4 | **Attest** | Blockchain (`$AMP` RWA) | aset digital terverifikasi |
| 5 | **Account** | ESG/SDG + karbon | kredit karbon otomatis |
| 6 | **Fund** | Investor mikro–institusi (Wadah Bersama) | modal masuk desa |
| 7 | **Electrify** | Rumah + PLN | kilowatt ke colokan |

Generate branch specs (inset on stage 3):
- ☀️ Solar: siang, Rp14–18jt/kW, 97–128 kWh/bln
- 💧 Piko-hidro: 24/7, Rp2–5jt/kW, 200–400 kWh/bln *(hero)*
- 🌿 Biomassa: on-demand, Rp9–90jt/kW, limbah sawit 261,7jt ton/thn

**Stage 0 — Agen Masuk (gate sebelum device dipasang):**
Calon agen desa **mengajukan proposal + menandatangani surat perjanjian** agar regulasi & kerja sama terjaga. Lahan penduduk desa jadi tempat perangkat AMPERA; rumah tersebut jadi **agen AMPERA** → dapat **subsidi listrik tiap bulan**. Tetangga menghubungkan kelistrikannya ke perangkat & **bayar listrik bulanan murah** (langsung dari sumber, tanpa perantara).

**Stage 4 — Attest (kenapa `$AMP` = hak atas energi, bukan aset fisik/listrik):**
Setiap kWh EBT terproduksi & terverifikasi di-edge **dicatat on-chain sebagai `$AMP`** — unit akuntansi kepemilikan fraksional tertaut ke kWh riil. Clarification chips:
- **BUKAN aset fisik** — investor tak punya panelnya, hanya kepemilikan digital (equity wrapper OJK, bukan crypto bebas).
- **BUKAN listrik mentah** — listrik dikonsumsi desa & dibayar PAYG; yang ditokenisasi = jejak produksinya + hak revenue.
- **IAH hak atas energi** — 1 `$AMP` ↔ proporsi kWh riil; memberi hak bagi hasil proporsional. Blockchain = audit layer lintas-pihak (hidden layer), bukan front-end trading.

**Stage 5 — Account (jejak karbon = sumber imbal hasil #3):**
Emisi terhindarkan diukur real-time → sertifikat karbon digital (AMS-I.L, IDXCarbon) → bagi hasil. Ini "jejak karbon" yang mengalir jadi nilai.

**Stage 6 — Fund (DUA LAPIS INVESTOR, pecahan Rupiah):**
- **Tier A — Warga mikro (B2C):** setor berapapun mulai **Rp2.000** lewat **Wadah Bersama** — ribuan warga dikumpulkan jadi **SATU subscriber OJK ECF/AKD resmi** (ambang penerbit terpenuhi, BUKAN batas per-orang). Masuk tanpa biaya transaksi, cukup verifikasi identitas sekali.
- **Tier B — Institusi global (B2B, Fase 2):** modal asing masuk via **likuiditas & settlement on-chain** (Uniswap v4) — investor bisa masuk & keluar kapan saja, bukan terkunci bertahun-tahun.
Kedua tier menerima bukti kepemilikan fraksional ($AMP). Harga $AMP di-derive agen AI otonom dari yield riil (kWh terproduksi + karbon IDXCarbon), bukan spekulatif — investor keluar di nilai wajar. Tanpa token kripto spekulatif.

**Stage 7 — Electrify (4 sumber bagi hasil investor):**
`$AMP` memberi hak atas 4 aliran (contoh 1 kWp PLTS, CAPEX Rp75jt → 150 unit @ Rp500rb, APY ~24,8%):
| Sumber | /bln | Proporsi |
|---|---|---|
| Pendapatan energi (PAYG desa) | Rp420rb | 70% |
| Bagian diesel (investor 35% dr share PLN 50%) | Rp628rb | 35% |
| Karbon (tahunan/12) | ~Rp35rb | 80% |
| **Total ke investor** | **~Rp1.083rb** | **APY ~24,8%** |

## ALUR BACA & ALERT (PETUNJUK WAJIB UNTUK IMAGE GENERATOR)
Tujuan: user harus bisa membaca slide ini dari awal sampai akhir TANPA bingung. Generator wajib patuh:

**ALUR BACA (reading path) — gambarkan SECARA EKSPLISIT:**
`[SATELIT / LANGIT · kiri-atas]` → ① Detect → ② Validate → ③ Generate → ④ Attest → ⑤ Account → ⑥ Fund → ⑦ Electrify `[BOLA LAMPU DESA · kanan-bawah]`
- Satu jalur utama (spine) berbentuk diagonal MENURUN dari kiri-atas ke kanan-bawah.
- Setiap nomor stage (①–⑦) HARUS berurutan & mudah dilihat (font besar, lingkaran lime).
- Panah arah lime menyala sepanjang jalur — SATU arah saja (tidak boleh panah bolak-balik di jalur utama).

**ALERT — JANGAN:**
- ALERT: JANGAN menyebar elemen acak. Setiap stage = 1 kartu berurutan di sepanjang jalur diagonal.
- ALERT: JANGAN jadikan info penting (dua-lapis investor di Stage ⑥) sebagai footnote kecil — harus 2 box yang jelas terbaca.
- ALERT: Warna konsisten per fase — fisik=hijau (①–③), digital=biru (④–⑤), nilai=green tua (⑥–⑦). Jangan campur.
- ALERT: Chip klarifikasi "$AMP = hak atas energi, BUKAN aset fisik/listrik" HARUS di Stage ④ (Attest) saja.
- ALERT: Hindari jargon di gambar — JANGAN tulis "ERC-6909", "hook", "gasless", "batch mint". Gunakan "Wadah Bersama", "likuiditas on-chain", "tanpa biaya transaksi".
- ALERT: JANGAN tulis angka "Rp10jt" sebagai batas — itu SALAH. Gunakan "mulai Rp2rb · Wadah Bersama (1 subscriber OJK)".
- ALERT: Loop modal (capital loop, ungu) boleh melingkar TAPI wajib diberi label "modal kembali ke desa" agar tidak membingungkan.

**LEGEND wajib (pojok bawah):** Satelit=deteksi · Edge=validasi · 3 energi=generate · $AMP=tokenisasi · Karbon=AKUN · Wadah=pendanaan · PLN=colokan.

## Visual composition (70%) — DENSE NARRATIVE, not few-big-objects
- **Hero object (70%):** a dense **isometric "sky-to-socket" pipeline landscape** — a 3D-ish horizontal flow rising left→right across a stylized terrain, WITH a foreground **village-agent loop** and a lime energy pulse. Reads as "satellite → agent's house on the land → neighbor bulbs → chain → investor wallet → dividends back to the village."
- **Environment backdrop (full zone):** paper `#F6F7ED` + dense topographic contour motif (`#00804C` @ 8%) + faint Nusantara archipelago ghost @ 6% lower band. Sky gradient top (`#1E488F` @ 10% → transparent) = orbit zone; 2–3 tiny satellite/cloud glyphs; faint compass rose. Vertical context (sky up, ground down).
- **The pipeline (≈50% zone height, horizontal center):** 7 stage cards on a slight upward diagonal (stage 1 lower-left = sky, stage 7 upper-right = village), white plates, colored top border (physical→digital→value: `#74C365` 1–3 → `#1E488F` 4–5 → `#00804C` 6–7), stage number lime dot, icon, 1-word title, 1-line output. PLUS a stage-0 **gate card** (small, left of Detect) shaped like a document/seal: "Agen Masuk: proposal + perjanjian" with a check seal — visually the "entry gate" before the pipeline.
- **Stage 3 "Generate" = branch (visual hero):** main card fans DOWNWARD into 3 sub-cards (☀️/💧/🌿), piko-hidro lime-ringed (hero). They merge back up before stage 4. "per desa" tag at fork.
- **Foreground village-agent loop (the human story, lower-left, dense):** a small isometric **agent's house** on a plot of land with the AMPERA device; from it, 2–3 **neighbor huts** connect via thin flow lines to the device. Two chips ride these lines: (a) on the agent house → "Agen: subsidi listrik / bulan"; (b) on neighbor lines → "Tetangga: bayar murah, tanpa perantara (PAYG)". A tiny document+seal glyph at the house = "proposal + perjanjian". This loop visually answers points 1 & 2.
- **Stage 4 `$AMP` clarification (chip cluster, not text rail):** 3 stacked mini-chips at Attest: red-strike "BUKAN aset fisik" · red-strike "BUKAN listrik mentah" · green-check "IAH hak atas kWh riil". A violet-ringed `$AMP` token chip sits at the node. Answers the "$AMP mewakili apa" question visually.
- **Stage 5 carbon node:** a carbon-leaf icon (`#00804C`, down-arrow) with a small "jejak karbon → nilai" tag. Answers the forgotten point 4.
   - **Stage 6 investor chip (DUA tier, jangan gabung jadi satu):** two side-by-side mini-boxes — (A) people glyph + "Warga mulai Rp2rb · Wadah Bersama = 1 subscriber OJK" · (B) globe glyph + "Institusi global · likuiditas on-chain (Uniswap v4) · Fase 2". Plus tiny badge "harga wajar via AI · tanpa biaya transaksi". **[LOGO PLACEHOLDER: lingkaran kosong (Ø) di sisi kanan chip — tempel logo Uniswap v4 di sini]**. Answers point 5.
- **Stage 7 returns fan (dense):** from the bulb, 4 small dividend chips fan out — "Energi", "Diesel-PLN", "Karbon", "ESG" — looping a thin line back toward the investor/desa = the payout loop. Bulb has lime glow ring + ~3 clustered energy-dots = multiple homes lit.
- **Vertical actor-lanes (faint, behind cards):** 7 thin 1px bands (alternating `#F6F7ED`/`#FFFFFF`) labeled bottom: orbit / edge / 3 sumber energi / chain / ESG+karbon / investor / PLN+desa.
- **The energy pulse (narrative spine):** lime `#C6FF33` dot travels diagonal; at Generate splits into 3 (green/lime/`#DBE64C`), recombines, continues to stage 7 bulb (glows). A second, fainter violet pulse runs agent→`$AMP`→investor→dividend (the capital loop).
- **Ambient detail ("ramai"):** ~6 drifting `$AMP` token dots (violet-ringed, 3px) on chain/attest; faint contour lines; drifting clouds; sky gradient. Small, many, alive.
- Background: paper + dense contour.

## Objects & elements
1. Isometric backdrop (sky gradient + dense contour + Nusantara ghost + ambient clouds/satellites/compass).
2. Stage-0 "Agen Masuk" gate card (document + seal) before the pipeline.
3. 7 stage cards on upward diagonal + icons + numbers + outputs.
4. 3 Generate sub-cards (solar / piko-hidro / biomassa) fanning down, piko-hidro lime-ringed.
5. Branch fork + merge connectors + "per desa" tag.
6. Foreground village-agent loop: agent house + device + 2–3 neighbor huts + 2 chips (subsidi / PAYG murah) + proposal+perjanjian glyph.
7. Stage-4 `$AMP` clarification chip cluster (2 red-strike + 1 green-check) + violet `$AMP` token chip.
8. Stage-5 carbon-leaf node + "jejak karbon → nilai" tag.
9. Stage-6 investor chip (Mulai Rp2rb / Wadah Bersama / verifikasi identitas sekali) + **[LOGO PLACEHOLDER: lingkaran kosong untuk logo Uniswap v4]**.
10. Stage-7 returns fan (4 dividend chips looping back) + bulb glow + clustered dots.
11. 7 faint vertical actor-lane bands + bottom labels.
12. Lime energy pulse (split/recombine) + faint violet capital-loop pulse.
13. Ambient `$AMP` tokens, clouds, sky gradient.
14. Text rail left: eyebrow, H2, body, source footnote.
15. Footer ribbon; slide `07 / 20`.

## Color usage
- Backdrop: paper + dense `#00804C` contour @ 8% + sky gradient `#1E488F` @ 10% top + Nusantara ghost @ 6%.
- Cards: white plates, top borders `#74C365` (1–3) → `#1E488F` (4–5) → `#00804C` (6–7).
- Gate card (stage 0): white + `#1E488F` dashed border + lime seal.
- Branch sub-cards: solar `#74C365`, piko-hidro `#00804C` + lime ring, biomassa `#DBE64C`.
- `$AMP` chips: violet-ringed (`#7D39EB`) on chain/attest; clarification green-check = `#00804C`, red-strike = `#1E488F` @ 40%.
- Carbon node: `#00804C` leaf. Investor chip: `#1E488F`. Returns fan: `#74C365`/`#00804C`/`#DBE64C`/`#1E488F`.
- Split pulse: green / lime / `#DBE64C`; capital-loop pulse: violet `#7D39EB`.
- Bulb glow + stage-7 ring + clustered dots: lime.
- Ambient clouds: `#1E488F` @ 30%.

## Typography
- Stage title: Plus Jakarta Sans 700, 16 px.
- Sub-card / chip title: Plus Jakarta Sans 700, 12–13 px.
- Stage number dot: Inter 800, 12 px white on lime circle.
- Output/spec line: Inter 500, 11 px, `#001F3F`.
- Actor-lane label: Inter 600, 9 px, `#1E488F` @ 60%.
- Gate/clarification chip: Inter 600, 10–11 px.
- H2: Plus Jakarta Sans 700, 40 px, black.

## Motion
- Backdrop + sky gradient + ambient fade in (0.6s); contour settles.
- Gate card (stage 0) stamps in (0.3s) → pipeline cards cascade left→right on diagonal (0.08s stagger) through stage 2.
- Village-agent loop draws: house → device → neighbor lines + 2 chips pop (0.5s); proposal+perjanjian glyph stamps.
- Branch fork draws downward (0.4s); 3 sub-cards pop (0.1s stagger); merge up (0.4s).
- `$AMP` clarification chips slide in at Attest (0.1s stagger); carbon node + investor chip fade in (0.3s).
- Stages 5–7 cascade after merge; returns fan draws from bulb looping back (0.4s).
- Lime pulse travels diagonal, splits into 3 at Generate, recombines, lights bulb (3s). Violet capital-loop pulse runs agent→`$AMP`→investor→dividend (4s loop).
- Ambient `$AMP` tokens drift (2s loop); clouds drift (8s loop).

## Speaker notes
> "Cara kerjanya dari sisi desa dulu. Warga desa mengajukan proposal dan tanda tangan perjanjian — itu gerbang masuknya, supaya regulasi aman. Lahan rumahnya jadi tempat perangkat AMPERA; rumah itu jadi agen, dapat subsidi listrik tiap bulan. Tetangganya tinggal nyambung ke perangkat dan bayar listrik murah langsung dari sumber, tanpa perantara. Di belakang, satelit mendeteksi, edge memvalidasi, lalu Generate bercabang tiga — surya, piko-hidro, biomassa — dipilih per desa. Setiap kWh yang keluar ditokenisasi jadi `$AMP`. Dan penting: `$AMP` bukan panel fisiknya, bukan juga listrik mentahnya — ia adalah hak atas energi yang dihasilkan. Investor siapapun bisa ikut mulai Rp2rb lewat Wadah Bersama — tanpa biaya transaksi, cukup verifikasi identitas sekali — lalu dapat 4 bagi hasil: energi dari desa, bagian diesel PLN, karbon, dan insentif ESG. Harga $AMP di-derive agen AI otonom dari yield riil, bukan spekulatif. Tujuh langkah, satu loop tertutup, semua terverifikasi."

## Source footnote
Sumber: proposal-ampera-3x-final.html §7.1–7.4 (unit kepemilikan digital, tokenomics, distribusi imbal hasil); POJK 17/2025 (ECF), POJK 27/2024 jo 23/2025 (AKD).
