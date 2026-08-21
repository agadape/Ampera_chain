# Slide 00 — Design System & Visual Language

> Shared design contract for every Ampera pitch-deck slide. Read this before building any slide.

---

## 1. Brand North Star

**Ampera** — *Jembatan Energi untuk Nusantara.*

A bridge between capital and community, between renewable resource and real kilowatt, between PLN and the 10,068 villages still in the dark.

The deck must feel like the intersection of three worlds, never just one:

1. **Future / Deep-tech** — satellite AI, edge compute, tokenized assets. *Signal: violet `#7D39EB`, clean grids, thin luminous lines.*
2. **Green / SDG** — land, water, sunlight, carbon. *Signal: greens `#00804C`, `#74C365`, `#C6FF33`, organic contours, aerial photography.*
3. **Fintech / Business** — trust, ROI, governance, regulation. *Signal: midnight blues `#001F3F`, `#1E488F`, `#F6F7ED` paper, sharp data charts.*

**Anti-north-star (do NOT look like):** dark neon cyberpunk, terminal/green-on-black hacker UI, generic tech-startup gradient mush, IT-only aesthetic. The audience is PLN executives, ESDM, investors, juri kompetisi — they want credibility + hope, not a sci-fi poster.

---

## 2. Color Palette (locked)

| Token | Hex | RGB | Role |
|---|---|---|---|
| Black | `#000000` | 0,0,0 | Primary text, hero backgrounds, grounding |
| Violet | `#7D39EB` | 125,57,235 | Innovation / AI / fintech accent (sparingly, high impact) |
| Lime | `#C6FF33` | 198,255,51 | Energy / CTA / highlight pulse (smallest area, loudest) |
| White | `#FFFFFF` | 255,255,255 | Negative space, light slides |
| Praxeti White (Paper) | `#F6F7ED` | 246,247,237 | Default content-slide background (warm paper) |
| First Colors of Spring | `#DBE64C` | 219,230,76 | Soft accent / chart secondary |
| Midnight Mirage | `#001F3F` | 0,31,63 | Deep section dividers, footer bar, "trust" panels |
| Mantis | `#74C365` | 116,195,101 | Sustainability / growth charts |
| Picture Book Green | `#00804C` | 0,128,76 | Primary green / EBT / Earth pillar |
| Nuit Blanche | `#1E488F` | 30,72,143 | Secondary blue / data / PLN partnership |

### 2.1 Color rules

- **70 / 20 / 10 within a slide:** ~70% background (paper / midnight / white), ~20% primary brand block (green or midnight), ~10% accent pulse (lime or violet). The 70/30 visual-vs-text rule is *separate* (see §4).
- **Never** mix violet + lime in equal areas — they clash. Violet is AI/finance; lime is energy/CTA. Pick one lead accent per slide.
- **Green family** (`#00804C`, `#74C365`, `#DBE64C`, `#C6FF33`) = Earth/EBT slides. **Blue family** (`#001F3F`, `#1E488F`) = business/PLN/trust slides. **Violet** reserved for AI/tech/deep-innovation slides.
- Dark slides (`#001F3F` / `#000000`) get white text + one accent. Light slides (`#F6F7ED` / `#FFFFFF`) get black text + green/blue blocks.
- Charts: use `#00804C` (series 1), `#1E488F` (series 2), `#74C365` (series 3), `#DBE64C` (series 4), `#7D39EB` (series 5 / outlier). Avoid red — we use "Midnight Mirage → Black" gradient for negative/contrast bars.

### 2.2 Approved gradients

- `linear-gradient(135deg, #001F3F 0%, #1E488F 100%)` — trust/hero dark.
- `linear-gradient(135deg, #00804C 0%, #74C365 60%, #C6FF33 100%)` — energy/growth, only for the "Ampera" wordmark or CTA fills.
- `linear-gradient(135deg, #7D39EB 0%, #1E488F 100%)` — AI/innovation dark.
- Subtle paper texture: `#F6F7ED` with 3% noise + faint topographic contour lines at 6% `#00804C` opacity. This is the "land" signal without being literal.

---

## 3. Typography

| Use | Family | Weight | Size (1920×1080) |
|---|---|---|---|
| Display / Hero | **Plus Jakarta Sans** | 800 | 64–96 px |
| Slide Title (H2) | Plus Jakarta Sans | 700 | 40–48 px |
| Body / Caption | **Inter** | 400/500 | 18–22 px |
| Data / KPI number | Inter (tabular) | 800 | 56–88 px |
| Micro-label / tag | Inter | 600 uppercase, tracking +0.12em | 12–13 px |
| Source footnote | Inter | 400 italic | 11 px |

