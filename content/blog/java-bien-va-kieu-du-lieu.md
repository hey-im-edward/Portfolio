---
title: "Java Cơ Bản: Biến và Kiểu Dữ Liệu"
date: 2025-12-26
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "basic", "variables"]
image: "images/blog/java-variables.png"
summary: "Từ nguyên thủy đến đối tượng: Hiểu sâu về cách Java quản lý bộ nhớ (Stack vs Heap)."
description: "Cốt lõi của Java: Phân biệt Primitive vs Reference types, Stack vs Heap và những chiếc hộp trong nhà kho bộ nhớ."
---

## Biến: Những chiếc hộp thần kỳ

Trong lập trình, **Biến (Variable)** giống như những chiếc hộp dùng để đựng dữ liệu.

Tưởng tượng bộ nhớ máy tính là một **Nhà Kho Khổng Lồ**:

1. Bạn cần lưu số tuổi? Bạn lấy một cái hộp nhỏ, viết nhãn "Tuổi", bỏ số `25` vào.
2. Bạn cần lưu tên người dùng? Bạn lấy một hòm thư, viết nhãn "Tên", bỏ chữ `"Edward"` vào.

Trong Java, mỗi chiếc hộp này đều phải được quy định kích thước và loại đồ vật được chứa ngay từ đầu. Đó gọi là **Kiểu Dữ Liệu**.

## Bộ nhớ Java: Stack & Heap

Đây là phần quan trọng nhất để trở thành Java Master. Java chia nhà kho thành 2 khu vực chính:

* **Stack (Ngăn kệ nhỏ)**: Chứa các hộp nhỏ, nhẹ, truy xuất cực nhanh. Dành cho các **Kiểu nguyên thủy (Primitives)**.
* **Heap (Kho chứa lớn)**: Chứa các vật thể cồng kềnh, phức tạp. Dành cho **Đối tượng (Objects)**.

Dưới đây là mô hình bộ nhớ khi bạn chạy đoạn code sau:

```java
int age = 20; 
String name = "Edward";
```

{{< mermaid >}}
graph TD
    subgraph Stack ["STACK MEMORY (Ngăn kệ)"]
        Note1["Biến 'age' <br/> Giá trị: 20"]
        Note2["Biến 'name' <br/> Giá trị: 0x123 (Địa chỉ)"]
    end

    subgraph Heap ["HEAP MEMORY (Kho lớn)"]
        Obj1["String Object <br/> 'Edward'"]
    end
    
    Note2 -->|Trỏ tới| Obj1
    
    style Stack fill:#f1f5f9,stroke:#475569
    style Heap fill:#dbeafe,stroke:#3b82f6
    style Note1 fill:#fff,stroke:#333
    style Note2 fill:#fff,stroke:#333
    style Obj1 fill:#fcd34d,stroke:#b45309
{{< /mermaid >}}

## 1. Kiểu Nguyên Thủy (Primitives) - "Hộp chứa đồ thật"

Java có **8 kiểu nguyên thủy**. Chúng sống hoàn toàn trên **Stack**. Khi bạn gán `a = b`, nó sẽ copy miếng giá trị đó sang hộp mới (Copy giá trị).

| Kiểu | Kích thước | Dùng để chứa | Ví dụ |
|------|------------|--------------|-------|
| `boolean` | 1 bit | Đúng/Sai | `true`, `false` |
| `char` | 2 bytes | Một ký tự | `'A'`, `'9'`, `'&'` |
| `byte` | 1 byte | Số nguyên rất nhỏ | `-128` đến `127` |
| `short` | 2 bytes | Số nguyên nhỏ | `32,000` |
| `int` | 4 bytes | Số nguyên (Mặc định) | `100`, `2025` |
| `long` | 8 bytes | Số nguyên khổng lồ | `9,000,000,000L` |
| `float` | 4 bytes | Số thực | `3.14f` |
| `double` | 8 bytes | Số thực (Mặc định) | `3.14159` |

> **Mẹo:** 99% trường hợp bạn sẽ dùng `int` cho số nguyên, `double` cho số thực, và `boolean` cho logic.

## 2. Kiểu Tham Chiếu (Reference Types) - "Tờ giấy chỉ đường"

Các kiểu như `String`, `Array`, hay `Class` do người dùng tự định nghĩa đều là **Kiểu Tham Chiếu**.

Vì chúng quá lớn (một đoạn văn dài, một danh sách 1000 sinh viên), chúng không thể nhét vừa cái kệ Stack.

* Dữ liệu thật nằm ở **Heap**.
* Trên **Stack** chỉ lưu một "tờ giấy chỉ đường" (địa chỉ bộ nhớ) trỏ tới nơi chứa dữ liệu đó.

Ví dụ sự khác biệt:

```java
// Primitive: Copy giá trị
int a = 10;
int b = a; // b copy số 10 của a
b = 20;    // a vẫn là 10. Các hộp độc lập.

// Reference: Copy địa chỉ
int[] arr1 = {1, 2, 3};
int[] arr2 = arr1; // arr2 copy "tờ giấy chỉ đường" của arr1
arr2[0] = 99;      // arr1[0] cũng thành 99! Vì cả 2 cùng chỉ vào 1 nơi.
```

## Tổng kết

* **Biến** là nơi lưu trữ data.
* **Primitive** (nguyên thủy) lưu giá trị trực tiếp trên Stack. Nhanh, gọn.
* **Reference** (tham chiếu) lưu địa chỉ trỏ tới Heap. Mạnh mẽ, linh hoạt.

Hiểu rõ Stack và Heap sẽ cứu bạn khỏi hàng tá lỗi "NullPointerException" sau này!

**Bài tiếp theo:** [Java OOP - Classes & Objects](../java-oop-classes-objects)
