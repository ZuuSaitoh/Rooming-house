import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll and apply sticky class logic
 * Returns true if user has scrolled more than scrollThreshold (default 20px)
 */
export const useStickyHeader = (scrollThreshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  return isScrolled;
};
export default useStickyHeader;
