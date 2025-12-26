---
title: "Java Collections Framework"
date: 2025-12-24
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "collections", "list", "map", "set"]
summary: "Tổng quan về Java Collections Framework - công cụ quản lý dữ liệu mạnh mẽ."
description: "Hướng dẫn sử dụng List, Set, Map và các collections khác trong Java."
---

## Collections Framework là gì?

**Java Collections Framework** là tập hợp các interface và class để lưu trữ, thao tác với nhóm đối tượng.

## Hierarchy của Collections

```
Collection
├── List (có thứ tự, cho phép duplicate)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
├── Set (không duplicate)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (FIFO)
    ├── LinkedList
    └── PriorityQueue

Map (key-value pairs)
├── HashMap
├── LinkedHashMap
└── TreeMap
```

## 1. List - Danh sách có thứ tự

### ArrayList

```java
import java.util.ArrayList;
import java.util.List;

List<String> fruits = new ArrayList<>();

// Thêm phần tử
fruits.add("Táo");
fruits.add("Cam");
fruits.add("Xoài");

// Truy cập
String first = fruits.get(0);  // "Táo"

// Duyệt
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Kích thước
int size = fruits.size();  // 3

// Xóa
fruits.remove("Cam");
```

### LinkedList

```java
import java.util.LinkedList;

LinkedList<Integer> numbers = new LinkedList<>();
numbers.addFirst(1);  // Thêm đầu
numbers.addLast(3);   // Thêm cuối
numbers.add(1, 2);    // Thêm vào vị trí 1
```

## 2. Set - Không cho phép trùng lặp

### HashSet

```java
import java.util.HashSet;
import java.util.Set;

Set<String> colors = new HashSet<>();
colors.add("Đỏ");
colors.add("Xanh");
colors.add("Đỏ");  // Không thêm được (đã tồn tại)

System.out.println(colors.size());  // 2
```

### TreeSet (sắp xếp tự động)

```java
import java.util.TreeSet;

TreeSet<Integer> sortedNumbers = new TreeSet<>();
sortedNumbers.add(5);
sortedNumbers.add(1);
sortedNumbers.add(3);

// In ra: 1, 3, 5 (đã sắp xếp)
for (int n : sortedNumbers) {
    System.out.println(n);
}
```

## 3. Map - Cặp key-value

### HashMap

```java
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> scores = new HashMap<>();

// Thêm
scores.put("Minh", 85);
scores.put("Lan", 92);
scores.put("Nam", 78);

// Truy cập
int minhScore = scores.get("Minh");  // 85

// Kiểm tra key
if (scores.containsKey("Lan")) {
    System.out.println("Điểm của Lan: " + scores.get("Lan"));
}

// Duyệt
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

## So sánh các Collections

| Collection | Thứ tự | Duplicate | Null | Thread-safe |
|------------|--------|-----------|------|-------------|
| ArrayList | ✅ | ✅ | ✅ | ❌ |
| LinkedList | ✅ | ✅ | ✅ | ❌ |
| HashSet | ❌ | ❌ | ✅ (1) | ❌ |
| TreeSet | ✅ (sorted) | ❌ | ❌ | ❌ |
| HashMap | ❌ | Keys: ❌ | ✅ | ❌ |
| TreeMap | ✅ (sorted) | Keys: ❌ | ❌ | ❌ |

## Tổng kết

- Dùng **ArrayList** khi cần truy cập nhanh theo index
- Dùng **LinkedList** khi thường xuyên thêm/xóa
- Dùng **HashSet** khi cần tập hợp không trùng lặp
- Dùng **HashMap** khi cần mapping key-value

**Bài tiếp theo:** JavaScript Fundamentals
