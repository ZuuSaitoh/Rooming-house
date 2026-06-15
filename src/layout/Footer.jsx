import React from 'react';
import { siteData } from '../data/siteData';

/**
 * Footer Layout Component
 * Displays brand details, social media links, quick navigation links, and dynamic contact specifications
 */
export const Footer = () => {
  const { contact } = siteData;

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#trang-chu" className="logo logo-footer">
            <span>🏠</span> An Nhiên House
          </a>
          <p className="footer-about">
            Hệ thống căn hộ dịch vụ & phòng trọ cao cấp hàng đầu. Chúng tôi kiến tạo không gian sống tự do, an toàn và sạch sẽ, là nơi an cư lý tưởng cho sinh viên và người đi làm.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook An Nhiên House" className="social-link">🌐</a>
            <a href={contact.zalo} aria-label="Zalo liên hệ" className="social-link" target="_blank" rel="noopener noreferrer">💬</a>
            <a href="#" aria-label="Youtube kênh" className="social-link">📺</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><a href="#trang-chu">Trang chủ</a></li>
            <li><a href="#tien-ich">Dịch vụ & Tiện ích</a></li>
            <li><a href="#loai-phong">Danh sách phòng</a></li>
            <li><a href="#vi-tri">Bản đồ vị trí</a></li>
            <li><a href="#chinh-sach">Biểu phí & Đặt cọc</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Thông tin liên hệ</h4>
          <ul className="contact-info-list">
            <li>
              <span className="contact-icon">📍</span>
              <span className="contact-text">{contact.address}</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span className="contact-text">
                Hotline đặt phòng: <a href={`tel:${contact.hotlineRaw}`} className="contact-link">{contact.hotline}</a>
              </span>
            </li>
            <li>
              <span className="contact-icon">💬</span>
              <span className="contact-text">
                Hỗ trợ Zalo: <a href={contact.zalo} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.zaloLabel}</a>
              </span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <span className="contact-text">Email: {contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">&copy; 2026 An Nhiên House. Bảo lưu mọi quyền. Thiết kế và tối ưu SEO bởi Antigravity.</p>
          <div className="footer-bottom-links">
            <a href="#">Điều khoản sử dụng</a>
            <span className="separator">|</span>
            <a href="#">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
