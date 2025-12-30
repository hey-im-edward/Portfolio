---
title: "Hugo Portfolio Blog"
date: 2025-12-26
lastmod: 2025-12-30
draft: false

summary: "Hành trình xây dựng một 'Ngôi nhà số' tốc độ cao với Hugo, CSS Glassmorphism và quy trình CI/CD tự động."
description: "Không chỉ là một portfolio, đây là câu chuyện về việc tối ưu hóa hiệu năng, kiểm soát từng pixel giao diện và tự động hóa quy trình deploy."
tech: ["Hugo", "HTML", "CSS", "JavaScript", "GitHub Actions"]

github: "https://github.com/hey-im-edward/Portfolio"
demo: "https://hey-im-edward.github.io/Portfolio/"
website: ""

featured: true
image: "images/blog/welcome.png"

start_date: 2025-12-26
end_date: 2025-12-26
status: "completed"
toc: true
---

## 1. Tại sao lại là "Tự xây" mà không dùng có sẵn?

Khi bắt đầu viết blog, mình đứng trước hai lựa chọn: Dùng các nền tảng có sẵn như Medium/Substack, hoặc tự xây dựng một website từ con số 0.

Mình đã chọn cách khó hơn: **Tự xây**.

Tại sao? Hãy tưởng tượng bạn đang thuê một căn hộ chung cư (Medium). Nó đẹp, tiện nghi, có bảo vệ, nhưng bạn **không được phép đập thông tường**, không được **sơn màu lạ**, và nếu chủ nhà (platform) quyết định tăng giá hoặc thay đổi quy định, bạn phải chịu trận.

Ngược lại, tự xây website giống như việc bạn **mua đất và tự xây nhà**. Bạn quyết định móng nhà sâu bao nhiêu (Tech stack), tường màu gì (CSS), và cửa sổ hướng về đâu (UX/UI).

Dự án này chính là "Ngôi nhà số" của mình. Nơi mình có toàn quyền kiểm soát, từ tốc độ tải trang (Performance) đến từng pixel hiển thị.

## 2. Kiến trúc: Hugo & Static Site Generator (SSG)

### Ẩn dụ: Máy in ấn công nghiệp vs. Thư tay

Để hiểu tại sao mình chọn Hugo (một SSG) thay vì WordPress (một CMS truyền thống), hãy hình dung thế này:

* **WordPress (Dynamic Site)**: Giống như một người thư ký ngồi trực **viết thư tay**. Mỗi khi có ai đó gõ cửa (User truy cập), người thư ký phải chạy đi tìm giấy, tìm bút, tra cứu nội dung, rồi chép lại bức thư và đưa cho khách. Nếu có 1000 người đến cùng lúc, người thư ký sẽ kiệt sức (Server overload).
* **Hugo (Static Site)**: Giống như một **Máy in ấn công nghiệp**. Trước khi mở cửa đón khách, mình đã cho máy chạy và in sẵn 1000 bản sao của tất cả các bài viết. Khi khách đến, mình chỉ việc rút tờ giấy đã in sẵn và đưa cho họ. Tốc độ là **tức thì**.

Vì Hugo tạo ra các file HTML tĩnh (Static HTML), nên server không cần tính toán gì cả khi người dùng truy cập. Kết quả là website này đạt tốc độ tải trang **dưới 1 giây**.

{{< mermaid >}}
graph TD
    subgraph "Dynamic (WordPress)"
    A[User Request] -->|Wait...| B[Server Processing]
    B --> C[Database Query]
    C --> B
    B --> D[HTML Generation]
    D --> E[Response]
    end

    subgraph "Hugo (Static)"
    F[User Request] -->|Instant| G[CDN / Server]
    G --> H[Pre-built HTML]
    H --> I[Response]
    end
    
    style H fill:#f59e0b,stroke:#333,stroke-width:2px,color:white
{{< /mermaid >}}

## 3. Giao diện: CSS Custom Properties

### Ẩn dụ: "Thùng sơn thần kỳ"

Mình không dùng các thư viện CSS đồ sộ như Bootstrap hay Tailwind cho dự án này (dù mình rất thích Tailwind). Mình muốn quay về căn bản để hiểu sâu về CSS.

Để quản lý giao diện, mình sử dụng **CSS Variables (Custom Properties)**. Hãy tưởng tượng bạn đang sơn một ngôi nhà lớn.

