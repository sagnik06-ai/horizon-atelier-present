
import React from 'react';
import { LucideIcon } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface FutureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FutureCard: React.FC<FutureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}) => {
  return (
    <RevealOnScroll delay={delay}>
      <div className="service-card bg-gradient-to-br from-navy/5 to-navy/10">
        <Icon className="feature-icon text-gold" />
        <h3 className="font-serif text-xl font-medium text-navy mb-2">{title}</h3>
        <p className="text-silver-dark">{description}</p>
      </div>
    </RevealOnScroll>
  );
};

export default FutureCard;
