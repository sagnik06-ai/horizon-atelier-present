
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

  // This mapping defines which features are typically available in other companies
  const otherCompaniesFeatures = {
    'Other Companies': [false, false, false, false, true, true, false, false]
  };

  return (
    <RevealOnScroll>
      <div className="overflow-x-auto">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="w-1/2">Features / Services</th>
              <th className="w-1/4 bg-gold text-navy text-center">UnifiedHorizon</th>
              <th className="w-1/4 text-center">Other Companies</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="font-medium">{feature}</td>
                <td className="text-center">
                  <Check className="mx-auto text-gold h-5 w-5" />
                </td>
                <td className="text-center">
                  {otherCompaniesFeatures['Other Companies'][featureIndex] ? (
                    <Check className="mx-auto text-green-600 h-5 w-5" />
                  ) : (
                    <X className="mx-auto text-red-400 h-5 w-5" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </RevealOnScroll>
  );
};

export default CompetitiveAdvantage;
