# TRANG WEB TÀI LIỆU HỌC TẬP (HOST TRÊN GITHUB PAGES)

*(Mục tiêu: giáo viên up tài liệu → học sinh tìm theo **mã tài liệu** → mở đúng folder)*

---

## I. Ý TƯỞNG TỔNG THỂ (RẤT QUAN TRỌNG)

### 1. Bạn đang muốn làm gì?

- Một **trang web tĩnh** (không cần backend)
- Host **miễn phí trên GitHub Pages**
- Giáo viên:
  - Tạo sẵn **folder tài liệu**
  - Mỗi folder có **mã tài liệu** (VD: `BT_QL_001`)
  - Up folder lên GitHub
- Học sinh:
  - Truy cập web
  - Nhập **mã tài liệu**
  - Web tự mở đúng folder tương ứng

👉 Đây là bài toán **tra cứu tài liệu bằng mã**, không cần database.

---

## II. CẤU TRÚC THƯ MỤC CHUẨN (CỐT LÕI)

📁 **repository GitHub** của bạn:

```
root/
│── index.html          (trang chính)
│── data.js             (danh sách mã tài liệu)
│── style.css           (giao diện)
│
└── docs/               (THƯ MỤC TÀI LIỆU)
    ├── BT_QL_001/
    │   ├── bai_toan.pdf
    │   ├── loi_giai.cpp
    │   └── README.md
    │
    ├── BT_DQ_002/
    │   ├── de_bai.pdf
    │   └── huong_dan.md
    │
    └── BT_DFS_003/
```

📌 **Quy tắc vàng**:
- Mỗi folder = **1 mã duy nhất**
- Tên folder **CHÍNH LÀ MÃ**

---

## III. DANH SÁCH MÃ TÀI LIỆU (data.js)

```js
const documents = {
  "BT_QL_001": {
    title: "Quay lui – Sinh nhị phân",
    path: "docs/BT_QL_001/"
  },
  "BT_DQ_002": {
    title: "Đệ quy cơ bản",
    path: "docs/BT_DQ_002/"
  },
  "BT_DFS_003": {
    title: "DFS – Chiều sâu",
    path: "docs/BT_DFS_003/"
  }
};
```

👉 Khi bạn **up tài liệu mới**:
- Tạo folder
- Thêm **1 dòng vào `data.js`**

---

## IV. TRANG CHÍNH (index.html)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Tra cứu tài liệu Tin học</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>📘 TRA CỨU TÀI LIỆU TIN HỌC</h1>

  <input id="codeInput" placeholder="Nhập mã tài liệu (VD: BT_QL_001)">
  <button onclick="searchDoc()">Tìm</button>

  <p id="result"></p>

  <script src="data.js"></script>
  <script>
    function searchDoc() {
      const code = document.getElementById("codeInput").value.trim();
      const result = document.getElementById("result");

      if (documents[code]) {
        const doc = documents[code];
        result.innerHTML = `✅ <b>${doc.title}</b><br>
          <a href="${doc.path}" target="_blank">Mở tài liệu</a>`;
      } else {
        result.innerHTML = "❌ Không tìm thấy mã tài liệu";
      }
    }
  </script>
</body>
</html>
```

---

## V. GIAO DIỆN ĐƠN GIẢN (style.css)

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

input {
  padding: 8px;
  width: 250px;
}

button {
  padding: 8px 15px;
  margin-left: 5px;
}
```

---

## VI. CÁCH UP LÊN GITHUB PAGES

### Bước 1: Tạo repository
- Tên: `tai-lieu-tin-hoc`
- Public

### Bước 2: Up toàn bộ file

### Bước 3: Bật GitHub Pages

- Settings → Pages
- Source: `main` branch
- Folder: `/root`

👉 Website sẽ có dạng:
```
https://tenban.github.io/tai-lieu-tin-hoc/
```

---

## VII. CÁCH DÙNG CHO GIÁO VIÊN (SIÊU NHANH)

1️⃣ Tạo folder mới trong `docs/`
```
BT_DP_010/
```

2️⃣ Bỏ file bài giảng vào

3️⃣ Thêm vào `data.js`

```js
"BT_DP_010": {
  title: "Dynamic Programming cơ bản",
  path: "docs/BT_DP_010/"
}
```

4️⃣ Push GitHub → xong

---

## VIII. MỞ RỘNG SAU NÀY (NẾU MUỐN)

- Tìm kiếm **không phân biệt hoa thường**
- Danh sách tất cả tài liệu
- Phân loại theo chủ đề
- Mỗi folder có `README.md` hiển thị mô tả

---

## IX. TỔNG KẾT

✔ Không cần server
✔ Không cần database
✔ Miễn phí 100%
✔ Phù hợp dạy học
✔ Dễ bảo trì

👉 Đây là mô hình **chuẩn – gọn – bền** cho giáo viên Tin học.

**Bản quyền: Trần Văn Nam**

