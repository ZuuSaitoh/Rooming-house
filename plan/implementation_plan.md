# Kế hoạch Component hóa ReactJS cho An Nhiên House

Dự án này sẽ chuyển đổi giao diện HTML tĩnh hiện tại thành cấu trúc ReactJS hiện đại, sử dụng **Vite** làm build tool. Chúng ta sẽ chuyển toàn bộ cấu trúc giao diện và logic tương tác từ file HTML/JS gốc thành các component React, đồng thời bóc tách toàn bộ dữ liệu (bảng giá, thông tin phòng, tiện ích, vị trí, liên hệ) ra các file Javascript riêng biệt để dễ dàng cập nhật sau này.

## User Review Required

> [!IMPORTANT]
> Chúng tôi sẽ khởi tạo dự án React trực tiếp tại thư mục gốc của repository như bạn đã chọn.
> - File `index.html` gốc sẽ được ghi đè bằng file `index.html` của React (để mount ứng dụng React). Để đảm bảo an toàn, chúng tôi sẽ sao lưu file gốc thành `index.static.html`.
> - Thư mục `assets/` hiện tại sẽ được giữ nguyên hoặc chuyển vào `public/assets/` để Vite có thể truy cập tĩnh một cách dễ dàng nhất (đường dẫn ảnh giữ nguyên `/assets/images/...`).
> - File `style.css` gốc sẽ được đưa vào `src/index.css` để giữ nguyên giao diện hiện có của bạn.

## Proposed Changes

Chúng ta sẽ tạo cấu trúc thư mục chuẩn ReactJS như sau:

---

### Cấu hình dự án & Foundation

#### [NEW] [package.json](file:///e:/Github/Rooming-house/package.json)
Khai báo các dependency cho React 18+ và các script chạy dev/build bằng Vite.

#### [NEW] [vite.config.js](file:///e:/Github/Rooming-house/vite.config.js)
Cấu hình Vite cơ bản cho ứng dụng React.

#### [MODIFY] [index.html](file:///e:/Github/Rooming-house/index.html)
Cập nhật file `index.html` gốc để chứa thẻ `<div id="root"></div>` và tải module `src/main.jsx`.

#### [NEW] [index.static.html](file:///e:/Github/Rooming-house/index.static.html)
Bản sao lưu của file `index.html` gốc để bạn có thể tham chiếu lại khi cần.

#### [NEW] [src/main.jsx](file:///e:/Github/Rooming-house/src/main.jsx)
Điểm khởi đầu của ứng dụng React, mount component `App` vào `#root`.

#### [NEW] [src/App.jsx](file:///e:/Github/Rooming-house/src/App.jsx)
Component gốc kết nối các layouts (Header, Footer) và các sections chính.

#### [NEW] [src/index.css](file:///e:/Github/Rooming-house/src/index.css)
Chứa nội dung của file `style.css` hiện tại để giữ nguyên thiết kế đẹp mắt của web.

---

### Tách biệt dữ liệu (Data Files)

Để bạn dễ dàng chỉnh sửa giá tiền, hình ảnh hay thông số mà không cần sửa code giao diện, chúng ta sẽ tách các dữ liệu này ra thư mục `src/data/`:

#### [NEW] [roomsData.js](file:///e:/Github/Rooming-house/src/data/roomsData.js)
Chứa thông tin chi tiết về các loại phòng (Studio, 1PN, Phòng có gác) bao gồm: giá cả, diện tích, sức chứa, mô tả ngắn, hình ảnh, trạng thái phòng, danh sách tiện nghi chi tiết phục vụ cho modal.

#### [NEW] [amenitiesData.js](file:///e:/Github/Rooming-house/src/data/amenitiesData.js)
Chứa danh sách các tiện ích dịch vụ cùng với icon SVG tương ứng, tên tiện ích và mô tả.

