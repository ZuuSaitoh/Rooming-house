import React, { useState, useEffect } from 'react';
import { useStickyHeader } from '../hooks/useStickyHeader';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { siteData } from '../data/siteData';

/**
 * Header Layout Component
 * Features dynamic sticky scroll styles, scrollspy highlights, and a mobile sliding menu
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useStickyHeader(20);
  
  // Section IDs for tracking the scrollspy active links
  const sectionIds = ['trang-chu', 'tien-ich', 'loai-phong', 'vi-tri', 'chinh-sach'];
  const activeSection = useScrollSpy(sectionIds, 120);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#trang-chu', label: 'Trang chủ', id: 'trang-chu' },
    { href: '#tien-ich', label: 'Tiện ích', id: 'tien-ich' },
    { href: '#loai-phong', label: 'Loại phòng', id: 'loai-phong' },
    { href: '#vi-tri', label: 'Vị trí', id: 'vi-tri' },
    { href: '#chinh-sach', label: 'Chính sách', id: 'chinh-sach' },
  ];

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-container">
        <a href="#trang-chu" className="logo" id="logo-link" onClick={closeMenu}>
          <span className="logo-icon">🏠</span>
          <span className="logo-text">
            An Nhiên <span className="accent-text">House</span>
          </span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="menu-toggle-btn" 
          aria-label="Toggle navigation menu" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href={siteData.contact.zalo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-cta-btn"
                onClick={closeMenu}
              >
                Liên hệ ngay
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
