import React from 'react';
import { siteData } from '../../data/siteData';

/**
 * Hero Section Component
 * Displays introductory badge, headline, descriptions, call-to-actions, features, and abstract layout images
 */
export const Hero = () => {
  const { contact } = siteData;

  return (
    <section className="hero-section" id="trang-chu">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span> Khu Căn Hộ Cao Cấp Mới 100%
          </div>
          <h1 className="hero-title">
            Không gian sống lý tưởng<br />
            <span className="highlight-text">Giờ giấc tự do</span> - An tâm tuyệt đối
          </h1>
          <p className="hero-subtitle">
            Trải nghiệm cuộc sống hiện đại, sạch sẽ và an toàn tại An Nhiên House. Phòng đầy đủ tiện nghi, an ninh tuyệt đối bằng khóa vân tay và camera 24/7.
          </p>
          <div className="hero-ctas">
            <a 
              href={contact.zalo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              id="hero-zalo-cta"
            >
              <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.67 1.45 5.04 3.75 6.6L4.5 21l4.5-2.25c.95.27 1.95.42 3 .42 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"/>
              </svg>
              Liên hệ Zalo: {contact.zaloLabel}
            </a>
            <a href="#loai-phong" className="btn btn-secondary" id="hero-explore-cta">Xem phòng trống</a>
          </div>
          
          {/* Quick Specs Badges */}
          <div className="hero-features-preview">
            <div className="preview-item">
              <span className="preview-icon">🔑</span>
              <span className="preview-text">Tự do 24h</span>
            </div>
            <div className="preview-item">
              <span className="preview-icon">⚡</span>
              <span className="preview-text">Giá minh bạch</span>
            </div>
            <div className="preview-item">
              <span className="preview-icon">🛡️</span>
              <span className="preview-text">Bảo vệ 2 lớp</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-card-pattern"></div>
          <img 
            src="/assets/images/room_studio.png" 
            alt="Không gian phòng Studio sang trọng tại An Nhiên House" 
            className="hero-img" 
            width="600" 
            height="400" 
          />
          <div className="hero-floating-card card-left">
            <span className="floating-icon">✨</span>
            <div className="floating-info">
              <span className="info-title">Phòng trống</span>
              <span className="info-desc">Có sẵn dọn vào ngay</span>
            </div>
          </div>
          <div className="hero-floating-card card-right">
            <span className="floating-icon">⭐</span>
            <div className="floating-info">
              <span className="info-title">Giá chỉ từ</span>
              <span className="info-desc">3.5 Triệu / tháng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
