# shaikhathegreen.github.io

Personal academic site for **Dr. Shaikha Alkhadhr** — Faculty, Department of Information Sciences, Kuwait University; Penn State PhD.

**Live:** https://shaikhathegreen.github.io/

## Stack

- Pure static HTML + CSS + a sprinkle of vanilla JS (no build step)
- Served by GitHub Pages directly from `main`
- `.nojekyll` disables Jekyll processing
- Apple-style typography (system font stack) on a KU navy + gold / PSU navy palette

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## What to fill in next

The current v1 reflects only facts visible in your public repos. To extend the
site, send the content for any of these and a new section will be added:

| Section to add | What I need from you |
|---|---|
| **Publications** | Google Scholar URL, or a list (title · venue · year · DOI / link) |
| **Talks & invited lectures** | Title, venue, year for each |
| **Supervised students** | Name, level (BSc/MSc/PhD), topic, year |
| **Certifications** | Name + issuer + year |
| **Headshot** | Drop a square photo at `assets/img/headshot.jpg` and uncomment the `<img>` line in `index.html` |
| **CV PDF** | Drop at `assets/cv.pdf` and a download button will be added |

## File structure

```
shaikhathegreen.github.io/
├── index.html              # Single-page site
├── 404.html
├── assets/
│   ├── css/style.css       # Design system + layout
│   └── img/                # Drop headshot.jpg here
├── .nojekyll               # Skip Jekyll, serve files as-is
├── LICENSE                 # MIT (covers the site code, not the content)
└── README.md
```

## License

The site **code** is MIT-licensed. The **content** (bio, photos, research
descriptions) is © Shaikha Alkhadhr and not licensed for reuse.
