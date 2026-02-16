import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  Zap, 
  Building2,
  MessageSquare,
  Phone,
  BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: 'FollowUpBoss', icon: Phone, category: 'CRM' },
  { name: 'GoHighLevel', icon: BarChart3, category: 'CRM' },
  { name: 'HubSpot', icon: Building2, category: 'CRM' },
  { name: 'Google Calendar', icon: Calendar, category: 'Calendar' },
  { name: 'Zapier', icon: Zap, category: 'Automation' },
  { name: 'SMS', icon: MessageSquare, category: 'Messaging' },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
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

      // Grid animation
      const items = gridRef.current?.querySelectorAll('.integration-item');
      if (items) {
        gsap.fromTo(items,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.5,
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="integrations"
      className="relative w-full py-20 lg:py-28 bg-navy z-[80]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Works With Your Real Estate Tools
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Seamlessly connects with the platforms you already use.
          </p>
        </div>

        {/* Integrations grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12"
        >
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="integration-item group p-4 lg:p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-violet/20 transition-colors">
                <integration.icon className="w-5 h-5 text-violet" />
              </div>
              
              {/* Name */}
              <h3 className="font-medium text-text-primary text-sm mb-1">
                {integration.name}
              </h3>
              <span className="text-text-secondary text-xs">
                {integration.category}
              </span>
            </div>
          ))}
        </div>

        {/* Custom integration note */}
        <div ref={noteRef} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/10 border border-violet/20">
            <span className="text-violet text-sm">
              Custom CRM integration available for Enterprise plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
