import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Plug, Phone, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    day: 'Day 1',
    title: 'Script Setup',
    description: 'We customize your call scripts based on your qualifying criteria.',
    icon: FileText,
  },
  {
    day: 'Day 2-3',
    title: 'CRM Connection',
    description: 'Connect your FollowUpBoss, GoHighLevel, or HubSpot account.',
    icon: Plug,
  },
  {
    day: 'Day 4',
    title: 'Call Testing',
    description: 'We run test calls to ensure everything works perfectly.',
    icon: Phone,
  },
  {
    day: 'Day 5',
    title: 'Go Live',
    description: 'Your AI agent starts handling real leads.',
    icon: Rocket,
  },
];

export default function SetupTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
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

      // Timeline animation
      const steps = timelineRef.current?.querySelectorAll('.timeline-step');
      
      if (steps) {
        gsap.fromTo(steps,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.5,
            scrollTrigger: {
              trigger: timelineRef.current,
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
      id="setup-timeline"
      className="relative w-full py-20 lg:py-28 bg-navy z-[90]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Go Live in 5 Days
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Our team handles the entire setup. You just approve the script.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {timelineSteps.map((step, index) => (
              <div 
                key={index}
                className="timeline-step relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number/icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-violet/10 border-2 border-violet/30 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-violet" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-violet text-navy text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Day badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-medium mb-2">
                    {step.day}
                  </span>
                  
                  {/* Content */}
                  <h3 className="font-heading font-semibold text-text-primary mb-1">
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

        {/* Note */}
        <div ref={noteRef} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="text-text-secondary text-sm">
              No downtime. No technical work from you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
