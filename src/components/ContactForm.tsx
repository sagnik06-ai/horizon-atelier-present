
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Thank you for your interest",
      description: "We'll be in touch with you shortly.",
    });
  };

  return (
    <div className="text-center">
      <p className="text-navy text-lg mb-6">
        Contact our team to learn more about our services and how we can help your law firm.
      </p>
      <Button
        type="button"
        onClick={handleSubmit}
        className="bg-navy hover:bg-navy-light text-white px-8 py-3 text-lg"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default ContactForm;
