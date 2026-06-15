/**
 * AN NHIÊN HOUSE - GENERAL SITE DATA
 * Day la noi ban co the de dang chinh sua:
 * - Hotline, Zalo link, Email, Dia chi
 * - Danh sach cac dia diem gan nha tro (LocationTimeline)
 * - Cac chinh sach dat coc va bieu phi dich vu
 * - Link nhung Google Maps
 */

export const siteData = {
  // Thong tin lien he chinh
  contact: {
    address: "Số 123 Đường Nguyễn Văn Cừ, Phường 2, Quận 5, TP. Hồ Chí Minh",
    hotline: "0901.234.567",
    hotlineRaw: "0901234567",
    zalo: "https://zalo.me/0901234567",
    zaloLabel: "0901 234 567",
    email: "lienhe@annhienhouse.vn"
  },

  // Danh sach khoang cach va dia diem lan can
  nearbyLocations: [
    {
      icon: "🎓",
      name: "Đại học Sư Phạm Kỹ Thuật (SPKT)",
      dist: "500m (Khoảng 2 phút đi xe máy / 7 phút đi bộ)"
    },
    {
      icon: "🎓",
      name: "Đại học Hutech (Cơ sở E)",
      dist: "1.2 km (Khoảng 4 phút đi xe máy)"
    },
    {
      icon: "🛍️",
      name: "Chợ dân sinh & Co.opmart",
      dist: "300m (Chỉ 3 phút đi bộ mua sắm hàng ngày)"
    },
    {
      icon: "🚌",
      name: "Trạm Xe Buýt / Trạm Metro",
      dist: "150m (Thuận tiện di chuyển vào trung tâm)"
    }
  ],

  // Link nhung ban do Google Maps
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.474978783457!2d106.77242441533423!3d10.851432460773827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270ad2c0883f%3A0x925fbb0e29b13ee3!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUUC4gSENN!5e0!3m2!1svi!2s!4v1655182930491!5m2!1svi!2s",

  // Cac chinh sach thue phong va Bieu phi
  policies: [
    {
      id: "deposit",
      emoji: "💰",
      title: "Đặt cọc & Hợp đồng",
      rules: [
        { label: "Tiền đặt cọc", text: "Chỉ cọc 1 tháng tiền phòng để giữ chỗ. Hoàn trả 100% khi hết hợp đồng." },
        { label: "Thời hạn hợp đồng", text: "Linh hoạt từ 6 tháng đến 12 tháng." },
        { label: "Ký kết hợp đồng", text: "Rõ ràng, pháp lý chuẩn chỉnh, bảo vệ quyền lợi hai bên." }
      ]
    },
    {
      id: "fees",
      emoji: "⚡",
      title: "Biểu phí dịch vụ",
      rules: [
        { label: "Tiền điện", text: "3.800 đ / kWh (Số ký điện theo công tơ riêng từng phòng)." },
        { label: "Tiền nước", text: "100.000 đ / người / tháng." },
        { label: "Phí quản lý", text: "150.000 đ / phòng (Bao gồm rác, vệ sinh hành lang, thang máy, bảo trì khóa)." },
        { label: "Gửi xe & Wifi", text: "Miễn phí hoàn toàn." }
      ]
    }
  ]
};
export default siteData;
