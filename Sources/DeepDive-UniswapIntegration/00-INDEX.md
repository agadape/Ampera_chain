---
tags: [ampera, uniswap-v4, adoption, index, jalan-2]
---

# INDEX — Deep Dive Adopsi Uniswap v4 ke AMPERA (Jalan 2)

> Folder: `PLN-StartUp-AetherSolar/Results/DeepDive-UniswapIntegration`
> Tujuan: gali 11 adopsi inti dari inovasi Fluxa (Uniswap v4 hook) ke AMPERA PLN ICE 2026 — Jalan 2 (adopsi Uniswap sungguhan + rebrand sebagai regulated on-chain RWA fintech).

## Daftar adopsi (1 file = 1 adopsi)
| # | File | Adopsi | Peran di thesis Jalan 2 |
|---|---|---|---|
| 01 | `01-hook-base-custom-accounting.md` | BaseCustomAccountingHook (OZ) | Primitive penegak aturan on-chain |
| 02 | `02-singleton-flash-accounting.md` | Singleton + flash accounting | Ratusan pool per-desa, gas murah |
| 03 | `03-internal-swap-pool.md` | Internal Swap Pool | Capture yield → route ke investor (Mode A) |
| 04 | `04-return-delta-ai-pricing.md` | beforeSwapReturnDelta (custom curve) | AI-inferred pricing `$AMP` tanpa oracle (Mode B) |
| 05 | `05-dynamic-fees.md` | Dynamic fee | Risk-tier per desa |
| 06 | `06-bid-wall-floor.md` | Bid wall (single-tick floor) | Lindungi floor price mikro-investor |
| 07 | `07-autonomous-agent-stack.md` | ERC-7857 + ERC-8004 + ERC-8183 | Regulated Autonomous Asset Manager (AI) |
| 08 | `08-standard-hook-events.md` | HookSwap / HookFee | Audit trail publik = bukti anti-korupsi |
| 09 | `09-erc6909-lp-shares.md` | ERC-6909 LP shares | Kepemilikan fraksional `$AMP` on-chain |
| 10 | `10-compliance-allowlist-hook.md` | Compliance/Allowlist hook | Gating jurisdiksi/KYC (securities law) |
| 11 | `11-routing-tao-cow-intent.md` | Tao / CoW intent | Eksekusi MEV-protected, akses global |
| 12 | `12-supporting-infra-attestation.md` | Chronicle + TEE + EigenLayer AVS | Infra pendukung: buat Mode B & reputasi agent jadi jujur |

## Infra pendukung (file tersendiri)
- **`12-supporting-infra-attestation.md`** — Chronicle oracle + TEE + EigenLayer AVS. Jembatan off-chain→on-chain yang membuat Mode B & reputasi agent dapat diaudit. Ini penjaga kredibilitas klaim "100% transparan".

## Tiga pilar thesis Jalan 2 (tiap adopsi menyumbang ≥1)
- **Transparansi 100%** → 02, 03, 08, 09, 10
- **Regulated AI** → 04, 07, 10
- **Investor global** → 02, 09, 10, 11

## Catatan regulasi (jangan dilewatkan di pitch)
Token di DEX = aset kripto di mata OJK/Bappebti. Klasifikasi bergeser dari ECF/AKD ke ranah aset kripto — bukan sekadar rebrand. Adopsi `10` (compliance hook) + `07` (sandbox OJK, bukan cuma standard) merespons ini. Lihat `ampera_adopsi_jalan2_uniswap` di memory.

## Sumber utama (vault `AtriumAcademy-Uniswap`)
`Trending-Boosted-Inovation-Uniswap/01,03,08` · `Module-Guides/02,04,05,06` · `MainProject/08 - PRD.md` · slide `Visualize/ppt/EachSlide/07,08,12`.
