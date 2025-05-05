
import React from 'react';

interface SectionSeparatorProps {
  symbol?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ symbol = "⚖" }) => {
  return (
    <div className="section-separator">
      <span>{symbol}</span>
    </div>
  );
};

export default SectionSeparator;
