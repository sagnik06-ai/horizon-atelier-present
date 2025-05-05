
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-serif text-xl text-navy">UnifiedHorizon</div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('challenges')}
            className="text-navy hover:text-navy-light transition-colors"
          >
            Challenges
          </button>
          <button 
            onClick={() => scrollToSection('future')}
            className="text-navy hover:text-navy-light transition-colors"
          >
            Future
          </button>
          <button 
            onClick={() => scrollToSection('advantage')}
            className="text-navy hover:text-navy-light transition-colors"
          >
            Advantage
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-navy hover:text-navy-light transition-colors"
          >
            Services
          </button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-navy hover:bg-navy-light text-white"
          >
            Contact Us
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('challenges')}
              className="text-navy hover:text-navy-light transition-colors py-2"
            >
              Challenges
            </button>
            <button 
              onClick={() => scrollToSection('future')}
              className="text-navy hover:text-navy-light transition-colors py-2"
            >
              Future
            </button>
            <button 
              onClick={() => scrollToSection('advantage')}
              className="text-navy hover:text-navy-light transition-colors py-2"
            >
              Advantage
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-navy hover:text-navy-light transition-colors py-2"
            >
              Services
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-navy hover:bg-navy-light text-white w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
