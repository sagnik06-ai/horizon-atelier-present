import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import SectionHeading from '../components/SectionHeading';
import SectionSeparator from '../components/SectionSeparator';
import RevealOnScroll from '../components/RevealOnScroll';
import ChallengeCard from '../components/ChallengeCard';
import FutureCard from '../components/FutureCard';
import CompetitiveAdvantage from '../components/CompetitiveAdvantage';
import ServiceVerticals from '../components/ServiceVerticals';
import VideoEmbed from '../components/VideoEmbed';
import ThoughtLeadership from '../components/ThoughtLeadership';
import ContactForm from '../components/ContactForm';
import { Button } from '@/components/ui/button';
import { 
  FileText, Folder, Users, Clock, 
  Calculator, Repeat, Database, Cpu,
  Search, MessageSquare, Award, TrendingUp
} from 'lucide-react';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      title: "Scattered Case Management",
      description: "Legal documents and case information stored across multiple systems causing inefficiency and errors.",
      icon: FileText,
      delay: 100
    },
    {
      title: "Client Relationship Issues",
      description: "Weak client relationship management leading to reduced client satisfaction and retention.",
      icon: Users,
      delay: 200
    },
    {
      title: "Knowledge Sharing Gaps",
      description: "Inefficient legal research and knowledge sharing across the firm impedes collaboration.",
      icon: Folder,
      delay: 300
    },
    {
      title: "Talent Retention Problems",
      description: "Difficulty attracting and retaining top legal talent in a competitive market.",
      icon: Award,
      delay: 400
    },
    {
      title: "Revenue Leakage",
      description: "Significant revenue loss through manual billing processes and inefficient time tracking.",
      icon: Calculator,
      delay: 500
    },
    {
      title: "Non-Billable Time Waste",
      description: "Too much time spent on repetitive, administrative tasks rather than billable work.",
      icon: Clock,
      delay: 600
    }
  ];

  const futureItems = [
    {
      title: "AI-Driven Case Management",
      description: "Smart document and case management systems that learn from your firm's practices.",
      icon: Database,
      delay: 100
    },
    {
      title: "Automated Legal Research",
      description: "AI-powered tools that drastically reduce research time while improving accuracy.",
      icon: Search,
      delay: 200
    },
    {
      title: "Smart Talent Solutions",
      description: "Innovative approaches to hiring, retaining, and developing legal talent.",
      icon: Users,
      delay: 300
    },
    {
      title: "AI-Based CRM Systems",
      description: "Client relationship management platforms designed specifically for legal practice.",
      icon: MessageSquare,
      delay: 400
    },
    {
      title: "Smart Billing Systems",
      description: "Automated billing and invoicing that captures more billable time with less effort.",
      icon: Calculator,
      delay: 500
    },
    {
      title: "Workflow Automation",
      description: "Systems that automate repetitive tasks, freeing attorneys for higher-value work.",
      icon: Cpu,
      delay: 600
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-silver-light/30 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h1 className="font-serif text-4xl md:text-6xl font-medium text-navy mb-6">
                UnifiedHorizon
              </h1>
              <p className="text-xl md:text-2xl text-navy/80 italic mb-8">
                Not just a consultancy, A legal atelier.
              </p>
              <div className="bg-white/70 backdrop-blur p-6 rounded-md shadow-sm mb-8">
                <p className="text-lg text-silver-dark leading-relaxed">
                  At UnifiedHorizon, we envision a future where law firms don't just practice law — they shape industries, 
                  set standards, and lead change through intelligence, agility, and excellence.
                </p>
              </div>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-navy hover:bg-navy-light text-white px-8 py-6 text-lg"
              >
                Discover Our Services
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Challenges Section */}
      <section id="challenges" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Common Challenges in Legal Practice Management"
            subtitle="Law firms today face numerous operational hurdles that impede growth and efficiency."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                title={challenge.title}
                description={challenge.description}
                icon={challenge.icon}
                delay={challenge.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Future Section */}
      <section id="future" className="py-20 px-4 bg-silver-light/30">
        <div className="container mx-auto">
          <SectionHeading 
            title="What We Foresee: The Next Evolution of Legal Management"
            subtitle="Our vision for the future of legal practice is built on innovation and efficiency."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureItems.map((item, index) => (
              <FutureCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Competitive Advantage Section */}
      <section id="advantage" className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="The UnifiedHorizon Advantage"
            subtitle="See how our comprehensive services compare to other legal consultancies in the market."
          />
          
          <CompetitiveAdvantage />
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Service Verticals Section */}
      <section id="services" className="py-20 px-4 bg-silver-light/30">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Service Verticals"
            subtitle="Comprehensive solutions tailored for modern legal practices."
          />
          
          <ServiceVerticals />
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="See Our Approach in Action"
            subtitle="Watch how we transform legal practices with our innovative solutions"
          />
          
          <div className="flex justify-center">
            <VideoEmbed 
              src="https://youtube.com/shorts/H0uo1Hoz6qo?feature=share"
              title="UnifiedHorizon Approach"
            />
          </div>
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Thought Leadership Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Thought Leadership"
            subtitle="Insights and perspectives that shape the future of legal practice."
          />
          
          <ThoughtLeadership />
        </div>
      </section>
      
      <SectionSeparator />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-navy text-white relative">
        <div className="absolute inset-0 bg-navy opacity-90"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeading 
            title="Transform Your Legal Practice"
            subtitle="Connect with our team to discover how UnifiedHorizon can elevate your law firm."
            className="text-white"
          />
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-navy max-w-2xl mx-auto">
            <ContactForm />
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-serif text-xl mb-2">Visit Us</h4>
              <p className="text-white/80">Sector - 142, Noida, Uttar Pradesh 201305</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Contact Us</h4>
              <p className="text-white/80">connect@unifiedhorizon.org<br/>+91 8868823468</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Follow Us</h4>
              <p className="text-white/80">
                <a href="https://www.linkedin.com/company/unifiedhorizon/posts/?feedView=all" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-white hover:underline">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-navy-dark text-white/60 text-sm text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} UnifiedHorizon. All rights reserved.</p>
          <p className="mt-2">Privacy Policy • Terms of Service • Cookie Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
