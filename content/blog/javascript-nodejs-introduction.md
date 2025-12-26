---
title: "JavaScript Node.js Introduction"
date: 2025-12-18
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "nodejs", "backend"]
summary: "Giới thiệu Node.js - chạy JavaScript trên server."
description: "Bắt đầu với Node.js: runtime, npm, modules và xây dựng server cơ bản."
---

## Node.js là gì?

**Node.js** là runtime environment cho phép chạy JavaScript ngoài trình duyệt. Được xây dựng trên Chrome's V8 engine.

### Đặc điểm

- **Asynchronous & Event-driven**: Xử lý nhiều request đồng thời
- **Single-threaded**: Sử dụng Event Loop
- **Cross-platform**: Chạy trên Windows, Linux, macOS
- **NPM ecosystem**: Thư viện packages khổng lồ

## Cài đặt Node.js

Download từ [nodejs.org](https://nodejs.org) hoặc dùng nvm:

```bash
# Kiểm tra version
node -v
npm -v

# Chạy file JavaScript
node app.js

# REPL mode
node
> console.log("Hello Node.js!")
```

## NPM - Node Package Manager

### Khởi tạo project

```bash
mkdir my-project
cd my-project
npm init -y
```

### package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

### Cài đặt packages

```bash
# Install dependency
npm install express

# Install dev dependency
npm install -D nodemon

# Install globally
npm install -g nodemon

# Cài từ package.json
npm install
```

## Modules System

### CommonJS (Node.js default)

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
// hoặc
exports.multiply = (a, b) => a * b;

// app.js
const { add, subtract } = require('./math');
console.log(add(2, 3));  // 5
```

### ES Modules (khuyến khích)

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add, subtract } from './math.js';
```

Để dùng ES Modules, thêm vào package.json:

```json
{
  "type": "module"
}
```

## Built-in Modules

### fs (File System)

```javascript
import fs from 'fs';
import { readFile, writeFile } from 'fs/promises';

// Đọc file (async)
const content = await readFile('./data.txt', 'utf-8');
console.log(content);

// Ghi file
await writeFile('./output.txt', 'Hello from Node.js!');

// Kiểm tra file tồn tại
if (fs.existsSync('./config.json')) {
    console.log('File exists!');
}
```

### path

```javascript
import path from 'path';

const filePath = '/users/edward/documents/file.txt';

console.log(path.basename(filePath));  // file.txt
console.log(path.dirname(filePath));   // /users/edward/documents
console.log(path.extname(filePath));   // .txt
console.log(path.join('users', 'edward', 'docs'));  // users/edward/docs
```

### http

```javascript
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js!</h1>');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
```

## Express.js - Web Framework

```javascript
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Xin chào từ Express!');
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Edward' },
        { id: 2, name: 'Minh' }
    ];
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: `User ${id}` });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ 
        message: 'User created',
        user: { name, email }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

## Environment Variables

```javascript
// .env file
// PORT=3000
// DATABASE_URL=mongodb://localhost:27017/mydb
// API_KEY=secret123

import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

console.log(`Server port: ${PORT}`);
```

## Async File Operations

```javascript
import { readFile, writeFile, readdir } from 'fs/promises';
import path from 'path';

async function processFiles(directory) {
    try {
        // Đọc danh sách files
        const files = await readdir(directory);
        
        // Lọc file .txt
        const txtFiles = files.filter(file => path.extname(file) === '.txt');
        
        // Đọc nội dung từng file
        for (const file of txtFiles) {
            const content = await readFile(
                path.join(directory, file), 
                'utf-8'
            );
            console.log(`${file}: ${content.length} characters`);
        }
    } catch (error) {
        console.error('Lỗi:', error.message);
    }
}

processFiles('./data');
```

## Tổng kết

Node.js cho phép:

- Chạy JavaScript trên server
- Xây dựng REST APIs với Express
- Xử lý file system
- Kết nối database
- Xây dựng CLI tools

**Điểm quan trọng:**

- Sử dụng `async/await` cho IO operations
- Quản lý packages với npm
- Dùng ES Modules cho code modular
- Xử lý errors properly

---

*Đây là bài cuối trong series JavaScript. Chúc bạn học tốt!* 🚀
