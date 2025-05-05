
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Book, Handshake, BookOpen } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface ServiceProps {
  title: string;
  description: string;
  items: string[][];
}

const ServiceVerticals: React.FC = () => {
  const [activeTab, setActiveTab] = useState("lexelevate");

  const services: Record<string, ServiceProps> = {
    lexelevate: {
      title: "LexElevate: Your Firm's Digital Presence and Technology Edge",
      description: "Elevate your law firm with digital transformation and a strong online presence.",
      items: [
        [
          "Legal Digital Branding & Social Media Management",
          "Social Media Strategy & Calendars (LinkedIn, Twitter, Instagram)",
          "Personal Branding for Founders & Partners",
          "Professional Video & Graphic Creation",
          "Content Writing: Legal blogs, articles, thought leadership",
          "Legal PR Campaigns (with compliance guardrails)",
          "SEO Optimization for Law Firms",
          "Influencer Tie-ups in Legal, Policy & EdTech Sectors",
          "Monthly Analytics Reporting & Community Engagement",
          "Digital Reputation Management",
          "Multilingual Content Support (for international audience)"
        ],
        [
          "LegalTech & Digital Transformation Services",
          "Custom Tech Integration (non-research-based)",
          "Case Filing Automation",
          "Document Lifecycle Automation (draft → review → dispatch)",
          "Smart Contracts Setup (for internal use or client dealings)",
          "Workflow Management Tools",
          "Digital Billing & Invoicing Integration",
          "Court & Compliance Automation",
          "Court Calendar & eService Sync (API-based)",
          "Auto eSummons & Notices",
          "Cause List Tracker Dashboards"
        ]
      ]
    },
    augmented: {
      title: "Augmented Legal Support: AI + Human Intelligence for Daily Legal Operations",
      description: "Your everyday operational assistant—silent, strong, and accurate.",
      items: [
        [
          "Core Legal Support Services",
          "Legal Research (Domestic + International)",
          "Precedent Mapping & Comparative Analysis",
          "Document Drafting (contracts, notices, responses)",
          "Proofreading & Legal Formatting",
          "Virtual Hearing Support",
          "Live Voice-to-Text Capture",
          "Transcription & Summarized Drafts"
        ],
        [
          "Additional Support Services",
          "Document Summarization Services",
          "Cause List & Order Monitoring",
          "eCourt Filing Assistance",
          "Legal Data Structuring (case management tables, timelines)",
          "OCR Conversion of Physical Files",
          "E-mail & Calendar Management for Solo/Busy Lawyers",
          "Translation of Legal Docs (using Human + AI hybrid models)",
          "Emergency Support Desk: Retainers for overflow clerical work",
          "Multi-jurisdictional Compliance Checklist Assistance",
          "On-demand talent sourcing and legal staffing assistance"
        ]
      ]
    },
    merger: {
      title: "Law Firm M&A and Strategic Alliances: Crafting Law Firm Growth through Intelligent Mergers",
      description: "End-to-end growth facilitation services for law firms seeking strategic expansion.",
      items: [
        [
          "Merger & Acquisition Services",
          "Law Firm Matchmaking -- Domestic & Cross-border",
          "M&A Deal Advisory -- From Due Diligence to Deal Closure",
          "Confidential Buy/Sell-Side Representation",
          "Legal Structure Planning Post-Merger",
          "Founder Vision & Strategic Realignment",
          "Cross-Border Legal Setup Guidance"
        ],
        [
          "Post-Merger Integration",
          "Alliance Strategy for Boutique/Niche Firms",
          "Investment Banking & Fundraising Partner Support",
          "Staff Restructuring & Role Integration",
          "Cultural & Operations Integration Framework",
          "Legal Business Exit Strategy Advisory",
          "Partnership/Shareholding Restructuring Advisory",
          "Post-M&A Communication, PR & Branding Strategy"
        ]
      ]
    },
    lexware: {
      title: "LexWare: Knowledge. Authority. Reinvented for Legal Minds.",
      description: "Comprehensive knowledge and authority-building suite for legal professionals.",
      items: [
        [
          "Knowledge Resources",
          "Practice enhancement support (new domains made easy)",
          "Audio & text digests of key judgments (SCI + international)",
          "Domain-specific updates tailored to your expertise",
          "LegalTech familiarization tools for law firms",
          "Paper/article publishing & writing support",
          "Policy opinion drafting & submission assistance"
        ],
        [
          "Authority Building",
          "Lawyer personal branding tools",
          "Staff induction & legal operations orientation",
          "ESG & cross-border compliance knowledge resources",
          "Legal soft-skills and client communication support",
          "Legal research, insights, and resource access"
        ]
      ]
    }
  };

  const icons = {
    lexelevate: <Briefcase className="h-5 w-5" />,
    augmented: <Book className="h-5 w-5" />,
    merger: <Handshake className="h-5 w-5" />,
    lexware: <BookOpen className="h-5 w-5" />
  };

  return (
    <div>
      <Tabs defaultValue="lexelevate" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-silver-light/30">
          {Object.keys(services).map((key) => (
            <TabsTrigger 
              key={key} 
              value={key} 
              className="flex items-center gap-2 data-[state=active]:bg-navy data-[state=active]:text-white"
            >
              {icons[key as keyof typeof icons]}
              <span className="hidden md:inline">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {Object.keys(services).map((key, index) => {
          const service = services[key];
          
          return (
            <TabsContent key={key} value={key} className="mt-0">
              <RevealOnScroll>
                <div className="mb-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-2">{service.title}</h3>
                  <p className="text-silver-dark text-lg">{service.description}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {service.items.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="service-card bg-white">
                      <h4 className="font-serif text-xl text-navy mb-4 border-b border-silver/20 pb-2">
                        {section[0]}
                      </h4>
                      <ul className="space-y-3">
                        {section.slice(1).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ServiceVerticals;