- Fallback stack: Plus Jakarta Sans → Manrope → system.
- Numbers are always tabular-figures, never default-proportional.
- Headlines are **punchy, short, declarative** — never a full sentence if a fragment works. Max ~7 words.

---

## 4. Layout Grid & the 70 : 30 Rule

**Every content slide is 70% visual, 30% text.** Enforced via a 12-column grid:

- Slide canvas: 1920×1080, 64 px outer margin, 8 px baseline grid.
- **Text zone = 30%** → a fixed text rail (left 4/12 columns OR right 4/12, depending on slide) containing: eyebrow tag, H2 title, ≤3 short body lines, optional source line. **~35–45 words max on-slide** (tightened from earlier 45–60). The text rail holds NO data tables, NO bullet lists of metrics — only the eyebrow + H2 + body + source.
- **Visual zone = 70%** → the dominant 8/12 columns: a chart, map, diagram, isometric scene, or photographic plate. This is the slide's "hero object."
- **`Data to visualize` tables in each slide spec are ALWAYS rendered as visual elements** — chips on timelines, nodes on maps, bars in charts, KPI cards, badges. They are NEVER dumped as text rows in the text rail. If a table has 5+ data rows, those rows become 5 visual chips/labels on the hero object, not a text block.
- One slide = one idea. If two charts are needed, one is a small inset inside the visual zone, not a second text block.
- Slide numbering: bottom-right, `#1E488F` micro-label `08 / 20`. Footer brand bar: 6 px `#00804C` line full-width, with "AMPERA" micro-tag bottom-left.

### 4.1 Slide archetypes (reuse, don't reinvent)

- **A — Hero / Cover / Divider:** full-bleed image or gradient, centered wordmark, one tagline.
- **B — Big-stat:** one giant KPI number (visual 70%), 1-line context (text 30%).
- **C — Split scene:** left text rail, right photographic plate with duotone.
- **D — Diagram:** center diagram fills 70%, labels minimal, text rail explains.
- **E — Data chart:** 70% chart, 30% rail with takeaway sentence (not legend dump).
- **F — Comparison / matrix:** 2×2 or before/after, 70% grid visual.

---

## 5. Visual Objects & Motifs (the "library")

Build these once as reusable components, then compose slides from them.

1. **Ampera wordmark** — lowercase `ampera` in Plus Jakarta Sans 800, the dot of the second `a` replaced by a small lime circle (the "energy node"). On dark bg, fill white with lime node; on light bg, fill `#001F3F` with lime node.
2. **Energy node dot** — 8–16 px lime circle with soft outer glow (`box-shadow: 0 0 24px #C6FF3388`). Used to mark points on maps/diagrams ("a village, now lit").
3. **Topographic contour motif** — faint nested organic curves (SVG) in `#00804C` at 6–10% opacity. The "land/Nusantara" signal. Used on paper backgrounds, never over photos.
4. **Nusantara map** — stylized Indonesia archipelago silhouette (single path), hollow or paper-cut. Energy nodes glow on un-electrified villages.
5. **Pillar columns** — 3 vertical pillars (Flex / Earth / PLN) as rounded rectangles, each with a top icon, gradient cap (green / green-blue / blue respectively).
6. **Flow connector** — thin 2 px line, `#1E488F`, with a lime arrowhead + node-dot at each end. Used for pipelines/processes.
7. **Token chip** — small rounded pill showing `$AMP` (Ampera verified-asset token) with a faint violet ring — the fintech signal, used only on finance/token slides. Each `$AMP` = 1 verified kilowatt-hour of EBT generation, minted on-chain as a Real-World Asset (RWA) — no speculative crypto, only attested energy.
8. **Duotone photo treatment** — any photo gets `#001F3F` shadows + `#00804C`/`#74C365` highlights via blend, tinted ~25%. Keeps photos on-brand without being literal.
9. **KPI card** — paper card (`#FFFFFF` on `#F6F7ED`), 1 px `#74C365` top border, big tabular number, micro-label. The data-card primitive.
10. **Section ribbon** — 6 px `#00804C` line; on dark slides swap to `#C6FF33`.
11. **AI grid texture** — faint isometric dot-grid at 4% `#7D39EB`, used ONLY on AI/tech slides as the "compute" signal.
12. **Carbon leaf icon** — simple leaf glyph with a small down-arrow, `#00804C`, the carbon-savings unit marker.

---

## 6. Photography Direction

