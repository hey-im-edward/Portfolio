# Portfolio Production

Đây là bản rebuild hoàn toàn cho portfolio `Senior / Lead Developer` theo hướng `recruiter-first`, `EN-first`, có lớp `VI` phụ, dùng `Next.js App Router`, `TypeScript`, `MDX`, và sẵn sàng deploy lên `Vercel`.

## Stack

- `Next.js` App Router
- `TypeScript`
- `MDX` cho page tĩnh, blog, và project case study
- `Tailwind CSS` + `shadcn/ui`
- `Resend` + `Cloudflare Turnstile` cho luồng liên hệ
- `Vercel Analytics` + `Speed Insights`

## Cấu trúc repo

- `src/app`: route tree, layout, metadata, API route, sitemap, RSS, robots
- `src/components`: UI dùng lại được và các shell component
- `src/lib`: helper chung, env parsing, content loader, SEO, JSON-LD
- `content`: nội dung `MDX/JSON` cho page, project, blog, author, site settings
- `public`: asset tĩnh như ảnh minh hoạ và file download

## Route chính

- `/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/contact`, `/resume`
- `/vi`, `/vi/about`, `/vi/projects`, `/vi/projects/[slug]`, `/vi/blog`, `/vi/blog/[slug]`, `/vi/contact`, `/vi/resume`

## Chạy local

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra chất lượng

```bash
npm run format:check
npm run lint
npm run typecheck
npm run content:check
npm run build
```

## Workflow nội dung

- `English` là nguồn nội dung chuẩn.
- `Vietnamese` nằm dưới `/vi` và có thể fallback sang `English` ở detail page khi chưa có bản dịch.
- Thêm hoặc sửa nội dung trong `content/pages`, `content/projects`, `content/blog`, `content/authors`, `content/global`.
- Project case study nên giữ cấu trúc rõ: `problem`, `role`, `constraints`, `architecture`, `decisions`, `implementation`, `results`.
- Blog nên ưu tiên `proof of thinking`, tránh filler content.

## Biến môi trường

Copy `.env.example` thành `.env.local`, sau đó điền các giá trị production:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Nếu chưa cấu hình email production, API contact vẫn nhận request an toàn ở trạng thái `accepted` để test end-to-end.

## Deploy

- Preview deploy: chạy qua `Vercel` cho mỗi push/PR.
- Production deploy: nối với branch `main`.
- Khi gắn custom domain thật, cập nhật `NEXT_PUBLIC_SITE_URL` tương ứng.

## Quy ước kỹ thuật

- Không dùng public auth cho portfolio v1.
- Xem content như dữ liệu, không hardcode vào page component.
- Ưu tiên component và config dùng lại được thay vì duplication theo từng page.
- Giữ public pages nhanh, rõ, ít JS không cần thiết.
