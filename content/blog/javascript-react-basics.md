---
title: "JavaScript React Basics"
date: 2025-12-19
draft: false
author: "Edward"
categories: ["JavaScript"]
tags: ["javascript", "react", "frontend"]
image: "images/blog/js-react.png"
summary: "Giới thiệu React - thư viện JavaScript phổ biến nhất để xây dựng UI với tư duy Component-based."
description: "Học React cơ bản: Hiểu sâu về Components, Props, State và Hooks thông qua ví dụ thực tế."
---

## React là gì?

**React** là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (User Interfaces - UI). Điểm khác biệt lớn nhất của React so với cách viết HTML/JS truyền thống là tư duy **Component-based** (dựa trên các thành phần).

Thay vì viết một trang web HTML khổng lồ, React khuyến khích bạn chia nhỏ giao diện thành các phần nhỏ độc lập gọi là **Components**. Giống như trò chơi LEGO, bạn xây dựng từng khối gạch nhỏ (Component) rồi ghép chúng lại thành một công trình lớn (Website).

Dưới đây là minh họa cấu trúc của một ứng dụng React đơn giản:

{{< mermaid >}}
graph TD
    App[App Component] --> Header[Header Component]
    App --> Main[Main Content Component]
    App --> Footer[Footer Component]
    Main --> Sidebar[Sidebar]
    Main --> Article[Article List]
    Article --> Item1[Article Item 1]
    Article --> Item2[Article Item 2]

    style App fill:#1e293b,stroke:#3b82f6,stroke-width:2px
    style Header fill:#1e293b,stroke:#64748b,stroke-width:1px
    style Main fill:#1e293b,stroke:#64748b,stroke-width:1px
    style Footer fill:#1e293b,stroke:#64748b,stroke-width:1px
{{< /mermaid >}}

### Tại sao lại dùng React?

* **Tái sử dụng (Reusability)**: Bạn viết Component `Button` một lần và dùng nó ở mọi nơi.
* **Dễ bảo trì**: Code được quản lý cục bộ trong từng Component, sửa chỗ này không lo hỏng chỗ khác.
* **Hiệu năng cao**: React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện, giúp web chạy mượt mà hơn.

## Tạo React App

Để bắt đầu, chúng ta cần một công cụ để tạo dự án. Trước đây `create-react-app` rất phổ biến, nhưng hiện nay **Vite** là lựa chọn được ưa chuộng hơn nhờ tốc độ vượt trội.

```bash
# Tạo project với Vite (Khuyên dùng)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Sau khi chạy lệnh trên, bạn sẽ có một server development (thường là `http://localhost:5173`) để xem kết quả ngay lập tức khi code.

## Components: Khối gạch của React

Trong React, có hai cách để tạo component: **Function Component** và **Class Component**. Hiện tại, **Function Component** là chuẩn mực mới và được sử dụng trong hầu hết các dự án hiện đại.

### Function Component

Hãy tưởng tượng Component giống như một hàm JavaScript bình thường. Nó nhận đầu vào (gọi là Props) và trả về cái bạn muốn hiển thị lên màn hình (JSX).

```jsx
// Đây là một Function Component đơn giản
function Welcome() {
    return (
        <div className="welcome-card">
            <h1>Xin chào!</h1>
            <p>Đây là component đầu tiên của tôi.</p>
        </div>
    );
}
```

Bạn cũng có thể dùng cú pháp Arrow Function cho ngắn gọn:

```jsx
const Welcome = () => (
    <div>
        <h1>Xin chào!</h1>
    </div>
);
```

### JSX: HTML trong lòng JavaScript

Bạn có thấy đoạn code trên trông giống HTML nhưng lại nằm trong file JavaScript không? Đó là **JSX** (JavaScript XML).

JSX cho phép bạn viết cấu trúc UI một cách trực quan ngay trong logic của code. Tuy nhiên, vì nó bản chất là JavaScript, bạn có thể chèn các biểu thức logic vào bằng cặp ngoặc nhọn `{}`.

