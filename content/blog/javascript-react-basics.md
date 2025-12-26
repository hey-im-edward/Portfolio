---
title: "JavaScript React Basics"
date: 2025-12-19
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "react", "frontend"]
summary: "Giới thiệu React - thư viện JavaScript phổ biến nhất để xây dựng UI."
description: "Học React cơ bản: Components, Props, State và Hooks."
---

## React là gì?

**React** là thư viện JavaScript do Facebook phát triển để xây dựng giao diện người dùng (UI). React sử dụng **component-based architecture**.

## Tạo React App

```bash
# Với Create React App
npx create-react-app my-app
cd my-app
npm start

# Hoặc với Vite (nhanh hơn)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Components

### Function Component (khuyến khích)

```jsx
function Welcome() {
    return (
        <div>
            <h1>Xin chào!</h1>
            <p>Đây là component đầu tiên của tôi.</p>
        </div>
    );
}

export default Welcome;
```

### Arrow Function Component

```jsx
const Welcome = () => {
    return (
        <div>
            <h1>Xin chào!</h1>
        </div>
    );
};

export default Welcome;
```

## JSX

**JSX** là extension của JavaScript cho phép viết HTML trong JS:

```jsx
const element = <h1>Hello, World!</h1>;

// JSX với JavaScript expressions
const name = "Edward";
const greeting = <h1>Xin chào, {name}!</h1>;

// Điều kiện
const isLoggedIn = true;
const message = isLoggedIn ? <p>Chào mừng!</p> : <p>Vui lòng đăng nhập</p>;

// Render list
const items = ["Táo", "Cam", "Xoài"];
const list = (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);
```

## Props

**Props** là cách truyền dữ liệu từ component cha sang con:

```jsx
// Component con
function Greeting({ name, age }) {
    return (
        <div>
            <h2>Xin chào, {name}!</h2>
            <p>Bạn {age} tuổi.</p>
        </div>
    );
}

// Component cha
function App() {
    return (
        <div>
            <Greeting name="Edward" age={25} />
            <Greeting name="Minh" age={22} />
        </div>
    );
}
```

### Children Props

```jsx
function Card({ title, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

function App() {
    return (
        <Card title="Thông tin">
            <p>Đây là nội dung bên trong card.</p>
            <button>Click me</button>
        </Card>
    );
}
```

## State với useState

**State** là dữ liệu thay đổi theo thời gian, khi thay đổi sẽ re-render component:

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(count - 1);
    };
    
    return (
        <div>
            <h2>Đếm: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
```

### State với Object

```jsx
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <form>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tên"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
}
```

## useEffect Hook

Xử lý side effects: fetch data, subscriptions, DOM manipulation:

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        };
        
        fetchUser();
    }, [userId]); // Dependency array - chạy lại khi userId thay đổi
    
    if (loading) return <p>Đang tải...</p>;
    if (!user) return <p>Không tìm thấy user</p>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

## Event Handling

```jsx
function Button() {
    const handleClick = (e) => {
        console.log("Button clicked!");
        console.log(e.target);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };
    
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
```

## Conditional Rendering

```jsx
function Dashboard({ user }) {
    // Kiểm tra null
    if (!user) {
        return <p>Vui lòng đăng nhập</p>;
    }
    
    return (
        <div>
            <h1>Xin chào, {user.name}</h1>
            
            {/* Ternary */}
            {user.isAdmin ? <AdminPanel /> : <UserPanel />}
            
            {/* && operator */}
            {user.notifications.length > 0 && (
                <NotificationBadge count={user.notifications.length} />
            )}
        </div>
    );
}
```

## Tổng kết

React concepts cốt lõi:

- **Components**: UI được chia thành các phần nhỏ, tái sử dụng
- **JSX**: Viết HTML trong JavaScript
- **Props**: Truyền dữ liệu từ cha sang con
- **State**: Dữ liệu thay đổi, trigger re-render
- **Hooks**: useState, useEffect cho function components

**Bài tiếp theo:** JavaScript Node.js Introduction
