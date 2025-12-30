---
title: "JavaScript DOM Manipulation"
date: 2025-12-21
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "dom", "web"]
image: "images/blog/js-dom.png"
summary: "Học cách thao tác với DOM để tạo trang web tương tác: Chọn phần tử, sửa đổi nội dung và xử lý sự kiện."
description: "Hướng dẫn chi tiết về DOM Tree, các phương thức querySelector, textContent, style và cách lắng nghe sự kiện click, input."
---

## DOM là gì?

**DOM** (Document Object Model) là bảng kế hoạch chi tiết của trang web.

Hãy tưởng tượng trang web của bạn giống như một **ngôi nhà**.

* **HTML**: Là bản thiết kế, quy định đâu là cửa sổ, đâu là phòng khách.
* **DOM**: Là giao diện giúp bạn có thể tương tác với ngôi nhà đó: mở cửa sổ, bật đèn, sơn lại tường.
* **JavaScript**: Là người thợ dùng DOM để thực hiện các thay đổi đó.

Nếu không có DOM, JavaScript sẽ không biết cái nút bấm nằm ở đâu, hay đoạn văn bản nội dung là gì.

Dưới đây là cấu trúc cây (Tree Structure) của một trang web đơn giản trong DOM:

{{< mermaid >}}
graph TD
    Doc[Document] --> HTML[html]
    HTML --> Head[head]
    HTML --> Body[body]
    Head --> Meta[meta]
    Head --> Title[title]
    Body --> Header[header]
    Body --> Main[main]
    Header --> H1[h1]
    Main --> P[p]
    Main --> Button[button]

    style Doc fill:#1e293b,stroke:#3b82f6,stroke-width:2px
    style HTML fill:#334155,stroke:#64748b,stroke-width:1px
    style Body fill:#334155,stroke:#64748b,stroke-width:1px
{{< /mermaid >}}

## 1. Truy tìm kho báu: Chọn phần tử (Selecting)

Để thay đổi một phần tử, trước hết bạn phải tìm ra nó. JavaScript cung cấp "chiếc la bàn" `document` để làm việc này.

### Các phương thức phổ biến

* **`getElementById('id')`**: Nhanh nhất, chính xác nhất, dùng khi bạn biết rõ ID "hàng độc" của phần tử.
* **`querySelector('.class' / '#id' / 'tag')`**: Đa năng "cân tất". Chọn phần tử đầu tiên nó tìm thấy thỏa mãn điều kiện CSS.
* **`querySelectorAll('.class')`**: Giống như trên, nhưng chọn **TẤT CẢ** các phần tử thỏa mãn và trả về một danh sách.

```javascript
// Tìm cái nút có ID là "login-btn"
const loginButton = document.getElementById("login-btn");

// Tìm thẻ h1 đầu tiên trong bài viết
const title = document.querySelector("article h1");

// Tìm tất cả các thẻ hình ảnh trong gallery
const allImages = document.querySelectorAll(".gallery img");
```

## 2. Phù phép: Thay đổi nội dung & Giao diện

Sau khi đã "tóm" được phần tử, giờ là lúc bạn thể hiện quyền lực của mình.

### Thay đổi nội dung (Text)

* **`textContent`**: Chỉ lấy nội dung chữ thuần túy (An toàn, khuyên dùng).
* **`innerHTML`**: Lấy cả mã HTML bên trong (Mạnh mẽ nhưng cẩn thận lỗi bảo mật XSS).

```javascript
const message = document.querySelector("#welcome-msg");

// Đổi nội dung thành: Xin chào Edward
message.textContent = "Xin chào Edward";

// Chèn thêm thẻ in đậm
message.innerHTML = "Xin chào <b>Edward</b>"; 
```

### Thay đổi giao diện (Style & Class)

Thay vì viết CSS trực tiếp vào JavaScript (khó quản lý), hãy dùng `classList` để thêm/bớt các class đã định nghĩa sẵn trong CSS.

```css
/* Trong file CSS */
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

```javascript
const box = document.querySelector(".box");

// Thêm class
box.classList.add("highlight");

// Xóa class
box.classList.remove("hidden");

// Bật/Tắt class (nếu có thì xóa, chưa có thì thêm)
box.classList.toggle("active");
```

## 3. Lắng nghe: Xử lý sự kiện (Event Handling)

Trang web sẽ rất nhàm chán nếu không phản hồi lại người dùng. `addEventListener` giống như việc bạn dặn người giúp việc: *"Này, khi nào có chuông cửa (click), hãy ra mở cửa nhé."*

Cú pháp: `element.addEventListener(loại_sự_kiện, hành_động)`

```javascript
const button = document.querySelector("#submit-btn");

button.addEventListener("click", function() {
    alert("Bạn đã bấm nút thành công!");
    button.textContent = "Đã gửi!";
    button.classList.add("disabled");
});
```

### Các sự kiện phổ biến

* **Mouse**: `click` (bấm chuột), `mouseenter` (di chuột vào).
* **Keyboard**: `keydown` (bấm phím xuống), `keyup` (nhả phím ra).
* **Form**: `submit` (gửi form), `input` (gõ chữ vào ô input).

## Ví dụ: Todo List Đơn Giản

Hãy kết hợp mọi thứ lại để làm tính năng thêm công việc:

1. Lắng nghe sự kiện `click` vào nút Thêm.
2. Lấy nội dung từ ô Input.
3. Tạo một thẻ `<li>` mới và chèn vào danh sách `<ul>`.

```javascript
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

addBtn.addEventListener("click", () => {
    // 1. Lấy giá trị nhập vào
    const text = input.value;
    
    // Nếu rỗng thì không làm gì cả
    if (text === "") return;
    
    // 2. Tạo phần tử li mới
    const newItem = document.createElement("li");
    newItem.textContent = text;
    
    // 3. Thêm vào danh sách
    list.appendChild(newItem);
    
    // 4. Xóa nội dung trong ô input
    input.value = "";
});
```

## Tổng kết

Để trờ thành một "thợ xây web" giỏi, bạn cần thành thạo 3 kỹ năng DOM cơ bản:

1. **Chọn đúng**: Dùng `querySelector` để tìm phần tử cần sửa.
2. **Sửa đúng**: Dùng `textContent` và `classList` để cập nhật hiển thị.
3. **Nghe đúng**: Dùng `addEventListener` để phản hồi hành động của người dùng.

Ở bài tiếp theo, chúng ta sẽ đi sâu vào **Async/Await** (nếu bạn chưa đọc) hoặc tìm hiểu về **Node.js** - đưa JavaScript ra khỏi trình duyệt!

**Bài tiếp theo:** [JavaScript Node.js Introduction](../javascript-nodejs-introduction)
