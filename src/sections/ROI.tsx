import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ROI() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  
  const [leadsPerMonth, setLeadsPerMonth] = useState(40);
  const [missedRate, setMissedRate] = useState(30);
  const [conversionRate, setConversionRate] = useState(5);
  const [avgCommission, setAvgCommission] = useState(5000);

  // Calculate ROI
  const missedLeads = Math.round(leadsPerMonth * (missedRate / 100));
  const potentialDeals = Math.round(missedLeads * (conversionRate / 100));
  const monthlyLoss = potentialDeals * avgCommission;
  const aiCost = 600;
  const netSavings = monthlyLoss - aiCost;
  const roi = monthlyLoss > 0 ? Math.round((netSavings / aiCost) * 100) : 0;

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

      // Calculator animation
      gsap.fromTo(calculatorRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section 
      ref={sectionRef}
      id="roi"
      className="relative w-full py-20 lg:py-28 bg-navy z-50"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-40" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            See the Real ROI for Your Real Estate Team
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Calculate how much revenue you&apos;re losing to missed leads—and how much AI can save you.
          </p>
        </div>

        {/* ROI Calculator */}
        <div 
          ref={calculatorRef}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Input panel */}
            <div className="p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet" />
                Your Numbers
              </h3>
              
              <div className="space-y-6">
                {/* Leads per month */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-text-secondary">Leads per month</label>
                    <span className="text-sm font-mono text-violet">{leadsPerMonth}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={leadsPerMonth}
                    onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-violet"
                  />
                </div>

                {/* Missed rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-text-secondary">% of leads missed</label>
                    <span className="text-sm font-mono text-violet">{missedRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={missedRate}
                    onChange={(e) => setMissedRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-violet"
                  />
                </div>

                {/* Conversion rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-text-secondary">Conversion rate</label>
                    <span className="text-sm font-mono text-violet">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-violet"
                  />
                </div>

                {/* Average commission */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-text-secondary">Average commission</label>
                    <span className="text-sm font-mono text-violet">{formatCurrency(avgCommission)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={avgCommission}
                    onChange={(e) => setAvgCommission(Number(e.target.value))}
                    className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-violet"
                  />
                </div>
              </div>
            </div>

            {/* Results panel */}
            <div className="p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="font-heading font-semibold text-text-primary mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-violet" />
                The Cost of Missed Leads
              </h3>

              <div className="space-y-4">
                {/* Missed leads */}
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-text-secondary text-sm">Missed leads/month</span>
                  <span className="font-mono text-text-primary">{missedLeads}</span>
                </div>

                {/* Potential deals lost */}
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-text-secondary text-sm">Potential deals lost</span>
                  <span className="font-mono text-red-400">{potentialDeals}</span>
                </div>

                {/* Monthly loss */}
                <div className="flex justify-between items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <span className="text-red-400 font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Monthly revenue loss
                  </span>
                  <span className="font-heading font-bold text-red-400 text-xl">
                    {formatCurrency(monthlyLoss)}
                  </span>
                </div>

                {/* AI Cost */}
                <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                  <span className="text-text-secondary text-sm">AI cost (Starter)</span>
                  <span className="font-mono text-violet">{formatCurrency(aiCost)}/mo</span>
                </div>

                {/* Net savings */}
                <div className="flex justify-between items-center p-4 rounded-lg bg-violet/10 border border-violet/30">
                  <span className="text-violet font-medium">Net monthly savings</span>
                  <span className="font-heading font-bold text-violet text-2xl">
                    {formatCurrency(netSavings)}
                  </span>
                </div>

                {/* ROI */}
                <div className="text-center pt-2">
                  <span className="text-text-secondary text-sm">Return on Investment: </span>
                  <span className="font-heading font-bold text-violet text-lg">{roi}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
