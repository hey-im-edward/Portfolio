---
title: "JavaScript Node.js Introduction"
date: 2025-12-18
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "nodejs", "backend"]
image: "images/blog/js-nodejs.png"
summary: "Giới thiệu Node.js: Đưa JavaScript rời khỏi trình duyệt để chinh phục Server."
description: "Hiểu mô hình Client-Server với ví dụ Nhà hàng, cách Node.js hoạt động và viết API đầu tiên."
---

## Node.js là gì?

Trước đây, JavaScript giống như một "chú cá" chỉ sống được trong "bể cá" là Trình duyệt (Browser). **Node.js** chính là "một bộ đồ lặn" giúp chú cá này bơi ra ngoài đại dương mênh mông (Server, Máy tính cá nhân, Robot,...).

Hãy tưởng tượng một **Nhà Hàng**:

* **Trình Duyệt (Browser)** là **Phòng Ăn**: Nơi thực khách (User) ngồi, nhìn menu đẹp đẽ (UI) và gọi món. Họ không nhìn thấy cách món ăn được nấu.
* **Node.js** là **Nhà Bếp (Server)**: Nơi các đầu bếp chế biến món ăn, lấy nguyên liệu từ kho (Database), và xử lý các yêu cầu phức tạp.
* **API** là **Người Phục Vụ**: Nhận yêu cầu từ khách, mang vào bếp, và mang thức ăn nóng hổi ra lại cho khách.

Dưới đây là mô hình Client-Server:

{{< mermaid >}}
graph LR
    Client["Browser (Client)"] -- "Request (Order)" --> Internet
    Internet -- Request --> Server["Node.js (Server)"]
    Server -- Query --> DB[("Database")]
    DB -- Data --> Server
    Server -- "Response (Food)" --> Internet
    Internet -- Response --> Client

    style Client fill:#3b82f6,stroke:#1e293b,color:#fff
    style Server fill:#22c55e,stroke:#14532d,color:#fff
    style DB fill:#f59e0b,stroke:#78350f,color:#fff
{{< /mermaid >}}

## Tại sao chọn Node.js?

1. **JavaScript Everywhere**: Dùng chung một ngôn ngữ cho cả frontend và backend. "Fullstack Store" chỉ cần thuê một loại nhân viên.
2. **Hiệu năng cao**: Sử dụng V8 Engine của Google (chung "động cơ" với Chrome) nên chạy cực nhanh.
3. **Non-blocking I/O**: Giống như một người phục vụ thông minh, trong khi chờ đầu bếp nướng Pizza, họ sẽ đi lấy nước cho khách khác chứ không đứng chơi.

## Cài đặt & Chạy thử

Đầu tiên, tải và cài đặt tại [nodejs.org](https://nodejs.org).

Mở terminal và gõ lệnh sau để kiểm tra:

```bash
node -v
# v20.x.x (phiên bản hiện tại)
```

Tạo một file `bep-truong.js`:

```javascript
// bep-truong.js
console.log("Xin chào! Bếp trưởng Node.js đang hoạt động.");
console.log("Đang chuẩn bị món ăn...");

setTimeout(() => {
    console.log("Món ăn đã xong! 🍕");
}, 2000); // Giả vờ nấu ăn mất 2 giây
```

Chạy file này:

```bash
node bep-truong.js
```

## Modules: "Sách công thức nấu ăn"

Trong bếp, bạn không thể tự làm mọi thứ. Bạn cần gia vị, công cụ từ bên ngoài. Trong Node.js, chúng ta gọi các gói code đóng sẵn là **Modules**.

### 1. Built-in Modules (Có sẵn trong bếp)

Node.js cung cấp sẵn nhiều "công cụ" mạnh mẽ. Ví dụ, module `fs` (File System) giúp bạn đọc/ghi file như một cuốn sổ tay ghi chép.

```javascript
import fs from 'fs/promises';

async function docThucDon() {
    try {
        // Đọc file menu.txt
        const data = await fs.readFile('menu.txt', 'utf-8');
        console.log("Thực đơn hôm nay:", data);
    } catch (error) {
        console.log("Không tìm thấy thực đơn!");
    }
}

docThucDon();
```

### 2. NPM (Chợ nguyên liệu khổng lồ)

**NPM** (Node Package Manager) là cái chợ lớn nhất thế giới của các lập trình viên. Bạn muốn tính toán ngày tháng? Có `date-fns`. Bạn muốn tạo server web? Có `express`.

Cài đặt một gói từ "chợ":

```bash
npm install express
```

## Tạo Web Server đầu tiên

Hãy dùng thư viện **Express** (mua từ chợ NPM) để dựng một cái bếp tươm tất phục vụ khách hàng.

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

// Khi khách vào cửa chính (Route '/')
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng đến với Nhà hàng Node.js! 🍲</h1>');
});

// Khi khách gọi món Phở (Route '/menu/pho')
app.get('/menu/pho', (req, res) => {
    res.json({
        mon: "Phở Bò",
        gia: 50000,
        trangThai: "Nóng hổi"
    });
});

// Mở cửa nhà hàng
app.listen(PORT, () => {
    console.log(`Nhà hàng đã mở cửa tại http://localhost:${PORT}`);
});
```

Bây giờ bạn truy cập `http://localhost:3000` sẽ thấy lời chào, và `http://localhost:3000/menu/pho` sẽ thấy món ăn dưới dạng JSON.

## Tổng kết

Node.js không phải là một ngôn ngữ mới, nó là một **môi trường** giúp JavaScript làm được những việc phi thường ngoài trình duyệt:

* Xây dựng Server mạnh mẽ.
* Thao tác với file, cơ sở dữ liệu.
* Tận dụng kho tàng thư viện NPM khổng lồ.

Đây là bài kết thúc chuỗi JavaScript cơ bản. Hy vọng bạn đã có đủ hành trang để bắt đầu xây dựng những ứng dụng tuyệt vời! 🚀

---
*Bài viết này nằm trong series Lập trình Web căn bản.*
