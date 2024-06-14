import { useState, useEffect } from 'react';
import './index.css';

const SectionTitleToggle = ({ title, children, globalVisibility, onToggle }: any) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(globalVisibility);
  }, [globalVisibility]);

  const toggleVisibility = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    if (onToggle) {
      onToggle(newVisibility);
    }
  };

  return (
    <div className="section-container">
      <div className="section-title" onClick={toggleVisibility}>
        <h2>{title}</h2>
        <span className='group-arrow'>{isVisible ? '▲' : '▼'}</span>
      </div>
      
      {isVisible && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionTitleToggle;
