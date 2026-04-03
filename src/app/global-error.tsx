"use client";

import { useEffect } from "react";
import Link from "next/link";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-24">
          <div className="space-y-6">
            <p className="text-muted-foreground text-sm font-medium tracking-[0.3em] uppercase">
              Error
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Đã xảy ra lỗi nghiêm trọng trong ứng dụng.
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
              Hãy thử tải lại trang. Nếu lỗi vẫn còn, cần kiểm tra log phía server hoặc build để tìm
              nguyên nhân gốc.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => reset()}
                className="bg-foreground text-background inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:opacity-90"
              >
                Thử lại
              </button>
              <Link
                href="/"
                className="border-border hover:bg-accent hover:text-accent-foreground inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors"
              >
                Về trang chủ
              </Link>
            </div>
            {error.digest ? (
              <p className="text-muted-foreground text-xs">Mã lỗi: {error.digest}</p>
            ) : null}
          </div>
        </main>
      </body>
    </html>
  );
}
