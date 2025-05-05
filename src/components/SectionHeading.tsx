
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">{title}</h2>
      {subtitle && (
        <p className="text-silver-dark text-lg max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 inline-block">
        <div className="h-1 w-24 bg-gold"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
