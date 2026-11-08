# BookStore Online — Buổi 8 (Expo SDK 58)

**Sinh viên:** Nguyễn Nhựt Hào — **MSSV:** 23738291  
**Công nghệ:** Expo SDK 58 · React Native 0.88.1 · React 19.3.0 · TypeScript · Redux Toolkit · React Navigation 7 · json-server.  
Dự án tiếp nối BookStore Buổi 7: https://github.com/haobodoi/LapTrinhDiDongBuoi7

## Yêu cầu
- Node.js **22.13 trở lên**, npm và Expo Go có hỗ trợ **SDK 58**.
- Project này dùng **managed Expo**, không có thư mục `android/` hoặc `ios/` phải nâng cấp thủ công.

## Cài đặt và kiểm tra

Mở PowerShell/CMD ở thư mục chứa `package.json` rồi chạy:

```powershell
node -v
npm install
npx expo install --fix
npx expo-doctor
npx tsc --noEmit
```

Nếu `expo install --fix` thay đổi `package.json`, hãy giữ những thay đổi đó; đây là bước Expo đối chiếu versions với bản SDK 58 thực tế bạn cài. Khi đã chạy được, nên commit cả `package-lock.json` do `npm install` sinh ra.

**Chạy API:**

```powershell
npm run api
```

Mở terminal thứ hai, chạy web hoặc Expo Go:

```powershell
npx expo start --web
# hoặc:
npx expo start -c
```

- JSON Server: `http://localhost:3000`.
- Tài khoản demo: `demo@bookstore.vn` / `123456`.
- Điện thoại thật: dùng chung Wi-Fi và khai báo địa chỉ LAN của máy chạy API, ví dụ trong PowerShell:

```powershell
$env:EXPO_PUBLIC_API_URL = "http://192.168.1.10:3000"
npx expo start -c
```

Thay `192.168.1.10` bằng IPv4 thật của máy tính (`ipconfig`). Dùng `localhost` trên điện thoại sẽ trỏ về chính điện thoại và gây `Network Error`.

## Chức năng đã viết trong source

- **BT8.1:** Đăng nhập, validate các trường, báo lỗi API, loading; hiện/ẩn mật khẩu.
- **BT8.2:** Đăng ký, kiểm tra xác nhận mật khẩu, tự đăng nhập.
- **BT8.3:** Tự khôi phục phiên đăng nhập, đăng xuất và xóa phiên.
- **BT8.4:** Yêu cầu đăng nhập trước khi Checkout, giữ tổng tiền khi điều hướng.
- **BT8.5:** Sao đánh giá, điểm trung bình và gửi đánh giá qua API.
- **BT8.6:** Số lượng giỏ hàng ± có debounce và giới hạn tồn kho.
- **BT8.7:** Xóa có xác nhận, lưu giỏ và yêu thích bằng AsyncStorage.
- **BT8.8:** Tim yêu thích dùng chung Redux store, màn danh sách yêu thích.
- **BT8.C1:** Sách liên quan.
- **BT8.C2:** Mã giảm giá SALE10, GIAM50K.

`TraLoi.md`: câu trả lời 5 câu bổ sung. `MINH_CHUNG/`: ảnh mã nguồn, **không** phải ảnh app chạy. `TRANG_THAI_KIEM_THU.md`: giới hạn kiểm thử của bản bàn giao.

## Về nâng SDK

- Đã đồng bộ các phiên bản khai báo trong `package.json` cho **Expo SDK 58**.
- Không chỉnh sửa logic các bài thực hành; không thêm `sdkVersion` cố định vào `app.json`.
- Môi trường bàn giao **không kết nối được npm registry**, nên chưa thực hiện `npm install`, `expo-doctor`, build hay kiểm thử runtime. Cần chạy các lệnh trong mục *Cài đặt và kiểm tra* trên máy có internet.
- `package-lock.json` **chưa có** vì không thể resolve phụ thuộc tại môi trường này. Nên tạo bằng `npm install` trên máy bạn; không dùng lockfile SDK 57 cũ.

**Lưu ý:** Đăng nhập ở project này là giả lập phục vụ học tập; app so mật khẩu từ json-server. Khi làm sản phẩm thực tế, cần chuyển xác thực sang server và lưu token trong secure storage.
