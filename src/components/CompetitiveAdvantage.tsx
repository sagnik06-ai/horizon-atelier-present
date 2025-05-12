
import React from 'react';
import { Check, X } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";

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
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Features / Services</TableHead>
              <TableHead className="w-1/4 text-center bg-gold text-navy">UnifiedHorizon</TableHead>
              <TableHead className="w-1/4 text-center">Other Companies</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, featureIndex) => (
              <TableRow key={featureIndex}>
                <TableCell className="font-medium">{feature}</TableCell>
                <TableCell className="text-center">
                  <Check className="mx-auto text-gold h-5 w-5" />
                </TableCell>
                <TableCell className="text-center">
                  {otherCompaniesFeatures['Other Companies'][featureIndex] ? (
                    <Check className="mx-auto text-green-600 h-5 w-5" />
                  ) : (
                    <X className="mx-auto text-red-400 h-5 w-5" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </RevealOnScroll>
  );
};

export default CompetitiveAdvantage;
