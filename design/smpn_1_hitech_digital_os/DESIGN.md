---
name: SMPN 1 Hitech Digital OS
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-page: 40px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The design system is engineered to project an image of academic excellence fused with cutting-edge technological integration. The brand personality is **Innovative, Professional, and Forward-looking**, catering to a generation of digital natives while maintaining the accessibility required for an educational institution.

The visual style is a **Modern-Hitech** interpretation, utilizing a refined **Glassmorphism** approach. It avoids the clutter of traditional "sci-fi" interfaces in favor of a clean, systematic layout. Key aesthetic drivers include:
- **Depth through Transparency:** Using blurred background layers to signify hierarchy.
- **Luminous Accents:** Subtle neon glows and borders that highlight interactive pathways.
- **Precision Engineering:** Sharp alignment, monospaced data points, and a "Command Center" feel for navigation.

## Colors

This design system utilizes a "Deep Space" palette to minimize eye strain and maximize the impact of high-tech accents. 

- **Primary Canvas:** #0F172A (Deep Navy) serves as the foundation.
- **Surface Elevation:** #1E293B (Midnight Blue) is used for cards and containers to create structural separation.
- **Action & Tech:** #3B82F6 (Electric Blue) and #06B6D4 (Cyan) are used for primary interactions, links, and "active" states.
- **The PPDB Call-to-Action:** #F59E0B (Amber) is reserved strictly for the "Penerimaan Peserta Didik Baru" (PPDB) and high-priority alerts to ensure immediate visual conversion.
- **Growth & Success:** #10B981 (Emerald) signifies positive data trends and completed academic milestones.

## Typography

The typography strategy balances modern approachability with technical precision. 

- **Headings:** **Plus Jakarta Sans** provides a bold, geometric character that feels welcoming yet contemporary. 
- **Body Text:** **Inter** is utilized for its exceptional legibility at all sizes, ensuring that academic content is easily consumed.
- **Data & Labels:** **JetBrains Mono** (or a similar monospaced font) is used for UI labels, statistics, and metadata to reinforce the "Hitech" identity and data-driven nature of the institution.

## Layout & Spacing

The layout follows a strict **12-column fluid grid** for the main content area, with a fixed sidebar "Command Center" on larger screens.

- **Rhythm:** An 8px base unit governs all dimensions.
- **Vertical Stack:** Use `stack-md` between standard sections and `stack-lg` for major thematic shifts in the UI.
- **Grid Alignment:** Elements should align to the grid with a 24px gutter. Cards and interactive modules should use generous internal padding (min 24px) to maintain a clean, airy feel despite the dark theme.

## Elevation & Depth

This design system replaces traditional shadows with **Tonal Layering** and **Luminous Borders**:

- **Level 1 (Base):** Deep Navy (#0F172A).
- **Level 2 (Cards):** Midnight Blue (#1E293B) with a 1px border of 10% white opacity.
- **Level 3 (Pop-overs/Modals):** Background blur (Backdrop-filter: blur(12px)) with a 1px border of 20% Electric Blue.
- **Active State Glow:** Primary interactive elements utilize a `0px 0px 15px` outer glow in their respective accent color (Cyan or Electric Blue) when hovered or active to simulate a holographic effect.

## Shapes

The shape language is "Squircle-based" to bridge the gap between technical rigidity and educational accessibility.

- **Standard Radius:** 8px (0.5rem) for most cards and input fields.
- **Large Radius:** 16px (1rem) for major dashboard containers.
- **Interactive Elements:** Buttons use a slightly more aggressive rounding (8px) or can be pill-shaped for secondary navigation tags.

## Components

### Buttons & Inputs
- **Primary Button:** Solid Electric Blue with bold white text. Hover state includes a scale transform (1.02) and a subtle Cyan glow.
- **PPDB Action:** Solid Amber gradient (#F59E0B to #D97706) to ensure high visibility.
- **Glass Input:** Midnight Blue background with a 1px Cyan border on focus. Placeholders should be low-contrast (40% white).

### Cards & Data
- **Hitech Card:** Midnight Blue base, 1px border, and a subtle "Data Scan" animation (a faint horizontal line moving vertically) for featured statistics.
- **Counters:** Large Display-size numbers for "Jumlah Siswa" or "Prestasi," utilizing JetBrains Mono for a numeric, technical feel.

### Navigation (The Command Center)
- **Top/Side Bar:** Semi-transparent Midnight Blue with a high backdrop blur. 
- **Active Indicators:** A vertical Cyan line to the left of the active menu item, accompanied by a subtle inner glow.
- **Search:** A persistent "Command-K" style search bar at the top with a monospaced "Cari..." placeholder.

### Lists & Tables
- **Zebra Striping:** Use tonal shifts (Deep Navy vs Midnight Blue) instead of borders to separate rows.
- **Status Chips:** Small, monospaced labels with low-opacity background fills (e.g., 10% Emerald for "Aktif").