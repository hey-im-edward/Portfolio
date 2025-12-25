# Hugo Portfolio Blog

> Portfolio + Blog chuyên nghiệp, minimal-design, hiện đại với Hugo

## 🚀 Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.153.0+
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) v20+ (cho linting)

### Installation

```bash
# Clone repo
git clone https://github.com/hey-im-edward/Portfolio.git
cd Portfolio

# Install dev dependencies (optional)
npm install

# Run development server
hugo server -D --navigateToChanged
```

### Build

```bash
# Production build
hugo --gc --minify
```

## 📁 Project Structure

```
Portfolio/
├── archetypes/          # Content templates
├── assets/              # CSS, JS, images (processed by Hugo)
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   └── js/
├── content/             # Markdown content
│   ├── _index.md        # Home
│   ├── about/
│   └── blog/
├── data/                # Data files (JSON, YAML)
├── docs/                # Documentation
│   ├── content-model.md
│   ├── content-validation.md
│   └── post-brief-template.md
├── layouts/             # Hugo templates
│   ├── _default/
│   ├── partials/
│   └── shortcodes/
├── static/              # Static files (copied as-is)
├── diagrams/            # Mermaid diagrams
├── config.toml          # Hugo configuration
└── lighthouse-budget.json
```

## ✍️ Content Creation

### Create New Post

```bash
hugo new blog/my-new-post.md
```

### Post Brief Process

1. Create brief in `docs/briefs/` using template
2. Get brief approved
3. Write post
4. Run checklist before publish

See [docs/post-brief-template.md](docs/post-brief-template.md)

## 🎨 Design System

- **Colors**: CSS custom properties với `light-dark()` function
- **Typography**: Inter (body) + JetBrains Mono (code)
- **Spacing**: 4px base scale
- **Dark Mode**: System preference + manual toggle

See [assets/css/variables.css](assets/css/variables.css)

## 🔧 Development

### Commands

```bash
# Serve with drafts
hugo server -D

# Build production
hugo --gc --minify

# Lint markdown
npm run lint:md

# Lint CSS
npm run lint:css
```

### VS Code Extensions (Recommended)

- Hugo Language and Syntax Support
- Markdown All in One
- Mermaid Preview
- Stylelint
- markdownlint

## 📊 Quality Standards

### Performance (Core Web Vitals 2025)

| Metric | Target |
|--------|--------|
| LCP | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |

### Accessibility

- WCAG 2.2 AA compliant
- Lighthouse Accessibility ≥ 90

### SEO

- Unique meta descriptions (120-160 chars)
- JSON-LD structured data
- RSS + Sitemap

## 🚀 Deployment

Site auto-deploys via GitHub Actions on push to `main`.

- **Live URL**: <https://hey-im-edward.github.io/Portfolio/>

## 📝 License

MIT License - see [LICENSE](LICENSE)

## 🙏 Credits

- [Hugo](https://gohugo.io/)
- [Inter Font](https://rsms.me/inter/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
