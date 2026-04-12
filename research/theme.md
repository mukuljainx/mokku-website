# Mokku Website Dark Theme

Saved: 2026-04-12

## Design System

**Aesthetic:** Premium developer dark mode (Linear / Vercel inspired)  
**Accent color:** Violet (`oklch(0.62 0.24 295)` ≈ `#8b5cf6` violet-500)  
**Background:** Deep blue-black (`oklch(0.07 0.018 275)` ≈ `#0a0a14`)

---

## CSS Variables (`.dark` block in `src/index.css`)

```css
.dark {
  --background: oklch(0.07 0.018 275);       /* deep blue-black page bg */
  --foreground: oklch(0.97 0 0);             /* near-white text */
  --card: oklch(0.10 0.018 275);             /* card bg, slightly lighter */
  --card-foreground: oklch(0.97 0 0);
  --popover: oklch(0.10 0.018 275);
  --popover-foreground: oklch(0.97 0 0);
  --primary: oklch(0.62 0.24 295);           /* violet-500 accent */
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.14 0.018 275);
  --secondary-foreground: oklch(0.97 0 0);
  --muted: oklch(0.14 0.018 275);
  --muted-foreground: oklch(0.60 0 0);       /* slate-400 equivalent */
  --accent: oklch(0.62 0.24 295);            /* violet accent */
  --accent-foreground: oklch(0.98 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 8%);              /* subtle white border */
  --input: oklch(1 0 0 / 10%);
  --ring: oklch(0.62 0.24 295);             /* focus ring = violet */
  --sidebar: oklch(0.10 0.018 275);
  --sidebar-foreground: oklch(0.97 0 0);
  --sidebar-primary: oklch(0.62 0.24 295);
  --sidebar-primary-foreground: oklch(0.98 0 0);
  --sidebar-accent: oklch(0.14 0.018 275);
  --sidebar-accent-foreground: oklch(0.97 0 0);
  --sidebar-border: oklch(1 0 0 / 8%);
  --sidebar-ring: oklch(0.62 0.24 295);
}
```

## Tailwind Color Equivalents

| Role | Tailwind | Hex approx |
|------|----------|-----------|
| Page background | `bg-slate-950` | `#020617` |
| Card background | `bg-slate-900` | `#0f172a` |
| Border | `border-white/8` | rgba(255,255,255,0.08) |
| Primary accent | `bg-violet-600` / `text-violet-400` | `#7c3aed` / `#a78bfa` |
| Muted text | `text-slate-400` | `#94a3b8` |
| Subtle text | `text-slate-600` | `#475569` |

## Grid Background

```tsx
/* Violet grid lines + radial glow at top-center */
<div className="fixed inset-0 -z-10 bg-background">
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
</div>
```

## Key UI Patterns

- **Cards:** `rounded-xl border border-white/8 bg-white/3 p-6 hover:bg-white/5`
- **Primary button:** `bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/20`
- **Ghost button:** `border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10`
- **Section badge:** `border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs px-3.5 py-1.5 rounded-full`
- **Header:** `sticky top-0 border-b border-white/5 bg-background/80 backdrop-blur-xl`
- **Section heading:** `text-sm font-semibold text-violet-400 uppercase tracking-widest` (eyebrow) + `text-3xl md:text-4xl font-bold text-white tracking-tight` (h2)

## Accent Colors Used Per Component

| Component | Accent |
|-----------|--------|
| Primary CTA, rings, badges | `violet-400/500/600` |
| Added changelog tags | `emerald-400` |
| Fixed changelog tags | `amber-400` |
| Updated changelog tags | `sky-400` |
| Privacy section | `emerald-500` |
| Stats: rating | `amber-400` |
| Feature: Dynamic JS | `violet-400` |
| Feature: GraphQL | `pink-400` |
| Feature: Headers | `sky-400` |
| Feature: Workspaces | `amber-400` |
| Feature: Latency | `emerald-400` |
| Feature: Error states | `red-400` |
