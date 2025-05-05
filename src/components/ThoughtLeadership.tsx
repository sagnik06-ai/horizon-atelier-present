
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const ThoughtLeadership: React.FC = () => {
  return (
    <RevealOnScroll>
      <div className="bg-navy/5 p-8 rounded-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <h3 className="font-serif text-2xl text-navy mb-4">
              Cultural Convergence or Collision
            </h3>
            <h4 className="text-xl italic text-navy/80 mb-6">
              The Unspoken Determinant of Law Firm Merger Success
            </h4>
            <p className="text-silver-dark mb-6 leading-relaxed">
              Our latest thought leadership article examines the centrality of institutional culture in merger outcomes, 
              proposing a methodology for cultural due diligence and post-merger integration. The paper focuses on leadership, 
              hierarchy, and firm values as key determinants in successful legal mergers.
            </p>
            <Button className="bg-navy hover:bg-navy-light text-white">
              Read the Article <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full md:w-64 bg-navy/10 rounded-md flex items-center justify-center">
            <div className="font-serif text-navy/50 text-6xl">⚖</div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ThoughtLeadership;