#### [NEW] [siteData.js](file:///e:/Github/Rooming-house/src/data/siteData.js)
Chứa các thông tin chung của website như: Số hotline, link Zalo, địa chỉ nhà trọ, danh sách các khoảng cách vị trí xung quanh (để hiển thị trên phần Vị trí), biểu phí dịch vụ (được hiển thị ở phần Chính sách).

---

### Custom Hooks (Thay thế logic trong app.js cũ)

#### [NEW] [useStickyHeader.js](file:///e:/Github/Rooming-house/src/hooks/useStickyHeader.js)
Quản lý trạng thái scroll của Header (thêm/xóa class `scrolled`).

#### [NEW] [useScrollSpy.js](file:///e:/Github/Rooming-house/src/hooks/useScrollSpy.js)
Theo dõi vị trí cuộn trang để tự động active các link tương ứng trên menu điều hướng.

---

### Layout Components

#### [NEW] [Header.jsx](file:///e:/Github/Rooming-house/src/layout/Header.jsx)
Thanh điều hướng đầu trang, xử lý menu mobile và thay đổi trạng thái khi cuộn.

#### [NEW] [Footer.jsx](file:///e:/Github/Rooming-house/src/layout/Footer.jsx)
Chân trang hiển thị thông tin thương hiệu, liên kết nhanh, địa chỉ và thông tin liên hệ được lấy động từ `siteData.js`.

---

### UI Components

#### [NEW] [SectionHeader.jsx](file:///e:/Github/Rooming-house/src/components/SectionHeader/SectionHeader.jsx)
Tiêu đề chung cho mỗi Section (Tagline, Title, Description).

#### [NEW] [RoomCard.jsx](file:///e:/Github/Rooming-house/src/components/RoomCard/RoomCard.jsx)
Thẻ hiển thị thông tin phòng, nút "Xem chi tiết" để kích hoạt mở modal.

#### [NEW] [RoomModal.jsx](file:///e:/Github/Rooming-house/src/components/Modal/RoomModal.jsx)
Hộp thoại hiển thị thông tin chi tiết của phòng đang chọn (trang bị sẵn, hình ảnh, giá cả cụ thể).

---

### Sections Components

#### [NEW] [Hero.jsx](file:///e:/Github/Rooming-house/src/sections/Hero/Hero.jsx)
Khu vực giới thiệu đầu trang (Hero section).

#### [NEW] [Amenities.jsx](file:///e:/Github/Rooming-house/src/sections/Amenities/Amenities.jsx)
Khu vực hiển thị danh sách các tiện nghi vượt trội (đọc dữ liệu từ `amenitiesData.js`).

#### [NEW] [Rooms.jsx](file:///e:/Github/Rooming-house/src/sections/Rooms/Rooms.jsx)
Khu vực hiển thị danh sách phòng (đọc từ `roomsData.js`) và xử lý việc mở/đóng modal chi tiết phòng.

#### [NEW] [Location.jsx](file:///e:/Github/Rooming-house/src/sections/Location/Location.jsx)
Khu vực bản đồ Google Maps và danh sách khoảng cách di chuyển từ `siteData.js`.

#### [NEW] [Policies.jsx](file:///e:/Github/Rooming-house/src/sections/Policies/Policies.jsx)
Khu vực chính sách đặt cọc, biểu phí dịch vụ (đọc từ `siteData.js`) và banner kêu gọi hành động (CTA).

---

## Verification Plan

### Manual Verification
- Kiểm tra các file code đã được tạo đúng cấu trúc thư mục quy định.
- Xác nhận các file dữ liệu (`roomsData.js`, `amenitiesData.js`, `siteData.js`) đã tách biệt đúng yêu cầu, dễ dàng chỉnh sửa.
- Hướng dẫn người dùng chạy lệnh `npm install` và `npm run dev` ở máy local của họ để kiểm tra giao diện và tính tương tác của React App (giao diện, menu mobile, modal phòng hoạt động chính xác).
