import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { siteData } from '../../data/siteData';

/**
 * Location Section Component
 * Render SectionHeader, dynamic timeline list of nearby locations, and interactive Google Maps iframe
 */
export const Location = () => {
  const { nearbyLocations, googleMapEmbedUrl } = siteData;

  return (
    <section className="location-section" id="vi-tri">
      <div className="container location-container">
        <div className="location-content">
          <SectionHeader 
            tagline="Tọa lạc đắc địa" 
            title="Kết nối nhanh chóng - Di chuyển thuận tiện" 
            desc="Nằm ở vị trí trung tâm, từ An Nhiên House bạn chỉ mất vài phút để di chuyển đến các trường đại học, chợ, siêu thị và bệnh viện lớn." 
          />

          <div className="location-timeline">
            {nearbyLocations.map((loc, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">{loc.icon}</div>
                <div className="timeline-info">
                  <h3 className="location-name">{loc.name}</h3>
                  <p className="location-dist">{loc.dist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-wrapper">
          <div className="map-container">
            <iframe 
              src={googleMapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Bản đồ chỉ đường đến An Nhiên House"
              id="google-map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
