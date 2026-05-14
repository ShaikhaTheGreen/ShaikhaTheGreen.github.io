# shaikhathegreen.github.io

Personal academic site for **Dr. Shaikhah Alkhadhr** — Assistant Professor, Department of Information Science, Kuwait University. Ph.D. in Computer Science and Engineering, Penn State (2023).

**Live:** <https://shaikhathegreen.github.io/>

## Stack

- Pure static HTML + CSS + vanilla JS — **no build step, no framework, no third-party JavaScript**
- Served by GitHub Pages directly from `main` (`.nojekyll` disables Jekyll processing)
- HTTPS enforced with year-long HSTS
- Apple-style typography (system font stack) on a KU navy + gold × PSU navy palette
- Total page weight ≈ 250 KB including the headshot

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No `npm install`, no compile step. Edits to `index.html`, `assets/css/style.css`, or `assets/js/site.js` are live on next browser refresh.

## File structure

```
shaikhathegreen.github.io/
├── index.html                       # Single-page site
├── 404.html                         # Branded not-found page
├── .nojekyll                        # Skip Jekyll processing
├── LICENSE                          # MIT (covers the site code, not the content)
├── README.md
└── assets/
    ├── css/style.css                # Design system + layout (~580 lines)
    ├── js/site.js                   # Footer year + reveal-on-scroll
    └── img/
        ├── headshot.jpg             # 600×800, ~104 KB
        ├── ku-lockup.svg            # KU horizontal lockup, dark text variant
        └── psu-coe-lockup.png       # Penn State College of Engineering lockup
```

## Sections

Single-page layout with sticky nav. Sections in order: **Hero · About · Education · Research · Publications · Teaching · Student Projects · Advising · Experience · Certifications · Contact**.

Each section is self-contained — adding a new one is one `<section>` block in `index.html` plus a nav link. Re-deploys on every `git push` to `main` (Pages rebuild takes ~30 seconds).

## Design system

CSS custom properties at the top of `style.css` define the palette and type tokens:

```css
--navy:    #0A2240   /* unified KU/PSU navy */
--gold:    #C9A227   /* KU gold accent */
--ink:     #1D1D1F   /* Apple primary text */
--bg:      #FBFBFD   /* Apple page bg */
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", ...
--font-serif: "New York", "Iowan Old Style", Georgia, ...
```

Everything else (hover gold-underline animation, card hover lift, sticky nav blur, hero portrait gradient, reveal-on-scroll) derives from these tokens. Edit the tokens to re-skin the entire site in one place.

## Security posture

This site is built with a static-first philosophy, which already eliminates most web-app attack surface (no backend, no user input, no auth, no third-party JS). On top of that:

- **Strict Content Security Policy** in `<meta>`: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'; upgrade-insecure-requests`. No inline scripts; all JS lives in `assets/js/site.js`.
- **Other security meta**: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Branch protection** on `main`: force-push and deletion blocked, admin enforcement on.
- **GitHub Pages** serves `Strict-Transport-Security: max-age=31556952` (≈1 year).
- **Secret scanning + push protection** enabled on the repo. Dependabot alerts enabled.
- **Email obfuscation** (`_at_` instead of `@`) in the Contact card.
- Issues + Wiki **disabled** — no extra surfaces, no spam intake.

## License

The site **code** (HTML, CSS, JS, structure) is MIT-licensed — see [LICENSE](LICENSE). Reuse it freely.

The site **content** (bio, photos, research descriptions, publication list, student data) is © Shaikhah Alkhadhr and not licensed for reuse. Swap out the content with your own when forking.

---

## Author

**Dr. Shaikhah Alkhadhr** — Assistant Professor, Department of Information Science, Kuwait University. Ph.D. in Computer Science and Engineering, Penn State (2023).

- Personal site: <https://shaikhathegreen.github.io>
- KU faculty page: <https://www.ku.edu.kw/user/2227>
- ORCID: [0000-0001-5938-2953](https://orcid.org/0000-0001-5938-2953)
- GitHub: [@ShaikhaTheGreen](https://github.com/ShaikhaTheGreen)
