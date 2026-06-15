import React from 'react';

/**
 * RoomCard component displaying brief details about a room type
 * Handles formatting raw number prices into local currency
 */
export const RoomCard = ({ room, onSelect }) => {
  const { id, title, area, capacity, intro, price, image, status, statusClass } = room;

  // Format price helper (e.g., 3500000 -> "3.500.000đ")
  const formatPrice = (num) => {
    return num.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <article className="room-card" id={`room-card-${id}`}>
      <div className="room-img-container">
        <img 
          src={image} 
          alt={`${title} tiện nghi tại An Nhiên House`} 
          className="room-thumbnail" 
          loading="lazy" 
          width="400" 
          height="280" 
        />
        <span className={`room-status-badge ${statusClass}`}>{status}</span>
      </div>
      <div className="room-info">
        <div className="room-meta">
          <span className="room-area">📐 {area}</span>
          <span className="room-capacity">👥 {capacity}</span>
        </div>
        <h3 className="room-title">{title}</h3>
        <p className="room-intro">{intro}</p>
        <div className="room-price-box">
          <span className="price-label">Giá thuê từ:</span>
          <span className="price-value">
            {formatPrice(price)}
            <span className="price-period">/tháng</span>
          </span>
        </div>
        <button 
          className="btn btn-outline btn-full" 
          onClick={() => onSelect(room)} 
          id={`btn-detail-${id}`}
        >
          Xem chi tiết
        </button>
      </div>
    </article>
  );
};
export default RoomCard;
