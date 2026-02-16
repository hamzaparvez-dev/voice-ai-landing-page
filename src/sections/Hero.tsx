import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Card entrance
      tl.fromTo(cardRef.current,
        { y: '18vh', scale: 0.92, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.9 }
      );

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.6 },
          '-=0.5'
        );
      }

      // Subheadline
      tl.fromTo(subheadlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // CTAs
      tl.fromTo(ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // Badges
      tl.fromTo(badgesRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );

      // Particles
      const particles = particlesRef.current?.querySelectorAll('.particle');
      if (particles) {
        tl.fromTo(particles,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.9, stagger: 0.02, duration: 0.4 },
          '-=0.5'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back
            gsap.set(cardRef.current, { x: 0, scale: 1, opacity: 1 });
            gsap.set(headlineRef.current, { x: 0, opacity: 1 });
            gsap.set(ctaRef.current, { y: 0, opacity: 1 });
            gsap.set(badgesRef.current, { y: 0, opacity: 1 });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(cardRef.current,
        { x: 0, scale: 1, opacity: 1 },
        { x: '-28vw', scale: 0.86, opacity: 0.25, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '6vh', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(badgesRef.current,
        { y: 0, opacity: 1 },
        { y: '4vh', opacity: 0, ease: 'power2.in' },
        0.75
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      className="relative w-full h-screen bg-hero-gradient overflow-hidden z-10"
    >
      {/* Ambient particles inside card area */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 rounded-full bg-violet/60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 50}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        {/* Hero Card */}
        <div 
          ref={cardRef}
          className="relative w-full max-w-5xl aspect-[16/9] sm:aspect-[16/9] max-h-[520px] rounded-[28px] overflow-hidden shadow-card card-border-glow"
        >
          {/* Card background image */}
          <img 
            src="/hero-agent.jpg" 
            alt="AI Voice Agent"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Card overlay gradient - stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30 sm:bg-card-overlay" />
          
          {/* Card content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-10">
            {/* Micro label */}
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] text-violet mb-2 sm:mb-4">
              GenuineStack AI Voice Platform
            </span>
            
            {/* Headline */}
            <div ref={headlineRef} className="mb-2 sm:mb-4">
              <h1 className="font-heading font-bold text-xl sm:text-3xl lg:text-5xl xl:text-6xl text-text-primary leading-[1.05] tracking-tight">
                {headlineWords.map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.2em]">
                    {word}
                  </span>
                ))}
              </h1>
            </div>
            
            {/* Subheadline */}
            <p 
              ref={subheadlineRef}
              className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-xl mb-4 sm:mb-6"
            >
              Stop losing Zillow and Facebook leads. Our AI qualifies buyers and schedules appointments 24/7.
            </p>
            
            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-violet hover:bg-violet-dark text-navy font-semibold px-4 sm:px-6 lg:px-8 text-sm sm:text-base"
                >
                  Book Live Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-text-primary hover:bg-white/10 px-4 sm:px-6 lg:px-8 text-sm sm:text-base"
                onClick={scrollToDemo}
              >
                <Play className="w-4 h-4 mr-2" />
                Listen to Real Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div 
        ref={badgesRef}
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
          <div className="flex items-center gap-2 text-text-secondary text-xs sm:text-sm">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-violet" />
            <span>Used by teams in US & Australia</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-xs sm:text-sm">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-violet" />
            <span>Works with Zillow, Facebook, FollowUpBoss</span>
          </div>
        </div>
      </div>
    </section>
  );
}
