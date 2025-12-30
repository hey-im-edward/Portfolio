---
title: "Java Collections Framework"
date: 2025-12-24
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "collections", "list", "map", "set"]
image: "images/blog/java-collections.png"
summary: "List, Set, Map là gì? Giải thích Collections Framework bằng ví dụ Logistics dễ hiểu."
description: "Phân biệt ArrayList, LinkedList, HashMap qua hình ảnh: Dãy hộp thư, Đoàn tàu và Tủ đồ cá nhân."
---

## 1. Vấn đề của mảng (Array)

Hãy tưởng tượng bạn có một **cái khay đựng trứng (Array)**.

* Nó có 10 lỗ. Bạn chỉ để được tối đa 10 quả trứng.
* Nếu bạn muốn để 11 quả? Không được, phải mua khay mới to hơn.
* Nếu bạn chỉ để 2 quả? 8 lỗ còn lại bị phí phạm.

Đó là lý do **Java Collections Framework** ra đời. Nó là một bộ "thùng chứa" thông minh, co giãn tùy ý.

## 2. Collections Framework: Trung Tâm Logistics

Hãy coi chương trình của bạn là một trạm trung chuyển hàng hóa. Chúng ta có 3 loại cấu trúc chính:

{{< mermaid >}}
classDiagram
    class Collection {
        add()
        remove()
        size()
    }
    class List
    class Set
    class Map

    List --|> Collection
    Set --|> Collection
    
    ArrayList ..|> List
    LinkedList ..|> List
    HashSet ..|> Set
    HashMap ..|> Map
{{< /mermaid >}}

### A. List (Danh sách) - "Đoàn tàu & Hộp thư"

**List** chứa các phần tử theo thứ tự, giống như danh sách học sinh.

#### ArrayList: "Dãy hộp thư"

* **Đặc điểm**: Các ô nhớ nằm liền kề nhau như một dãy hộp thư được đánh số (0, 1, 2...).
* **Ưu điểm**: Truy cập cực nhanh. Muốn lấy thư ở hộp số 99? Bùm! Có ngay.
* **Nhược điểm**: Chèn/Xóa chậm. Nếu bạn chèn một hộp mới vào giữa, bạn phải đẩy lùi tất cả hộp phía sau đi.

#### LinkedList: "Đoàn tàu hỏa"

* **Đặc điểm**: Mỗi toa tàu (Node) móc nối với toa kế tiếp. Các toa có thể nằm rải rác.
* **Ưu điểm**: Thêm/Bớt toa cực nhanh. Chỉ cần tháo móc nối và gắn toa mới vào.
* **Nhược điểm**: Truy cập chậm. Muốn tìm toa số 99? Phải đi bộ từ đầu tàu qua 98 toa trước đó.

```java
// ArrayList nhanh khi đọc
List<String> userList = new ArrayList<>();
userList.add("Edward");

// LinkedList nhanh khi thêm/xóa đầu đuôi
List<String> history = new LinkedList<>();
history.add(0, "New Action");
```

### B. Set (Tập hợp) - "Túi thần kỳ"

**Set** giống như một cái túi. Bạn bỏ đồ vào đó, nó sẽ lộn xộn, không có thứ tự.

* **Đặc điểm**: **KHÔNG** chấp nhận hàng trùng lặp. Nếu bạn bỏ 2 quả táo giống hệt nhau vào, nó chỉ giữ lại 1.
* **Dùng khi nào?**: Khi bạn muốn list danh sách email khách hàng (không được trùng).

```java
Set<String> emails = new HashSet<>();
emails.add("a@gmail.com");
emails.add("a@gmail.com"); // Bị loại bỏ
System.out.println(emails.size()); // 1
```

### C. Map (Bản đồ) - "Tủ đồ cá nhân"

**Map** không thuộc `Collection` interface nhưng là một phần quan trọng. Nó hoạt động theo cặp **Key - Value**.

* Ví dụ: Tủ đồ ở siêu thị. Chìa khóa số 10 (Key) mở tủ chứa ba lô của bạn (Value).

```java
Map<String, Integer> scoreBoard = new HashMap<>(); // Key là Tên, Value là Điểm

scoreBoard.put("Minh", 95);
scoreBoard.put("Lan", 88);

// Lấy điểm của Minh (Truy cập theo Key)
int diem = scoreBoard.get("Minh"); // 95
```

## Tổng kết: Chọn mặt gửi vàng

Bạn đang phân vân không biết dùng cái nào? Hãy nhớ bảng này:

| Nhu cầu | Chọn Class | Tại sao? |
| :--- | :--- | :--- |
| **Truy cập nhanh** (theo index) | `ArrayList` | Nhanh như điện (O(1)) |
| **Thêm/Xóa nhiều** (ở đầu/giữa) | `LinkedList` | Nối toa tàu cực lẹ |
| **Không trùng lặp** | `HashSet` | Chống duplicate tự động |
| **Cần sắp xếp** | `TreeSet` / `TreeMap` | Tự động sort A-Z |
| **Tra cứu theo Key** | `HashMap` | Tìm kiếm siêu tốc |

**Bài tiếp theo:** [JavaScript Fundamentals](../javascript-fundamentals)
