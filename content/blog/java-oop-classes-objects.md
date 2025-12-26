---
title: "Java OOP: Classes và Objects"
date: 2025-12-25
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "oop", "class", "object"]
summary: "Tìm hiểu về lập trình hướng đối tượng trong Java với Classes và Objects."
description: "Hướng dẫn chi tiết về Class và Object trong Java - nền tảng của OOP."
---

## Lập trình hướng đối tượng (OOP)

**OOP** (Object-Oriented Programming) là paradigm lập trình dựa trên khái niệm **đối tượng**. Java là ngôn ngữ OOP thuần túy.

## Class là gì?

**Class** là bản thiết kế (blueprint) để tạo ra đối tượng. Nó định nghĩa:

- **Thuộc tính** (attributes/fields)
- **Phương thức** (methods)

```java
public class Student {
    // Thuộc tính
    String name;
    int age;
    double gpa;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Phương thức
    public void study() {
        System.out.println(name + " đang học bài");
    }
    
    public void introduce() {
        System.out.println("Tôi là " + name + ", " + age + " tuổi");
    }
}
```

## Object là gì?

**Object** (đối tượng) là instance của class. Tạo object bằng từ khóa `new`:

```java
// Tạo object từ class Student
Student sv1 = new Student("Minh", 20);
Student sv2 = new Student("Lan", 21);

// Sử dụng object
sv1.introduce();  // Output: Tôi là Minh, 20 tuổi
sv2.study();      // Output: Lan đang học bài
```

## 4 Tính chất của OOP

### 1. Đóng gói (Encapsulation)

Che giấu dữ liệu nội bộ, chỉ cho phép truy cập qua phương thức:

```java
public class BankAccount {
    private double balance;  // private - không thể truy cập trực tiếp
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

### 2. Kế thừa (Inheritance)

Class con kế thừa thuộc tính và phương thức từ class cha:

```java
public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " đang ăn");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println(name + " sủa: Gâu gâu!");
    }
}
```

### 3. Đa hình (Polymorphism)

Cùng một phương thức, hành vi khác nhau tùy object:

```java
Animal animal = new Dog();
animal.eat();  // Phương thức của Animal, nhưng thực thi trên Dog
```

### 4. Trừu tượng (Abstraction)

Ẩn chi tiết, chỉ hiển thị chức năng cần thiết:

```java
abstract class Shape {
    abstract double getArea();  // Chỉ khai báo, không implement
}

class Circle extends Shape {
    double radius;
    
    @Override
    double getArea() {
        return Math.PI * radius * radius;
    }
}
```

## Tổng kết

Class và Object là nền tảng của OOP trong Java. Hiểu rõ 4 tính chất OOP sẽ giúp bạn thiết kế phần mềm tốt hơn.

**Bài tiếp theo:** Java Collections Framework
