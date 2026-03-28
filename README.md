# Emulator Site

A retro-styled multi-page static website focused on classic gaming emulators, ROM discovery, guides, and homebrew highlights.

## Live Pages
- Main page: `index.html`
- Sections: `emulators.html`, `roms.html`, `guides.html`, `homebrew.html`, `about.html`

## Tech Stack
- HTML5
- CSS3 (custom retro theme + Bootstrap 5)
- Vanilla JavaScript
- GitHub Actions for Pages deployment

## Project Structure
- `index.html` - Home page, featured carousel, hero media/contact section
- `emulators.html` - Emulator-focused content
- `roms.html` - ROM catalog content
- `guides.html` - Setup and usage guides
- `homebrew.html` - Homebrew content and highlights
- `about.html` - About page
- `css/style.css` - Main styling and theme definitions
- `js/script.js` - Dynamic behavior (cards, embed config, keyboard controls)
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow
- `.nojekyll` - Ensures static files are served without Jekyll processing

## Features Implemented
- Retro pixel-art visual identity
- Responsive navigation and layout
- Featured carousel with manual controls
- Keyboard carousel controls (`ArrowLeft`, `ArrowRight`, `L`, `R`)
- Embedded YouTube section in hero area
- Contact CTA via email (`mailto:nawar.joud@gmail.com`)
- Accessibility/readability improvements:
  - High-contrast text palette
  - Reduced dim overlays
  - Focus-visible outlines for keyboard users

## From Zero to Current State (Build Timeline)
1. Initialized a clean static site with multi-page navigation and shared assets.
2. Built the core retro theme and page structure.
3. Added the featured carousel section and card content.
4. Replaced the original hero Start button with embedded YouTube media.
5. Fixed local embed behavior by serving via localhost and dynamic origin handling.
6. Redesigned carousel arrows to retro style and moved them to section edges.
7. Added polish effects: scanline visual treatment, hint text, keyboard interaction.
8. Performed multiple readability and contrast passes to improve eye comfort.
9. Switched hero CTA from channel button to direct email contact.
10. Connected local project to GitHub and synchronized repository content.
11. Added GitHub Actions workflow for automated GitHub Pages deployment.
12. Diagnosed access issues and confirmed VPN/firewall TLS interference as root cause.

## Deployment (GitHub Pages via Actions)
1. Open repository Settings -> Pages.
2. Set Source to **GitHub Actions**.
3. Push to `main`.
4. GitHub Actions deploys the site automatically.

## Local Development
Run a local server from project root:

```powershell
python -m http.server 5500
```

Open:

```text
http://localhost:5500/index.html
```

## Notes
- If styles appear stale, reload with a cache-busting query or hard refresh.
- If `github.io` fails to load under VPN, allowlist GitHub Pages domains in your VPN/firewall.
