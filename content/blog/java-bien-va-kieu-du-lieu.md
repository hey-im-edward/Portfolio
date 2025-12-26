---
title: "Java Cơ Bản: Biến và Kiểu Dữ Liệu"
date: 2025-12-26
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "basic", "variables"]
summary: "Tìm hiểu về biến và các kiểu dữ liệu cơ bản trong Java - ngôn ngữ lập trình phổ biến nhất thế giới."
description: "Hướng dẫn chi tiết về biến và kiểu dữ liệu trong Java cho người mới bắt đầu."
---

## Giới thiệu

Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới. Trong bài viết này, chúng ta sẽ tìm hiểu về **biến** và **kiểu dữ liệu** - những khái niệm cơ bản nhất khi học Java.

## Biến là gì?

**Biến** (variable) là vùng nhớ dùng để lưu trữ dữ liệu. Mỗi biến có:

- **Tên biến**: định danh để truy cập
- **Kiểu dữ liệu**: xác định loại dữ liệu lưu trữ
- **Giá trị**: dữ liệu thực tế

```java
// Cú pháp khai báo biến
kiểuDữLiệu tênBiến = giáTrị;

// Ví dụ
int tuoi = 25;
String ten = "Edward";
double diemTB = 8.5;
```

## Kiểu dữ liệu nguyên thủy (Primitive Types)

Java có **8 kiểu dữ liệu nguyên thủy**:

| Kiểu | Kích thước | Phạm vi | Ví dụ |
|------|------------|---------|-------|
| `byte` | 1 byte | -128 đến 127 | `byte b = 100;` |
| `short` | 2 bytes | -32,768 đến 32,767 | `short s = 1000;` |
| `int` | 4 bytes | -2³¹ đến 2³¹-1 | `int i = 100000;` |
| `long` | 8 bytes | -2⁶³ đến 2⁶³-1 | `long l = 100000L;` |
| `float` | 4 bytes | ~7 chữ số thập phân | `float f = 3.14f;` |
| `double` | 8 bytes | ~15 chữ số thập phân | `double d = 3.14159;` |
| `char` | 2 bytes | Ký tự Unicode | `char c = 'A';` |
| `boolean` | 1 bit | true/false | `boolean b = true;` |

## Kiểu dữ liệu tham chiếu

Ngoài kiểu nguyên thủy, Java còn có **kiểu tham chiếu** (Reference Types):

```java
// String - chuỗi ký tự
String message = "Hello World!";

// Array - mảng
int[] numbers = {1, 2, 3, 4, 5};

// Object - đối tượng
Object obj = new Object();
```

## Quy tắc đặt tên biến

1. Bắt đầu bằng chữ cái, `_` hoặc `$`
2. Không được dùng từ khóa Java
3. Phân biệt chữ hoa/thường
4. Nên dùng **camelCase**

```java
// ✅ Đúng
int studentAge;
String firstName;
double _salary;

// ❌ Sai
int 1stNumber;  // Bắt đầu bằng số
String class;   // Từ khóa Java
```

## Tổng kết

Biến và kiểu dữ liệu là nền tảng của mọi chương trình Java. Hiểu rõ chúng sẽ giúp bạn viết code hiệu quả và tránh lỗi.

**Bài tiếp theo:** Java OOP - Classes & Objects
