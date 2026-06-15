import React from 'react';

/**
 * AN NHIÊN HOUSE - AMENITIES STATIC DATA
 * Day la noi ban co the chinh sua cac tien ich dich vu di kem cua toa nha:
 * - Ten tien ich (name)
 * - Mo ta (desc)
 * - Icon SVG tuong ung (icon)
 */

export const amenitiesData = [
  {
    id: "camera",
    name: "Camera An Ninh 24/7",
    desc: "Hệ thống camera giám sát hồng ngoại sắc nét lắp đặt khắp hành lang, bãi xe và khu vực chung, đảm bảo an toàn tối đa.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    )
  },
  {
    id: "parking",
    name: "Chỗ Để Xe Rộng Rãi",
    desc: "Nhà để xe trong nhà rộng rãi, có camera giám sát và sắp xếp xe gọn gàng. Có lối đi riêng biệt tiện lợi, không lo trầy xước xe.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.847-13.56A1.125 1.125 0 0 0 19.38 3H4.62a1.125 1.125 0 0 0-1.118 1.066l-.847 13.56a1.124 1.124 0 0 0 1.09 1.124H5.25M12 3v15.75m0-15.75H8.25m3.75 0h3.75M8.25 7.5h7.5M8.25 11.25h7.5" />
      </svg>
    )
  },
  {
    id: "cleaning",
    name: "Vệ Sinh Hành Lang Sạch Sẽ",
    desc: "Đội ngũ lao công quét dọn hành lang, khu đổ rác và khu sinh hoạt chung định kỳ 3 lần/tuần. Không gian luôn thơm mát, sạch sẽ.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-9-9 9 9-9 9-9-9 9-9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    )
  },
  {
    id: "fingerprint",
    name: "Khóa Vân Tay Hai Lớp",
    desc: "Cửa ra vào tòa nhà tích hợp khóa vân tay sinh trắc học thông minh. Chỉ cư dân trong nhà mới có quyền truy cập, bảo đảm riêng tư.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.5 7.5 0 1 0 15 0M9 10.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3 10.5v-3m0 0a3 3 0 0 0-3-3m3 3a3 3 0 0 0 3-3" />
      </svg>
    )
  }
];
