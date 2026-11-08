# Trả lời câu hỏi bổ sung – Thực hành Buổi 8

## 1. Vai trò của cờ `ready`
Lần render đầu, Redux cart chưa kịp nạp từ bộ nhớ và đang là `[]`. Nếu `useAutoPersist` ghi ngay, dữ liệu rỗng sẽ có thể ghi đè giỏ hàng từ lần chạy trước trước khi hoàn tất `loadJSON`. Cờ `ready` chỉ được bật sau khi nạp `auth`, `cart` và `wishlist`, nhờ đó tránh ghi sớm.

## 2. Hạn chế bảo mật của token giả
Ứng dụng đang tải dữ liệu người dùng và so sánh mật khẩu phía client, có nguy cơ lộ mật khẩu. Token sinh tại client cũng có thể bị giả mạo. Hệ thống thực tế phải xác thực phía backend, chỉ lưu mật khẩu đã băm có salt và cấp token có thời hạn; ứng dụng di động nên lưu token bằng `expo-secure-store`/Keychain/Android Keystore thay vì lưu trực tiếp bằng AsyncStorage.

## 3. Hai `useEffect` của `CartItemRow`
Nếu bỏ effect đồng bộ `setQty(item.quantity)`, khi store thay đổi số lượng từ chỗ khác (ví dụ khôi phục giỏ hoặc thêm lại sản phẩm) thì số lượng trong state cục bộ vẫn giữ giá trị cũ. Kết quả là số lượng hiển thị không khớp với giỏ hàng thực tế.

## 4. Một nguồn state cho nút tim
Nếu từng `HeartButton` sử dụng `useState` riêng, nhấn tim ở Home sẽ không tự thay đổi tim ở màn Chi tiết. Redux wishlist giữ cùng một danh sách `ids` cho mọi màn nên việc bật/tắt yêu thích được phản ánh đồng bộ.

## 5. Nút hiển thị/ẩn mật khẩu
Đã bổ sung `showPassword` bằng `useState(false)` trong `LoginScreen.tsx`. Nút `Pressable` với biểu tượng mắt đảo `showPassword`, còn `FormField` được truyền `secureTextEntry={!showPassword}`. Xem ảnh minh chứng và phần mô tả trong báo cáo Word.
