---
title: "JavaScript DOM Manipulation"
date: 2025-12-21
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "dom", "web"]
summary: "Học cách thao tác với DOM để tạo trang web tương tác."
description: "Hướng dẫn thao tác DOM với JavaScript - tạo web động và tương tác."
---

## DOM là gì?

**DOM** (Document Object Model) là cấu trúc cây đại diện cho trang HTML. JavaScript sử dụng DOM để thao tác với các phần tử trên trang.

## Chọn phần tử (Selecting Elements)

### Các phương thức phổ biến

```javascript
// Theo ID (trả về 1 element)
const header = document.getElementById("header");

// Theo class (trả về HTMLCollection)
const cards = document.getElementsByClassName("card");

// Theo tag (trả về HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// CSS Selector (trả về element đầu tiên)
const firstBtn = document.querySelector(".btn");

// CSS Selector (trả về tất cả - NodeList)
const allBtns = document.querySelectorAll(".btn");
```

### querySelector vs getElementById

```javascript
// querySelector linh hoạt hơn
const element = document.querySelector("#id");
const element = document.querySelector(".class");
const element = document.querySelector("div.container > p:first-child");
```

## Thao tác nội dung

### textContent vs innerHTML

```javascript
const div = document.querySelector("#content");

// textContent - chỉ text, an toàn
div.textContent = "Hello World";
div.textContent = "<b>Bold</b>";  // Hiển thị: <b>Bold</b>

// innerHTML - parse HTML, cẩn thận XSS
div.innerHTML = "<b>Bold</b>";    // Hiển thị: Bold (in đậm)
```

### Thay đổi attributes

```javascript
const img = document.querySelector("img");

// Đọc attribute
const src = img.getAttribute("src");

// Gán attribute
img.setAttribute("alt", "Mô tả hình ảnh");

// Thuộc tính trực tiếp
img.src = "new-image.jpg";
img.alt = "New description";

// Data attributes
const card = document.querySelector(".card");
card.dataset.id = "123";  // data-id="123"
const id = card.dataset.id;
```

## Thao tác CSS

### Style trực tiếp

```javascript
const box = document.querySelector(".box");

// Gán style
box.style.backgroundColor = "red";
box.style.padding = "20px";
box.style.borderRadius = "8px";

// Lưu ý: CSS property dùng camelCase
// background-color -> backgroundColor
```

### Class manipulation

```javascript
const element = document.querySelector(".card");

// Thêm class
element.classList.add("active");
element.classList.add("visible", "animated");

// Xóa class
element.classList.remove("hidden");

// Toggle class
element.classList.toggle("dark-mode");

// Kiểm tra class
if (element.classList.contains("active")) {
    console.log("Element is active!");
}
```

## Tạo và xóa phần tử

### Tạo phần tử mới

```javascript
// Tạo element
const newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.textContent = "New Card";

// Thêm vào DOM
const container = document.querySelector(".container");
container.appendChild(newDiv);

// Thêm vào vị trí cụ thể
container.insertBefore(newDiv, container.firstChild);

// insertAdjacentHTML (nhanh hơn)
container.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h3>Title</h3>
        <p>Content</p>
    </div>
`);
```

### Xóa phần tử

```javascript
const element = document.querySelector(".to-remove");

// Cách mới (khuyến khích)
element.remove();

// Cách cũ
element.parentNode.removeChild(element);
```

## Event Handling

### addEventListener

```javascript
const button = document.querySelector("#myBtn");

// Click event
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event.target);  // Phần tử được click
});

// Arrow function
button.addEventListener("click", (e) => {
    e.preventDefault();  // Ngăn hành vi mặc định
    console.log("Clicked!");
});
```

### Các event phổ biến

```javascript
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

// Keyboard events
document.addEventListener("keydown", (e) => {
    console.log(e.key);     // "Enter", "a", "Escape"
    console.log(e.keyCode); // 13, 65, 27
});

// Form events
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle form data
});

input.addEventListener("input", (e) => {
    console.log(e.target.value);
});
```

### Event Delegation

```javascript
// Thay vì gán event cho từng button
const container = document.querySelector(".button-container");

container.addEventListener("click", (e) => {
    if (e.target.matches(".btn")) {
        console.log("Button clicked:", e.target.textContent);
    }
});
```

## Ví dụ thực tế: Todo List

```javascript
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const text = input.value.trim();
    if (!text) return;
    
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">Xóa</button>
    `;
    
    list.appendChild(li);
    input.value = "";
});

// Event delegation for delete buttons
list.addEventListener("click", (e) => {
    if (e.target.matches(".delete-btn")) {
        e.target.parentElement.remove();
    }
});
```

## Tổng kết

- Dùng `querySelector`/`querySelectorAll` để chọn phần tử
- Dùng `classList` để thao tác class
- Dùng `addEventListener` để xử lý event
- Dùng Event Delegation cho dynamic elements

**Bài tiếp theo:** JavaScript Async/Await
