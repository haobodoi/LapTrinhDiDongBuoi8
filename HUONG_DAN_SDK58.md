# Chuyển BookStore từ Expo SDK 57 sang SDK 58

## Đã cập nhật

| Package | Trước (SDK 57) | Sau (SDK 58) |
|---|---|---|
| `expo` | `~57.0.27` | `^58.0.0` |
| `react-native` | `0.86.3` | `0.88.1` |
| `react`, `react-dom` | `19.2.3` | `19.3.0` |
| `@expo/metro-runtime` | `~57.0.0` | `~58.0.17` |
| `expo-asset` | `~57.0.0` | `~58.0.19` |
| `expo-constants` | `~57.0.21` | `~58.0.15` |
| `expo-font` | `~57.0.0` | `~58.0.11` |
| `expo-status-bar` | `~57.0.1` | `~58.0.4` |
| `react-native-safe-area-context` | `~5.7.0` | `~5.10.1` |
| `react-native-screens` | `~4.26.0` | `~4.30.1` |
| `react-native-web` | `~0.21.0` | `~0.21.4` |
| `@types/react` | `~19.2.0` | `~19.3.0` |
| `typescript` | `~5.9.2` | `~6.0.3` |

- Thêm `engines.node >=22.13.0`.
- Giữ nguyên app.json với `web.bundler = metro` và không cố định `sdkVersion`.
- Nguồn chính thức: https://docs.expo.dev/versions/v58.0.0/ ; https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/

## Kiểm tra trên Windows

1. Cài Node.js 22.13 trở lên.
2. Mở thư mục project trong VS Code, chạy `npm install`.
3. Chạy `npx expo install --fix` rồi `npx expo-doctor`.
4. Chạy `npx tsc --noEmit`.
5. Chạy `npm run api`, một terminal khác `npx expo start -c`.
6. Đăng nhập demo@bookstore.vn / 123456 rồi thử các bài Buổi 8.

**Quan trọng:** Nếu Expo CLI đề xuất phiên bản khác một chút cho SDK 58 patch bạn cài, ưu tiên `npx expo install --fix`, vì CLI lấy map tương thích chính thức của đúng bản Expo được cài. 

## Trạng thái xác minh

- Đã kiểm tra định dạng JSON và các import đường dẫn nội bộ; phân tích cú pháp `.ts`/`.tsx`.
- Chưa thể tải dependency vì npm registry không truy cập được ở môi trường tạo ZIP. Chưa thể chạy `expo-doctor`, typecheck đầy đủ hay Expo Go; **không khẳng định ứng dụng đã chạy thành công trên SDK 58**.
