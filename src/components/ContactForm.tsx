
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch with you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-navy">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-navy">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-navy">
            Law Firm / Company
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Law Firm"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-navy">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          How can we assist you?
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          required
          className="w-full h-32"
        />
      </div>
      
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-navy hover:bg-navy-light text-white px-8"
        >
          {isSubmitting ? 'Submitting...' : 'Schedule a Consultation'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
