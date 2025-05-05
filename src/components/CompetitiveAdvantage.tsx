
import React from 'react';
import { Check, X } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const CompetitiveAdvantage: React.FC = () => {
  const features = [
    'AI-Powered Case & Workflow Management',
    'E-Calendar with Court E-Services Integration',
    'Automated Billable Hour Tracking & Smart Invoicing',
    'AI-Powered Legal Research & Knowledge Management',
    'Client Relationship & Business Development',
    'Talent Management & Workforce Training',
    'Revenue & Fee Optimization',
    'Legal Networking & Growth Opportunities'
  ];

  const competitors = [
    'Legal League Consulting',
    'Vahura',
    'Yellow Wire Consulting',
    'Legal Orbit'
  ];

  // This mapping defines which competitors have which features
  // true = has feature, false = doesn't have feature
  const competitorFeatures = {
    'Legal League Consulting': [false, false, true, false, true, true, false, false],
    'Vahura': [false, false, false, false, true, true, true, false],
    'Yellow Wire Consulting': [false, true, true, false, false, false, true, false],
    'Legal Orbit': [true, false, false, true, false, false, false, true],
  };

  return (
    <RevealOnScroll>
      <div className="overflow-x-auto">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="w-1/4">Features / Services</th>
              <th className="w-1/6 bg-gold text-navy text-center">UnifiedHorizon</th>
              {competitors.map((competitor, index) => (
                <th key={index} className="w-1/6 text-center">{competitor}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="font-medium">{feature}</td>
                <td className="text-center">
                  <Check className="mx-auto text-gold h-5 w-5" />
                </td>
                {competitors.map((competitor, competitorIndex) => {
                  const hasFeature = competitorFeatures[competitor as keyof typeof competitorFeatures][featureIndex];
                  
                  return (
                    <td key={competitorIndex} className="text-center">
                      {hasFeature ? (
                        <Check className="mx-auto text-green-600 h-5 w-5" />
                      ) : (
                        <X className="mx-auto text-red-400 h-5 w-5" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealOnScroll>
  );
};

export default CompetitiveAdvantage;
