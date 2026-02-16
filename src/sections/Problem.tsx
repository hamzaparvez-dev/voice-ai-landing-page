import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Users, PhoneOff, ClipboardX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Clock,
    title: 'Agents call leads after 10–30 minutes',
    description: 'By then, the lead has already moved on or contacted another agent.',
  },
  {
    icon: Users,
    title: 'Zillow leads contacted by 5 agents',
    description: 'The first agent to respond wins. Speed is everything.',
  },
  {
    icon: PhoneOff,
    title: 'Missed calls after hours',
    description: 'Leads call when they\'re ready—nights, weekends, holidays.',
  },
  {
    icon: ClipboardX,
    title: 'No qualification before booking',
    description: 'Wasting time with unqualified leads who never convert.',
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.problem-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Result line animation
      gsap.fromTo(resultRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: resultRef.current,
            start: 'top 85%',
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
      id="problem"
      className="relative w-full py-20 lg:py-28 bg-navy z-20"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Why Real Estate Leads Go Cold
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The traditional follow-up process is broken. Here&apos;s what&apos;s happening to your leads right now.
          </p>
        </div>

        {/* Problem cards grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-12"
        >
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="problem-card group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-4 group-hover:bg-violet/20 transition-colors">
                <problem.icon className="w-6 h-6 text-violet" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading font-semibold text-text-primary mb-2 text-lg">
                {problem.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Result statement */}
        <div ref={resultRef} className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-heading font-semibold text-red-400">
              Result: Lost deals every week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
