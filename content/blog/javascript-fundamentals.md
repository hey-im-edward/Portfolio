---
title: "JavaScript Fundamentals: Linh hồn của Website"
date: 2025-12-25
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "fundamentals", "web"]
image: "images/blog/js-fundamentals.png"
summary: "Hiểu bản chất JavaScript thông qua ẩn dụ 'Cơ thể người': HTML là xương, CSS là da, và JS là hệ thần kinh."
description: "Bài viết giải thích cốt lõi của JavaScript: Vai trò trong web, biến (Hộp chứa), kiểu dữ liệu và tư duy lập trình cơ bản."
reading_time: true
toc: true
---

## 1. Web Anatomy: Giải phẫu cơ thể Web

Nếu ví một Website như một **Con người**, thì 3 công nghệ cốt lõi sẽ đóng vai trò như sau:

* **HTML (HyperText Markup Language)**: Là **Bộ Khung Xương**. Nó định hình cấu trúc: đâu là đầu (header), đâu là chân (footer), đâu là tay (sidebar). Không có xương, con người chỉ là đống thịt mềm nhũn.
* **CSS (Cascading Style Sheets)**: Là **Làn Da & Quần Áo**. Nó quyết định vẻ bề ngoài: da trắng hay đen, mặc áo vest hay áo thun. Nó làm cho bộ khung xương trở nên đẹp đẽ.
* **JavaScript (JS)**: Là **Hệ Thần Kinh & Cơ Bắp**. Nó giúp con người có thể *cử động*, *suy nghĩ* và *phản hồi*. Nếu không có JS, website chỉ là một ma nơ canh đẹp nhưng bất động.

{{< mermaid >}}
graph TD
    subgraph "Web Page Anatomy (Giải phẫu)"
        HTML[HTML: Bộ Xương]
        CSS[CSS: Làn Da & Quần Áo]
        JS[JS: Cơ Bắp & Thần Kinh]
    end

    User((Người dùng)) --> |Tương tác| JS
    JS --> |Thay đổi cấu trúc| HTML
    JS --> |Thay đổi giao diện| CSS

    style JS fill:#f9f,stroke:#333,stroke-width:2px,color:#000
{{< /mermaid >}}

## 2. Biến (Variables): Những chiếc hộp dán nhãn

Trong lập trình, **Biến** đơn giản là những chiếc hộp để chứa đồ (dữ liệu).

Tưởng tượng bạn đang dọn nhà. Bạn có các thùng carton và bút dạ để ghi tên.

* `let`: Tạo một cái hộp và có thể thay đổi đồ bên trong.
  * Ví dụ: Hộp "Đồ ăn vặt". Hôm nay bỏ bánh quy, mai bỏ kẹo.
* `const`: Tạo một cái hộp, bỏ đồ vào, đóng đinh lại. Không thể thay đổi đồ bên trong được nữa.
  * Ví dụ: Hộp "Giấy khai sinh". Chỉ bỏ vào một lần duy nhất.
* `var`: Loại hộp cũ kỹ từ thời ông bà để lại. Nó có nhiều lỗ hổng và rắc rối (dễ bị lấy nhầm đồ), nên giờ chúng ta ít dùng.

```javascript
// Dùng let cho cái gì hay thay đổi
let age = 25;
age = 26; // Oke, năm sau mình lớn hơn

// Dùng const cho cái gì cố định
const PI = 3.14159;
// PI = 3.15; // LỖI NGAY! Toán học không cho phép đổi số PI.
```

## 3. Kiểu dữ liệu: Đồ đạc trong hộp

Cái hộp (Biến) thì giống nhau, nhưng đồ đạc bên trong (Giá trị) thì khác nhau.

### 5 Kiểu dữ liệu nguyên thủy (Primitive)

1. **String (Chuỗi)**: Văn bản, chữ viết. Luôn nằm trong ngoặc kép `" "` hoặc `' '`.
    * *Ví dụ*: Tấm thiệp ghi chữ "Hello".
2. **Number (Số)**: Các con số để tính toán.
    * *Ví dụ*: Tờ tiền mệnh giá 500k.
3. **Boolean (Logic)**: Chỉ có 2 mặt: Đúng (`true`) hoặc Sai (`false`).
    * *Ví dụ*: Công tắc đèn (Bật/Tắt).
4. **Undefined**: Một cái hộp đã được tạo ra nhưng chưa bỏ gì vào cả.
5. **Null**: Một cái hộp trống rỗng, nhưng là do bạn CỐ TÌNH để nó rỗng (để dành chỗ).

### Kiểu phức tạp (Reference)

* **Object (Đối tượng)**: Một cái hộp lớn chứa nhiều ngăn nhỏ.
  * Ví dụ: Một cái Balo. Trong balo có: Ngăn đựng nước (chai nước), ngăn đựng laptop (máy tính)...

```javascript
// Object mô tả một người
const edward = {
    name: "Edward", // String
    age: 25,        // Number
    isCoder: true   // Boolean
};
```

* **Array (Mảng)**: Một cái kệ xếp hàng dài, các ngăn được đánh số thứ tự từ 0.
  * Ví dụ: Kệ sách. Cuốn sách số 0, cuốn sách số 1...

```javascript
const hobbies = ["Code", "Coffee", "Music"];
// hobbies[0] là "Code"
```

## 4. Hàm (Function): Những cỗ máy mini

**Hàm** là một cỗ máy xử lý. Bạn bỏ nguyên liệu vào đầu này, nó chế biến và cho ra thành phẩm ở đầu kia.

Ví dụ: Cỗ máy làm nước ép (`makeJuice`).

* **Input (Tham số)**: Quả cam, Quả táo.
* **Logic**: Vắt, xay, lọc hạt.
* **Output (Return)**: Ly nước ép.

```javascript
// Khai báo máy ép
function makeJuice(fruit) {
    return "Nước ép " + fruit + " ngon tuyệt!";
}

// Sử dụng máy
const myDrink = makeJuice("Cam"); 
console.log(myDrink); // Output: Nước ép Cam ngon tuyệt!
```

## Tổng kết

Để bắt đầu với JavaScript, bạn chỉ cần nhớ:

1. **HTML/CSS/JS** là bộ ba Xương/Da/Cơ bắp.
2. **Biến** là cái hộp chứa dữ liệu.
3. **Hàm** là cái máy xử lý dữ liệu.

Ở bài tiếp theo, chúng ta sẽ xem JavaScript đã "tiến hóa" như thế nào với phiên bản ES6+ (Mũi tên, Destructuring, Spread...).

**Bài tiếp theo:** [JavaScript ES6+ Features](../javascript-es6-features)
