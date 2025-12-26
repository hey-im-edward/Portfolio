---
title: "JavaScript ES6+ Features"
date: 2025-12-22
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "es6", "modern"]
summary: "Khám phá các tính năng mới của JavaScript từ ES6 đến nay."
description: "Tổng hợp các tính năng ES6+ quan trọng trong JavaScript hiện đại."
---

## ES6+ là gì?

**ES6** (ECMAScript 2015) là bản cập nhật lớn của JavaScript, giới thiệu nhiều tính năng hiện đại. Các phiên bản sau (ES7, ES8, ...) tiếp tục bổ sung.

## 1. Arrow Functions

Cú pháp ngắn gọn hơn cho function:

```javascript
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Với một tham số
const double = x => x * 2;

// Với nhiều dòng
const greet = name => {
    const message = `Xin chào, ${name}!`;
    return message;
};
```

## 2. Template Literals

String interpolation với backticks:

```javascript
const name = "Edward";
const age = 25;

// Cũ
const old = "Tôi là " + name + ", " + age + " tuổi";

// ES6
const modern = `Tôi là ${name}, ${age} tuổi`;

// Multi-line strings
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;
```

## 3. Destructuring

Trích xuất giá trị từ object/array:

```javascript
// Object destructuring
const person = { name: "Edward", age: 25, city: "HCM" };
const { name, age } = person;
console.log(name);  // "Edward"

// Đổi tên
const { name: userName } = person;

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first);  // "red"

// Bỏ qua phần tử
const [, , third] = colors;
console.log(third);  // "blue"
```

## 4. Spread & Rest Operators

### Spread (...)

```javascript
// Sao chép array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

// Merge objects
const defaults = { theme: "dark", lang: "vi" };
const settings = { ...defaults, lang: "en" };
// { theme: "dark", lang: "en" }
```

### Rest (...)

```javascript
// Gom các tham số
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4);  // 10

// Destructuring với rest
const [head, ...tail] = [1, 2, 3, 4];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4]
```

## 5. Default Parameters

```javascript
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

greet();              // "Hello, Guest!"
greet("Edward");      // "Hello, Edward!"
greet("Edward", "Hi"); // "Hi, Edward!"
```

## 6. Classes

Syntax OOP rõ ràng hơn:

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks!`);
    }
}

const dog = new Dog("Buddy", "Golden");
dog.speak();  // "Buddy barks!"
```

## 7. Modules (import/export)

```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { PI, add } from './math.js';

console.log(PI);           // 3.14159
console.log(add(2, 3));    // 5
console.log(multiply(2, 3)); // 6
```

## 8. Optional Chaining (?.) - ES2020

```javascript
const user = {
    name: "Edward",
    address: {
        city: "HCM"
    }
};

// Cũ (dài dòng)
const city = user && user.address && user.address.city;

// ES2020
const city = user?.address?.city;  // "HCM"
const zip = user?.address?.zip;     // undefined (không lỗi)
```

## 9. Nullish Coalescing (??) - ES2020

```javascript
const value = null;

// || xem 0, "", false là falsy
const result1 = value || "default";  // "default"
const result2 = 0 || "default";      // "default" (không mong muốn)

// ?? chỉ check null/undefined
const result3 = value ?? "default";  // "default"
const result4 = 0 ?? "default";      // 0 (OK!)
```

## Tổng kết

ES6+ mang đến cú pháp ngắn gọn, rõ ràng và mạnh mẽ hơn. Hãy sử dụng các tính năng này để viết code modern và maintainable.

**Bài tiếp theo:** JavaScript DOM Manipulation
