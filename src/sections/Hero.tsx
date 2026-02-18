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
      className="relative w-full min-h-[100svh] bg-hero-gradient overflow-hidden z-10 flex items-center justify-center py-16 lg:py-0"
    >
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background Particles using global violet-light */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-violet animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card: Uses shadow-card and card-border-glow from index.css */}
        <div 
          className="relative w-full rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-card card-border-glow bg-navy-light flex flex-col min-h-[550px] lg:aspect-[16/8] xl:aspect-[16/7]"
        >
          {/* Visual Background: Adjusted object position for mobile visibility */}
          <div className="absolute inset-0">
            <img 
              src="/hero-agent.jpg" 
              alt="AI Voice Agent"
              className="w-full h-full object-cover object-[70%_top] lg:object-right-top opacity-60 lg:opacity-100"
            />
            {/* Overlay: Stronger on mobile to maintain text-primary contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 lg:via-navy/30 to-transparent sm:bg-card-overlay" />
          </div>
          
          {/* Card Content: Uses font-heading (Sora) and text-primary tokens */}
          <div className="relative z-10 h-full flex flex-col justify-end lg:justify-center p-6 sm:p-10 lg:p-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-6">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-violet-light">
                GenuineStack AI Voice Platform
              </span>
            </div>
            
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.1] tracking-tight mb-4 lg:mb-6">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em]">
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="font-sans text-base sm:text-lg lg:text-xl text-text-secondary max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Stop losing Zillow and Facebook leads. Our AI qualifies buyers, answers questions, and schedules appointments 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-violet hover:bg-violet-dark text-navy font-bold rounded-xl px-8 shadow-glow transition-all active:scale-95"
                >
                  Book Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/10 bg-white/5 backdrop-blur-md text-text-primary hover:bg-white/10 rounded-xl px-8 transition-all active:scale-95"
                onClick={scrollToDemo}
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Listen to Real Call
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges: Using global CheckCircle and text-secondary styles */}
        <div className="mt-10 lg:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12">
          <div className="flex items-center gap-3 text-text-secondary/60">
            <CheckCircle className="w-5 h-5 text-violet" />
            <span className="text-sm font-medium tracking-wide">Trusted by teams in US & Australia</span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary/60">
            <CheckCircle className="w-5 h-5 text-violet" />
            <span className="text-sm font-medium tracking-wide">Syncs with Zillow & FollowUpBoss</span>
          </div>
        </div>
      </div>
    </section>
  );
}
