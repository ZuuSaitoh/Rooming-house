import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section ID based on scroll position (Scrollspy)
 * @param {Array<string>} sectionIds - List of section HTML ids to watch
 * @param {number} offset - Offset in pixels from the top of the viewport
 */
export const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // If we are at the very top of the page, active the first section
      if (window.scrollY < 50 && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
        return;
      }

      const scrollPosition = window.scrollY + offset;

      let currentActiveId = '';
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActiveId = sectionId;
          }
        }
      }

      if (currentActiveId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Add small delay to let DOM render completely before initial spy
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [sectionIds, offset]);

  return activeId;
};
export default useScrollSpy;
