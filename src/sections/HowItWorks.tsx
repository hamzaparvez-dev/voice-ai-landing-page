import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Phone, MessageSquare, Calendar, MessageCircle, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Database,
    title: 'Lead comes in',
    description: 'From Zillow, Facebook, or your website',
  },
  {
    icon: Phone,
    title: 'AI calls within 30 seconds',
    description: 'Instant response, every time',
  },
  {
    icon: MessageSquare,
    title: 'AI asks qualifying questions',
    description: 'Budget, location, timeline',
  },
  {
    icon: Calendar,
    title: 'AI books showing',
    description: 'Directly on your calendar',
  },
  {
    icon: MessageCircle,
    title: 'SMS confirmation sent',
    description: 'Lead gets instant confirmation',
  },
  {
    icon: Bell,
    title: 'Agent notified instantly',
    description: 'You get all the details',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
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

      // Steps animation
      const stepItems = stepsRef.current?.querySelectorAll('.step-item');
      
      if (stepItems) {
        gsap.fromTo(stepItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.5,
            scrollTrigger: {
              trigger: stepsRef.current,
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
      id="how-it-works"
      className="relative w-full py-20 lg:py-28 bg-navy z-30"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            How GenuineStack AI Calling Works
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A complete automation workflow that handles your leads from first contact to booked appointment.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={stepsRef} className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="step-item relative"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet/20 hover:bg-white/[0.04] transition-all duration-300">
                  {/* Step number */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-xl bg-violet/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-violet" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet text-navy text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup note */}
        <div ref={noteRef} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20">
            <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
            <span className="text-violet text-sm font-medium">
              Setup takes 5 days. No technical work required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
