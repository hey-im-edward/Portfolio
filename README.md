# Portfolio Blog

> Blog cá nhân chia sẻ về lập trình Java & JavaScript với thiết kế Liquid Glass

🔗 **Live:** [https://hey-im-edward.github.io/Portfolio/](https://hey-im-edward.github.io/Portfolio/)

## ✨ Features

- 🎨 **Liquid Glass Design** - iOS 26 style glassmorphism với blur effects
- 🌙 **Dark/Light Mode** - Toggle kéo thả mượt mà với iOS physics
- 📱 **Responsive** - Mobile-first design, hoạt động tốt mọi kích thước màn hình
- 🧭 **Navigation Pill** - Hiệu ứng di chuyển mượt mà kiểu iOS
- 💬 **Comments** - Tích hợp Giscus (GitHub Discussions)
- 📧 **Contact Form** - Formspree integration
- 🔍 **Search** - Tìm kiếm bài viết nhanh chóng
- 📑 **Table of Contents** - Tự động tạo mục lục cho bài viết
- 📄 **CV/Resume** - Tải PDF hoặc xem online

## 🚀 Quick Start

### Yêu cầu

- [Hugo Extended](https://gohugo.io/installation/) v0.153.0+

### Chạy local

```bash
git clone https://github.com/hey-im-edward/Portfolio.git
cd Portfolio
hugo server -D
```

Mở [http://localhost:1313](http://localhost:1313) trong browser.

### Build production

```bash
hugo --gc --minify
```

Output sẽ nằm trong thư mục `public/`.

## 📁 Cấu trúc

```
Portfolio/
├── archetypes/          # Templates cho content mới
├── assets/
│   └── css/             # Stylesheets (glass, components, animations)
├── content/
│   ├── blog/            # Bài viết (10 posts)
│   ├── about/           # Giới thiệu
│   ├── projects/        # Dự án
│   └── contact/         # Liên hệ
├── data/                # Data files
│   ├── skills.yaml      # Kỹ năng
│   ├── certificates.yaml # Chứng chỉ
│   └── experiences.yaml  # Kinh nghiệm
├── layouts/
│   ├── _default/        # Base templates
│   ├── partials/        # Reusable components
│   │   ├── header.html  # Navigation với pill effect
│   │   ├── scripts.html # Theme toggle, animations
│   │   └── comments.html # Giscus integration
│   ├── blog/            # Blog templates
│   ├── about/           # About page
│   ├── projects/        # Projects page
│   └── contact/         # Contact page
├── static/
│   └── files/           # Static files (CV PDF)
└── config.toml          # Hugo configuration
```

## 📝 Nội dung

### Blog Posts (10 bài)

**Java:**

- Biến và Kiểu dữ liệu
- Collections Framework
- OOP: Classes & Objects

**JavaScript:**

- JavaScript Fundamentals
- ES6 Features
- Async/Await
- DOM Manipulation
- Node.js Introduction
- React Basics

## 🎯 Key Components

### Navigation Pill

Navigation sử dụng hiệu ứng "pill" di chuyển mượt mà giữa các menu items, với:

- Kéo thả để navigate
- Dropdown cho Blog submenu
- iOS-style physics animation

### Theme Toggle

Toggle Dark/Light mode với:

- Kéo thả slider
- iOS rubber-banding physics
- Live haptic feedback (mobile)

## 🚀 Deploy

Auto-deploy via GitHub Actions khi push lên `main`.

Workflow file: `.github/workflows/hugo.yml`

## 🛠️ Development

### Thêm bài viết mới

```bash
hugo new blog/ten-bai-viet.md
```

### Thêm project mới

```bash
hugo new projects/ten-project.md
```

### Cấu hình

Edit `config.toml` để thay đổi:

- Site title, description
- Social links (GitHub, LinkedIn, Email)
- Giscus settings
- Formspree ID

## 📄 License

MIT License
