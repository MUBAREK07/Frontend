<!-- Copilot instructions for this codebase. Keep concise and actionable. -->
# Copilot / AI Agent Instructions

Purpose: Help an AI developer agent be productive quickly in this simple static frontend project.

Quick overview
- This is a static site (no build step). Key files: `index.html`, `style.css`, `script.js`, and `images/`.
- There is a small Node helper at `scripts/optimize-images.js` (runs locally using `sharp`).

What to preserve and why
- `index.html` contains a tiny inline head script that applies the chosen theme early to prevent FOUC; do not remove or relocate that script.
- Two logo images (`#light-logo` and `#dark-logo`) are toggled instead of replaced — prefer toggling visibility/css rather than swapping DOM nodes.

Important conventions & patterns
- Theme: the page uses a `dark` class applied to `documentElement` and `body`. Functions to look for: `applyThemeState()` / `setTheme()` in `script.js` (use these to toggle/persist theme).
- Header: scroll state is toggled by adding `.header.scrolled` (debounced via requestAnimationFrame). Keep rAF-based scroll handling to avoid jank.
- Images: thumbnails use `loading="lazy"/"eager"`, `fetchpriority`, `decoding="async"` and explicit `width`/`height`. `renderPortfolio()` in `script.js` marks the first N images as eager/high priority — keep that logic when changing portfolio rendering.
- Data: portfolio items are defined in `script.js` (variable `portfolioData`). Edit content there rather than scattering metadata across files.

Performance & UX notes (codify, don't remove)
- Preload and preconnect hints are in `index.html` for fonts and key images—keep those for perceived performance.
- The project relies on IntersectionObserver and idle/idle-like preloading for non-critical assets; preserve or improve instead of removing.

Local developer workflows
- Preview: open `index.html` in a browser (no server required for static testing).
- Image optimizer (optional):
```bash
npm init -y
npm install sharp glob minimist
node scripts/optimize-images.js --input=images --output=images/optimized --quality=82 --overwrite=false
```

Files to edit for common tasks
- Add/replace images: `images/` (filenames are referenced directly from `script.js` and HTML). Ensure dimensions and aspect ratios match CSS reserved space.
- Update styles: `style.css` (use CSS variables; dark-mode variants use `.dark` selector).
- Update behavior/content: `script.js` (theme, portfolio data, nav handlers, image loading/rendering).

Debugging tips
- Console: check for missing image 404s (images must be added manually to `images/`).
- Visual regressions: test both `prefers-color-scheme` and manual theme toggle (localStorage 'theme' key). Look for FOUC if the inline head script is changed.

What not to change lightly
- Don't remove the inline theme-init script in the head or the initial preload hints; they exist to avoid a flash-of-unstyled-theme and improve perceived load speed.
- Don't refactor image-loading to remove `width`/`height` attributes (they prevent CLS).

If you're unsure, ask the maintainer which image filenames to use or whether to generate responsive `srcset` variants; the repo includes an optimizer script but not automatic `srcset` generation.

Feedback request
- If anything above is unclear or you need examples of the patterns, tell me which area (theme, portfolio data, image handling, header scroll) and I'll add a one-file example.
