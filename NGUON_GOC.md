# Nguồn gốc và cách tiếp nối dự án

- Sinh viên: **Nguyễn Nhựt Hào** (tên trong tài liệu gốc: Nguyen Nhut Hao), MSSV: **23738291**.
- Tệp được gửi: `NguyenNhutHao_23738291.rar` chứa duy nhất báo cáo Word Buổi 7 (`NguyenNhutHao_23738291.docx`), không chứa source code.
- Báo cáo Buổi 7 ghi đường dẫn repository: https://github.com/haobodoi/LapTrinhDiDongBuoi7 (mã nguồn ở thư mục `Lab7`).
- Bản này dùng cấu trúc BookStore Starter Buổi 8 tương thích với dự án Lab7 và bổ sung các tính năng của đề Buổi 8, giữ lại những phần nền tảng đã có. Một số tệp nền trùng SHA Git của repository Buổi 7: `src/components/Badge.tsx`, `src/api/client.ts`, `src/store/authSlice.ts`, `src/theme/index.ts`, `db.json`.
- **Không phải bản clone nguyên trạng repository Buổi 7**; đây là bản tiếp nối để đáp ứng đề Buổi 8. GitHub repo gốc chưa bị sửa đổi.

## Các chức năng được bổ sung

- BT8.1–8.2: Đăng nhập/đăng ký, validation, lỗi API, loading; tùy chọn hiện/ẩn mật khẩu.
- BT8.3–8.4: Lưu phiên bằng AsyncStorage, đăng xuất, chặn Checkout chưa đăng nhập và điều hướng quay lại đúng trang.
- BT8.5: RatingStars, điểm trung bình đánh giá, gửi đánh giá đến API.
- BT8.6–8.7: Số lượng ± với debounce/tồn kho, xác nhận xóa, lưu và khôi phục giỏ/yêu thích.
- BT8.8: Tim yêu thích dùng store chung và danh sách yêu thích.
- C1, C2: Sách liên quan, mã SALE10 và GIAM50K.

## Phân biệt chứng cứ

`MINH_CHUNG/` chứa hình chụp **mã nguồn** đã triển khai. Các hình giao diện đích trong báo cáo Word là **hình minh họa theo tài liệu thực hành**, không được trình bày như ảnh app đã chạy. Báo cáo Buổi 7 trong file RAR có ảnh thật của Buổi 7, dùng làm minh chứng trạng thái nền.