- **Subjects:** aerial drone of a remote village at golden hour; solar panels beside a green rice paddy; a small pico-hydro turbine by a river; children studying under a bulb at dusk; a rice farmer + a smartphone.
- **Treatment:** duotone (§5.8), slight desaturation, +6% warmth. Never stock-photo bright/corporate.
- **Crop:** wide cinematic 21:9 for hero plates; 4:3 for split-scene plates.
- **Avoid:** wind turbines on hills (cliché), hands-holding-globe, lightbulb-in-hands, generic "diverse team laughing."

---

## 7. Motion / Transitions (when animated)

- Default transition: 0.4s ease, no spinning cubes, no shutter.
- Energy node dots "pulse" (opacity 0.6→1→0.6, 2.5s loop) — only the active/illustrative ones, max 5 on screen.
- Numbers count up on entry (1.2s, ease-out) — for big-stat slides only.
- Diagram connectors draw in left-to-right, 0.6s stagger.
- No ambient particle systems, no scanlines, no glitch.

---

## 8. Accessibility & Export

- Min contrast 4.5:1 for body text (paper `#F6F7ED` + black passes; midnight + white passes).
- Charts never rely on color alone — add direct labels / icons.
- Export target: 1920×1080 PNG + editable Figma/Keynote source. PDF backup at 300 dpi.
- Every slide carries a source footnote where data is cited (small italic, `#1E488F` at 60% opacity).

---

## 9. Deck Roster (20 slides · aligned to PLN ICE pitch-deck guideline)

Roster maps every PLN-mandated section (§1–§12) to a slide. Solution depth is preserved across §3; the 4 added slides (02, 04, 14, 18) close the guideline gaps: Executive Summary, Target Customer, Market Size (TAM/SAM/SOM), and Penggunaan Dana.

| # | File | Title | PLN § | Archetype | Lead color |
|---|---|---|---|---|---|
| 01 | `01-Cover.md` | Ampera — Bridge of Energy | 1 Cover | A | Midnight + lime |
| 02 | `02-Executive-Summary.md` | One Bridge, One Sentence | 2 Exec Summary | C+ | Midnight + blue |
| 03 | `03-The-Problem.md` | 10,068 Villages, Bleeding Money | 3 Problem | E+B (map+stat) | Green→Midnight |
| 04 | `04-Target-Customer.md` | Tiga Pelanggan, Satu Kebutuhan | 6 Target Customer | C+ | Green→blue |
| 05 | `05-Why-Now.md` | The Window Is Open | 3 Solution/momentum | D (timeline) | Blue |
| 06 | `06-Introducing-Ampera.md` | One Bridge, Three Pillars | 3 Solution | D (pillars) | Green |
| 07 | `07-How-It-Works.md` | From Sky to Socket | 3 Solution | D (flow) | Blue |
| 08 | `08-AI-Tetrix.md` | AI Tetrix · Seeing the Unseen | 3 Solution | D (stack) | Violet |
| 09 | `09-Ampera-Flex.md` | Energy-Agnostic | 3 Solution | F (matrix) | Green |
| 10 | `10-Ampera-Earth.md` | Every Kilowatt, Accounted | 3 Solution | D (carbon) | Green |
| 11 | `11-Ampera-PLN.md` | Built With PLN, Not Against | 3 Solution | D (4-layer) | Blue |
| 12 | `12-Business-Model.md` | How Value Moves | 4 Business Model | D (flows) | Blue |
| 13 | `13-Unit-Economics.md` | The Numbers Per Kilowatt | 4 Business Model | E (charts) | Midnight |
| 14 | `14-Market-Size.md` | TAM · SAM · SOM | 7 Market Size | E (funnel) | Blue |
| 15 | `15-Competitive-Advantage.md` | Sudut yang Masih Kosong | 8 Competitive Advantage | F (2×2+table) | Violet |
| 16 | `16-Traction-Roadmap.md` | From 1 Village to 1,000 | 9 Growth Plan | D (roadmap) | Green |
| 17 | `17-Team-Governance.md` | The People Behind the Bridge | 10 Team | C (split) | Midnight |
| 18 | `18-Use-of-Funds.md` | 50 Juta, Satu Desa Terbukti | 11 Penggunaan Dana | E+ (budget) | Midnight + lime |
| 19 | `19-The-Ask.md` | Jembatan Dimulai dari Satu Desa | (CTA/strategic ask) | A (CTA) | Midnight + lime |
| 20 | `20-Closing-Cover.md` | Terima Kasih | 12 Closing Cover | A | Midnight + lime |

All files live in: `Visualize\ppt\EachSlide\`.
