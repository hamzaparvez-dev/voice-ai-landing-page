import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Check, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  '15-minute demo',
  'Real working number',
  'No contract required',
];

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Footer animation
      gsap.fromTo(footerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="final-cta"
      className="relative w-full bg-navy z-[100]"
    >
      {/* CTA Section */}
      <div className="relative py-20 lg:py-28">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-violet/10 via-transparent to-transparent opacity-50" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div ref={contentRef} className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
              Hear Your Own Leads Being Called Live
            </h2>
            
            {/* Subheadline */}
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              Book a 15-minute demo and we&apos;ll show you exactly how our AI handles real estate conversations.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-text-secondary"
                >
                  <Check className="w-4 h-4 text-violet" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-violet hover:bg-violet-dark text-navy font-semibold px-8"
                >
                  Book Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="border-t border-white/5"
      >
        {/* Main footer content */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-violet-dark flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <span className="font-heading font-bold text-xl text-text-primary">
                  GenuineStack
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                AI Voice Agents that book appointments while you sleep. Built for serious real estate professionals.
              </p>
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">US & Australia</span>
              </div>
            </div>

            {/* Product column */}
            <div>
              <h4 className="font-heading font-semibold text-text-primary mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#how-it-works" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Listen to Demo
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4 className="font-heading font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/terms" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/security" className="text-text-secondary hover:text-violet text-sm transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 className="font-heading font-semibold text-text-primary mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:hello@genuinestack.com" 
                    className="flex items-center gap-2 text-text-secondary hover:text-violet text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    hello@genuinestack.com
                  </a>
                </li>
                <li>
                  <a 
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-violet hover:text-violet-light text-sm font-medium transition-colors"
                  >
                    Book a Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/5">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-text-secondary text-sm">
                © {new Date().getFullYear()} GenuineStack AI Automation. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/terms" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                  Terms
                </a>
                <a href="/privacy" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                  Privacy
                </a>
                <a href="/security" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
