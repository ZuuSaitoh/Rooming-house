import React from 'react';

/**
 * SectionHeader component used across all major sections of the page
 * Displays Tagline, Title and Description
 */
export const SectionHeader = ({ tagline, title, desc }) => {
  return (
    <div className="section-header">
      {tagline && <span className="section-tagline">{tagline}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
};
export default SectionHeader;
