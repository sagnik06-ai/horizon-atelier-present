
import React from 'react';
import { LucideIcon } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}) => {
  return (
    <RevealOnScroll delay={delay}>
      <div className="service-card">
        <Icon className="feature-icon" />
        <h3 className="font-serif text-xl font-medium text-navy mb-2">{title}</h3>
        <p className="text-silver-dark">{description}</p>
      </div>
    </RevealOnScroll>
  );
};

export default ChallengeCard;
