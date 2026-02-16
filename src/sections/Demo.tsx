import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Play, Pause, User, Home, PhoneCall, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_LINK = 'https://calendly.com/genuinestack/new-meeting';

const scenarios = [
  {
    id: 1,
    title: 'New Buyer Inquiry',
    description: 'AI qualifies a first-time buyer and books a showing',
    icon: User,
    duration: '1:24',
    url: 'https://res.cloudinary.com/dij5outes/video/upload/v1758876389/RealEstateAgents_nwtorv.mp3',
  },
  {
    id: 2,
    title: 'Missed Call Recovery',
    description: 'AI calls back a lead that went to voicemail',
    icon: PhoneCall,
    duration: '0:58',
    url: 'https://res.cloudinary.com/dij5outes/video/upload/v1758876368/Marketing-Agency_ronynp.mp3',
  },
  {
    id: 3,
    title: 'Rental Inquiry',
    description: 'AI handles rental screening and schedules tour',
    icon: Home,
    duration: '1:12',
    url: 'https://res.cloudinary.com/dij5outes/video/upload/v1758876375/Pysio-agent_suqlck.mp3',
  },
];

export default function Demo() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState<Record<number, number>>({});
  const audioRefs = useRef<Record<number, HTMLAudioElement>>({});

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
      const cards = cardsRef.current?.querySelectorAll('.demo-card');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      audio.play();
      setPlayingId(id);
    }
  };

  const handleTimeUpdate = (id: number) => {
    const audio = audioRefs.current[id];
    if (audio) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      setProgress(prev => ({ ...prev, [id]: progressPercent }));
    }
  };

  const handleEnded = (id: number) => {
    setPlayingId(null);
    setProgress(prev => ({ ...prev, [id]: 0 }));
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section 
      ref={sectionRef}
      id="demo"
      className="relative w-full py-20 lg:py-28 bg-navy z-40"
    >
      {/* Hidden audio elements */}
      {scenarios.map((scenario) => (
        <audio
          key={scenario.id}
          ref={(el) => {
            if (el) audioRefs.current[scenario.id] = el;
          }}
          src={scenario.url}
          onTimeUpdate={() => handleTimeUpdate(scenario.id)}
          onEnded={() => handleEnded(scenario.id)}
        />
      ))}

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-violet/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4">
            Listen to Real Estate AI Calls
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Hear how our AI handles real conversations with potential buyers and sellers.
          </p>
        </div>

        {/* Demo cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="demo-card group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-4 group-hover:bg-violet/20 transition-colors">
                <scenario.icon className="w-6 h-6 text-violet" />
              </div>
              
              {/* Content */}
              <h3 className="font-heading font-semibold text-text-primary mb-2 text-lg">
                {scenario.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {scenario.description}
              </p>

              {/* Audio player */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <button 
                    onClick={() => togglePlay(scenario.id)}
                    className="w-10 h-10 rounded-full bg-violet flex items-center justify-center hover:bg-violet-dark transition-colors flex-shrink-0"
                  >
                    {playingId === scenario.id ? (
                      <Pause className="w-4 h-4 text-navy" />
                    ) : (
                      <Play className="w-4 h-4 text-navy ml-0.5" />
                    )}
                  </button>
                  
                  {/* Waveform visualization */}
                  <div className="flex-1 flex items-center gap-1 h-8">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          playingId === scenario.id 
                            ? 'bg-violet animate-waveform' 
                            : 'bg-white/20'
                        }`}
                        style={{
                          height: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <span className="text-xs text-text-secondary font-mono flex-shrink-0">
                    {playingId === scenario.id && audioRefs.current[scenario.id]
                      ? formatTime(audioRefs.current[scenario.id].currentTime)
                      : scenario.duration}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-violet transition-all duration-100"
                    style={{ width: `${progress[scenario.id] || 0}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <a 
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-violet hover:bg-violet-dark text-navy font-semibold px-8"
            >
              Book Live Demo Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
