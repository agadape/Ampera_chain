# Agent Deep Research — Ampera (PLN ICE 2026)

> Deep research otomatis untuk pitch deck **Ampera — "Jembatan Energi untuk Nusantara"** (PLN ICE 2026 Startup Competition).
> Metode: ReAct agent loop (search -> visit -> ekstraksi evidence -> sintesis) berbasis pipeline [Alibaba-NLP/DeepResearch](https://github.com/Alibaba-NLP/DeepResearch) dalam **gateway mode ringan** (tanpa GPU lokal), dengan model `kilo-auto/free` via gateway OpenAI-compatible, web search Serper.dev, dan page reader Jina.ai.
> Prompt sumber: `PROMPT-RESEARCH-PITCH-DECK.txt` (9 modul riset, prioritas KRITIS -> RENDAH).

## Status Modul

| # | Modul | Prioritas | Status | Termination | URL visit |
|---|---|---|---|---|---|
| [01. Verifikasi Data Desa Belum Terlistriki (Problem Slide)](01-MODUL-1-VERIFIKASI-DESA-BELUM-LISTRIK.md) | KRITIS | answer | `answer` | 17/34 |
| [02. Verifikasi Unit Economics 3 Sumber Energi (Business Model Slide)](02-MODUL-2-UNIT-ECONOMICS-3-SUMBER-ENERGI.md) | KRITIS | answer | `answer` | 4/10 |
| [03. Carbon Credit & SDG Metrics (ESG Slide + Revenue Model)](03-MODUL-3-CARBON-CREDIT-DAN-SDG-METRICS.md) | KRITIS | answer | `answer` | 8/16 |
| [04. Program & Regulasi Energi Indonesia 2025-2026 (PLN Relevance)](04-MODUL-4-PROGRAM-DAN-REGULASI-ENERGI-2025-2026.md) | TINGGI | answer | `answer` | 4/8 |
| [05. Regulasi OJK & Blockchain/RWA Status (Compliance Moat)](05-MODUL-5-REGULASI-OJK-DAN-BLOCKCHAIN-RWA.md) | TINGGI | answer | `answer` | 15/30 |
| [06. Landscape Pesaing & Global Benchmark (Market Slide)](06-MODUL-6-LANDSCAPE-PESAING-DAN-GLOBAL-BENCHMARK.md) | TINGGI | answer | `answer` | 11/43 |
| [07. Detail Teknis AI Trinity & Satellite/CV (Tech Slide)](07-MODUL-7-DETAIL-TEKNIS-AI-TRINITY-DAN-SATELIT.md) | SEDANG | answer | `answer` | 0/0 |
| [08. Kelayakan Finansial & Proyeksi (Financial Slide)](08-MODUL-8-KELAYAKAN-FINANSIAL-DAN-PROYEKSI.md) | SEDANG | answer | `answer` | 6/12 |
| [09. Brand Assets & Design Reference (Design Slide)](09-MODUL-9-BRAND-ASSETS-DAN-DESIGN-REFERENCE.md) | RENDAH | answer | `answer` | 10/20 |

## File Output

- **Rekap seluruh URL yang dikunjungi/dicari**: [URLS-DIKUNJUNGI.md](URLS-DIKUNJUNGI.md)
- Per-modul report: lihat tabel di atas (klik judul modul).

> **Catatan kualitas**: angka yang tidak ditemukan sumbernya ditulis `not found` oleh agent; setiap angka disertai tingkat kepercayaan HIGH/MEDIUM/LOW. Verifikasi silang manual tetap disarankan sebelum dipakai di deck final.
