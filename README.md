# INCIDO GEN 3.0 — Interactive Slide-Deck Sponsorship Proposal

Official interactive sponsorship proposal website for **INCIDO GEN 3.0**, the flagship creative media initiative organized by the **Media Unit of Sri Lanka Technology Campus (SLTC)**.

---

## 1. Design & Architectural Inspiration (`decodextreme-2026-proposal.vercel.app`)

Modeled directly on the multi-page interactive presentation deck pattern of **DecodeXtreme 2026**, this application divides the official INCIDO GEN 3.0 Sponsorship Proposal into **20 structured presentation pages (`#slide-1` to `#slide-20`)** inside a frosted glassmorphic deck shell (`backdrop-filter: blur(22px)`) over a live WebGL `LiquidChrome` ambient shader background:

- **Full-Viewport Frosted Presentation Frame**: Centered `1392px` rounded container (`border-radius: 30px`) with subtle inner white borders and soft elevation.
- **Persistent Slide Header (Pages 02–20)**:
  - Dual brand identity featuring both the **INCIDO GEN 3.0** logo (`/incido-logo.png`) and the **SLTC Media Unit** logo (`/media-unit-logo.png`).
  - **Contents Popover Drawer** (`Contents (20 Pages)`) for instant jumping to any slide.
  - **Download As PDF** button for the official proposal document.
- **Interactive Slide Footer & Keyboard Navigation**:
  - **Back** and **Next** navigation buttons.
  - Live progress counter (`01 / 20`) and interactive pagination dots.
  - Full **Left / Right Arrow Key (`←` / `→`)** keyboard navigation and browser URL hash synchronization (`#slide-1` through `#slide-20`).

---

## 2. The 20 Proposal Pages

1. **Slide 01 — Landing Page**: Cover slide featuring the grand finale pill (`19 December 2026`), official `INCIDO GEN 3.0` hero logo, primary CTAs (*Get Started*, *Download As PDF*, *View Packages*), and the `Organised by` showcase with the official **Media Unit — Sri Lanka Technology Campus** logo (`/media-unit-logo.png`).
2. **Slide 02 — Table of Contents**: Interactive 2-column numbered directory (`01`–`20`) to jump directly to any page.
3. **Slide 03 — What is the SLTC Media Unit?**: Split editorial prose & logo showcase panel featuring the official **SLTC Media Unit** logo, founding history (`2016` by Mr. Vinol Fernando), and key milestones.
4. **Slide 04 — The Six Committees of the SLTC Media Unit**: Overview grid of all 6 specialized committees.
5. **Slide 05 — Committee Responsibilities — Media & Stage**: Detailed breakdown of the Photography (`1.2.1`), Videography (`1.2.2`), and Compering (`1.2.3`) committees.
6. **Slide 06 — Committee Responsibilities — Visual, Editorial & Operations**: Detailed breakdown of the Design (`1.2.4`), Editorial & Report Writing (`1.2.5`), and Event Management (`1.2.6`) committees.
7. **Slide 07 — Previous INCIDO Projects — GEN 1.0 & GEN 2.0**: Evolution of the initiative from `INCIDO GEN 1.0` and `INCIDO GEN 2.0` to `INCIDO GEN 3.0`.
8. **Slide 08 — INCIDO GEN 3.0 — Project Overview**: Split prose & symbol showcase plus 3 key scope cards (*04 Creative Fields*, *All SLTC Undergraduates*, *19 December 2026*).
9. **Slide 09 — Four Creative Competition Fields**: Dedicated cards for *Photography*, *Videography*, *Graphic Design*, and *Compering* with their *Most Talented* and *Most Popular* award tracks.
10. **Slide 10 — Objectives of INCIDO GEN 3.0**: The 3 core objectives from Section 3.2 of the proposal.
11. **Slide 11 — Event Structure and Planned Activities**: The 6 planned activity stages (*Awareness Sessions*, *Online & Physical Sessions*, *Workshops*, *Online Competitions*, *Most Popular Voting*, and *Grand Finale*).
12. **Slide 12 — Proposed Project Timeline**: Numbered timeline rows from Registration Opening (`17 November 2026`) to the Grand Finale (`19 December 2026`).
13. **Slide 13 — Grand Finale — 19 December 2026**: Full run-of-show schedule (`8.30 AM – 4.30 PM`) at the **SLTC Padukka premises**.
14. **Slide 14 — Why Partner with INCIDO GEN 3.0?**: 6 strategic sponsorship value pillars in a 2×3 glass card grid.
15. **Slide 15 — Advantages to Participants**: Section 5.1 numbered impact list (*Skill Development*, *Creative Expression*, *Industry Exposure*, *Recognition & Appreciation*, *Community Engagement*).
16. **Slide 16 — Advantages to Sponsors**: Section 5.2 numbered sponsor deliverables list.
17. **Slide 17 — Sponsorship Packages & Benefits Matrix**: 4 tier cards (**Title Partner — LKR 20,000**, **Diamond Partner — LKR 15,000**, **Gold Partner — LKR 10,000**, **Silver Partner — LKR 5,000**) above the complete 13-row benefits comparison matrix.
18. **Slide 18 — Specialized Partnerships — Event & Experience**: Categories `01`–`05` (*Clothing, Gift & Prize, Printing, Food & Beverage, Knowledge Partner*).
19. **Slide 19 — Specialized Partnerships — Production & Digital**: Categories `06`–`09` (*Camera & Photography Equipment, Technology, Venue & Facility, Digital Media & Promotional Partner*) with full contribution bullet lists.
20. **Slide 20 — Contact Us & Partnership Inquiries**: 4 organizing committee contact cards (*Amila Fernando*, *W.G. Tashmi Devanjanee*, *Ravishka Rathnayake*, *Chanupa Niduwara*), pre-addressed email inquiry composer, and official social media channels with the SLTC Media Unit logo.

---

## 3. Local Development & Build

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
