import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { amenitiesData } from '../../data/amenitiesData';

/**
 * Amenities Section Component
 * Render SectionHeader and grids of amenities dynamically parsed from amenitiesData
 */
export const Amenities = () => {
  return (
    <section className="amenities-section" id="tien-ich">
      <div className="container">
        <SectionHeader 
          tagline="Tiện nghi vượt trội" 
          title="Trải nghiệm sống an tâm & sạch sẽ" 
          desc="Chúng tôi đầu tư đồng bộ hạ tầng dịch vụ và an ninh để mang lại sự thoải mái tối đa cho quý cư dân." 
        />
        
        <div className="amenities-grid">
          {amenitiesData.map((amenity) => (
            <div className="amenity-card" key={amenity.id}>
              <div className="amenity-icon-box">
                {amenity.icon}
              </div>
              <h3 className="amenity-name">{amenity.name}</h3>
              <p className="amenity-desc">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Amenities;
