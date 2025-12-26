---
title: "JavaScript Cơ Bản: Fundamentals"
date: 2025-12-23
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "basic", "fundamentals"]
summary: "Tìm hiểu những kiến thức cơ bản về JavaScript - ngôn ngữ của web."
description: "Hướng dẫn JavaScript cơ bản cho người mới bắt đầu."
---

## JavaScript là gì?

**JavaScript** là ngôn ngữ lập trình phổ biến nhất cho web development. Nó chạy trên trình duyệt và cả server (Node.js).

## Biến trong JavaScript

JavaScript có 3 cách khai báo biến:

```javascript
// var - phạm vi function (cũ, không khuyến khích)
var name = "Edward";

// let - phạm vi block (khuyến khích)
let age = 25;

// const - hằng số (không thể gán lại)
const PI = 3.14159;
```

### Sự khác biệt

| Từ khóa | Scope | Hoisting | Gán lại |
|---------|-------|----------|---------|
| `var` | Function | ✅ | ✅ |
| `let` | Block | ❌ | ✅ |
| `const` | Block | ❌ | ❌ |

## Kiểu dữ liệu

JavaScript có **7 kiểu dữ liệu nguyên thủy**:

```javascript
// String
let str = "Hello World";

// Number
let num = 42;
let float = 3.14;

// Boolean
let isActive = true;

// Undefined
let x;
console.log(x);  // undefined

// Null
let empty = null;

// Symbol (ES6)
let sym = Symbol("unique");

// BigInt (ES2020)
let big = 9007199254740991n;
```

### Kiểm tra kiểu dữ liệu

```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug lịch sử!)
typeof []          // "object"
typeof {}          // "object"
```

## Object và Array

### Object

```javascript
const person = {
    name: "Edward",
    age: 25,
    skills: ["Java", "JavaScript"],
    greet: function() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
};

// Truy cập
console.log(person.name);      // "Edward"
console.log(person["age"]);    // 25

// Gọi method
person.greet();
```

### Array

```javascript
const fruits = ["Táo", "Cam", "Xoài"];

// Truy cập
console.log(fruits[0]);    // "Táo"
console.log(fruits.length); // 3

// Thêm/xóa
fruits.push("Dưa");        // Thêm cuối
fruits.pop();              // Xóa cuối
fruits.unshift("Lê");      // Thêm đầu
fruits.shift();            // Xóa đầu

// Duyệt
fruits.forEach(fruit => console.log(fruit));
```

## Điều kiện và Vòng lặp

### If-else

```javascript
const score = 85;

if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 70) {
    console.log("Khá");
} else {
    console.log("Cần cố gắng");
}
```

### Vòng lặp

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (ES6)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// While
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
```

## Tổng kết

JavaScript là ngôn ngữ linh hoạt và mạnh mẽ. Nắm vững các fundamentals sẽ giúp bạn học các tính năng nâng cao dễ dàng hơn.

**Bài tiếp theo:** JavaScript ES6+ Features
