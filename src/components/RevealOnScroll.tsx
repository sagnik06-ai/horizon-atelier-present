
import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  threshold = 0.1,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          // Add a delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Unobserve after it's been revealed
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={ref} 
      className={`reveal-animation ${isVisible ? 'active' : ''}`}
      style={{ 
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
