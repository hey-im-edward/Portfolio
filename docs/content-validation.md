# Content Validation Rules

Các quy tắc validation cho content trước khi publish.

---

## Post

| Field | Rule |
|-------|------|
| `title` | Min 10, max 60 characters |
| `description` | Min 120, max 160 characters (SEO) |
| `summary` | Max 280 characters |
| `tags` | Max 5 tags, từ allowed list |
| `categories` | Required, allowed: Java, JavaScript |
| `featured_image` | Required, 16:9 aspect ratio, min 1200px |
| `images` | Must have alt_text |

---

## Tag

| Field | Rule |
|-------|------|
| `name` | Min 2, max 30 characters |
| `id` | Auto-slugified from name |

### Allowed Tags

```
# Technical
java, javascript, typescript, spring-boot, react, vue, nodejs

# Concepts  
oop, design-patterns, clean-code, testing, security

# Tools
git, docker, github-actions, vscode

# General
tutorial, tips, career, learning
```

---

## Category

| Field | Rule |
|-------|------|
| `name` | Min 2, max 30 characters |
| Allowed | Java, JavaScript |

---

## General Rules

### Content Quality

- [ ] No duplicate TL;DR across posts
- [ ] All posts must have brief approved BEFORE writing
- [ ] Code samples must compile/run if demo included
- [ ] All images must have descriptive alt text
- [ ] Minimum 500 words per post

### SEO

- [ ] Title không trùng với bài khác
- [ ] Description unique và hấp dẫn
- [ ] Internal links đến bài liên quan (nếu có)
- [ ] Heading hierarchy đúng (H1 → H2 → H3)

### Accessibility

- [ ] Alt text cho tất cả images
- [ ] Color contrast đủ trong screenshots
- [ ] Links có text mô tả (không "click here")

---

## Pre-Publish Checklist

### Before Writing

- [ ] Brief đã được review và approved
- [ ] Không trùng TL;DR với bài khác
- [ ] Keywords research done

### Content Quality

- [ ] Có ít nhất 1 code sample
- [ ] Code có syntax highlighting
- [ ] Alt text cho tất cả images
- [ ] Spelling & grammar checked

### SEO

- [ ] Title <= 60 characters
- [ ] Meta description 120-160 characters
- [ ] Internal links đến bài liên quan

### Assets

- [ ] Hero image đã optimize
- [ ] Images có responsive srcset
- [ ] Lazy loading enabled

### Final Check

- [ ] Preview on mobile
- [ ] All links working
- [ ] Reading time reasonable
- [ ] `draft: false` ✅
