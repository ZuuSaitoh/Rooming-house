import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { siteData } from '../../data/siteData';

/**
 * Policies Section Component
 * Render SectionHeader, dynamic policies list grids, and pre-footer CTA button banners
 */
export const Policies = () => {
  const { policies, contact } = siteData;

  return (
    <section className="policies-section" id="chinh-sach">
      <div className="container">
        <SectionHeader 
          tagline="Rõ ràng - Minh bạch" 
          title="Chính sách thuê phòng & Biểu phí" 
          desc="Chúng tôi công khai mọi chi phí và cam kết không phát sinh các khoản thu ngoài hợp đồng." 
        />

        <div className="policies-grid">
          {policies.map((policy) => (
            <div className="policy-card" key={policy.id}>
              <div className="policy-header">
                <span className="policy-emoji">{policy.emoji}</span>
                <h3>{policy.title}</h3>
              </div>
              <ul className="policy-list">
                {policy.rules.map((rule, idx) => (
                  <li key={idx}>
                    <strong>{rule.label}:</strong> {rule.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-banner-content">
            <h3>Bạn đã tìm được căn phòng ưng ý?</h3>
            <p>Hãy liên hệ ngay với quản lý tòa nhà để đặt lịch hẹn xem phòng trực tiếp.</p>
          </div>
          <div className="cta-banner-actions">
            <a 
              href={contact.zalo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-large" 
              id="banner-zalo-cta"
            >
              Liên hệ Zalo tư vấn miễn phí
            </a>
            <a 
              href={`tel:${contact.hotlineRaw}`} 
              className="btn btn-secondary-light btn-large" 
              id="banner-call-cta"
            >
              Hotline: {contact.hotline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Policies;
