import React, { useEffect, useRef } from 'react';

/**
 * RoomModal component for displaying details of a specific room type
 * Handles scroll locking on the body, Escape key detection, and clicking backdrop to close
 */
export const RoomModal = ({ room, onClose, zaloUrl }) => {
  if (!room) return null;

  const { title, price, image } = room;
  const { roomType, title: modalTitle, desc, amenities } = room.modalDetails;

  const closeButtonRef = useRef(null);

  // Helper to format currency
  const formatPrice = (num) => {
    return num.toLocaleString('vi-VN') + 'đ';
  };

  useEffect(() => {
    // Focus on close button for accessibility when modal opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Disable body scroll while modal is open
    document.body.style.overflow = 'hidden';

    // Close on pressing Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close modal when clicking the semi-transparent backdrop background
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-backdrop open" 
      onClick={handleBackdropClick} 
      role="dialog" 
      aria-modal="true"
    >
      <div className="modal-content">
        <button 
          ref={closeButtonRef}
          className="modal-close" 
          aria-label="Đóng bảng thông tin" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-gallery">
            <img src={image} alt={`Không gian chi tiết ${roomType}`} className="modal-img" />
          </div>
          <div className="modal-details-info">
            <span className="modal-room-type">{roomType}</span>
            <h3 className="modal-title">{modalTitle}</h3>
            <p className="modal-desc">{desc}</p>
            
            <h4>Trang bị sẵn trong phòng:</h4>
            <ul className="modal-amenity-list">
              {amenities.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>

            <div className="modal-pricing-row">
              <div>
                <span className="price-label">Giá thuê chỉ từ</span>
                <span className="modal-price">
                  {formatPrice(price)} <small>/ tháng</small>
                </span>
              </div>
              <a 
                href={zaloUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Đặt lịch xem phòng
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomModal;
