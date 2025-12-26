---
title: "JavaScript Async/Await"
date: 2025-12-20
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "async", "promise"]
summary: "Xử lý bất đồng bộ trong JavaScript với Async/Await."
description: "Hướng dẫn sử dụng Async/Await để viết code bất đồng bộ dễ đọc hơn."
---

## Bất đồng bộ (Asynchronous) là gì?

JavaScript là ngôn ngữ **single-threaded** nhưng có thể xử lý **bất đồng bộ** nhờ Event Loop. Điều này quan trọng khi:

- Gọi API
- Đọc/ghi file
- Timeout/Interval
- Database operations

## Callback - Cách cũ

```javascript
// Callback hell
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            console.log(details);
            // Khó đọc, khó maintain
        });
    });
});
```

## Promise - Cách tốt hơn

**Promise** đại diện cho giá trị có thể có trong tương lai.

```javascript
// Tạo Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("Thành công!");
    } else {
        reject("Thất bại!");
    }
});

// Sử dụng Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

### Promise Chain

```javascript
fetch("/api/users/1")
    .then(response => response.json())
    .then(user => fetch(`/api/orders/${user.id}`))
    .then(response => response.json())
    .then(orders => console.log(orders))
    .catch(error => console.error("Lỗi:", error));
```

## Async/Await - Cách tốt nhất

**Async/Await** là syntax sugar cho Promise, code dễ đọc như đồng bộ.

### Cú pháp cơ bản

```javascript
// Khai báo async function
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Lỗi:", error);
        throw error;
    }
}

// Gọi async function
fetchUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
```

### Ví dụ thực tế

```javascript
async function getOrderDetails(userId) {
    try {
        // Lấy user
        const userRes = await fetch(`/api/users/${userId}`);
        const user = await userRes.json();
        
        // Lấy orders
        const ordersRes = await fetch(`/api/orders/${user.id}`);
        const orders = await ordersRes.json();
        
        // Lấy chi tiết order đầu tiên
        const detailsRes = await fetch(`/api/order-details/${orders[0].id}`);
        const details = await detailsRes.json();
        
        return {
            user,
            orders,
            details
        };
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        throw error;
    }
}
```

## Promise.all - Chạy song song

Khi các request không phụ thuộc nhau, chạy song song để nhanh hơn:

```javascript
async function fetchMultipleData() {
    try {
        // Chạy song song
        const [users, products, orders] = await Promise.all([
            fetch("/api/users").then(r => r.json()),
            fetch("/api/products").then(r => r.json()),
            fetch("/api/orders").then(r => r.json())
        ]);
        
        return { users, products, orders };
    } catch (error) {
        console.error("Một trong các request thất bại:", error);
    }
}
```

## Promise.allSettled

Không dừng khi có lỗi, lấy kết quả của tất cả:

```javascript
const results = await Promise.allSettled([
    fetch("/api/data1"),
    fetch("/api/data2"),
    fetch("/api/data3")
]);

results.forEach((result, index) => {
    if (result.status === "fulfilled") {
        console.log(`Request ${index} thành công:`, result.value);
    } else {
        console.log(`Request ${index} thất bại:`, result.reason);
    }
});
```

## Promise.race

Lấy kết quả của request hoàn thành đầu tiên:

```javascript
const fastest = await Promise.race([
    fetch("/api/server1"),
    fetch("/api/server2"),
    fetch("/api/server3")
]);

console.log("Server nhanh nhất:", fastest);
```

## Error Handling

### Try-catch

```javascript
async function fetchData() {
    try {
        const response = await fetch("/api/data");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === "TypeError") {
            console.error("Lỗi mạng:", error);
        } else {
            console.error("Lỗi khác:", error);
        }
        throw error;
    }
}
```

## Tổng kết

| Cách | Ưu điểm | Nhược điểm |
|------|---------|------------|
| Callback | Đơn giản | Callback hell |
| Promise | Chain được | Vẫn phải .then() |
| Async/Await | Đọc như sync | Cần try-catch |

**Bài tiếp theo:** JavaScript React Basics
