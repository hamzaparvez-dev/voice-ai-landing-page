import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy/90 backdrop-blur-md border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-violet-dark flex items-center justify-center">
                <Phone className="w-4 h-4 text-navy" />
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                AutomationGuild
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-violet hover:bg-violet-dark text-navy font-semibold px-6"
                >
                  Book a Demo
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg pt-20">
          <div className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-xl text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a 
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button 
                className="bg-violet hover:bg-violet-dark text-navy font-semibold px-8 py-6"
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
