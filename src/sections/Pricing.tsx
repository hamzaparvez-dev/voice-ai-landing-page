import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Building2, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    setupFee: 1000,
    monthlyFee: 600,
    usage: 'Per minute usage',
    icon: Users,
    features: [
      'Up to 500 minutes/month',
      'Zillow & Facebook integration',
      'Google Calendar sync',
      'Basic call scripts',
      'Email support',
    ],
    cta: 'Book Demo',
    highlighted: false,
  },
  {
    name: 'Agency',
    description: 'For growing real estate teams',
    setupFee: 1500,
    monthlyFee: 900,
    usage: 'Per minute usage',
    icon: Sparkles,
    features: [
      'Up to 2,000 minutes/month',
      'FollowUpBoss & GoHighLevel',
      'HubSpot integration',
      'Custom call scripts',
      'Priority support',
      'Zapier connection',
    ],
    cta: 'Book Demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams & brokerages',
    setupFee: null,
    monthlyFee: null,
    usage: 'Custom pricing',
    icon: Building2,
    features: [
      'Unlimited minutes',
      'Custom CRM integration',
      'Dedicated account manager',
      'White-label options',
      'SLA guarantee',
      'API access',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
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
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
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

  const formatCurrency = (value: number | null) => {
    if (value === null) return 'Custom';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section 
      ref={sectionRef}
      id="pricing"
      className="relative w-full py-20 lg:py-28 bg-navy z-[60]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Simple Pricing for Real Estate Teams
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Scale up or down anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card relative p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-white/[0.05] border-2 border-violet/50 shadow-glow scale-105 z-10' 
                  : 'bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05]'
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet text-navy text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                plan.highlighted ? 'bg-violet/20' : 'bg-white/5'
              }`}>
                <plan.icon className="w-6 h-6 text-violet" />
              </div>

              {/* Plan name */}
              <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                {plan.name}
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                {plan.monthlyFee !== null ? (
                  <>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-heading font-bold text-3xl text-text-primary">
                        {formatCurrency(plan.monthlyFee)}
                      </span>
                      <span className="text-text-secondary text-sm">/mo</span>
                    </div>
                    <div className="text-text-secondary text-sm">
                      Setup: {formatCurrency(plan.setupFee)}
                    </div>
                    <div className="text-violet text-xs mt-1">
                      {plan.usage}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-heading font-bold text-3xl text-text-primary mb-1">
                      Custom
                    </div>
                    <div className="text-text-secondary text-sm">
                      Contact us for pricing
                    </div>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-violet mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.name === 'Enterprise' ? (
                <a 
                  href="mailto:hello@genuinestack.com"
                  className="block"
                >
                  <Button 
                    className="w-full bg-white/10 hover:bg-white/15 text-text-primary"
                  >
                    {plan.cta}
                  </Button>
                </a>
              ) : (
                <a 
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className={`w-full ${
                      plan.highlighted 
                        ? 'bg-violet hover:bg-violet-dark text-navy font-semibold' 
                        : 'bg-white/10 hover:bg-white/15 text-text-primary'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div ref={noteRef} className="text-center">
          <p className="text-text-secondary text-sm">
            No long contracts. Cancel anytime. 14-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
