---
title: "Hugo Portfolio Blog"
date: 2025-12-26
lastmod: 2025-12-26
draft: false

summary: "Portfolio blog cá nhân được xây dựng với Hugo - static site generator nhanh nhất"
description: "Dự án xây dựng portfolio blog với Hugo, CSS custom properties, GitHub Actions CI/CD"
tech: ["Hugo", "HTML", "CSS", "JavaScript", "GitHub Actions"]

github: "https://github.com/hey-im-edward/Portfolio"
demo: "https://hey-im-edward.github.io/Portfolio/"
website: ""

featured: true
featured_image: ""

start_date: 2025-12-26
end_date: 2025-12-26
status: "in-progress"
---

## Overview

Portfolio blog cá nhân được thiết kế với phong cách minimal, hiện đại. Sử dụng Hugo - một trong những static site generator nhanh nhất hiện nay.

## Features

- 🌙 **Dark Mode** - Tự động theo system preference hoặc toggle thủ công
- 📱 **Responsive** - Hoạt động tốt trên mọi thiết bị
- ⚡ **Fast** - Build time < 1s, page load < 2s
- 🎨 **CSS Custom Properties** - Design system dễ customize
- 📊 **SEO Optimized** - Meta tags, Open Graph, JSON-LD
- 🚀 **Auto Deploy** - GitHub Actions CI/CD

## Tech Stack

| Layer | Technology |
|-------|------------|
| Generator | Hugo 0.140+ Extended |
| Styling | CSS Custom Properties |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Images | AVIF + WebP |

## Challenges & Solutions

### Challenge: Dark Mode Flicker

**Vấn đề**: Flash of unstyled content khi load trang với dark mode.

**Giải pháp**: Inline script trong `<head>` để set theme trước khi render.

```javascript
const theme = localStorage.getItem('theme') || 
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);
```

### Challenge: Image Optimization

**Vấn đề**: Ảnh nặng làm chậm page load.

**Giải pháp**: Hugo Pipes với AVIF + WebP fallback và responsive srcset.

## Results

- ✅ Lighthouse Performance: 95+
- ✅ Build time: < 200ms
- ✅ First Contentful Paint: < 1s