```jsx
const user = {
    name: "Edward",
    avatarUrl: "https://example.com/avatar.jpg"
};

// Chèn biến vào JSX
const profile = (
    <div className="profile">
        <img src={user.avatarUrl} alt="Avatar" />
        {/* Gọi biến user.name */}
        <h3>Xin chào, {user.name}!</h3> 
    </div>
);
```

## Props: Giao tiếp giữa cha và con

**Props** (viết tắt của Properties) là cách các Component nói chuyện với nhau. Dữ liệu trong React chảy một chiều: từ Cha xuống Con.

Hãy nghĩ Props giống như **tham số của hàm**. Cha truyền tham số, con nhận và hiển thị.

```jsx
// Component Con: Nhận props 'name' và 'role'
function UserCard({ name, role }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="role">{role}</p>
        </div>
    );
}

// Component Cha: Truyền dữ liệu vào
function App() {
    return (
        <div>
            {/* Tái sử dụng UserCard với dữ liệu khác nhau */}
            <UserCard name="Edward" role="Developer" />
            <UserCard name="Minh" role="Designer" />
        </div>
    );
}
```

**Lưu ý quan trọng**: Props là **read-only** (chỉ đọc). Component con không được phép thay đổi Props mà nó nhận được.

## State: Bộ nhớ của Component

Nếu Props là dữ liệu từ bên ngoài truyền vào, thì **State** là dữ liệu nội bộ của chính Component đó. State là thứ giúp Component "ghi nhớ" và phản ứng với tương tác của người dùng.

Khi State thay đổi, React sẽ tự động cập nhật (re-render) lại Component đó để giao diện khớp với dữ liệu mới.

Chúng ta dùng Hook `useState` để khai báo State:

```jsx
import { useState } from 'react';

function Counter() {
    // Khai báo state 'count' giá trị ban đầu là 0
    // 'setCount' là hàm dùng để cập nhật giá trị này
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            {/* Khi bấm nút, gọi setCount để tăng giá trị */}
            <button onClick={() => setCount(count + 1)}>
                Bấm vào tôi
            </button>
        </div>
    );
}
```

### Khi nào dùng Props? Khi nào dùng State?

* **Props**: Dùng để cấu hình Component (như `src` của thẻ `img`, hay `text` của nút bấm). Dữ liệu này không đổi trong vòng đời Component.
* **State**: Dùng cho dữ liệu sẽ thay đổi theo thời gian (như số đếm, nội dung form, trạng thái đóng/mở menu).

## useEffect: Xử lý tác vụ phụ (Side Effects)

Trong lập trình UI, đôi khi chúng ta cần làm những việc không liên quan trực tiếp đến việc hiển thị, như:

* Lấy dữ liệu từ API (Fetch data).
* Đăng ký sự kiện (Event listener).
* Thay đổi tiêu đề trang (Document title).

Những việc này gọi là **Side Effects**. `useEffect` là nơi an toàn để thực hiện chúng.

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    // useEffect chạy SAU KHI component đã render xong
    useEffect(() => {
        // Giả lập lấy dữ liệu từ server
        fetch(`https://api.example.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
            
    }, [userId]); // Dependency Array: Chỉ chạy lại nếu userId thay đổi

    if (!user) return <p>Đang tải...</p>;

    return <h1>Tên người dùng: {user.name}</h1>;
}
```

## Tổng kết

React không quá khó nếu bạn nắm vững các khái niệm cốt lõi:

1. **Component**: Chia nhỏ giao diện.
2. **JSX**: Viết UI trong JS.
3. **Props**: Truyền dữ liệu xuống.
4. **State**: Quản lý dữ liệu nội bộ và phản hồi tương tác.
5. **Hooks**: Công cụ mạnh mẽ (như `useState`, `useEffect`) giúp Function Component làm được mọi thứ.

Ở bài tiếp theo, chúng ta sẽ tìm hiểu về hệ sinh thái **Node.js**, mảnh ghép quan trọng để bạn trở thành một Fullstack Developer.
