import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero/Hero';
import Amenities from './sections/Amenities/Amenities';
import Rooms from './sections/Rooms/Rooms';
import Location from './sections/Location/Location';
import Policies from './sections/Policies/Policies';

/**
 * App Root Component
 * Handles layout orchestration and scroll state for back-to-top button display
 */
export const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Amenities />
        <Rooms />
        <Location />
        <Policies />
      </main>
      <Footer />

      {/* Back to top button */}
      <a 
        href="#trang-chu" 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
        id="back-to-top-btn" 
        aria-label="Quay lại đầu trang"
      >
        ▲
      </a>
    </>
  );
};
export default App;
