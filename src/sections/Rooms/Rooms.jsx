import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import RoomCard from '../../components/RoomCard/RoomCard';
import RoomModal from '../../components/Modal/RoomModal';
import { roomsData } from '../../data/roomsData';
import { siteData } from '../../data/siteData';

/**
 * Rooms Section Component
 * Manages active room state for showing detailed modal, maps room details into RoomCard components
 */
export const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <section className="rooms-section" id="loai-phong">
      <div className="container">
        <SectionHeader 
          tagline="Bảng giá & Thiết kế" 
          title="Lựa chọn phòng phù hợp với bạn" 
          desc="Các căn hộ tại An Nhiên House được tối ưu diện tích, đón gió tự nhiên và bàn giao kèm nội thất cơ bản chất lượng cao." 
        />
        
        <div className="rooms-grid">
          {roomsData.map((room) => (
            <RoomCard 
              key={room.id} 
              room={room} 
              onSelect={handleSelectRoom} 
            />
          ))}
        </div>
      </div>

      {selectedRoom && (
        <RoomModal 
          room={selectedRoom} 
          onClose={handleCloseModal} 
          zaloUrl={siteData.contact.zalo}
        />
      )}
    </section>
  );
};
export default Rooms;
