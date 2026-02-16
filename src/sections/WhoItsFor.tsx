import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, TrendingUp, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    icon: Users,
    title: 'Real Estate Teams',
    subtitle: '5–25 agents',
    description: 'Perfect for brokerages and teams that need to scale lead follow-up without hiring more ISA\'s.',
  },
  {
    icon: TrendingUp,
    title: 'Investor Wholesalers',
    subtitle: 'High-volume callers',
    description: 'Handle hundreds of motivated seller calls daily with consistent qualification and follow-up.',
  },
  {
    icon: Building,
    title: 'Property Managers',
    subtitle: 'Rental portfolios',
    description: 'Screen tenants, schedule showings, and handle maintenance requests 24/7.',
  },
];

export default function WhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.audience-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.6,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Note animation
      gsap.fromTo(noteRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: noteRef.current,
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
      id="who-its-for"
      className="relative w-full py-20 lg:py-28 bg-navy z-[70]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Who This Is For
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Built for professionals who take their business seriously.
          </p>
        </div>

        {/* Audience cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="audience-card group p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet/20 transition-colors">
                <audience.icon className="w-8 h-8 text-violet" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading font-semibold text-text-primary mb-1 text-xl">
                {audience.title}
              </h3>
              <span className="inline-block px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-medium mb-4">
                {audience.subtitle}
              </span>
              <p className="text-text-secondary text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Not for note */}
        <div ref={noteRef} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-text-secondary text-sm">
              Not built for small single-agent hobby users.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
