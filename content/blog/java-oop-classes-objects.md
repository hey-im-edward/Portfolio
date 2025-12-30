---
title: "Java OOP: Classes và Objects"
date: 2025-12-25
draft: false
author: "Edward"
categories: ["Java"]
tags: ["java", "oop", "class", "object"]
image: "images/blog/java-oop.png"
summary: "Từ Bản Vẽ đến Ngôi Nhà: Chinh phục khái niệm cốt lõi Class & Object trong lập trình hướng đối tượng."
description: "Giải thích OOP bằng tư duy đời thường: Bản thiết kế (Class), Ngôi nhà thực tế (Object) và 4 trụ cột sức mạnh của Java."
---

## 1. Mọi thứ đều là Đối Tượng (Object)

Trong thế giới thực, bạn được bao quanh bởi các **đối tượng**: Cái bàn, cái ghế, con mèo, chiếc xe máy.
Lập trình hướng đối tượng (**OOP**) chỉ đơn giản là cách chúng ta mô phỏng lại thế giới đó vào trong máy tính.

Để tạo ra một đối tượng trong Java, chúng ta cần 2 bước:

1. Vẽ bản thiết kế (**Class**).
2. Xây dựng đối tượng từ bản thiết kế đó (**Object**).

## 2. Class vs Object: Bản vẽ & Ngôi nhà

Hãy tưởng tượng bạn là một kiến trúc sư muốn xây nhà.

* **Class (Lớp)**: Chính là **Bản vẽ thiết kế**. Trên giấy, ngôi nhà chưa tồn tại, nó chỉ là các quy định: Nhà có mấy cửa sổ? Màu sơn gì? Cửa mở như thế nào?
* **Object (Đối tượng)**: Là **Ngôi nhà bằng gạch thật** được xây từ bản vẽ đó. Từ một bản vẽ (Class), bạn có thể xây được hàng nghìn ngôi nhà (Objects) khác nhau về địa chỉ nhưng giống nhau về cấu trúc.

{{< mermaid >}}
classDiagram
    class CarBlueprint {
        +String color
        +int speed
        +drive()
        +stop()
    }

    class RedCar {
        color: "Red"
        speed: 100
    }
    
    class BlueCar {
        color: "Blue"
        speed: 80
    }

    CarBlueprint <|-- RedCar : Instance 1
    CarBlueprint <|-- BlueCar : Instance 2
{{< /mermaid >}}

### Code thực tế

**Bước 1: Tạo bản vẽ (Class)**

```java
// File: Car.java
public class Car {
    // Thuộc tính (Đặc điểm)
    String color;
    int speed;

    // Phương thức (Hành động)
    void drive() {
        System.out.println("Xe màu " + color + " đang chạy với tốc độ " + speed + "km/h");
    }
}
```

**Bước 2: Xây nhà (Tạo Object)**

```java
public class Main {
    public static void main(String[] args) {
        // Xây chiếc xe thứ 1
        Car myCar = new Car(); 
        myCar.color = "Red";
        myCar.speed = 100;
        
        // Xây chiếc xe thứ 2
        Car yourCar = new Car();
        yourCar.color = "Blue";
        yourCar.speed = 80;

        // Xe chạy
        myCar.drive();   // Output: Xe màu Red đang chạy...
        yourCar.drive(); // Output: Xe màu Blue đang chạy...
    }
}
```

## 3. Constructor: Đội thi công

Khi bạn gọi `new Car()`, ai là người thực sự "xây" chiếc xe đó? Đó là **Constructor** (Hàm khởi tạo).
Nó giúp bạn cài đặt các thông số ban đầu ngay khi đối tượng ra đời.

```java
public class Car {
    String color;

    // Đây là Constructor
    public Car(String inputColor) {
        System.out.println("Đang sản xuất xe...");
        this.color = inputColor;
    }
}

// Khi chạy:
Car ferrari = new Car("Đỏ"); // Tự động gán màu Đỏ ngay lập tức
```

## 4. Bốn trụ cột của OOP (Giới thiệu nhanh)

Để trở thành cao thủ Java, bạn cần khắc cốt ghi tâm 4 chiêu thức này (chúng ta sẽ đi sâu vào từng bài sau):

1. **Đóng gói (Encapsulation)**: Giống như cái "vỏ thuốc". Bạn uống thuốc để trị bệnh chứ không cần biết bên trong bột thuốc gồm chất hóa học gì. Class che giấu dữ liệu phức tạp bên trong.
2. **Kế thừa (Inheritance)**: Con hưởng gia tài của cha. Class `Dog` có thể thừa hưởng tính năng `eat()` từ class `Animal` mà không cần viết lại.
3. **Đa hình (Polymorphism)**: Một hành động, nhiều sắc thái. Cùng lệnh `speak()`, nhưng Con Chó sủa "Gâu", Con Mèo kêu "Meo".
4. **Trừu tượng (Abstraction)**: Cái rimos tivi. Bạn chỉ cần bấm nút "Nguồn", không cần hiểu mạch điện bên trong nối như thế nào.

## Tổng kết

Bạn chỉ cần nhớ đúng 1 câu thần chú: **"Class là khuôn mẫu, Object là bánh đúc ra từ khuôn"**.

* Viết Class để mô tả thế giới.
* Tạo Object để thế giới đó hoạt động.

Ở bài tiếp theo, chúng ta sẽ học cách quản lý hàng trăm Object cùng lúc với **Collections Framework**.

**Bài tiếp theo:** [Java Collections Framework](../java-collections-framework)
