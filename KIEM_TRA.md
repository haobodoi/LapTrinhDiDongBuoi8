# Kết quả hoàn thiện BookStore – Buổi 8

## Mã nguồn
- Đã bổ sung BT8.1 đến BT8.8.
- Đã thực hiện thử thách BT8.C1 (sách liên quan), BT8.C2 (mã giảm giá).
- Đã thêm nút hiện/ẩn mật khẩu ở màn Đăng nhập.
- Đáp án 5 câu hỏi bổ sung đặt ở `TraLoi.md`.
- Ảnh trong `MINH_CHUNG/` là các đoạn code thật của bản project đã sửa, **không phải ảnh chụp chạy app**.

## Tình trạng kiểm thử
- Transpile cú pháp 54 file .ts/.tsx bằng TypeScript: 0 lỗi cú pháp.
- Không còn `TODO BT8` ở các màn hình và hooks; component `TodoBox` định nghĩa sẵn được giữ lại nhưng không được gọi.
- Chưa thực hiện được `npx tsc --noEmit` và chạy Expo Web do không cài được dependency (npm registry không truy cập được; npm offline báo ENOTCACHED với @expo/metro-runtime).
- Chưa có ảnh chụp màn hình ứng dụng thực tế. Ảnh UI trong Word là **minh họa từ docs/ui**, không phải kết quả thử nghiệm.

## Lệnh chạy trên máy cá nhân
```bash
npm install
npm run api               # Terminal 1
npx expo start --web      # Terminal 2
npx tsc --noEmit
```

Tài khoản demo theo đề: `demo@bookstore.vn / 123456`.
