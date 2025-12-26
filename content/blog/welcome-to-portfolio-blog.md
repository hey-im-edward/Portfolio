---
title: "Welcome to My Portfolio Blog"
date: 2025-01-01T08:00:00+07:00
lastmod: 2025-01-01T08:00:00+07:00
draft: false

author: "Edward"

categories: ["JavaScript"]
tags: ["hugo", "web-development", "portfolio"]

summary: "Bài viết đầu tiên giới thiệu portfolio blog được xây dựng với Hugo - static site generator cực kỳ nhanh."
description: "Giới thiệu portfolio blog xây dựng với Hugo, chia sẻ về tech stack và lý do chọn Hugo cho dự án này."

reading_time: true
toc: true
---

## Giới thiệu

Xin chào! Đây là bài viết đầu tiên trên portfolio blog của mình. Blog được xây dựng với **Hugo** - một trong những static site generator nhanh nhất hiện nay.

## Tại sao chọn Hugo?

### 1. Tốc độ build cực nhanh

Hugo được viết bằng Go, cho phép build hàng nghìn trang trong vài giây:

```bash
# Build toàn bộ site
hugo --gc --minify

# Output: Built in 234 ms
```

### 2. Không cần database

Static site = không cần server phức tạp. Chỉ cần HTML, CSS, JS.

### 3. Triển khai dễ dàng

Github Pages, Netlify, Vercel... đều hỗ trợ tốt.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Generator | Hugo 0.153+ |
| Styling | CSS Custom Properties |
| Deployment | GitHub Pages |
| CI/CD | GitHub Actions |

## Tính năng chính

- ✅ Dark mode tự động
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast loading (< 1s)
- ✅ Accessibility (WCAG 2.2)

## Code Sample

Đây là một ví dụ JavaScript đơn giản:

```javascript
// Theme toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

## Kết luận

Hugo là lựa chọn tuyệt vời cho:

- Portfolio websites
- Technical blogs
- Documentation sites

Hãy theo dõi blog để đọc thêm các bài viết về **Java** và **JavaScript**!

---

*Cảm ơn bạn đã đọc! 🙏*
