/**
 * AN NHIÊN HOUSE - ROOMS STATIC DATA
 * Day la noi ban co the de dang chinh sua:
 * - Gia tien (price - kieu so nguyen, he thong tu dong format)
 * - Duong dan anh (image)
 * - Trang thai phong (status, statusClass)
 * - Cac thong so dien tich, suc chua va danh sach noi that trong modal
 */

export const roomsData = [
  {
    id: "studio",
    title: "Phòng Studio Hiện Đại",
    area: "22 - 25 m²",
    capacity: "1 - 2 Người",
    intro: "Không gian mở tích hợp khu bếp mini gọn gàng và tủ quần áo lớn. Thích hợp cho người đi làm và sinh viên ưa thích sự tiện lợi.",
    price: 3500000, // Gia thue tu (VND/thang)
    image: "/assets/images/room_studio.png",
    status: "Còn phòng",
    statusClass: "available", // "available" (green badge) hoac "limited" (yellow badge)
    modalDetails: {
      roomType: "Phòng Studio",
      title: "Phòng Studio Hiện Đại & Tiện Nghi",
      desc: "Không gian sống lý tưởng được tối ưu hóa thiết kế mở. Phòng ngập tràn ánh sáng tự nhiên với ô cửa sổ kính lớn, trang bị sẵn nội thất thông minh chất lượng tốt.",
      amenities: [
        { icon: "🛏️", text: "Giường nệm cao su non 1m6x2m" },
        { icon: "👗", text: "Tủ quần áo 2 cánh gỗ MDF chống ẩm" },
        { icon: "🍳", text: "Kệ bếp gỗ tích hợp bồn rửa inox, vách kính chịu nhiệt" },
        { icon: "❄️", text: "Máy lạnh Inverter 1.5 HP tiết kiệm điện" },
        { icon: "🚿", text: "Nhà vệ sinh riêng, bình nóng lạnh trực tiếp" },
        { icon: "💻", text: "Bàn làm việc/bàn học kèm ghế tựa" }
      ]
    }
  },
  {
    id: "1pn",
    title: "Phòng 1 Phòng Ngủ (1PN)",
    area: "32 - 38 m²",
    capacity: "2 - 3 Người",
    intro: "Thiết kế phòng ngủ riêng biệt ngăn cách bằng vách kính cao cấp, phòng khách ngập tràn ánh sáng. Thích hợp cho cặp đôi, gia đình nhỏ.",
    price: 4800000,
    image: "/assets/images/room_1pn.png",
    status: "Còn phòng",
    statusClass: "available",
    modalDetails: {
      roomType: "Căn Hộ 1 Phòng Ngủ",
      title: "Căn Hộ 1PN Cao Cấp - Tách Biệt Riêng Tư",
      desc: "Sự kết hợp hoàn hảo giữa thiết kế hiện đại và sự riêng tư tuyệt đối. Phòng khách và phòng ngủ riêng biệt giúp tăng tính thẩm mỹ và ngăn mùi nấu ăn hiệu quả.",
      amenities: [
        { icon: "🚪", text: "Phòng ngủ riêng biệt với vách ngăn kính cường lực sang trọng" },
        { icon: "🛏️", text: "Giường nệm cao cấp, táp đầu giường có cổng sạc" },
        { icon: "🛋️", text: "Sofa băng + bàn trà nhỏ xinh xắn tại phòng khách" },
        { icon: "🍳", text: "Tủ bếp trên dưới cực rộng rãi, sẵn bếp từ đơn" },
        { icon: "❄️", text: "Máy lạnh riêng cho phòng ngủ, máy giặt mini độc lập" },
        { icon: "🚿", text: "WC khép kín thiết kế hiện đại, vách kính tắm đứng" }
      ]
    }
  },
  {
    id: "loft",
    title: "Phòng Có Gác Lửng",
    area: "28 - 30 m²",
    capacity: "2 - 4 Người",
    intro: "Tối ưu hóa không gian với gác lửng đúc kiên cố cao ráo, trần cao thoáng đãng. Khu vực học tập và tiếp khách rộng rãi bên dưới.",
    price: 3800000,
    image: "/assets/images/room_loft.png",
    status: "Chỉ còn 2 phòng",
    statusClass: "limited",
    modalDetails: {
      roomType: "Phòng Có Gác Lửng",
      title: "Phòng Trọ Gác Lửng Cao Cấp - Tối Ưu Diện Tích",
      desc: "Dòng phòng được giới sinh viên và hội bạn thân ưa chuộng nhất. Thiết kế trần cao đón gió mát mẻ, gác lửng bê tông lát sàn nhựa vinyl chịu lực cực tốt và an toàn.",
      amenities: [
        { icon: "🪜", text: "Gác lửng kiên cố chiều cao gác 1.8m (không lo đụng đầu)" },
        { icon: "🛏️", text: "Trang bị sẵn đệm gấp chất lượng tại gác lửng" },
        { icon: "🍳", text: "Khu vực bếp riêng phía dưới gác, trang bị tủ bếp" },
        { icon: "❄️", text: "Máy lạnh lắp ở vị trí đối lưu tối ưu mát cả gác lẫn trệt" },
        { icon: "🚿", text: "Nhà vệ sinh sạch sẽ, lát gạch nhám chống trơn trượt" },
        { icon: "🧺", text: "Chỗ phơi đồ riêng tại ban công đón nắng gió" }
      ]
    }
  }
];
