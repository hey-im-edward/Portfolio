import Link from "next/link";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/projects", label: "Dự án" },
  { href: "/blog", label: "Bài viết" },
  { href: "/contact", label: "Liên hệ" },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col justify-center px-6 py-24">
      <div className="space-y-6">
        <p className="text-muted-foreground text-sm font-medium tracking-[0.3em] uppercase">404</p>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Trang bạn tìm không tồn tại.
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
          Liên kết có thể đã đổi hoặc nội dung chưa được xuất bản. Bạn có thể quay lại trang chủ
          hoặc đi thẳng tới các mục quan trọng bên dưới.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-border hover:bg-accent hover:text-accent-foreground inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
