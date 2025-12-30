---
title: "JavaScript Async/Await"
date: 2025-12-20
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "async", "promise"]
image: "images/blog/js-async.png"
summary: "Xử lý bất đồng bộ trong JavaScript với Async/Await: Từ Callback Hell đến Code hiện đại."
description: "Hiểu rõ về Synchronous vs Asynchronous, sự tiến hóa từ Callback -> Promise -> Async/Await và cách viết code bất đồng bộ sạch đẹp."
---

## Bất đồng bộ (Asynchronous) là gì?

Để hiểu về bất đồng bộ, hãy tưởng tượng bạn đi mua cà phê:

1. **Đồng bộ (Synchronous)**: Bạn order, thu ngân đứng chờ pha chế xong, đưa ly cà phê cho bạn rồi mới phục vụ người tiếp theo. Hàng người phía sau sẽ phải chờ đợi rất lâu.
2. **Bất đồng bộ (Asynchronous)**: Bạn order, nhận số thứ tự và ra bàn ngồi. Thu ngân tiếp tục phục vụ người khác. Khi cà phê xong, nhân viên sẽ gọi số của bạn.

JavaScript mặc định là ngôn ngữ **Single-threaded** (đơn luồng), nghĩa là nó chỉ làm một việc tại một thời điểm (giống như chỉ có một thu ngân). Nếu không có cơ chế bất đồng bộ, toàn bộ trang web sẽ bị "đơ" mỗi khi bạn tải một file nặng hay gọi API.

Dưới đây là minh họa sự khác biệt:

{{< mermaid >}}
sequenceDiagram
    participant User
    participant Server

    note over User, Server: Synchronous (Đồng bộ)
    User->>Server: Gửi request lấy dữ liệu...
    activate Server
    Server-->>User: ...Đang xử lý (User phải chờ)...
    deactivate Server
    User->>User: Nhận dữ liệu & Làm việc tiếp
    
    note over User, Server: Asynchronous (Bất đồng bộ)
    User->>Server: Gửi request lấy dữ liệu...
    activate Server
    User->>User: Làm việc khác trong khi chờ
    Server-->>User: Trả dữ liệu (Callback/Promise)
    deactivate Server
    User->>User: Xử lý dữ liệu nhận được
{{< /mermaid >}}

## Sự tiến hóa của Asynchronous JavaScript

### 1. Callback (Quá khứ)

Ngày xưa, chúng ta dùng **Callback** - truyền một hàm vào một hàm khác để chạy sau khi tác vụ hoàn thành. Tuy nhiên, khi logic phức tạp, chúng ta gặp phải "Callback Hell" (Địa ngục Callback):

```javascript
// Callback hell: Code lồng nhau như hình tháp
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            console.log(details); // Rất khó đọc và debug!
        });
    });
});
```

### 2. Promise (Cải tiến)

ES6 giới thiệu **Promise** để giải quyết Callback Hell. Code trở nên phẳng hơn và dễ quản lý lỗi hơn nhờ `.then()` và `.catch()`.

```javascript
fetch("/api/users/1")
    .then(response => response.json())
    .then(user => fetch(`/api/orders/${user.id}`))
    .then(orders => console.log(orders))
    .catch(error => console.error("Có lỗi xảy ra:", error));
```

### 3. Async/Await (Hiện đại)

ES8 (2017) mang đến **Async/Await**, thực chất là một lớp vỏ ngọt ngào (syntax sugar) bọc lấy Promise. Nó giúp chúng ta viết code bất đồng bộ trông y hệt như code đồng bộ bình thường.

## Cú pháp Async/Await

Hai từ khóa quan trọng:

* `async`: Khai báo một hàm là bất đồng bộ (luôn trả về một Promise).
* `await`: Tạm dừng hàm đó lại, chờ Promise giải quyết xong mới chạy tiếp dòng sau.

```javascript
// Thêm từ khóa 'async' vào trước hàm
async function getUserProfile(userId) {
    try {
        // Dùng 'await' để đợi kết quả, không cần .then()
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        
        console.log("User:", user);
        return user;
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
```

### Ví dụ thực tế: Chuỗi các tác vụ

Hãy xem Async/Await giúp code "sạch" như thế nào so với Callback Hell ở trên:

```javascript
async function getFullOrderDetails(userId) {
    try {
        // 1. Lấy thông tin user
        const user = await fetchUser(userId);
        
        // 2. Lấy danh sách đơn hàng của user đó
        // Dòng này chỉ chạy khi dòng 1 đã xong
        const orders = await fetchOrders(user.id);
        
        // 3. Lấy chi tiết đơn hàng đầu tiên
        const details = await fetchOrderDetails(orders[0].id);
        
        return details;
    } catch (error) {
        // Bắt lỗi chung cho cả quá trình
        console.error("Có lỗi xảy ra trong quá trình lấy đơn hàng:", error);
    }
}
```

## Tối ưu hiệu năng: Chạy song song

Đôi khi, bạn cần lấy dữ liệu từ nhiều nguồn không liên quan đến nhau (ví dụ: lấy danh sách sản phẩm và danh sách tin tức). Nếu dùng `await` từng cái, bạn sẽ lãng phí thời gian chờ đợi.

Thay vào đó, hãy dùng `Promise.all` để chạy chúng cùng lúc:

```javascript
async function loadDashboard() {
    try {
        // Bắt đầu cả 2 request cùng lúc
        const usersPromise = fetch("/api/users");
        const productsPromise = fetch("/api/products");
        
        // Đợi cả 2 cùng hoàn thành
        const [usersRes, productsRes] = await Promise.all([
            usersPromise, 
            productsPromise
        ]);
        
        const users = await usersRes.json();
        const products = await productsRes.json();
        
        return { users, products };
    } catch (error) {
        console.error("Một trong các request thất bại:", error);
    }
}
```

## Tổng kết

| Tính năng | Callback | Promise | Async/Await |
| :--- | :--- | :--- | :--- |
| **Độ dễ đọc** | Kém (Hell) | Tốt | Tuyệt vời |
| **Xử lý lỗi** | Thủ công từng bước | `.catch()` | `try...catch` (quen thuộc) |
| **Bản chất** | Hàm gọi hàm | Object đại diện tương lai | Promise + Generator |

**Async/Await** là tiêu chuẩn hiện nay cho lập trình JavaScript. Hãy sử dụng nó để code của bạn rõ ràng, dễ bảo trì và "dễ thở" hơn nhé!

**Bài tiếp theo:** [JavaScript React Basics](../javascript-react-basics)