* **Cách cũ (Hardcode)**: Bạn đi từng phòng, sơn từng bức tường màu xanh dương. Nếu sau này muốn đổi sang màu đỏ, bạn phải đi lại từng phòng để sơn lại. Rất tốn sức!
* **Cách mới (CSS Variables)**: Bạn nối tất cả các vòi phun sơn trong nhà vào một **"Thùng sơn tổng"** (đặt tên là `--primary-color`). Khi muốn đổi màu cả nhà, bạn chỉ cần đổ màu đỏ vào thùng sơn tổng đó. Bùm! Cả ngôi nhà đổi màu trong nháy mắt.

Đây là cách mình quản lý Dark Mode/Light Mode. Chỉ cần thay đổi giá trị của các biến màu sắc, toàn bộ giao diện sẽ tự động thích ứng.

```css
/* Thùng sơn tổng */
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
}

/* Đổi màu thùng sơn khi tắt đèn */
[data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
}
```

## 4. Thử thách kỹ thuật: Dark Mode & "Cú nháy mắt" khó chịu

Một trong những vấn đề đau đầu nhất khi làm Dark Mode là **FOUC (Flash of Unstyled Content)**.

Hãy tưởng tượng bạn bước vào một căn phòng tối. Bạn hy vọng đèn sẽ bật sáng dịu nhẹ ngay lập tức. Nhưng thay vào đó, một đèn pha cực mạnh (Light Mode mặc định) chiếu thẳng vào mặt bạn trong 0.5 giây, rồi mới chuyển sang đèn dịu (Dark Mode). Cảm giác đó rất khó chịu!

Điều này xảy ra vì trình duyệt tải HTML và CSS mặc định trước, sau đó JavaScript mới chạy để kiểm tra xem người dùng có thích chế độ tối hay không.

**Giải pháp**:

Mình đã phải chèn một đoạn script nhỏ (inline script) ngay trên đầu trang (trong thẻ `<head>`), trước khi bất kỳ nội dung nào được hiển thị. Đoạn script này đóng vai trò như một người gác cổng thông minh:

1. Kiểm tra xem khách có đeo kính râm không (System Preference).
2. Kiểm tra xem khách có từng yêu cầu tắt đèn lần trước không (LocalStorage).
3. Ra quyết định bật đèn loại nào **ngay lập tức** trước khi mời khách vào phòng.

Nhờ đó, đôi mắt của bạn luôn được bảo vệ khi truy cập blog này vào ban đêm.

## 5. Tự động hóa: GitHub Actions

Mình lười. Và vì lười, mình không muốn mỗi lần viết bài xong lại phải gõ lệnh build, rồi copy file lên server thủ công.

Mình đã thiết lập một "dây chuyền sản xuất tự động" bằng **GitHub Actions**.

1. **Viết bài**: Mình viết bài trên máy tính cá nhân bằng Markdown.
2. **Commit & Push**: Mình đẩy code lên GitHub.
3. **Robot làm việc**: GitHub Actions (con robot) sẽ tự động:
    * Tải Hugo về.
    * Build toàn bộ website ra HTML.
    * Tối ưu hóa hình ảnh (nén ảnh giúp tải nhanh hơn).
    * Đẩy kết quả cuối cùng lên GitHub Pages.

{{< mermaid >}}
sequenceDiagram
    participant Dev as 👨‍💻 Me
    participant GitHub as 🐙 GitHub
    participant Actions as 🤖 Actions
    participant Pages as 🚀 Pages

    Dev->>GitHub: git push
    GitHub->>Actions: Trigger Build
    activate Actions
    Actions->>Actions: Install Hugo
    Actions->>Actions: Build Site
    Actions->>Actions: Optimize Images
    Actions->>Pages: Deploy Artifact
    deactivate Actions
    Pages-->>Dev: Live Website Updated
{{< /mermaid >}}

Tất cả diễn ra trong khoảng 30 giây. Trong lúc đó, mình đã có thể đi pha một tách cà phê.

## 6. Kết quả

Dự án này không chỉ là một portfolio, nó là minh chứng cho triết lý **"Hiểu sâu, làm đơn giản"**.

* 🚀 **Performance**: Điểm Lighthouse luôn đạt 95-100.
* 📱 **Responsive**: Giao diện hoạt động mượt mà trên cả Mobile và Desktop.
* 🎨 **Thẩm mỹ**: Giao diện Glassmorphism hiện đại, độc đáo.

Hy vọng bạn thích trải nghiệm trên website này cũng như mình thích quá trình tạo ra nó!
