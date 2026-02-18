import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToDemo = () => {
    const demoSection = document.querySelector('#demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineWords = ['AI', 'Calls', 'Your', 'Real', 'Estate', 'Leads', 'in', '30', 'Seconds'];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-hero-gradient overflow-hidden z-10 flex flex-col items-center justify-center py-16"
    >
      {/* Static Ambient particles - using CSS animations from index.css */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet/40 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card */}
        <div 
          className="relative w-full max-w-5xl mx-auto aspect-[16/10] sm:aspect-[16/9] max-h-[600px] rounded-[28px] overflow-hidden shadow-card card-border-glow transition-all duration-1000 ease-out translate-y-0 opacity-100"
        >
          {/* Card background image */}
          <img 
            src="/hero-agent.jpg" 
            alt="AI Voice Agent"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Card overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20 sm:bg-card-overlay" />
          
          {/* Card content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            {/* Micro label */}
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] text-violet-light mb-3">
              GenuineStack AI Voice Platform
            </span>
            
            {/* Headline */}
            <div className="mb-4">
              <h1 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-[1.1] tracking-tight">
                {headlineWords.map((word, i) => (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {word}
                  </span>
                ))}
              </h1>
            </div>
            
            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
              Stop losing Zillow and Facebook leads. Our AI qualifies buyers, answers questions, and schedules appointments 24/7.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-violet hover:bg-violet-dark text-navy font-bold px-8 py-6 text-base rounded-xl transition-transform active:scale-95"
                >
                  Book Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-sm text-text-primary hover:bg-white/10 px-8 py-6 text-base rounded-xl transition-transform active:scale-95"
                onClick={scrollToDemo}
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Listen to Real Call
              </Button>
            </div>
          </div>
        </div>

        {/* Trust badges - Positioned below card for better mobile flow */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <div className="flex items-center gap-2 text-text-secondary/80 text-xs sm:text-sm font-medium">
            <CheckCircle className="w-4 h-4 text-violet" />
            <span>Used by teams in US & Australia</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary/80 text-xs sm:text-sm font-medium">
            <CheckCircle className="w-4 h-4 text-violet" />
            <span>Works with Zillow, Facebook, FollowUpBoss</span>
          </div>
        </div>
      </div>
    </section>
  );
}
