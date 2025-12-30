---
title: "Chào mừng đến với Portfolio Blog của Edward"
date: 2025-01-01
draft: false
author: "Edward"
categories: ["General"]
tags: ["portfolio", "hugo", "introduction"]
image: "images/blog/welcome.png"
summary: "Nơi tôi chia sẻ hành trình lập trình, tư duy 'Hiểu bản chất > Học vẹt', và các dự án cá nhân thú vị."
description: "Giới thiệu về Portfolio Blog, triết lý chia sẻ kiến thức và công nghệ đằng sau website này."
reading_time: true
toc: true
---

## 👋 Xin chào

Chào mừng bạn đến với góc nhỏ của mình trên internet. Mình là **Edward**, một lập trình viên đam mê việc **học sâu, hiểu kỹ** và xây dựng những sản phẩm có giá trị thực tế.

Website này không chỉ là Portfolio giới thiệu dự án, mà còn là một **Blog cá nhân** - nơi mình ghi lại những gì đã học, những vấn đề đã giải quyết và những "khoảnh khắc Aha!" trong quá trình coding.

## 🚀 Triết lý: "Text > Code"

Trong hành trình học lập trình, mình nhận ra một điều: **Copy code thì dễ, hiểu tại sao code chạy mới khó.**

Vì vậy, các bài viết trên blog này sẽ tuân theo triết lý **"Text > Code"**:

* Tập trung giải thích **bản chất vấn đề** bằng ngôn ngữ đời thường.
* Sử dụng các **ví dụ ẩn dụ** (như Nhà kho, Nhà bếp, Bản vẽ...) để biến kiến thức trừu tượng thành hình ảnh dễ hiểu.
* Ưu tiên **Diagram & Hình ảnh** hơn là dán hàng đống code vô hồn.

## 🛠️ Tech Stack của Website này

Blog này được xây dựng hoàn toàn "tự cung tự cấp" với công nghệ Static Site hiện đại, tập trung vào tốc độ và trải nghiệm người dùng tối giản.

{{< mermaid >}}
graph TD
    Me((Edward)) --> |Code| Source[Source Code]
    subgraph "Local Development"
        Source --> |Markdown| Content[Bài viết]
        Source --> |HTML/CSS/JS| layouts[Giao diện]
        Content & layouts --> Hugo[Hugo Generator]
    end
    Hugo --> |Build| Static[Static HTML Files]
    Static --> |Deploy| Github[GitHub Pages]
    Github --> |Serve| User((Bạn đọc))

    style Hugo fill:#ff0055,stroke:#333,stroke-width:2px
    style Github fill:#333,stroke:#fff,stroke-width:2px,color:#fff
{{< /mermaid >}}

* **Core**: [Hugo](https://gohugo.io/) (Static Site Generator) - Cực nhanh, viết bằng Go.
* **Styling**: Vanilla CSS với phong cách **Glassmorphism** (Hiệu ứng kính).
* **Diagrams**: [Mermaid.js](https://mermaid.js.org/) để vẽ biểu đồ trực tiếp từ code.
* **Hosting**: GitHub Pages.

## 📚 Các chủ đề chính

Hiện tại và trong tương lai, mình sẽ tập trung chia sẻ về:

1. **Java & OOP**: Nền tảng vững chắc cho Backend.
2. **JavaScript & Node.js**: Hệ sinh thái Web linh hoạt.
3. **Data Structures & Algorithms**: Tư duy giải quyết vấn đề.
4. **System Design**: Cách thiết kế hệ thống lớn (khi mình đủ trình! 😄).

## 🔗 Code mẫu?

Dưới đây là một ví dụ nhỏ về cách mình thích viết code: Tường minh và dễ đọc.

```javascript
// Một function đơn giản nhưng rõ ràng
function calculateCircleArea(radius) {
    if (radius <= 0) {
        throw new Error("Bán kính phải là số dương!");
    }
    
    const PI = 3.14159;
    return PI * radius * radius;
}

console.log(calculateCircleArea(10)); // Output: 314.159
```

Cảm ơn bạn đã ghé thăm. Hy vọng bạn tìm thấy điều gì đó hữu ích ở đây!

---
*Stay curious, keep coding.*
